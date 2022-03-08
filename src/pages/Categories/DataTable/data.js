import { Image, EnableDisable } from "./styles"

import DashedButton from "ant/DashedButton"
import { StatusColor } from "./styles"
import { ReactComponent as DisabledIcon } from "assets/icons/Slash.svg"
import { ReactComponent as StarIcon } from "assets/icons/Star.svg"
import SelectDays from "components/SelectDays"
import { Select } from "ant"
import axios from "axios"
import {useRef} from 'react'
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import { ReactComponent as EditIcon } from "assets/icons/Edit/Edit_1.svg"
import { ReactComponent as ViewIcon } from "assets/icons/Eye/Eye.svg"
import { ReactComponent as TrashIcon } from "assets/icons/Trash/Trash 1.svg"
import styled from "styled-components"
const { Option } = Select
const userRole = localStorage.getItem('muutos-u-role');
export var columns;
if (userRole == 'admin') {
  columns = (onEditClick, onStatusChange, ViewCategory) => [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Category For",
      dataIndex: "categoryFor",
      key: "categoryFor",
      render: (categoryFor) => {
        return(
          <>
            {categoryFor.toString().toUpperCase()}
          </>
        )
      }
    },
    {
      title: "Status",
      dataIndex: "categoryStatus",
      key: "categoryStatus",
      render: (categoryStatus, record) => {
        return (
          <StatusColor status={Number(categoryStatus)}>
            <Select
              suffixIcon={<DownArrowIcon />}
              defaultValue={() => {
                if (categoryStatus == '0') {
                  return 'In-Active'
                } else {
                  return 'Active'
                }
              }}
              onChange={v => onStatusChange && onStatusChange(v, record.id)}>
              <Option value='1'>Active</Option>
              <Option value='0'>In-Active</Option>
            </Select>
          </StatusColor>
        )
      },
    },
    {
      title: "Sub Categories",
      dataIndex: null,
      key: "id",
      render: id => {
        return (
          <>
            <ViewIconWrapper>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {

                  async function getSubCategoriesByCategoryId() {
                    var data = {
                      categoryId: id.id
                    }
                    const results = await axios.post(`http://localhost:8080/api/getSubCategoriesByCategoryId`, data);
                    if (results) {
                      // window.location.reload();
                      ViewCategory(results.data.data, data.categoryId)
                    }

                  }

                  getSubCategoriesByCategoryId();
                }}
              >
                Sub Categories
              </a>
            </ViewIconWrapper>

          </>
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
              <TrashIcon
                style={{ cursor: "pointer" }}
                onClick={() => {
                  async function removeUser() {
                    var data = {
                      id: id
                    }
                    const deleteReview = await axios.post(`http://localhost:8080/api/deleteCategoryById`, data);
                    if (deleteReview) {
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
} else {
  
}

export var data;

if (userRole == 'admin') {

  async function getReviews() {

    const reviews = await axios.get(`http://localhost:8080/api/allCategories`);
    if (reviews) {
      data = reviews.data.data;
      console.log(data)
    }

  }

  getReviews();

} else {

}


const IconWrapper = styled.span`

    & > svg {
        & > path{
            fill: #10B981
        }
    }

`

const IconWrapper2 = styled.div`

width:200px !important;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;

`
const ViewIconWrapper = styled.span`
  & > svg {
    & > path {
      fill:#D4D4D8;
    }
  }

  & > a:hover {
    border-bottom:#34d399 !important;
    color: #34d399 !important;
  }
`