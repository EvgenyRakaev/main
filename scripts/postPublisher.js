import PostTemplate from "./postTemplate.js";

const newPost = new PostTemplate();

function publisher(newPost) {
    const a = document.getElementsByTagName("button");
    a[0].addEventListener("click", (event) => {
        event.preventDefault();
        const inputElement = document.getElementById('newPost');
        if (inputElement.value) {
            const b = {
                id: '',
                title: 'Post title',
                post: '',
                groupName: 'group name',
                groupLogo: 'images/test-img.svg',
                senderName: 'sender name',
                senderLogo: 'images/test-img.svg'
            }
            b.post = inputElement.value;
            console.log(b.post);
            const string = newPost.render(b);
            const node = document.createElement('div');
            node.classList.add('post');
            node.innerHTML = string;
            localStorage.setItem(Math.random().toString(), JSON.stringify(b));
            let element = document.getElementsByClassName('main-page');
            if (element[0]) {
                element[0].append(node);
            }
        }
    })
}

publisher(newPost);

export default publisher;