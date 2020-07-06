import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../Styles/balance.css';
import Typography from '@material-ui/core/Typography';
import {useSelector} from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'


const Balances = () => {
    const allBalance = useSelector(state => state.balanceReducer);
    console.log(allBalance)
    return (
        <Container>
            <Row>
                <Col sm={1}></Col>
                <Col sm={11}>
                    <h2 className='dash'>Balances</h2>
                    <br/>
                    <hr/>
                    <Col className="balcol">
                        <br/>   
                        <Typography variant="h6" style={{color:"blue"}}>
                        Balances
                        </Typography>
                        <hr/>
               <ListGroup variant="flush">
                {
                    allBalance.map(item => (
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                <img src={item.imageurl} height="36" width="36"></img> 
                            </Col>   

                            <Col sm={6}>
                                <Typography variant="h6" >
                                 {item.Name}
                                </Typography>
                            </Col>

                            <Col>
                                {item.value}
                            </Col>

                            <Col>
                                {item.price}
                            </Col>
                            <Col>
                                <Button variant="outline-secondary" disabled>Withdraw</Button>
                            </Col>
                        </Row>                  
                    </ListGroup.Item>
                    ))
                }
              </ListGroup>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Balances
