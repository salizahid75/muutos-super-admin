import { Image, EnableDisable } from "./styles"
import { StatusColor } from "./styles"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import SelectDays from "components/SelectDays"
import { Select } from "ant"

const { Option } = Select

export const columns = (onEdit, onStatusChange) => [
  {
    title: "Image",
    dataIndex: "images",
    key: "images",
    render: images => (
      <Image src={`${process.env.REACT_APP_HOST}/${images?.[0]}`} />
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Speciality",
    dataIndex: "speciality",
    key: "speciality",
  },
  {
    title: "Working Status",
    dataIndex: "workingStatus",
    key: "workingStatus",
    render: staffId => <SelectDays />,
  },
  {
    title: "Business Hours",
    dataIndex: "workingHours",
    key: "workingHours",
  },
  {
    title: "Charges",
    dataIndex: "price",
    key: "price",
    render: price => "QAR " + price,
  },
  {
    title: "Edit",
    dataIndex: "id",
    key: "id",
    render: staffId => {
      return (
        <EditIcon
          style={{ cursor: "pointer" }}
          onClick={() => onEdit(staffId)}
        />
      )
    },
  },
]

export const data = [
  {
    key: "1",
    image:
      "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
    name: "An Awesome Name",
    speciality: "Gym Trainer",
    hours: "9AM to 9PM",
    workingStatus: 1,
    charges: "QAR 1500",
    edit: 1,
  },
  {
    key: "1",
    image:
      "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
    name: "An Awesome Name",
    speciality: "Gym Trainer",
    hours: "9AM to 9PM",
    workingStatus: 1,
    charges: "QAR 1500",
    edit: 1,
  },
  {
    key: "1",
    image:
      "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
    name: "An Awesome Name",
    speciality: "Gym Trainer",
    hours: "9AM to 9PM",
    workingStatus: 1,
    charges: "QAR 1500",
    edit: 1,
  },
  {
    key: "1",
    image:
      "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
    name: "An Awesome Name",
    speciality: "Gym Trainer",
    hours: "9AM to 9PM",
    workingStatus: 1,
    charges: "QAR 1500",
    edit: 1,
  },
  {
    key: "1",
    image:
      "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
    name: "An Awesome Name",
    speciality: "Gym Trainer",
    hours: "9AM to 9PM",
    workingStatus: 1,
    charges: "QAR 1500",
    edit: 1,
  },
  {
    key: "1",
    image:
      "https://i.pinimg.com/736x/99/b7/db/99b7db8d84165456c7c9d9337a88cfcc.jpg",
    name: "An Awesome Name",
    speciality: "Gym Trainer",
    hours: "9AM to 9PM",
    workingStatus: 1,
    charges: "QAR 1500",
    edit: 1,
  },
]
