import styled from "styled-components"

import WidgetBox from "components/WidgetBox"
import { Button } from "ant"
import CalendarComp from "../../../components/Calendar"
import { useState } from "react"
import { Input } from "antd"
export default function Appointments() {
    const dateObj = new Date()
    const defaultTo = {
        year: dateObj.getFullYear(),
        month: dateObj.getMonth(),
        day: dateObj.getDay(),
    }
    const monthNow = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
    }
    const [selectedDay, setSelectedDay] = useState(defaultTo)
    const myCustomLocale = {
        // months list by order
        months: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],

        // week days by order
        weekDays: [
            {
                name: "Sunday", // used for accessibility
                short: "Sun", // displayed at the top of days' rows
                isWeekend: true, // is it a formal weekend or not?
            },
            {
                name: "Monday",
                short: "Mon",
            },
            {
                name: "Tuesday",
                short: "Tue",
            },
            {
                name: "Wednesday",
                short: "Wed",
            },
            {
                name: "Thursday",
                short: "Thur",
            },
            {
                name: "Friday",
                short: "Fri",
            },
            {
                name: "Saturday",
                short: "Sat",
                isWeekend: true,
            },
        ],

        // just play around with this number between 0 and 6
        weekStartingIndex: 0,

        // return a { year: number, month: number, day: number } object
        getToday(gregorainTodayObject) {
            return gregorainTodayObject
        },

        // return a native JavaScript date here
        toNativeDate(date) {
            return new Date(date.year, date.month - 1, date.day)
        },

        // return a number for date's month length
        getMonthLength(date) {
            return new Date(date.year, date.month, 0).getDate()
        },

        // return a transformed digit to your locale
        transformDigit(digit) {
            return digit
        },

        // texts in the date picker
        nextMonth: "Next Month",
        previousMonth: "Previous Month",
        openMonthSelector: "Open Month Selector",
        openYearSelector: "Open Year Selector",
        closeMonthSelector: "Close Month Selector",
        closeYearSelector: "Close Year Selector",
        defaultPlaceholder: "Select...",

        // for input range value
        from: "from",
        to: "to",

        // used for input value when multi dates are selected
        digitSeparator: ",",

        // if your provide -2 for example, year will be 2 digited
        yearLetterSkip: 0,

        // is your language rtl or ltr?
        isRtl: false,
    }

    return (
        <WidgetBox heading='Appointments'>
            <Wrapper>
                <Button type='secondary'>New Appointment</Button>
            </Wrapper>
            <Wrapper2>
                <CalendarComp
                    colorPrimary='none'
                    value={selectedDay}
                    onChange={setSelectedDay}
                    calendarClassName='responsive-calendar' // added this
                    calendarRangeBetweenClassName='-selected'
                    locale={myCustomLocale}
                />
                <hr />
                <p
                    style={{
                        color: "#34D399",
                        textAlign: "center",
                        marginTop: "20px",
                    }}>
                    {selectedDay.day} {monthNow[selectedDay.month]}{" "}
                    {selectedDay.year}
                </p>
                <Input
                    type='text'
                    placeHolder={"Enter Name"}
                    style={{
                        border: "1px solid #3F3F46",
                        borderRadius: "12px",
                        marginBottom: "16px",
                        color: "#D4D4D8",
                        background: "#222225",
                    }}
                />

                <Button type='primary'>Add Appointment</Button>
            </Wrapper2>
        </WidgetBox>
    )
}

const Wrapper2 = styled.div`
    hr {
        border: 2px solid ${p => p.theme.colors.gray700};
        opacity: 0.5;
        height: 0;
    }
`

const Wrapper = styled.div`
    button {
        background: ${p =>
            p.theme.utils.toRgba(p.theme.colors.gray50, 0.03)} !important;
        font-size: 16px;
    }
`
