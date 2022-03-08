import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pageTitle: "",
    goBack: false,
}

const appReducer = createSlice({
    name: "app",
    initialState,
    reducers: {
        setPageTitle(state, { payload: { pageTitle } }) {
            state.pageTitle = pageTitle
        },
        setGoBack(state, { payload: { goBackTrigger } }) {
            state.goBack = goBackTrigger
        },
    },
})

export const getPageTitle = state => state.app.pageTitle
export const getGoBack = state => state.app.goBack

export const { setPageTitle, setGoBack } = appReducer.actions
export default appReducer.reducer
