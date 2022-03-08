import styled from "styled-components"

export const Wrapper = styled.div`
  transition: 0.2s ease padding-left;
  padding-left: ${p => (p.collapsed ? "136px" : "310px")};
  padding-right: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const MenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Button = styled.button`
  width: 22px;
  height: 22px;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0px 14px;
  svg path {
    fill: ${p => p.theme.colors.gray50};
  }
`
