import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";


const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterAddress, setEnterAddress] = useState("");
  const [enterInformation, setEnterInformation] = useState("");
  const [time, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      address: enterAddress,
      information: enterInformation,
      time: time,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Thanh toán">
      <CommonSection title="Thanh toán" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Địa chỉ nhận hàng</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Nhập tên của bạn"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Nhập số điện toại của bạn"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Nhập thông tin địa chỉ"
                    required
                    onChange={(e) => setEnterAddress(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Nhập thông tin khác(không bắt buộc)"
                    //required
                    onChange={(e) => setEnterInformation(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="datetime-local"
                    placeholder="Thời gian đặt hàng"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <div className="">
                
                  <input 
                    type="checkbox"
                    // placeholder=""
                    // required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                  <span>
                  &ensp;&nbsp;Bonus Shipper: 15.000VND
                </span>
                </div>
                <br/>
                <button type="submit" className="addTOCart__btn">
                  Thanh toán
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Giá sản phẩm: <span>{cartTotalAmount}.000 VND</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Phí vận chuyển: <span>{shippingCost}.000 VND</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Tổng: <span>{totalAmount}.000 VND</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
