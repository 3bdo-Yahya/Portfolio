import React from "react";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
export const Newletters = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem("subscriberEmail", email);
      clearFields();
    }
  };

  const clearFields = () => {
    setEmail("");
  };
  return (
    <Col lg={12} className="">
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} xl={5}>
            <h3>Subscribe to our Newsletter</h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
