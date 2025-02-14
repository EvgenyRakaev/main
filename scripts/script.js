const post = [
    {
        id: 1,
        title: '111111',
        post: 'Pellentesque justo turpis, ullamcorper in dapibus non, auctor at odio. Nulla interdum, lectus vel fringilla laoreet, libero ligula vulputate neque, quis tincidunt arcu ex sed ipsum. Aliquam a lobortis erat. Curabitur tristique aliquam lectus, tempor dignissim lorem tincidunt et. Vivamus velit velit, laoreet id iaculis quis, sagittis et magna. Morbi eget neque vestibulum, accumsan ipsum volutpat, interdum nulla. Cras maximus, diam ultricies tristique luctus, ex mi consectetur dui, ut feugiat magna purus et felis. Maecenas sit amet fringilla nunc. Donec vel ex vitae elit tincidunt pretium. Vivamus in nibh eu massa rhoncus finibus id quis orci. Proin vel libero quam. Vestibulum non maximus erat. Etiam condimentum, augue a rutrum efficitur, enim odio cursus elit, vitae fermentum dolor est in ipsum.',
        group: 'group name',
        groupLogo: 'images/test-img.svg',
        sender: 'sender name',
        senderLogo: 'images/test-img.svg'
    },
    {
        id: 2,
        title: '2222222222',
        post: 'Vivamus ultricies facilisis mauris, non facilisis velit pretium in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget posuere nibh. Sed sit amet eleifend ante. Mauris scelerisque at turpis ut tristique. Morbi consequat lorem lectus. Fusce augue nulla, efficitur ac pulvinar non, laoreet non sem. Fusce malesuada tincidunt purus sollicitudin eleifend.',
        group: 'group name',
        groupLogo: 'images/test-img.svg',
        sender: 'sender name',
        senderLogo: 'images/test-img.svg'
    },
    {
        id: 3,
        title: '33333333333',
        post: 'Integer at pulvinar turpis, nec dignissim ipsum. Nunc vitae dui lorem. Mauris egestas lacus nec luctus euismod. In eleifend erat ut ex tincidunt, sed blandit mauris commodo. Nullam nec est diam. In laoreet a orci et maximus. Phasellus commodo iaculis lectus. Fusce egestas mauris eget nunc dignissim, a blandit enim scelerisque. Vestibulum pulvinar odio et risus malesuada, id posuere justo facilisis. Sed non convallis ligula. Vestibulum vestibulum ipsum in arcu finibus vestibulum. Cras mattis accumsan dolor, sed condimentum nisi semper quis. Nullam pulvinar venenatis commodo.',
        group: 'group name',
        groupLogo: 'images/test-img.svg',
        sender: 'sender name',
        senderLogo: 'images/test-img.svg'
    }
]
function postGenerator(post){
    //    <div class="post">
    //       <ul class="post-sender">
    //         <li>
    //           <a href="">
    //             <img src="images/test-img.svg" alt="">
    //             Group name
    //           </a>
    //         </li>
    //         <li>
    //           <a href="">
    //             <img src="images/test-img.svg" alt="">
    //             Sender name
    //           </a>
    //           <a href="">1h</a>
    //         </li>
    //       </ul>
    //       <h1>Post title</h1>
    //       <p> post text </p>
    //       <ul class = "post-footer">
    //         <li>
    //           <a href="">
    //             <img src="images/test-img.svg" alt="">
    //             Like
    //           </a>
    //         </li>
    //         <li>
    //           <a href="">
    //             <img src="images/test-img.svg" alt="">
    //             Comment
    //           </a>
    //         </li>
    //         <li>
    //           <a href="">
    //             <img src="images/test-img.svg" alt="">
    //             Forward
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    post.forEach(el => {
        const newPost = document.createElement('div');
        newPost.classList.add('post');

        const anchor = document.createElement('a');
        anchor.href = ""
        const groupImg = document.createElement('img');
        groupImg.src = el.groupLogo;
        const senderImg = document.createElement('img');
        senderImg.src = el.senderLogo;

        const ulHead = document.createElement('ul');
        ulHead.className = 'post-sender';
        const ulLi = document.createElement('li');
        ulHead.appendChild(ulLi);
        ulHead.appendChild(ulLi);
        ulHead.children[0].appendChild(anchor);
        ulHead.children[0].children[0].appendChild(groupImg);
        //ulHead.children[0].children[0].createTextNode(el.group); //possible deletion of image ^
        //ulHead.children[1].appendChild(anchor);
        //ulHead.children[1].children[0].appendChild(senderImg);
        //ulHead.children[1].children[0].innerText = el.sender; //possible deletion of image ^
        //ulHead.children[1].appendChild(anchor);
        //ulHead.children[1].children[1].innerText = '1h';




        const postTitle = document.createElement('h1');
        postTitle.innerText = el.title;
        const postText = document.createElement('p');
        postText.innerText = el.post;


        newPost.appendChild(ulHead);


        let element = document.getElementsByClassName('main-page');
        if (element[0]) {
            element[0].append(newPost);
        }
    });
}
postGenerator(post);