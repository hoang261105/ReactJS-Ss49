import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function Register() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <h2>Create account</h2>
      <Row className="mb-3">
        <Form.Group as={Col} md="16" controlId="validationCustom01">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            style={{ width: 400 }}
            required
            type="text"
            placeholder="name@gmail.com"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your password"
            required
            style={{ width: 400 }}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your password"
            required
            style={{ width: 400 }}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" style={{ width: 400 }}>
        Login an account
      </Button>{" "}
      <br />
      <span>
        Already have an account? <Link to="/register">Register here</Link>
      </span>
    </Form>
  );
}
