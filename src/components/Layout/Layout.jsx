import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Typography } from "antd";
import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import {
  IconCreditCard,
  IconDashboard,
  IconGrid,
  IconLogout,
  IconOrder,
  IconSetting,
  IconShipingTruck,
  IconUser,
} from "../Icon/index";
import Header from "../Header/index";
import Dashboard from "../../containers/Dashboard/index";
const { Content, Footer, Sider } = Layout;
const PrimaryLayout = () => {
  const data = [
    { name: ".....", value: 50 },
    { name: "currentCustomer", value: 500 },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const MyLayout = styled(Layout)`
    width: 1728px;
    height: 1117px;
    max-width: 100%;
    .text-sidebar {
      font-family: "Roboto";
      font-size: 34px;
      font-weight: 600;
      color: #1e2832;
    }
    .option-dashboard {
      font-family: Roboto;
      font-weight: 600;
      font-size: 24px;
      color: #cdcdcd;
      text-transform: capitalize;
    }
    .item-dashboard {
      padding: 40px 16px 40px 24px;
    }
    .sider {
      padding: 40px;
    }
    .logo-sidebar {
      padding: 15px 16px 50px 24px;
    }
    .active{
      .option-dashboard{
        color:#FF6F61
      }
      .icon_dashboard{
        fill: #FF6F61;
      }
    }
  `;
  return (
    <MyLayout>
      <Sider
        width="315px"
        className="sider"
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo-sidebar">
          <Typography.Text className="text-sidebar">Lisa Admin</Typography.Text>
        </div>
        <Menu
          style={{
            borderInline: "none",
          }}
          theme="light"
          mode="inline"
          selectable={false}
        >
          <NavLink to="/">
            <Menu.Item icon={<IconDashboard className="icon_dashboard" />} className="item-dashboard">
              <Typography.Text className="option-dashboard">
                Dashboard
              </Typography.Text>
            </Menu.Item>
          </NavLink>
          <NavLink to="/product">
            <Menu.Item icon={<IconGrid className="icon_dashboard" />} className="item-dashboard">
              <Typography.Text className="option-dashboard">
                Products
              </Typography.Text>
            </Menu.Item>
          </NavLink>
          <NavLink to="/customer">
            <Menu.Item icon={<IconUser className="icon_dashboard" />} className="item-dashboard">
              <Typography.Text className="option-dashboard">
                Customers
              </Typography.Text>
            </Menu.Item>
          </NavLink>
          <NavLink to="/order">
            <Menu.Item icon={<IconOrder className="icon_dashboard" />} className="item-dashboard">
              <Typography.Text className="option-dashboard">
                Orders
              </Typography.Text>
            </Menu.Item>
          </NavLink>
          <NavLink to="/shipment">
            <Menu.Item icon={<IconShipingTruck className="icon_dashboard" />} className="item-dashboard">
              <Typography.Text className="option-dashboard">
                Shipments
              </Typography.Text>
            </Menu.Item>
          </NavLink>
          <NavLink to="/transaction">
            <Menu.Item icon={<IconCreditCard className="icon_dashboard" />} className="item-dashboard">
              <Typography.Text className="option-dashboard">
                Transactions
              </Typography.Text>
            </Menu.Item>
          </NavLink>
          <NavLink to="/setting">
            <Menu.Item icon={<IconSetting className="icon_dashboard" />} className="item-dashboard">
              <Typography.Text className="option-dashboard">
                Setting
              </Typography.Text>
            </Menu.Item>
          </NavLink>
          <NavLink to="/logout">
            <Menu.Item icon={<IconLogout className="icon_dashboard" />} className="item-dashboard">
              <Typography.Text className="option-dashboard">
                Logout
              </Typography.Text>
            </Menu.Item>
          </NavLink>
        </Menu>
      </Sider>
      <Layout
        style={{
          padding: "55px 28px 0px 47px",
        }}
      >
        <Header />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </MyLayout>
  );
};
export default PrimaryLayout;
