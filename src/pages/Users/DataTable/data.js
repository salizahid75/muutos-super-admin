import { Image, EnableDisable } from "./styles"
import { StatusColor } from "./styles"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import SelectDays from "components/SelectDays"
import { Select } from "ant"
import axios from "axios"
import { ReactComponent as ViewIcon } from "assets/icons/Eye/Eye.svg"
import { ReactComponent as TrashIcon } from "assets/icons/Trash/Trash 1.svg"
import styled from "styled-components"



const { Option } = Select
export var data;

async function getAllUser(){

  const users = await axios.get(`http://localhost:8080/api/users`);

  data = users.data.data;

  console.log(data)
}

getAllUser();

const onView = (id) => {
  
  if (typeof window !== "undefined") {
    var myModal = document.getElementById('exampleModal')
    console.log(myModal)
    // var myInput = document.getElementById('myInput')
    
    myModal.addEventListener('shown.bs.modal', function () {
      // myInput.focus()
    })
  }
}

export const columns = (onEdit, onStatusChange) => [
  {
    title: "Image",
    dataIndex: "profile_picture",
    key: "profile_picture",
    render: profile_picture => (
      <Image src={`${profile_picture?process.env.REACT_APP_HOST+'/'+profile_picture:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'}`} />
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
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
            onChange={v => {
              onStatusChange && onStatusChange(v, record.id);
            }}>
            <Option value='1'>Active</Option>
            <Option value='0'>Inactive</Option>
          </Select>
        </StatusColor>
      )
    },
  },
  {
    title: "Actions",
    dataIndex: "id",
    key: "id",
    render: id => {
      return (
        <>
          <ViewIconWrapper>
            <ViewIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                onEdit(id)
              }}
              data-bs-toggle="modal" data-bs-target="#exampleModal"
            />
            &nbsp;&nbsp;&nbsp;
            <TrashIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                async function removeUser(){

                  const users = await axios.delete(`http://localhost:8080/api/user/${id}`);
                  if(users){
                    window.location.reload();
                  }
                  
                }
                
                removeUser();
              }}
            />
          </ViewIconWrapper>
          
        </>
      )
    },
  },
]



const UserView = () => {
  return (
    <>
      
      
    </>
  )
}



const ViewIconWrapper = styled.span`
  & > svg {
    & > path {
      fill:#D4D4D8;
    }
  }
`