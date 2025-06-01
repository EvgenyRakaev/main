import React from 'react';
import tempImage from '../images/test-img.svg'
import {LOCAL_STORAGE_KEY} from '../redux-store/store'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardText,
    CardTitle,
    CloseButton,
    Col,
    Row
} from "reactstrap";

const Posts = ({post, updatePost}) => {


    return (
        <Card className="my-2"
              color="light"
        >
            <CloseButton
                style={{margin: "0 0 0 auto"}}
                onClick={() => {
                    // Функция для удаления поста из localStorage
                    const newPosts = [...JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []].filter(el => el.id !== post.id);
                    newPosts.length === 0 ? localStorage.removeItem(LOCAL_STORAGE_KEY) :
                        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newPosts));
                    updatePost();
                }}
            />
            <CardHeader>
                <ul className="post-sender">
                    <li>
                        <a href="">
                            <img src={tempImage} alt=""/>
                            {post.groupName}
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={tempImage} alt=""/>
                            {post.senderName}
                        </a>
                        <a href="">1h</a>
                    </li>
                </ul>
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5">
                    {post.title}
                </CardTitle>
                <CardText>
                    {post.post}
                </CardText>
            </CardBody>
            <CardFooter>
                <Row className="g-1">
                    <Col sm={4} className="text-center">
                        <Button outline className="w-100" style={{border: "none"}}>
                            <img src={tempImage} alt=""/>
                            Like
                        </Button>
                    </Col>
                    <Col sm={4} className="text-center">
                        <Button outline className="w-100" style={{border: "none"}}>
                            <img src={tempImage} alt=""/>
                            Comment
                        </Button>
                    </Col>
                    <Col sm={4} className="text-center">
                        <Button outline className="w-100" style={{border: "none"}}>
                            <img src={tempImage} alt=""/>
                            Forward
                        </Button>
                    </Col>
                </Row>
            </CardFooter>
        </Card>
    );
};

export default Posts;