import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";
import { suggestedProducts } from "./Data";
import { FiShare } from "react-icons/fi";
import Suggestions from "./Suggestions";
import WhyAllRight from "./WhyAllRight";

const ProductPage = ({addToCart}) => {
  const { id } = useParams();

  console.log(id);
  const productID = parseInt(id);

  console.log("suggestedProducts", suggestedProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = suggestedProducts.find((product) => product.id === productID);
  console.log("product", product);

  const [count, setCount] = useState(1);

  const handelCountDecrease = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };
  const handelCountIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      <NavBar />
      <div className="productPageContainer">
        <div className="productImgWrapper">
          <img
            src={product.imgURL}
            alt={product.title}
            height="485px"
            width="485px"
          />
          <div className="extraImg">
            <img
              src={product.hoverImgURL}
              alt={product.title}
              height="235px"
              width="235px"
            />
            <img
              src={product.extraImg}
              alt={product.title}
              height="235px"
              width="235px"
            />
          </div>
        </div>
        <div className="productDetailsWrapper">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <span className="productMrp">{product.mrp}</span> &nbsp;&nbsp;
          <span className="productPrice">{product.price}</span>
          <span className="ppSaleTag">Sale </span>
          <h6>Size</h6>
          <div className="ppSize">Pack of 6</div>
          <h6>Quantity</h6>
          <div className="ppCounter">
            <span onClick={handelCountDecrease}>-</span>
            <span>{count}</span>
            <span onClick={handelCountIncrease}>+</span>
          </div>
          <button
            className="ppButton"
            onClick={() => addToCart(product, count)}
          >
            Add To cart
          </button>
          <button className="ppButton">Buy it now</button>
          <div className="ppShare">
            <a href="#">
              <span>
                <FiShare />{" "}
              </span>{" "}
              &nbsp;&nbsp;
              <span className="shareTag">Share</span>
            </a>
          </div>
        </div>
      </div>
      <Suggestions currentProductId={productID} />
      <WhyAllRight />
      <FooterSection />
    </>
  );
};

export default ProductPage;
