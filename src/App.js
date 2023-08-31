import './App.css';
import { Navbar, Container, Nav, NavDropdown, Row, Col, Image, Button, Card, CardGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
      <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <main>
      <Container>
      <Row className="px-4 my-5">
        <Col sm={7}>
         <Image src="https://picsum.photos/900/400" 
         fluid 
         rounded
         className=""
         />
        </Col>
        <Col sm={5}>
          <h1>Sample Text</h1>
          <p>I am so grateful to first-class publicity companies like The Promotion People. In today's entertainment industry, there is no possible way that I would notice all the top-notch industry professionals out there without their gentle guidance, and this company only works with the absolute best. Recently, they alerted me to the lovely and vivacious Christine Solomon, and what a joy it was to connect and chat with her. Our interview enveloped a wide variety of topics including the genesis of her career, her upcoming and current projects, and most importantly, her outlook on the entertainment world today.</p>
          <Button variant="outline-dark">Click Me!</Button>
        </Col>
      </Row>
      <Row>
        <Card className='text-center bg-secondary text-white my-5 py-4'>
          <Card.Body>This is some text within a card body. This is some text within a card body. This is some text within a card body. This is some text within a card body.</Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/id//201/320/200" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="outline-success">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/id//202/320/200" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="outline-danger">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/id//203/320/200" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="outline-dark">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <CardGroup className="my-5 py-4">
      <Card>
        <Card.Img variant="top" src="https://picsum.photos/id//204/320/200" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://picsum.photos/id//200/320/201" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://picsum.photos/id//26/320/200" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      </Row>
    </Container>
      </main>
      <footer className="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">
            Sample Footer for my website
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
