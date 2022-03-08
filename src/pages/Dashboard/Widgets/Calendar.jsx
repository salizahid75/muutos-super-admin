import WidgetBox from "components/WidgetBox"
import CalendarComp from "../../../components/Calendar"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import { useState } from "react"
export default function Calendar() {
    const [selectedDay, setSelectedDay] = useState(null)
    return (
        <WidgetBox heading={"Calendar"}>
            <CalendarComp
                colorPrimary='none'
                value={selectedDay}
                onChange={setSelectedDay}
                calendarRangeBetweenClassName='-selected'
                customDaysClassName={[
                    {
                        year: 2021,
                        month: 10,
                        day: 9,
                        className: "-selected",
                    },
                    {
                        year: 2021,
                        month: 10,
                        day: 20,
                        className: "-selected",
                    },
                    {
                        year: 2021,
                        month: 10,
                        day: 25,
                        className: "-selected",
                    },
                    {
                        year: 2021,
                        month: 10,
                        day: 30,
                        className: "-selected",
                    },
                ]}
            />
        </WidgetBox>
    )
}
