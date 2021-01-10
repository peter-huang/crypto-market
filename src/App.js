import {Container, Row, Col} from "react-bootstrap";
import MainNav from "./MainNav.js";
import Particle from "./Particle.js";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="px-0">
         <MainNav></MainNav>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} className="px-0">

        <Particle />

        </Col>

      </Row>
      
      <Row>
        <Col xs={12} sm={12}>Test</Col>

      </Row>
    </Container>
  );
}

export default App;
