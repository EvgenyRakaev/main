import React from 'react';
import testImage from "../images/test-img.svg";
import {Button, ButtonGroup, Card, CardBody} from "reactstrap";

const LeftMenu = () => {
    return (
        <Card style={{border: "none"}}>
            <ButtonGroup vertical >
                <Button outline className="w-100" style={{border: "none", textAlign: "left", borderRadius: "5px"}}>
                    <img src={testImage} alt=""/>
                    My page
                </Button>

                <Button outline className="w-100" style={{border: "none", textAlign: "left", borderRadius: "5px"}}>
                    <img src={testImage} alt=""/>
                    Friends
                </Button>
                <Button outline className="w-100" style={{border: "none", textAlign: "left", borderRadius: "5px"}}>
                    <img src={testImage} alt=""/>
                    Groups
                </Button>
                <Button outline className="w-100" style={{border: "none", textAlign: "left", borderRadius: "5px"}}>
                    <img src={testImage} alt=""/>
                    Feature 4
                </Button>
                <Button outline className="w-100" style={{border: "none", textAlign: "left", borderRadius: "5px"}}>
                    <img src={testImage} alt=""/>
                    Feature 5
                </Button>
            </ButtonGroup>
        </Card>
    );
};

export default LeftMenu;
