import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Menu from '../components/Menu';
import DashBoard from '../components/Dashboard';
import Payments from '../components/Payments';
import Balances from '../components/Balances';
import Checkouts from '../components/Checkouts';

function Home() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col sm={3}>
                <h4 style={{marginTop:'30px', marginLeft:'10px'}} >coinbase | Commerce</h4>
                <br/>
                  <Col style={{marginLeft:'10px'}}>
                    <Menu />
                  </Col>
                </Col>

                <Col sm={9} style={{backgroundColor: "rgb(245, 247, 250)", height:"100vh"}}>
                    <Route path='/home/dashboard' component={DashBoard}/>
                    <Route path='/home/balances' component={Balances}/>
                    <Route path='/home/payments' component={Payments}/>
                    <Route path='/home/checkouts' component={Checkouts}/>
                </Col>
            </Row>  
        </Container>
    </div>
  );
}

export default Home;

{/* <Route path='/home/dashboard' component={DashBoard}/>
<Route path='/home/balances' component={Balances}/>
<Route path='/home/payments' component={Payments}/>
<Route path='/home/checkouts' component={Checkouts}/> */}