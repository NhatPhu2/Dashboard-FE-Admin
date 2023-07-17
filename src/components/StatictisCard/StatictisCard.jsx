import { Space, Typography } from "antd";
import { styled } from "styled-components";
const MyContainer = styled.div`
  width: 130px;
  border-radius: 10px;
  background-color: #eeeeee;
  .wrap_card {
    display: flex;
    align-items: center;
    padding: 25px 17px 25px 13px;
    column-gap: 5px;
  }
  .title-card {
    display: flex;
    flex-direction: column;
  }
  .txt-price {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #7b7878;
  }
  .txt-total-visit {
    font-family: Roboto;
    font-size: ${(props) => props.fontSize};
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #7b7878;
  }
`;
MyContainer.defaultProps = {
  fontSize: "13px",
};
const StatictisCard = ({ icon, title, price, suffix, prefix,fontSize }) => {
  return (
    <MyContainer fontSize={fontSize}>
      <div className="wrap_card">
        {icon}
        <div className="title-card">
          <Typography.Text className="txt-total-visit">{title}</Typography.Text>
          <Typography.Text className="txt-price">
            {prefix}
            {price}
            {suffix}
          </Typography.Text>
        </div>
      </div>
    </MyContainer>
  );
};

export default StatictisCard;
