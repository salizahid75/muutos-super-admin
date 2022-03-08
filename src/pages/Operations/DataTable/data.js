import { Image, EnableDisable } from "./styles"

import DashedButton from "ant/DashedButton"

import { ReactComponent as DisabledIcon } from "assets/icons/Slash.svg"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import SelectDays from "components/SelectDays"

export const columns = onEditClick => [
    {
        title: "Working Status",
        dataIndex: "working",
        key: "working",
        render: productId => <SelectDays />,
    },
    {
        title: "Business Hours",
        dataIndex: "businessHours",
        key: "businessHours",
    },
    {
        title: "Staff Workers",
        dataIndex: "staffWorkers",
        key: "staffWorkers",
    },
    {
        title: "User Capacity",
        dataIndex: "userCapacity",
        key: "userCapacity",
    },
    {
        title: "Specialist For A User",
        dataIndex: "specialistForUser",
        key: "specialistForUser",
    },
]

export const data = [
    {
        id: "1",
        workingStatus: 1,
        businessHours: "9AM to 9PM",
        staffWorkers:12,
        userCapacity:20,
        specialistForUser:2,
    },
]
