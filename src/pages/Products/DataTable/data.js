import { Image, StatusColor } from "./styles"
import { Select } from "ant"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import { ReactComponent as ViewIcon } from "assets/icons/Eye/Eye.svg"
import { ReactComponent as TrashIcon } from "assets/icons/Trash/Trash 1.svg"
import styled from "styled-components"
const { Option } = Select

export const columns = (onEdit, onStatusChange, onisApprovedChange) => [
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Last Updated",
    dataIndex: "sku",
    key: "sku",
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "discount",
    render: discount => "10%",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status, record) => {
      return (
        <StatusColor status={Number(status)}>
          <Select
            suffixIcon={<DownArrowIcon />}
            defaultValue={status.toString()}
            onChange={v => onStatusChange && onStatusChange(v, record.id)}>
            <Option value='1'>Active</Option>
            <Option value='0'>Disabled</Option>
            <Option value='-1'>Out of Stock</Option>
          </Select>
        </StatusColor>
      )
    },
  },

  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: price => "QAR " + price,
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
    render: productId => {
      return (
        <>
          <EditIcon
            style={{ cursor: "pointer" }}
            onClick={() => onEdit(productId)}
          />
          <ViewIconWrapper>
            <ViewIcon
              style={{ cursor: "pointer" }}
              onClick={() => onEdit(productId)}
            />
            <TrashIcon
              style={{ cursor: "pointer" }}
              onClick={() => onEdit(productId)}
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