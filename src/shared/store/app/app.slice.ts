import {createSlice} from '@reduxjs/toolkit'
import {RootState} from '@shared/store'

interface AppState {
    navbarIsCollapsed?: boolean
}

const initialState: AppState = {
    navbarIsCollapsed: false,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleNavbar: (state) => {
            state.navbarIsCollapsed = !state.navbarIsCollapsed
        },
    },
})

export const selectApp = (state: RootState) => state.app
export const {toggleNavbar} = appSlice.actions
export default appSlice.reducer
