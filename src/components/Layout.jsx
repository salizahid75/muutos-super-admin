import { useState } from "react"

import Header from "components/Header"

import { Layout as AntLayout } from "antd"

import SideBar from "components/SiderBar"
import styled from "styled-components"

import useAuth from "hooks/useAuth"

const { Header: AntHeader, Content, Sider } = AntLayout

export default function Layout({ children }) {
    const [collapsed, setCollapsed] = useState(false)

    const isLoading = useAuth()

    if (!isLoading)
        return (
            <Wrapper collapsed={collapsed}>
                <AntLayout className='layout-main'>
                    <Sider
                        breakpoint='lg'
                        collapsedWidth='100px'
                        className='sider-main'
                        onBreakpoint={broken => {
                            console.log(broken)
                        }}
                        onCollapse={collapsed => {
                            setCollapsed(collapsed)
                        }}>
                        <SideBar
                            collapsed={collapsed}
                            setCollapsed={setCollapsed}
                        />
                    </Sider>
                    <AntLayout className='content-layout-main'>
                        <AntHeader className='content-header-main'>
                            <Header collapsed={collapsed} />
                        </AntHeader>
                        <Content className='content-main'>{children}</Content>
                    </AntLayout>
                </AntLayout>
            </Wrapper>
        )
    else return <h1>Loading ...</h1>
}

const Wrapper = styled.div`
    height: 100%;

    .layout-main {
        background: ${p => p.theme.colors.gray900};
        height: 100%;
    }

    .sider-main {
        overflow: auto;
        height: 100vh;
        position: fixed;
        left: 0;

        z-index: 3;

        background: ${p => p.theme.colors.gray800};
        ${({ collapsed }) => {
            if (!collapsed) {
                return `
        max-width: 270px !important;
        min-width: 270px !important;
        width: 270px !important;
        `
            } else {
                return `
        max-width: 100px !important;
        min-width: 100px !important;
        width: 100px !important;
        `
            }
        }}
    }

    .content-layout-main {
        transition: 0.3s ease margin-left;
        background: ${p => p.theme.colors.gray900};
        margin-left: ${p => (p.collapsed ? "96px" : "270px")};
    }

    .content-main {
        margin-top: 140px;
        padding: 0px 40px;
    }

    .content-header-main {
        position: fixed;
        z-index: 2;
        width: 100%;
        height: auto;
        padding: 0;
        left: 0;
        top: 0;
        background: ${p => p.theme.colors.gray900};
    }
`
