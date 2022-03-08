import { Image, StatusColor } from "./styles"
import { Select } from "ant"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import { ReactComponent as ViewIcon } from "assets/icons/Eye/Eye.svg"
import { EnableDisable } from "./styles"

import DashedButton from "ant/DashedButton"

import { ReactComponent as DisabledIcon } from "assets/icons/Slash.svg"
import { ReactComponent as StarIcon } from "assets/icons/Star.svg"
import SelectDays from "components/SelectDays"
import styled from "styled-components"
const { Option } = Select
export const columns = (onEdit, onStatusChange) => [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Secret Code",
        dataIndex: "secretCode",
        key: "secretCode",
    },
    {
        title: "Date Of Subscription",
        dataIndex: "dateOfSubscription",
        key: "dateOfSubscription",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
    },
    {
        title: "Price p/u",
        dataIndex: "price",
        key: "price",
    },
]

export const data = [
    {
        id: "1",
        name:"Nike Space",
        secretCode:2341,
        dateOfSubscription: '05 Dec 2021',
        status: "20 Aug 2021",
        price:"QAR 165",
    },
]

const IconWrapper = styled.span`

    & > svg {
        & > path{
            fill: #10B981
        }
    }

`