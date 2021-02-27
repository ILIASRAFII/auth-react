import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {Container, Row, Col} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Row>
        <Col>
          <App />
        </Col>
      </Row>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
