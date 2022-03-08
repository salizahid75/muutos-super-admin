import { useState } from "react"
import { useRef } from "react"
import Heading from "ant/Heading"
import { Table, PlusButton, Button, Checkbox, Alert, ColorSvg, Input, Select } from "ant"
import { ReactComponent as AlertIcon } from "assets/icons/Alert/Circle.svg"
import theme from "styles/Theme"
import Appointments from "../Widgets/Appointments"
import Disabled from "../Widgets/Disabled"
import { columns, data } from "./data"
import Container from "components/Container"
import FiltersBar from "components/FiltersBar"
import TopBar from "components/TopBar"
import usePage from "hooks/usePage"
import { DataTable } from "./styles"
import styled from 'styled-components';
import { ReactComponent as MapIcon } from "assets/icons/Pin.svg"
import { ReactComponent as PhoneIcon } from "assets/icons/Phone/Phone.svg"
import { ReactComponent as CloseIcon } from "assets/icons/Close/Close-1.svg"
import { Row, Col, Modal } from "antd"
import { Formik } from "formik"
import { ReactComponent as DownArrowIcon } from "assets/icons/Arrow/Chevron/Down.svg"
import {
  Wrapper,
  Left,
  LogoWrapper,
  InputWrapper,
  Tagline,
  CreateAccount,
  Copyright,
  Right,
  LeftInner,
  Error,
} from "./styles"
import axios from "axios"
const { Option } = Select
export default function ProductView({
  setActiveComp,
  products,
  onStatusChange,
  active,
}) {
  usePage("Category Management")
  const Edit = () => {
    console.log('working');
    document.getElementsByClassName('widget-reply')[0].classList.remove('d-none')
  }

  const handleFilter = () => {

  }

  const createCategory = async (event) => {
    var categoryStatus = document.getElementById('categoryStatus').value
    var categoryName = document.getElementById('categoryName').value
    var categoryFor = document.getElementById('categoryFor').value

    var data = {
      categoryStatus: categoryStatus,
      categoryName: categoryName,
      categoryFor: categoryFor
    }

    const createCategory = await axios.post(`http://localhost:8080/api/category`, data);

    if (createCategory) {
      window.location.reload();
    }
  }

  const ViewCategory = (data, categoryId) => {
    
    document.querySelector('.subcategories').innerHTML = '';
    document.getElementsByClassName('create-category-form')[0].style.display = 'none';
    document.getElementById('activeCategoryId').value = categoryId;
    var element = document.querySelector('.subcategories');
    if(data!==null){

      data.map((row, index)=>{
        var tableRow = document.createElement('tr');
        var tableDataId = document.createElement('td');
        tableDataId.innerText = index+1;
        var tableDataName = document.createElement('td');
        tableDataName.innerText = row.subCategoryName;
        var tableDataActions = document.createElement('td');
        var subCategoryId = row.id;
        tableDataActions.innerHTML = '<a href="javascript://" data-id='+subCategoryId+'>Delete</a>';
        tableDataActions.addEventListener('click', async function(){
          var id = this.firstElementChild.getAttribute('data-id');
          const deleteSubCategoryById = await axios.post(`http://localhost:8080/api/deleteSubCategoryById`, {id:id});
          if (deleteSubCategoryById) {
            console.log(deleteSubCategoryById.data.data);
            this.parentElement.remove();
          }
        })
        tableDataActions.style.textAlign = 'right';
        tableRow.appendChild(tableDataId);
        tableRow.appendChild(tableDataName);
        tableRow.appendChild(tableDataActions);
        element.appendChild(tableRow);
      })
    }
    document.getElementsByClassName('view-sub-category')[0].style.display = 'block';
    
  }

  


  return (
    <Container>
      <div>
        <TopBar
          activeItem={active}
          heading='5 AUG 2022'
        />
        <FiltersBar
          filters={{
            defaultValue: "All",
            onChange: f => console.log(f),
            filters: ["New", "Old"],
          }}
          sortBy={{
            defaultValue: "All",
            onChange: f => handleFilter(f),
            filters: ["All", "New", "Old"],
          }}

          otherFilters={
            <>
              <PlusButton
                style={{ display: "inline-flex" }}
                onClick={() =>{
                  document.getElementsByClassName('create-category-form')[0].style.display = 'block'
                  document.getElementsByClassName('view-sub-category')[0].style.display = 'none'
                }}
              />
            </>
          }
        />

        <DataTable>
          <Table
            pagination={{
              pageSize: data.length + 1,
              hideOnSinglePage: true,
            }}
            columns={columns(Edit, onStatusChange, ViewCategory)}
            dataSource={data}
          />
        </DataTable>
        <br />
      </div>
      <div className="category" style={{}}>
        <br />
        <form className="create-category-form p-3 mt-2" onSubmit={createCategory} method="POST" style={{display:'none', backgroundColor:'#222224'}}>
          <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }} htmlFor="">
            Select Status
            <font className="text-danger" style={{float:'right'}}><a onClick={()=>{
              document.getElementsByClassName('create-category-form')[0].style.display = 'none'
            }}>x</a></font>
          </h4>
          <input type="hidden"
            id="categoryStatus"
          />
          <input type="hidden"
            id="categoryFor"
          />
          <Select
            style={{ width: '100%', marginBottom: '10px' }}
            suffixIcon={<DownArrowIcon />}
            defaultValue={'Select Status'}
            onChange={v => document.getElementById('categoryStatus').value = v}
          >
            <Option value='1'>Active</Option>
            <Option value='0'>In-Active</Option>
          </Select>
          <label style={{ color: '#fff', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }} htmlFor="">Select For</label>
          <Select
            style={{ width: '100%', marginBottom: '10px' }}
            suffixIcon={<DownArrowIcon />}
            defaultValue={'Select Status'}
            onChange={v => document.getElementById('categoryFor').value = v}
          >
            <Option value='product'>Products</Option>
            <Option value='services'>Services</Option>
          </Select>
          <label style={{ color: '#fff', fontSize: '20px', marginBottom: '10px', fontWeight: '600' }} htmlFor="">Enter A Unique Name</label>
          <Input
            id="categoryName"
            name='categoryName'
            placeholder='Name'
          />
          <br /><br />
          <Button
            onClick={createCategory}
            type='primary'
            className="primary"
          >
            Create
          </Button>
        </form>
      
        <div className="p-3 my-2 text-white view-sub-category" style={{backgroundColor:'#222224', display:'none'}}>
          <h4 className="text-white">Sub Categories <font className="text-danger" style={{float:'right'}}><a onClick={()=>{

            document.getElementsByClassName('view-sub-category')[0].style.display = 'none';
            

          }}>x</a></font></h4>
          <table className="sub-categories-table w-100" cellPadding={5}>
            <thead>
              <tr>
                <th style={{width:'10%'}}>#</th>
                <th>Name</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody className="subcategories">
              
            </tbody>
          </table>
          <div className="w-100">
            <form action="javascript://">
              <div style={{textAlign:'center'}}>
                <a href="javascript://" onClick={()=>{
                  document.getElementsByClassName('create-new-sub-category-form')[0].style.display = 'block';
                }}>+ Add New Sub Category</a>
              </div>
              <table className="w-100 my-3 create-new-sub-category-form" style={{display:'none'}}>
                <tbody>
                <tr>
                  <td style={{width:'70%'}}>
                    <input type="hidden" id="activeCategoryId" />
                    <input type="text" id="newSubCategoryName" className="form-control" style={{backgroundColor:'#18181a', border:'none', color:'#fff'}} />
                  </td>
                  <td style={{textAlign:'right'}}>
                    <a href="javascript://" 
                    type="submit"
                    onClick={async ()=>{
                      const subCategoryName = document.getElementById('newSubCategoryName').value;
                      const categoryId = document.getElementById('activeCategoryId').value;
        
                      const data = {
                        categoryId:categoryId,
                        subCategoryName:subCategoryName
                      }
        
                      const addNewSubCategory = await axios.post(`http://localhost:8080/api/addSubCategory`, data);
                      if(addNewSubCategory){
                        
                        var element = document.getElementsByClassName('subcategories')[0];
                        var id = parseInt(element.lastElementChild?element.lastElementChild.firstElementChild.innerText:0)+1;
                        
                        var tableRow = document.createElement('tr');
                        var tableDataId = document.createElement('td');
                        tableDataId.innerText = id;
                        var tableDataName = document.createElement('td');
                        tableDataName.innerText = subCategoryName;
                        var tableDataActions = document.createElement('td');
                        var subCategoryId = addNewSubCategory.data.id;
                        tableDataActions.innerHTML = '<a href="javascript://" data-id='+subCategoryId+'>Delete</a>';
                        tableDataActions.addEventListener('click', async function(){
                          var id = this.firstElementChild.getAttribute('data-id');
                          const deleteSubCategoryById = await axios.post(`http://localhost:8080/api/deleteSubCategoryById`, {id:id});
                          if (deleteSubCategoryById) {
                            console.log(deleteSubCategoryById.data.data);
                            this.parentElement.remove();
                          }
                        })
                        tableDataActions.style.textAlign = 'right';
                        tableRow.appendChild(tableDataId);
                        tableRow.appendChild(tableDataName);
                        tableRow.appendChild(tableDataActions);
                        element.appendChild(tableRow);
                        document.getElementById('newSubCategoryName').value = ''
                        document.getElementsByClassName('create-new-sub-category-form')[0].style.display = 'none';

                        console.log(element.lastElementChild.firstElementChild.innerText);
                        console.log(addNewSubCategory.data.data);

                      }
                    }}
                    >&nbsp;&nbsp;Create</a>
                    <a href="javascript://" 
                    type="submit"
                    style={{transform:'translateY(5%)'}}
                    className="text-danger"
                    onClick={()=>{
                      document.getElementsByClassName('create-new-sub-category-form')[0].style.display = 'none';
                    }}
                    >&nbsp;&nbsp;Cancel</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>

    </Container>
  )
}

const IconWrapper = styled.span`

  & > svg{
    & > path{
      fill:#F4F4F5;
    }
  }

`;

const Textarea = styled.div`

& > textarea {
  background:#222225;
  border-radius: 5px;
  width:100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  padding:10px;
  line-height: 24px;
  color: #52525B;
}

`

const Text1 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #A1A1AA;
  margin-left:-9px;
`;
const Text2 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #10B981;
  margin-left:2px;
`;

const Text3 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #71717A;
  float:right;
`;

const Text4 = styled.div`
  text-align:justify;
  display:block;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #D4D4D8;
  margin:0;
  padding:0;
`;

const CalculateWidget = styled.div`

  & > div > .heading{
    margin-left:-10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #D4D4D8;
  }

`;

const ButtonWrapper = styled.div`

padding: 10px;
background: #222225;
border-radius: 12px;
& > div {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #34D399;
    text-align:center;
    padding:2px 15px;
}
& > p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #71717A;
    margin:0px !important;
}

& > select{
    background: #222225;
    color:#FAF7B8;
    outline:none;
    border:none;
    border-radius:5px;
}
& > select:after {
    background: #222225;
    color:#FAF7B8;
}

& > select:before {
    background: #222225;
    color:#FAF7B8;
}

& > select > option  {
    background: #222225;
    color:#FAF7B8;
}

`


const TextSuccess = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #34D399;
margin-left:25px;
margin-top:5px;

`