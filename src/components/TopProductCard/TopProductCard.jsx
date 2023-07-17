import { styled } from "styled-components";
const MyCardStyled = styled.div`
  background-color: #eeeeee;
  display: flex;
  padding: 13px 36px 13px 19px;
  justify-content: space-between;
  border-radius: 10px;
  align-items: center;
  margin-bottom: 8px;
  .flex-col {
    display: flex;
    align-items: center;
    column-gap: 61px;
  }
  .product-card {
    column-gap: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .product_name {
      font-family: Open Sans;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      color: #000000;
    }
  }
  .product-info {
    display: flex;
    flex-direction: column;
  }
  .variant {
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #7b7878;
    text-transform: capitalize;
    column-gap: 5px;
  }
  .product_name {
    margin: 0;
  }
  .col {
    text-align: center;
    font-family: Roboto;

    .col-name {
      font-size: 18px;
      font-weight: 500;
      line-height: 21px;
      color: #7b7878;
      margin-bottom: 3px;
    }
    .col-value {
      color: #000000;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
    }
  }
`;
const TopProductCard = ({
  productName,
  color,
  quantity,
  inventory,
  sale,
  price,
  today,
  productPhoto,
}) => {
  return (
    <MyCardStyled>
      <div className="product-card">
        <img src={productPhoto} alt="" width="48px" height="41px" />
        <div className="product-info">
          <h4 className="product_name">{productName}</h4>
          <div className="variant">
            <div className="color">{color}</div>
            <span>-</span>
            <div>{quantity} orders</div>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <div className="col">
          <div className="col-name">Inventory</div>
          <div className="col-value">{inventory}</div>
        </div>
        <div className="col">
          <div className="col-name">Sales</div>
          <div className="col-value">{sale}</div>
        </div>
        <div className="col">
          <div className="col-name">Price</div>
          <div className="col-value">{price}</div>
        </div>
        <div className="col">
          <div className="col-name">Today</div>
          <div className="col-value">{today}</div>
        </div>
      </div>
    </MyCardStyled>
  );
};

export default TopProductCard;
