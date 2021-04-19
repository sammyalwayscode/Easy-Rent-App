import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import "./sid.css";
import { Button } from "antd";
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

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VideoCameraOutlined style={{ color: "white", fontSize: "15px" }} />
      </ListItemIcon>
      <ListItemText style={{ color: "white" }} primary="Posts" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText style={{ color: "white" }} primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText style={{ color: "white" }} primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText style={{ color: "white" }} primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader style={{ color: "white" }} inset>
      Profile Picture
    </ListSubheader>

    <ListItem button>
      <ListItemIcon>
        <UserOutlined style={{ fontSize: "17px", color: "white" }} />
      </ListItemIcon>
      <div
        style={{
          height: "70px",
          width: "70px",
          backgroundColor: "silver",
          borderRadius: "50px",
        }}
      ></div>
    </ListItem>

    <ListItem button>
      <ListItemIcon></ListItemIcon>
      <Button
        className="general_button"
        style={{ height: "40px", width: "100px", borderRadius: "5px" }}
      >
        Log Out
      </Button>
    </ListItem>
  </div>
);
