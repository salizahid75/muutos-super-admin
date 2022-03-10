import { Menu } from "antd"

import { useHistory } from "react-router-dom"

import styled from "styled-components"

import { DragButton } from "ant"

import { ReactComponent as GridIcon } from "assets/icons/Grid.svg"
import { ReactComponent as CubeIcon } from "assets/icons/Cube.svg"
import { ReactComponent as FireIcon } from "assets/icons/Fire.svg"
import { ReactComponent as CarIcon } from "assets/icons/Car.svg"
import { ReactComponent as CartIcon } from "assets/icons/Shopping/Cart.svg"
import { ReactComponent as BriefcaseIcon } from "assets/icons/Briefcase.svg"
import { ReactComponent as TextIcon } from "assets/icons/File/Text.svg"
import { ReactComponent as PersonsIcon } from "assets/icons/Person/Persones.svg"
import { ReactComponent as ActivityIcon } from "assets/icons/Activity.svg"
import { useSelector } from "react-redux"
import { getUserData } from "redux/user"
import React, { useState } from "react"
import { Modal, Button } from "antd"


const userRole = localStorage.getItem('muutos-u-role');
var menu;
if(userRole=='admin'){

    var menus = [
        {
            title: "Dashboard",
            icon: <GridIcon />,
            link: "/dashboard",
        },
        {
            title: "Users",
            icon: <PersonsIcon />,
            link: "/users",
        },
        {
            title: "Reviews",
            icon: <TextIcon />,
            link: "/reviews",
        },
        {
            title: "Products",
            icon: <CartIcon />,
            link: "/products",
        },
        {
            title: "Services",
            icon: <BriefcaseIcon />,
            link: "/services",
        },
        {
            title: "Categories",
            icon: <CubeIcon />,
            link: "/categories",
        },
        {
            title: "About Us",
            icon: <CubeIcon />,
            link: "/about-us",
        },
        {
            title: "Careers",
            icon: <CubeIcon />,
            link: "/Careers",
        },
        {
            title: "World",
            icon: <CubeIcon />,
            link: "/World",
        },
        {
            title: "Legal Pages",
            icon: <CubeIcon />,
            link: "/Legal_Pages",
        }
        
      
    ]

}else if(userRole=='vendor'){
    
    var menus = [
        {
            title: "Dashboard",
            icon: <GridIcon />,
            link: "/dashboard",
        },
        {
            title: "Operations",
            icon: <CubeIcon />,
            link: "/operations",
        },
        {
            title: "Marketing",
            icon: <FireIcon />,
            link: "/marketing",
        },
        {
            title: "Orders",
            icon: <CarIcon />,
            link: "/orders",
        },
        {
            title: "Products",
            icon: <CartIcon />,
            link: "/products",
        },
        {
            title: "Services",
            icon: <BriefcaseIcon />,
            link: "/services",
        },
        {
            title: "Articles",
            icon: <TextIcon />,
            link: "/articles",
        },
        {
            title: "Staff",
            icon: <PersonsIcon />,
            link: "/staff",
        },
        {
            title: "Finance",
            icon: <ActivityIcon />,
            link: "/finance",
        },
        
    ]

}


export default function SideBar({ collapsed, setCollapsed }) {
    const { push: redirectTo } = useHistory()
    const { name } = useSelector(getUserData)
    const { role } = useSelector(getUserData)
    console.log(getUserData);

    const onMenuClick = ({ key }) => {
        redirectTo(menus[Number(key)].link)
    }

    return (
        <>
        
        <Wrapper>
            <Profile>
                <Avatar collapsed={collapsed}></Avatar>
                <Info collapsed={collapsed}>
                    <h2>{name.split(" ")[0]}'s</h2>
                    <p>{role}</p>
                </Info>
                <ButtonWrapper
                    onClick={() => setCollapsed(!collapsed)}
                    collapsed={collapsed}>
                    <DragButton />
                </ButtonWrapper>
            </Profile>
            <Menu
                className='menu-main'
                theme='dark'
                mode='inline'
                defaultSelectedKeys={["0"]}
                onClick={onMenuClick}>
                {menus.map((menu, index) => {
                    return (
                        <Menu.Item
                            key={index}
                            icon={<IconWrapper>{menu.icon}</IconWrapper>}>
                            {menu.title}
                        </Menu.Item>
                    )
                })}
            </Menu>
        </Wrapper>
        </>
    )
}
const App = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = () => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    ;<>
        <Button type='primary'>Open Modal</Button>
        <Modal
            title='Basic Modal'
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    </>
}

const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 32px 24px;
`

const Avatar = styled.div`
    width: 64px;
    height: 64px;
    background: ${p => p.theme.colors.gray900};
    border-radius: 50%;
    margin-right: 12px;

    display: ${({ collapsed }) => (collapsed ? "none" : "block")};
`

const Info = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    display: ${({ collapsed }) => (collapsed ? "none" : "block")};

    h2,
    p {
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 16px;
        font-weight: ${p => p.theme.font.weight.semiBold};
        color: ${p => p.theme.colors.gray100};
    }
    p {
        color: ${p => p.theme.colors.gray500};
        font-size: 14px;
    }
`

const ButtonWrapper = styled.div`
    ${({ collapsed }) => (collapsed ? "margin: auto;" : "margin-left: auto;")}

    svg {
        transition: 0.2s ease all;
        transform: ${({ collapsed }) =>
            collapsed ? "rotate(-45deg)" : "rotate(45deg)"};
    }
`

const IconWrapper = styled.div`
    height: 30px;
    svg {
        path {
            fill: ${p => p.theme.colors.gray300};
        }
    }
`

const Wrapper = styled.div`
    .logo {
        height: 100px;
    }
    .menu-main {
        background: ${p => p.theme.colors.gray800};
    }
    .ant-menu-item {
        margin: 24px 0px;
        padding-left: 40px !important;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            opacity: 0;
            transition: 0.2s ease opacity;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;

            left: 0;
            top: 0;
            width: 6px;
            height: 100%;

            background: ${p => p.theme.colors.primary};
        }
    }
    .ant-menu-title-content {
        font-size: 18px;
        color: ${p => p.theme.colors.gray300};
        font-weight: ${p => p.theme.font.weight.regular};
        letter-spacing: 0.2px;
    }
    .ant-menu-item-icon {
        font-size: 20px;
        margin-right: 15px;
    }

    .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
        .ant-menu-item-selected {
        background: none !important;
        svg path {
            fill: ${p => p.theme.colors.primary};
        }

        &::before {
            opacity: 1;
        }

        * {
            color: ${p => p.theme.colors.primary};
            transition-duration: 0.1s;
        }
    }
`
