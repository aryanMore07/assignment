export function reducerFunction(state, action) {
    switch (action.type) {

        case "TOGGLE_TIMEZONE":
            return {
                ...state,
                indTimeZone: !state.indTimeZone,
            }

        default:
            return state
    }
}