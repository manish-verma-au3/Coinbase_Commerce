import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../Styles/check.css';
import Typography from '@material-ui/core/Typography';
import Button from 'react-bootstrap/Button';

const Checkouts = () => {
    return (
        <Container>
            <Row>
                <Col sm={1}></Col>
                <Col sm={11}>
                    <h2 className='dash'>Checkouts</h2>
                    <br/>
                    <hr/>
                    <Col className="checkcol">
                        <br/>   
                        <Typography variant="h6" style={{color:"blue"}}>
                        Checkouts
                        </Typography>
                        <hr/>
                      <br/>
                      <br/>
                      <Typography variant="h5" style={{textAlign:'center'}}>
                        You haven't created any checkouts yet
                        </Typography>
                        <h6 style={{textAlign:'center'}}>
                        Create a checkout to start accepting payments 
                        </h6>
                        <Button  size="lg" className='checkbutton' active>+ Create Checkout</Button>

                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkouts
