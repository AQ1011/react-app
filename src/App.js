import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Car from './components/Cards';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Login from './components/Login'
import Signin from './components/Signin'
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Route path="/" exact render = { () => (
            <Row>
              <Col>
                <Car/>
              </Col>
              <Col>
                <Car/>
              </Col>
              <Col>
                <Car/>
              </Col>
            </Row>
          )}
          />
         
          <Route path="/login" component={Login}/>
          <Route path="/signin" component={Signin}/>
        </Container>
      </div>
    </Router>
    
  );
}

export default App;
