import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const CalendarFromTo = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <>
            <div className="col-sm-9">
                <div className="form-group">
                    <label>From</label> <br />
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        popperPlacement="bottom"
                    />
                </div>
            </div>
            <div className="col-sm-9">
                <div className="form-group">
                    <label>To</label> <br />
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        popperPlacement="top"
                    />
                </div>
            </div>
        </>
    );
}

export default CalendarFromTo;