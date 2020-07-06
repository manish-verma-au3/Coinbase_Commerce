import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../Styles/dash.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { colors } from '@material-ui/core';
import Cards from './CardView';

const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col sm={1}></Col>
                <Col sm={11}>
                    <h2 className='dash'>Dashboard</h2>
                    <br/>
                    <hr/>
                    <Col className="dashcol">
                        <br/>   
                        <Typography variant="h6" style={{color:"blue"}}>
                        Welcome to Coinbase Commerce
                        </Typography>
                        <hr/>
                        <Cards/>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard
