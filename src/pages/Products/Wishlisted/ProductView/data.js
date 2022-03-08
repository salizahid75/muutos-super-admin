import { Image, StatusColor } from "./styles"
import { Select } from "ant"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"

const { Option } = Select

export const columns = (onEdit, onStatusChange) => [
  {
    title: "User\'s Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Date",
    dataIndex: "sku",
    key: "sku",
  },
  {
    title: "Quantity",
    dataIndex: "price",
    key: "price",
    render: price => "QAR " + price,
  },
  {
    title: "Requested Price",
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
]
