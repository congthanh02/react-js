import React from "react";
 import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";

const Contact = () => {
  return ( 
    <Helmet title="Contact">
    <CommonSection title="Liên hệ" />
    <section>
      <Container> 
      <Col  >
              <div >
              Liên hệ
              </div>
            </Col>
      </Container>
    </section>
  </Helmet>
);
};

export default Contact;
