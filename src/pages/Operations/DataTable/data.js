import { Image, EnableDisable } from "./styles"

import DashedButton from "ant/DashedButton"

import { ReactComponent as DisabledIcon } from "assets/icons/Slash.svg"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import SelectDays from "components/SelectDays"
import axios from "axios"
export var data;
async function getOperations() {
    const getOperation = await axios.post(`http://localhost:8080/api/operations`, { vendorId: localStorage.getItem('uid') });
    if (getOperation) {
        var operations = getOperation.data.data;
        data = [
            {
                id: operations.id,
                operationStatus:operations.operationStatus,
                workingStatus: operations.workingStatus,
                businessHours: "9AM to 9PM",    
                staffWorkers:operations.staffWorkers,
                userCapacity:operations.userCapacity,
                specialistForUser:operations.specialistForUser,
            },
        ]
    }
}
getOperations();
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

