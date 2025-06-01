import React from 'react';
import LeftMenu from "./LeftMenu";
import MainPage from "./MainPage";
import RightMenu from "./RightMenu";
import {Col, Row} from "reactstrap";

const Main = () => {
    return (
        <main>
            <Row>
                <Col sm={3}><LeftMenu/></Col>
                <Col sm={6}><MainPage/></Col>
                <Col sm={3}><RightMenu/></Col>
            </Row>



        </main>
    );
};

export default Main;