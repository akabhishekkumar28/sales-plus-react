import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const SimpleCalendar = () => {

    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
                <div className="">
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        popperPlacement="bottom"
                    />
                </div>
        </>
    );
}

export default SimpleCalendar;