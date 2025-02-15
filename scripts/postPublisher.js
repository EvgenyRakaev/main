import PostTemplate from "./postTemplate.js";

const newPost = new PostTemplate();

const a = document.getElementsByTagName("button");
a[0].addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);
    const inputElement = document.getElementById('newPost');
    if (inputElement.value) {
        const b = {
            id: 0,
            title: 'Post title',
            post: '',
            groupName: 'group name',
            groupLogo: 'images/test-img.svg',
            senderName: 'sender name',
            senderLogo: 'images/test-img.svg'
        }
        b.post = inputElement.value;
        console.log(inputElement.value);
        const string = newPost.render(b);
        const node = document.createElement('div');
        node.classList.add('post');
        node.innerHTML = string;
        let element = document.getElementsByClassName('main-page');
        if (element[0]) {
            element[0].append(node);
        }
    }
})