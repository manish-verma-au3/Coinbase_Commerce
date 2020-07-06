import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../Styles/payment.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

const Payments = () => {
    return (
        <Container>
        <Row>
            <Col sm={1}></Col>
            <Col sm={11}>
                <h2 className='dash'>Payments</h2>
                <br/>
                <hr/>
                <Col className="paycol">
                    <br/>   
                    <Form.Group>
                        <Form.Control type="text" placeholder="Seaarch by reference number, tx hash, or address" />
                    </Form.Group>
                    <hr/>
                  <Row>
                    <Col xs={2}>NAME</Col>
                    <Col style={{textAlign:'center'}} xs={8}>STATUS</Col>
                    <Col xs={2}>AMOUNT</Col>
                  </Row>
                   <hr/>
                   <br/>
                   <Typography variant="h5" style={{textAlign:'center'}}>
                        You haven't received any payments yet
                        </Typography>
                        <h6 style={{textAlign:'center'}}>
                       Your incoming payments will be displayed here 
                        </h6>
                </Col>
            </Col>
        </Row>
    </Container>
    )
}

export default Payments
