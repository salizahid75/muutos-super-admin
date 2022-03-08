import { Calendar } from "react-modern-calendar-datepicker"
import "react-modern-calendar-datepicker/lib/DatePicker.css";

import styled from "styled-components"

const MultiDateCalendar = styled(Calendar)`
    .active {
        background: none;
    }
`
export default MultiDateCalendar
