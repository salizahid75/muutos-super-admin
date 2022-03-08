import { Select } from "ant"
import { Image, StatusColor } from "./styles"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import { ReactComponent as ViewIcon } from "assets/icons/Eye/Eye.svg"
import { ReactComponent as TrashIcon } from "assets/icons/Trash/Trash 1.svg"
import styled from "styled-components"

const { Option } = Select

export const services = ["Gym", "Spa and Saloon", "Dentist", "Recreation"]
export const columns = (onEdit, onStatusChange, onisApprovedChange) => [

    {
        title: "Service Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Last Modified",
        dataIndex: "updatedOn",
        key: "updatedOn",
    },
    {
        title: "Discount",
        dataIndex: "discount",
        key: "discount",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (status, record) => {
            return (
                <StatusColor status={status}>
                    <Select
                        suffixIcon={<DownArrowIcon />}
                        defaultValue={status?.toString()}
                        onChange={v => onStatusChange && onStatusChange(v, record.id)}>
                        <Option key='1'>Active</Option>
                        <Option key='0'>Disabled</Option>
                        <Option key='-1'>Out of Stock</Option>
                    </Select>
                </StatusColor>
            )
        },
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Is Approved",
        dataIndex: "isApproved",
        key: "isApproved",
        render: (isApproved, record) => {
            return (
                <StatusColor status={Number(isApproved)}>
                    <Select
                        suffixIcon={<DownArrowIcon />}
                        defaultValue={
                            () => {
                                if (isApproved == false) {
                                    return 'No'
                                } else {
                                    return 'Yes'
                                }
                            }
                        }
                        onChange={v => onisApprovedChange && onisApprovedChange(v, record.id)}>
                        <Option value='1'>Yes</Option>
                        <Option value='0'>No</Option>
                    </Select>
                </StatusColor>
            )
        },
    },
    {
        title: "Actions",
        dataIndex: "id",
        key: "id",
        render: serviceId => {
            return (
                <>
                    <EditIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => onEdit(serviceId)}
                    />
                    <ViewIconWrapper>
                        <ViewIcon
                            style={{ cursor: "pointer" }}
                            onClick={() => onEdit(serviceId)}
                        />
                        <TrashIcon
                            style={{ cursor: "pointer" }}
                            onClick={() => onEdit(serviceId)}
                        />
                    </ViewIconWrapper>
                </>
            )
        },
    },
]


const ViewIconWrapper = styled.span`
  & > svg {
    & > path {
      fill:#D4D4D8;
    }
  }
`