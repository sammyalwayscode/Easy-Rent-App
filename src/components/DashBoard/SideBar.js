import React from "react";
import { Layout, Menu, Button } from "antd";
import {
  HeaderFile,
  FolderOpenOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BulbOutlined,
  BarChartOutlined,
  SolutionOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
function SideBar({ show, setShow }) {
  return (
    <>
      {show ? (
        <div
          style={{
            backgroundColor: "rgb(0, 13, 128)",
            marginTop: "-17px",
            height: "100vh",
            width: "70%",
            zIndex: "10",
            color: "white",
          }}
        >
          <Menu
            // className="siding"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item
              style={{
                display: "flex",
                alignItems: "center",
                // marginTop: "60px",
                height: "100px",
              }}
              key="1"
              icon={
                <UserOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    cursor: "pointer",
                  }}
                />
              }
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  marginLeft: "10px",
                  textTransform: "uppercase",
                }}
              >
                Profile
              </div>
            </Menu.Item>

            <Menu.Item
              style={{
                display: "flex",
                alignItems: "center",
                margin: "30px 0",
                // height: "60px",
              }}
              key="2"
              icon={
                <VideoCameraOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    cursor: "pointer",
                  }}
                />
              }
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  marginLeft: "10px",
                  textTransform: "uppercase",
                }}
              >
                posts
              </div>
            </Menu.Item>

            <Menu.Item
              style={{
                display: "flex",
                alignItems: "center",
                margin: "30px 0",
                height: "60px",
              }}
              key="3"
              icon={
                <UploadOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    cursor: "pointer",
                  }}
                />
              }
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  marginLeft: "10px",
                  textTransform: "uppercase",
                }}
              >
                Media
              </div>
            </Menu.Item>

            <Menu.Item
              style={{
                display: "flex",
                alignItems: "center",
                margin: "30px 0",
                height: "60px",
              }}
              key="4"
              icon={
                <FolderOpenOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "10px 0px",
                    cursor: "pointer",
                  }}
                />
              }
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  marginLeft: "10px",
                  textTransform: "uppercase",
                }}
              >
                Show
              </div>
            </Menu.Item>
            <br />
            <center>
              <div
                style={{
                  height: "70px",
                  width: "70px",
                  background: "red",
                  borderRadius: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "-40px",
                }}
              ></div>
            </center>
          </Menu>
        </div>
      ) : null}
    </>
  );
}

export default SideBar;
