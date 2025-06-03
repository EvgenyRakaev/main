import React from 'react';
import {
    Card,
    CardHeader,
    Col,
    Input,
    Row
} from "reactstrap";
import testImage from "../../images/test-img.svg";
import PostCreationModal from "./PostCreationModal";

const PostCreation = ({updatePost}) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <Card className="my-2"
              color="light"
        >
            <CardHeader>
                <Row>
                    <Col sm={1} className="text-center" style={{marginRight: "10px"}}>
                        <img
                            alt="userLogo.jpg"
                            src={testImage}
                        />
                    </Col>
                    <Col>
                        <Input
                            type="text"
                            placeholder="What's new, {Username}?"
                            onClick={()=>setIsModalOpen(prev => !prev)}
                            value=""
                        />
                    </Col>
                </Row>
            </CardHeader>
            <PostCreationModal
                updatePost={updatePost}
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
            />
        </Card>
    );
};

export default PostCreation;