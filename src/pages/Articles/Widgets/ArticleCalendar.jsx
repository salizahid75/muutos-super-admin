import WidgetBox from "components/WidgetBox"
import CalendarComp from "../../../components/Calendar"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import { useState } from "react"

export default function ArticleCalendar() {
    const [selectedDay, setSelectedDay] = useState(null)
    return (
        <WidgetBox heading={"Calendar"}>
            <CalendarComp
                colorPrimary='none'
                value={selectedDay}
                onChange={setSelectedDay}
                calendarRangeBetweenClassName='-selected'
            />
        </WidgetBox>
    )
}
