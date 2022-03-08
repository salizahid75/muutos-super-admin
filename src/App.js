import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import Theme from "styles/Theme"

import Page404 from "pages/404"

import "styles/App.less"
import Global from "styles/Global"

import CustomSwitch from "components/CustomSwitch"

import Layout from "components/Layout"
import styled from "styled-components"
import Auth from "pages/Auth"
import AdminLogin from "pages/Admin"
import Dashboard from "pages/Dashboard"
import Marketing from "pages/Marketing"
import Operations from "pages/Operations"
import Orders from "pages/Orders"
import Products from "pages/Products"
import Services from "pages/Services"
import Articles from "pages/Articles"
import Staff from "pages/Staff"
import Finance from "pages/Finance"
import Categories from "pages/Categories"
import { ReactComponent as ProfilePicIcon } from "assets/icons/ProfilePic.svg"
import { ReactComponent as CloseIcon } from "assets/icons/Close/Close-1.svg"
import Reviews from 'pages/Reviews';
import Subscriptions from 'pages/Subscriptions'
import Users from 'pages/Users';
const userRole = localStorage.getItem('muutos-u-role');
function App() {
  return (
    <>
    <div style={{display:'none',position:'absolute', width:'100%', height:'100%',backgroundColor: 'rgba(0,0,0,0.5)', borderRadius:'5px'}}>
      <AccountWidget>
        <div className='d-flex align-items-center justify-content-between'>
          <div>
            Account
          </div>
          <div>
            <CloseIcon />
          </div>
        </div>
        <div style={{marginTop:'10px',border:'0.5px solid #3F3F46'}}></div>  
        <div className='row pt-3'>
          <div className='col-md-4'>
            <ProfilePic>
              <div className="profile-pic">
                  <label htmlFor="profile-pic">
                      <ProfilePicIcon />
                  </label>
              </div>
            </ProfilePic>
          </div>
          <div className='col-md-8'>
            <div className='pt-2 pb-3'>
              <Title>Vendor Name</Title>
              <Title2>Fatema Shaikh</Title2>
              <Title3>Change name</Title3>
            </div>
            <div className='pt-2 pb-3'>
              <Title>Address</Title>
              <Title2>Phoenix Mall, Doha, Qatar</Title2>
              <Title3>Change address</Title3>
            </div>
            <div className='pt-2 pb-3'>
              <Title>Email</Title>
              <Title2>fatema@mail.com</Title2>
              <Title3>Change email</Title3>
            </div>
            <div style={{marginTop:'10px',border:'0.5px solid #3F3F46'}}></div>
            <div className='pt-4'>
              <Title>Notifications</Title>
              <div className='d-flex'>
                <input type={'checkbox'}></input>
                <Title2 className='' style={{transform:'translateY(-14%)'}}> 
                  &nbsp;Enable Notifications<br />
                  <span style={{fontSize:'11px'}}>&nbsp;&nbsp;To get notifications when you are outside of your panel.</span>
                </Title2>
              </div>
            </div>
          </div>
        </div>

      </AccountWidget>
    </div>
    <ThemeProvider theme={Theme}>
      <Global />
      <CustomSwitch>
        <Route exact path='/' render={() => <Redirect to='/dashboard' />} />
        <Route
          path={[
            "/dashboard",
            "/products",
            "/updateProduct/:id",
            "/operations",
            "/marketing",
            "/orders",
            "/services",
            "/articles",
            "/staff",
            "/finance",
            "/reviews",
            "/categories",
            "/subscriptions",
            "/users"
          ]}>
          <Layout>
            <CustomSwitch>
              <Route exact path='/users'>
                <Users />
              </Route>
              <Route exact path='/dashboard'>
                <Dashboard />
              </Route>
              <Route exact path='/subscriptions'>
                <Subscriptions />
              </Route>
              <Route exact path='/operations'>
                <Operations />
              </Route>
              <Route exact path='/marketing'>
                <Marketing />
              </Route>
              <Route exact path='/orders'>
                <Orders />
              </Route>
              <Route exact path='/products'>
                <Products />
              </Route>
              <Route exact path='/reviews'>
                <Reviews />
              </Route>
              <Route exact path='/categories'>
                <Categories />
              </Route>
              <Route exact path='/services'>
                <Services />
              </Route>
              <Route exact path='/articles'>
                <Articles />
              </Route>
              <Route exact path='/staff'>
                <Staff />
              </Route>
              <Route exact path='/finance'>
                <Finance />
              </Route>
            </CustomSwitch>
          </Layout>
        </Route>
        
        
        <Route exact path='/admin'>
          <AdminLogin />
        </Route>
        
        
        <Route path={`/auth`} component={Auth} />
        <Route path={`/not-found`} component={Page404} />
      </CustomSwitch>
    </ThemeProvider>
    </>
  )
}

export default App

const AccountWidget = styled.div`

  position: relative;
  top: 50%;
  left: 50%;
  opacity:1;
  transform: translate(-50%, -50%);
  width: 550px;
  padding: 20px;
  background-color: #222225;
  z-index:1000;
  & > .d-flex > div {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    color: #34D399;

    & > svg {
      path{
        fill: #D4D4D8;
      }
    }
  }

  & > hr {
    margin-top:10px;
    background-color:#3F3F46;
  }
`
const ProfilePic = styled.div`
    padding:10px 10px 0px 10px;
    display:flex;
    align-items:center;
    justify-content:center;
    color: #10B981;
    &  > .profile-pic{
        display:flex;
        align-items:center;
        justify-content:center;
        width: 120px;
        height: 120px;
        background: #303030;
        border-radius: 50%;
    }

`

const Title = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #F4F4F5;
`
const Title2 = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  color: #A1A1AA;
`
const Title3 = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  color: #34D399
`