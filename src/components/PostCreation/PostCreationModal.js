import React from 'react';
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {LOCAL_STORAGE_KEY} from "../../redux-store/store"

const PostCreationModal = ({updatePost, isModalOpen, setIsModalOpen}) => {
    const [post, setPost] = React.useState('');
    const [title, setTitle] = React.useState('');

    function newPost() {
        if (post && title) {
            let newPostJSON = {
                "id": Math.random().toString(),
                "title": title,
                "post": post,
                "groupName": "group name",
                "groupLogo": "images/test-img.svg",
                "senderName": "sender name",
                "senderLogo": "images/test-img.svg"
            };
            localStorage.setItem(
                LOCAL_STORAGE_KEY,
                JSON.stringify([...(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []),
                    newPostJSON
                ])
            );
            updatePost();

            setPost('');
            setTitle('');
            toggle()
        }
    }

    function handlePost(event) {
        setPost(event.target.value);
    }
    function handleTitle(event) {
        setTitle(event.target.value);
    }
    function toggle() {
        setIsModalOpen(prev => !prev);
    }



    return (
        <Modal isOpen={isModalOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                <Input
                    className=""
                    type="text"
                    placeholder="Title..."
                    value={title}
                    onChange={handleTitle}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            newPost()
                        }
                    }}
                />
            </ModalHeader>
            <ModalBody>
                <Input
                    className=""
                    type="textarea"
                    placeholder="Post..."
                    value={post}
                    onChange={handlePost}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            newPost()
                        }
                    }}
                />
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={newPost}>
                    Post
                </Button>
                <Button
                    color="secondary"
                    onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default PostCreationModal;

