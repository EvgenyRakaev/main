import React from 'react';
import testImage from '../images/test-img.svg'
import {Button, ButtonGroup, Card, CardBody, CardHeader} from "reactstrap";

const RightMenu = () => {
    return (
        <Card style={{border: "none"}}>
            <CardHeader>New contacts</CardHeader>
            <CardBody>
                <ButtonGroup vertical>
                    <Button outline className="w-100" style={{border: "none", textAlign: "left", borderRadius: "5px"}}>
                        <img src={testImage} alt=""/>
                        New friend 1
                    </Button>

                    <Button outline className="w-100" style={{border: "none", textAlign: "left", borderRadius: "5px"}}>
                        <img src={testImage} alt=""/>
                        New friend 2
                    </Button>
                </ButtonGroup>
            </CardBody>
            <CardHeader>Contacts</CardHeader>
            <CardBody>
                <ButtonGroup vertical>
                    <Button outline className="w-100" style={{border: "none", textAlign: "left", borderRadius: "5px"}}>
                        <img src={testImage} alt=""/>
                        Friend 1
                    </Button>
                    <Button outline className="w-100" style={{border: "none", textAlign: "left", borderRadius: "5px"}}>
                        <img src={testImage} alt=""/>
                        Friend 2
                    </Button>
                    <Button outline className="w-100" style={{border: "none", textAlign: "left", borderRadius: "5px"}}>
                        <img src={testImage} alt=""/>
                        Friend 3
                    </Button>
                    <Button outline className="w-100" style={{border: "none", textAlign: "left", borderRadius: "5px"}}>
                        <img src={testImage} alt=""/>
                        Friend 4
                    </Button>
                </ButtonGroup>
            </CardBody>
        </Card>
    );
};

export default RightMenu;