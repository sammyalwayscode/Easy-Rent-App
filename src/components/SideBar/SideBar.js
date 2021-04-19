import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Button } from "antd";
// import { app } from "../Peter/firebase"
// import TransitionsModal from "../ModalComponents/Modal";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SideBarElement";

// import { AppContext } from "../GlobalAuth/GlobalAuth"
import SignDisplay from "../NavBar/SignDisplay";
// import RegModal from "../Regpages/RegModal";

const SideBar = ({ isOpen, toggle }) => {
  const [show, setShow] = useState(false);
  const [cssChange, setcssChange] = useState(true);

  // const { current } = React.useContext(AppContext)
  // const { datause } = React.useContext(AppContext)
  // const hist = useHistory()

  const changeCss = () => {
    setcssChange(!cssChange);
  };

  const diSignOut = () => {
    setShow((prev) => !prev);
  };
  // const signOutUser = () => {
  //   app.auth().signOut();
  //   hist.push("/");
  // };

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/" onClick={toggle}>
              Home
            </SidebarLink>
            {/* <SidebarLink to="/overview" onClick={toggle}>
              Meet Our Agents
            </SidebarLink> */}
            <SidebarLink to="/allflatupload" onClick={toggle}>
              Flats
            </SidebarLink>
            <SidebarLink to="/allroomuploads" onClick={toggle}>
              Self-Con
            </SidebarLink>
            <SidebarLink to="/allstoreuploads" onClick={toggle}>
              Shops/Store
            </SidebarLink>
            <SidebarLink to="/SignUp" onClick={toggle}>
              <Button style={{ fontWeight: "bold" }}>Become An Agent</Button>
            </SidebarLink>

            {/* {
              current ? <SidebarLink to="/dasboard">Dashboard</SidebarLink>
                : null
            } */}
          </SidebarMenu>
          <SideBtnWrap>
            {/* {
              current ?
                <div className={cssChange ? "first1" : "second1"}>
                  <div style={{ display: "flex", justifyContent: "center" }}
                    onClick={() => {
                      changeCss()
                      diSignOut()
                    }}
                  >
                    <img
                      src={datause && datause.avatar}
                      alt="Avatar"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "2px solid white",
                        objectFit: "cover",
                      }}
                    />
                    <CaretDownOutlined />

                  </div>
                  <SignDisplay show={show} setShow={setShow} />
                </div> : <RegModal />
            } */}
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};
export default SideBar;
