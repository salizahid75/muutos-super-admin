import { Breadcrumb } from "ant"
import styled from "styled-components"

export default function TopBar({
    heading = null,
    breadcrumb = [],
    menus = null,
    activeItem = null,
}) {
    return (
        <Wrapper>
            {heading ? (
                <Heading>{heading}</Heading>
            ) : (
                <BreadWrapper>
                    <Breadcrumb>
                        {Object.entries(breadcrumb).map(([k, v]) => (
                            <Breadcrumb.Item onClick={v}>{k}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                </BreadWrapper>
            )}
            {menus && (
                <Menus active={activeItem}>
                    {menus.map((menu, index) => {
                        return (
                            <button
                                key={index}
                                data-id={menu.key}
                                onClick={() => menu.onChange(menu.key)}>
                                {menu.title}
                            </button>
                        )
                    })}
                </Menus>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-bottom: 5px;
    border-bottom: 2px solid ${p => p.theme.colors.gray700};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
`

const Heading = styled.p`
    font-size: 16px;
    color: ${p => p.theme.colors.gray500};
    display: flex;
    margin: 0;
    padding: 0;
`

const Menus = styled.menu`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        color: ${p => p.theme.colors.gray500};
        font-size: 16px;
        font-weight: ${p => p.theme.font.weight.medium};
        margin: 0px 6px;
        padding: 0px 6px;
        background: none;
        border: none;
        cursor: pointer;
        position: relative;

        &:after {
            content: "";
            height: 2px;
            width: 100%;
            position: absolute;
            bottom: -20px;
            left: 0;
        }
    }

    button[data-id="${p => p.active}"] {
        color: ${p => p.theme.colors.primary};

        &:after {
            background: ${p => p.theme.colors.primary};
        }
    }
`

const BreadWrapper = styled.div`
    margin-bottom: 10px;
`
