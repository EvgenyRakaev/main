import React from 'react';

const PostCreation = ({updatePost}) => {
    const [inputText, setInputText] = React.useState('');


    function newPost() {
        if (inputText) {
            let newPostJSON = {
                "id": Math.random().toString(),
                "title": "Some title",
                "post": inputText,
                "groupName": "group name",
                "groupLogo": "images/test-img.svg",
                "senderName": "sender name",
                "senderLogo": "images/test-img.svg"
            };
            localStorage.setItem(newPostJSON.id, JSON.stringify(newPostJSON));
            updatePost();
        }
    }

    function handleInputChange(event) {
        setInputText(event.target.value);
    }

    return (
        <div className="postCreation post">
            <input
                type="text"
                placeholder="Enter post"
                value={inputText}
                onChange={handleInputChange}
            />
            <button
                onClick={newPost}
            >
                Publish
            </button>
        </div>
    );
};

export default PostCreation;