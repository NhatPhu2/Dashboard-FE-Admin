import { styled } from "styled-components";
import { Row, Col, Typography, Card, Select, Space } from "antd";
import MyBarChart from "../../components/Chart/MyBarChart/index";
import CircularProcessPieChart from "../../components/Chart/CircularProgressPieChart/index";
import { ReactComponent as SelectArrowIcon } from "../../assets/image/Polygon 1.svg";
import { ReactComponent as IconOption } from "../../assets/image/option.svg";
import StatictisCard from "../../components/StatictisCard/index";
import { ReactComponent as IconUserStatictis } from "../../assets/image/userStatictis.svg";
import { ReactComponent as IconCart } from "../../assets/image/cart.svg";
import { ReactComponent as IconHandBag } from "../../assets/image/handbag.svg";
import { ReactComponent as IconPrinter } from "../../assets/image/printer.svg";
import TopProductCard from "../../components/TopProductCard/index";
import ImgBackPack from "../../assets/image/backpack.svg"
import ImgDress from "../../assets/image/dress.svg"
const Container = styled.div`
  .card-board {
    border-radius: 20px;
    .ant-card-body {
      padding: 34px 44px 62px 44px;
    }
    box-shadow: 0px 4px 4px 0px #00000040;
  }
  .card_top_product {
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px #00000040;
    .title {
      font-family: Roboto;
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
      color: #535353;
      margin: 23px 0px 18px 0px;
    }
  }

  .card-progress {
    box-shadow: 0px 4px 4px 0px #00000040;
    .main-title-progress-bar {
      padding-bottom: 32px;
    }
    .title-circular-progress {
      font-family: Roboto;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      color: #a7a7a7;
    }
    border-radius: 20px;
    height: 585px;
    .ant-card-body {
      padding: 34px 30px 86px 22px;
    }
    .text-customer {
      font-family: Roboto;
      font-size: 30px;
      font-weight: 700;
      line-height: 35px;
      letter-spacing: 0em;
      text-align: left;
    }
    .txt-infor-customer {
      font-family: Roboto;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      color: #a7a7a7;
    }
  }
  .revenue-price {
    font-family: Roboto;
    font-size: 36px;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
  }
  .text-revenue {
    color: #a7a7a7;
    font-size: 24px;
    font-weight: 500;
    font-family: Roboto;
  }
  .revenue {
    display: flex;
    flex-direction: column;
    padding-bottom: 26px;
  }
  .total-revenue {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const MyCustomSelect = styled(Select)`
  height: 35px;
  font-size: 12px;
  text-transform: uppercase;
  background-color: #fff8e5;
  color: #6c6c6c;
  border-radius: 12px;
  border: none;
  font-family: Roboto;
  font-weight: 500;
  box-shadow: 0px 4px 4px 0px #00000040;
`;
const Dashboard = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const data = [
    { name: "Group A", value: 75 },
    { name: "Group B", value: 225 },
  ];
  return (
    <Container>
      <Row gutter={[18, 20]}>
        <Col span={17}>
          <Card className="card-board">
            <div className="total-revenue">
              <div className="revenue">
                <Typography.Text className="text-revenue">
                  Total Revenue
                </Typography.Text>
                <Typography.Text className="revenue-price">
                  $980,273.00
                </Typography.Text>
              </div>
              <div className="select-total-revenue-by-year">
                <MyCustomSelect
                  defaultValue="thisyear"
                  suffixIcon={<SelectArrowIcon />}
                  bordered={false}
                  onChange={handleChange}
                  options={[
                    {
                      value: "thisyear",
                      label: "this year",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                  ]}
                />
              </div>
            </div>
            <MyBarChart />
          </Card>
        </Col>
        {/*card circular progress*/}
        <Col span={7}>
          <Card className="card-progress">
            <Row
              className="card-progress-text"
              justify={{
                xl: "space-between",
              }}
              align="middle"
            >
              <Col>
                <Space direction="vertical" className="main-title-progress-bar">
                  <Typography.Text className="text-customer">
                    Customers
                  </Typography.Text>
                  <Typography.Text className="txt-infor-customer">
                    Information about your customers
                  </Typography.Text>
                </Space>
              </Col>
              <Col>
                <IconOption />
              </Col>
            </Row>
            {/*Circular progress*/}
            <Row
              className="circular-progress"
              justify="space-between"
              gutter={[0, 51]}
            >
              <Col>
                <Space direction="vertical">
                  <CircularProcessPieChart
                    circleSize={130}
                    color="#5F27CD"
                    data={data}
                    percent={85}
                  />
                  <Typography.Text className="title-circular-progress">
                    Current Customers
                  </Typography.Text>
                </Space>
              </Col>
              <Col>
                <Space direction="vertical">
                  <CircularProcessPieChart
                    circleSize={130}
                    color="#6C6C6C"
                    data={data}
                    percent={66}
                  />
                  <Typography.Text className="title-circular-progress">
                    Current Customers
                  </Typography.Text>
                </Space>
              </Col>
              <Col>
                <Space direction="vertical">
                  <CircularProcessPieChart
                    circleSize={130}
                    color="#FF8918"
                    data={data}
                    percent={90}
                  />
                  <Typography.Text className="title-circular-progress">
                    Current Customers
                  </Typography.Text>
                </Space>
              </Col>
              <Col>
                <Space direction="vertical">
                  <CircularProcessPieChart
                    circleSize={130}
                    color="#FF6F61"
                    data={data}
                    percent={30}
                  />
                  <Typography.Text className="title-circular-progress">
                    Current Customers
                  </Typography.Text>
                </Space>
              </Col>
            </Row>
          </Card>
        </Col>
        {/*top products*/}
        <Col span={17}>
          <Card className="card_top_product">
            {/*widget*/}
            <Row justify="space-around">
              <Col>
                <StatictisCard
                  title="Total Visits"
                  suffix="m"
                  price={10.8}
                  icon={<IconUserStatictis />}
                />
              </Col>
              <Col>
                <StatictisCard
                  title="Total Sales"
                  price={100345}
                  icon={<IconCart />}
                />
              </Col>
              <Col>
                <StatictisCard
                  title="Total Made"
                  prefix="$"
                  suffix="k"
                  price={200}
                  icon={<IconHandBag />}
                />
              </Col>
              <Col>
                <StatictisCard
                  title="Orders Completed"
                  price={98771}
                  icon={<IconPrinter />}
                  fontSize="9px"
                />
              </Col>
            </Row>
            {/*top products*/}
            <Typography.Title className="title">Top Products</Typography.Title>
            <Row>
              <Col span={24}>
                <TopProductCard 
                  productName="Nike Sportswear Futura Luxe"
                  color="pink"
                  quantity={50}
                  inventory={700}
                  sale={1000.60}
                  price={1300.92}
                  today={17000.92}
                  productPhoto={ImgBackPack}
                />
                <TopProductCard 
                  productName="Basic dress"
                  color="green"
                  quantity={25}
                  inventory={200}
                  sale={1200.60}
                  price={1500.92}
                  today={12000.82}
                  productPhoto={ImgDress}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
