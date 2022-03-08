import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"

import { useDispatch } from 'react-redux'

import { setUserData } from 'redux/user'

import { CallGet } from 'api'

export default function useAuth() {
    const [isLoading, setLoading] = useState(true)
    const { push: redirectTo } = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        const uid = localStorage.getItem('uid')
        const getInfo = async () => {
            const info = await CallGet(`/api/user/${uid}`)

            if (info.status === "inactive") {
                redirectTo('/auth/login')
            }
            else {
                const data = info.data
                dispatch(setUserData({ role: data.role, name: data.name, email: data.email, phone: data.number, id: uid, avatar: data.profile_picture }))
                setLoading(false)
            }
        }

        getInfo()
    }, [])

    return isLoading
}