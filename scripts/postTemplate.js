class PostTemplate {
    constructor() {
    }

    render(newPost) {
        return (`
            <ul class="post-sender">
                <li>
                    <a href="">
                        <img src="${newPost.groupLogo}" alt="">
                        ${newPost.groupName}
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="${newPost.senderLogo}" alt="">
                        ${newPost.senderName}
                    </a>
                    <a href="">1h</a>
                </li>
            </ul>
            <h1>${newPost.title}</h1>
            <p>${newPost.post}</p>
            <ul class="post-footer">
                <li>
                    <a href="">
                        <img src="${newPost.senderLogo}" alt="">
                        Like
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="${newPost.senderLogo}" alt="">
                        Comment
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="${newPost.senderLogo}" alt="">
                        Forward
                    </a>
                </li>
            </ul>
        `);
    }
}

export default PostTemplate;