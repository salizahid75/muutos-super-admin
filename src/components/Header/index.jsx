import { ReactComponent as SearchIcon } from "assets/icons/Search.svg"
import { ReactComponent as BellIcon } from "assets/icons/Bell/On.svg"
import { ReactComponent as SettingsIcon } from "assets/icons/Settings/Setting-1.svg"

import { Wrapper, MenuItems, Button } from "./styles"

import { Heading } from "ant"
import { Tooltip } from "antd"

import { useSelector } from "react-redux"
import { getPageTitle } from "redux/app"
import { ReactComponent as ArrowLeftOutlined } from "assets/icons/Arrow/Arrow 2/Left.svg"

import ColorSvg from "ant/ColorSvg"

import { getGoBack } from "redux/app"
import { useHistory } from "react-router"

export default function Header({ collapsed }) {
    const pageTitle = useSelector(getPageTitle)

    const goBack = useSelector(getGoBack)
    const { push: redirectTo, goBack: goBackHistory } = useHistory()

    return (
        <Wrapper collapsed={collapsed}>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    userSelect: "none",
                }}>
                {goBack && (
                    <Tooltip title='Go Back'>
                        <div
                            onClick={
                                goBack === "history" ? goBackHistory : goBack
                            }
                            style={{
                                cursor: "pointer",
                            }}>
                            <ColorSvg color='gray50'>
                                <ArrowLeftOutlined
                                    style={{
                                        width: "35px",
                                        height: "auto",
                                        transform: "translateY(15px)",
                                    }}
                                />
                            </ColorSvg>
                        </div>
                    </Tooltip>
                )}
                <Heading style={goBack ? { marginLeft: "35px" } : {}}>
                    {pageTitle}
                </Heading>
            </div>
            <MenuItems>
                <Button>
                    <SearchIcon />
                </Button>
                <Button>
                    <BellIcon />
                </Button>
                <Button>
                    <SettingsIcon />
                </Button>
            </MenuItems>
        </Wrapper>
    )
}
