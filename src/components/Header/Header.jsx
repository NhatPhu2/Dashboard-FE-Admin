import { styled } from "styled-components";
import {
  Space,
  Row,
  Col,
  Typography,
  Input,
  Button,
  Dropdown,
  Tooltip,
  message,
  Avatar,
} from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { ReactComponent as IconSearch } from "../../assets/image/Magnifier.svg";
import { ReactComponent as IconDashMenu } from "../../assets/image/Menu.svg";
import { ReactComponent as IconBell } from "../../assets/image/bell.svg";
const MyRowStyled = styled(Row)`
    padding: 0px 15px;
  .search-input {
    outline: none;
    border: none;
    border-radius: 10px;
    width: 562px;
    height: 55px;
    max-width: 100%;
  }
  .title {
    color: #535353;
    font-weight: 700;
    font-size: 40px;
    font-family: "Roboto";
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
const Header = () => {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  return (
    <MyRowStyled justify="space-between" align="middle">
      {/*Logo or something.....*/}
      <Col>
        <Typography.Text className="title">Overview</Typography.Text>
      </Col>
      {/*search input*/}
      <Col>
        <Input
          className="search-input"
          prefix={<IconSearch />}
          placeholder="Search..."
        />
      </Col>
      {/*avatar notification menu*/}
      <Col>
        <Row align="middle" gutter={[36]}>
          <Col>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <IconDashMenu />
                </Space>
              </a>
            </Dropdown>
          </Col>
          <Col>
            <IconBell />
          </Col>
          <Col>
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 65,
                xl: 65,
                xxl: 65,
              }}
              icon={<AntDesignOutlined />}
            />
          </Col>
        </Row>
      </Col>
    </MyRowStyled>
  );
};

export default Header;
