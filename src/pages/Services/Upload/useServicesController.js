import { useState } from "react"
import { languages, statuses, services } from "./data"

export default function useServicesController({ data: { }, defaultData = null }) {
    const [values, setValues] = useState(defaultData ? { ...defaultData } : {
        name: "",
        address: "",
        staffWorkers: "",
        userCapacity: "",
        specialists: "",
        spot: "",
        code: "",
        schedule: "",
        price: "",
    })
    const [language, setLanguage] = useState(languages[0])
    const [status, setStatus] = useState(Object.values(statuses)[0])
    const [service, setServices] = useState(services[0])
    const [audiences, setAudience] = useState([])
    const [memberships, setMembership] = useState([])
    const [servicesOffered, setServicesOffered] = useState([])
    const [facilities, setFacility] = useState([])
    const [workingHours, setWorkingHour] = useState([])

    return {
        set: {
            audiences: ([audience, status]) => {
                if (status) setAudience([...audiences, audience])
                else setAudience(audiences.filter(a => a !== audience))
            },
            servicesOffered: ([serviceOffer, status]) => {
                if (status)
                    setServicesOffered([...servicesOffered, serviceOffer])
                else
                    setServicesOffered(
                        servicesOffered.filter(m => m !== serviceOffer)
                    )
            },
            memberships: ([membership, status]) => {
                if (status) setMembership([...memberships, membership])
                else setMembership(memberships.filter(m => m !== membership))
            },
            facilities: ([facility, status]) => {
                if (status) setFacility([...facilities, facility])
                else setFacility(facilities.filter(f => f !== facility))
            },
            workingHours: ([workingHour, status]) => {
                if (status) setWorkingHour([...workingHours, workingHour])
                else setWorkingHour(workingHours.filter(w => w !== workingHour))
            },
            language: setLanguage,
            status: setStatus,
            service: setServices,
            registerInput: (name, options = {}) => ({
                onChange: e => {
                    const { validator } = options

                    if (validator) {
                        const isValid = validator(e.target.value)
                        if (!isValid) return
                    }

                    setValues({ ...values, [name]: e.target.value })
                },
                value: values[name],
            }),
        },
        get: {
            data: () => {
                const data = JSON.parse(JSON.stringify(values))
                data.status = status
                data.audiences = audiences
                data.memberships = memberships
                data.servicesOffered = servicesOffered
                data.facilities = facilities
                data.workingHours = workingHours
                data.service = service
                data.language = language
                return data
            },
        },
    }
}
