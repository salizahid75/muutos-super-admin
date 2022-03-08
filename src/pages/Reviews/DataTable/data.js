import { Image, EnableDisable } from "./styles"

import DashedButton from "ant/DashedButton"

import { ReactComponent as DisabledIcon } from "assets/icons/Slash.svg"
import { ReactComponent as StarIcon } from "assets/icons/Star.svg"
import SelectDays from "components/SelectDays"
import styled from "styled-components"
import axios from "axios"
import { ReactComponent as ViewIcon } from "assets/icons/Eye/Eye.svg"
import { ReactComponent as TrashIcon } from "assets/icons/Trash/Trash 1.svg"

const userRole = localStorage.getItem('muutos-u-role');
export var columns;
if(userRole=='admin'){
    columns = onEditClick => [
        {
            title: "Name",
            dataIndex: "user",
            key: "user",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
            render: productId => <IconWrapper><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></IconWrapper>,
        },
        {
            title: "Last Modified",
            dataIndex: "lastModified",
            key: "lastModified",
        },
        {
            title: "Comment",
            dataIndex: "comment",
            key: "comment",
            render: (comment) => <IconWrapper2>{comment}</IconWrapper2>,
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
                          onEditClick(id)
                        }}
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                      />
                      &nbsp;&nbsp;&nbsp;
                      <TrashIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          async function removeUser(){
                            var data = {
                                id:id
                            }
                            const deleteReview = await axios.post(`http://localhost:8080/api/deleteReview`, data);
                            if(deleteReview){
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
}else{
    columns = onEditClick => [
        {
            title: "Name",
            dataIndex: "user",
            key: "user",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
            render: productId => <IconWrapper><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></IconWrapper>,
        },
        {
            title: "Last Modified",
            dataIndex: "lastModified",
            key: "lastModified",
        },
        {
            title: "Comment",
            dataIndex: "comment",
            key: "comment",
        },
    ]
}

export var data;

if(userRole == 'admin'){
    
    async function getReviews(){
          
        const reviews = await axios.get(`http://localhost:8080/api/allReviews`);
        if(reviews){
          data = reviews.data.data;
          console.log(data)
        }
        
      }
      
    getReviews();

}else{
    data = [
        {
            id: "1",
            name:"Nike Space",
            type:'Product',
            rating: 2,
            lastModified: "20 Aug 2021",
            comment:"as mentioned the name of that pr...",
        },
        {
            id: "1",
            name:"Nike Space",
            type:'Product',
            rating: 2,
            lastModified: "20 Aug 2021",
            comment:"as mentioned the name of that pr...",
        },
        {
            id: "1",
            name:"Nike Space",
            type:'Product',
            rating: 2,
            lastModified: "20 Aug 2021",
            comment:"as mentioned the name of that pr...",
        },
    
        {
            id: "1",
            name:"Nike Space",
            type:'Product',
            rating: 2,
            lastModified: "20 Aug 2021",
            comment:"as mentioned the name of that pr...",
        },
        {
            id: "1",
            name:"Nike Space",
            type:'Product',
            rating: 2,
            lastModified: "20 Aug 2021",
            comment:"as mentioned the name of that pr...",
        },
        {
            id: "1",
            name:"Nike Space",
            type:'Product',
            rating: 2,
            lastModified: "20 Aug 2021",
            comment:"as mentioned the name of that pr...",
        },
    ]
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
`