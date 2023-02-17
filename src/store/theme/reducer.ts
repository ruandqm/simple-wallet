const DARK_MODE_STATE = {
    isDark: false
}

const themeReducer = (state = DARK_MODE_STATE, action: iAction) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                isDark: !state.isDark
            }

        default:
            return state
    }
}
export default themeReducer