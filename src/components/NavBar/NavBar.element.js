import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  /* background: ${({ scrollNav }) =>
    scrollNav ? "#5D91D6" : "transparant"}; */
  background: #0373ab;
  height: 60px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 80px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    position: sticky;
    top: 0;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  // background: red;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;

  max-width: 1100px;
  color: white;
`;

export const NavLogo = styled(LinkR)`
  color: white;

  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  margin-left: 24px;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

// export const MobileIcon = styled.div`
//   color: white;
// `;

export const MobileIcons = styled.div`
  display: none;
  @media screen and (max-width: 1100px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  /* color: #010606; */
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* display: none; */

  @media screen and(max-width: 1100px) {
    /* display: none; */
    display: none;
    color: pink;
    background: #5d91d6;
  }

  /* &: hover {
    transition: all 0.2s ease-in-out;
    background-color: white;
    color: #010606;
  } */
`;
