export function reducerFunction(state, action) {
    const indianTimes = ["8:00 AM", "8:30 AM", "9: 00 AM", "9:30 AM", "10: 00 AM", "10:30 AM", "11: 00 AM", "11:30 AM", "12: 00 AM", "12:30 AM", "1: 00 AM", "1:30 AM", "2: 00 AM", "2:30 AM", "3: 00 AM", "3:30 AM", "4: 00 AM", "4:30 AM", "5: 00 AM", "5:30 AM", "6: 00 AM", "6:30 AM", "7: 00 AM", "7:30 AM", "8: 00 AM", "8:30 AM", "9: 00 AM", "9:30 AM", "10: 00 AM", "10:30 AM", "11: 00 AM"];
    
    const utcTimes = ["8", "8:30", "9", "9:30", "10", "10:30", "11", "11:30", "12", "12:30", "13", "13:30", "14", "14:30", "15", "15:30", "16", "16:30", "17", "17:30", "18", "18:30", "19", "19:30", "20", "20:30", "21", "21:30", "22", "22:30", "23"];


    switch (action.type) {

        case "TOGGLE_TIMEZONE":
            return {
                ...state,
                indTimeZone: !state.indTimeZone,
            }
        case "IST_TIMEZONE":
            return {
                ...state,
                indTimeZone: true,
                timeZoneInput: indianTimes
            }
        case "UTC_TIMEZONE":
            return {
                ...state,
                indTimeZone: false,
                timeZoneInput: utcTimes
            }
        default:
            return state
    }
}