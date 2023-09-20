import React, { useState } from 'react';
import './dateComponent.css';
import { useDates } from '../../contexts/dateContext'

function DateComponent() {

    const { dateState, dispatch } = useDates();
    const [timeZoneData, setTimeZoneData] = useState(["8:00 AM", "8:30 AM", "9: 00 AM", "9:30 AM", "10: 00 AM", "10:30 AM", "11: 00 AM", "11:30 AM", "12: 00 AM", "12:30 AM", "1: 00 AM", "1:30 AM", "2: 00 AM", "2:30 AM", "3: 00 AM", "3:30 AM", "4: 00 AM", "4:30 AM", "5: 00 AM", "5:30 AM", "6: 00 AM", "6:30 AM", "7: 00 AM", "7:30 AM", "8: 00 AM", "8:30 AM", "9: 00 AM", "9:30 AM", "10: 00 AM", "10:30 AM", "11: 00 AM"]);

    const indianTimes = ["8:00 AM", "8:30 AM", "9: 00 AM", "9:30 AM", "10: 00 AM", "10:30 AM", "11: 00 AM", "11:30 AM", "12: 00 AM", "12:30 AM", "1: 00 AM", "1:30 AM", "2: 00 AM", "2:30 AM", "3: 00 AM", "3:30 AM", "4: 00 AM", "4:30 AM", "5: 00 AM", "5:30 AM", "6: 00 AM", "6:30 AM", "7: 00 AM", "7:30 AM", "8: 00 AM", "8:30 AM", "9: 00 AM", "9:30 AM", "10: 00 AM", "10:30 AM", "11: 00 AM"];

    const utcTimes = ["8", "8:30", "9", "9:30", "10", "10:30", "11", "11:30", "12", "12:30", "13", "13:30", "14", "14:30", "15", "15:30", "16", "16:30", "17", "17:30", "18", "18:30", "19", "19:30", "20", "20:30", "21", "21:30", "22", "22:30", "23"];

    const date = new Date().toDateString()


    function timeZoneInputHandler(event) {
        if (dateState.indTimeZone === false) {
            setTimeZoneData(utcTimes);
            dispatch({ type: "TOGGLE_TIMEZONE" })
        } else {
            setTimeZoneData(indianTimes);
            dispatch({ type: "TOGGLE_TIMEZONE" })
        }
    };

    // This will add 1 day to the current date
    function addOneDay(date, num) {
        date.setDate(date.getDate() + Number(num));
        return date;
    }
    
    const todaysdate = new Date()

    return (
        <div className='dates-div'>
            <div className='timezone-input-div'>
                <fieldset>
                    <legend>Timezone:</legend>
                    <select name="timezone" id="timezone" className='timezone-input' onChange={timeZoneInputHandler}>
                        <option value="IST-(Indian Standard Time)">IST-(Indian Standard Time)</option>
                        <option value="UTC-(Universal Time Coordinated)">UTC-(Universal Time Coordinated)</option>
                    </select>
                </fieldset>
            </div>
            <div className='all-dates'>
                <div className='date-of-today'>
                    {date}
                </div>
                <div className='full-dates'>
                    {
                        timeZoneData.map((time, index) => (
                            <div key={index} className='select-time-div'>
                                {time} <input type='checkbox' value={time} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='all-dates'>
                <div className='date-of-today'>
                    {addOneDay(todaysdate, 1).toDateString()}
                </div>
                <div className='full-dates'>
                    {
                        timeZoneData.map((time, index) => (
                            <div key={index} className='select-time-div'>
                                {time} <input type='checkbox' value={time} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='all-dates'>
                <div className='date-of-today'>
                    {addOneDay(todaysdate, 1).toDateString()}
                </div>
                <div className='full-dates'>
                    {
                        timeZoneData.map((time, index) => (
                            <div key={index} className='select-time-div'>
                                {time} <input type='checkbox' value={time} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='all-dates'>
                <div className='date-of-today'>
                    {addOneDay(todaysdate, 1).toDateString()}
                </div>
                <div className='full-dates'>
                    {
                        timeZoneData.map((time, index) => (
                            <div key={index} className='select-time-div'>
                                {time} <input type='checkbox' value={time} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default DateComponent
