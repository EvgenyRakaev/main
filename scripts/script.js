import posts from '../temp-server-respones/posts.json';

const posts = [
    {
        id: 0,
        title: 'In a dapibus nulla.,',
        post: 'Aenean erat orci, egestas non orci at, varius tempus risus. Ut suscipit lorem magna, quis auctor leo molestie ac. Integer ut efficitur neque. Curabitur sollicitudin ipsum dolor, et tempus massa lacinia a. Donec efficitur egestas facilisis. Aliquam feugiat convallis arcu quis sollicitudin. Nullam eleifend iaculis sapien id scelerisque.',
        groupName: 'group name',
        groupLogo: 'images/test-img.svg',
        senderName: 'sender name',
        senderLogo: 'images/test-img.svg'
    },
    {
        id: 1,
        title: 'Pellentesque justo turpis,',
        post: 'ullamcorper in dapibus non, auctor at odio. Nulla interdum, lectus vel fringilla laoreet, libero ligula vulputate neque, quis tincidunt arcu ex sed ipsum. Aliquam a lobortis erat. Curabitur tristique aliquam lectus, tempor dignissim lorem tincidunt et. Vivamus velit velit, laoreet id iaculis quis, sagittis et magna. Morbi eget neque vestibulum, accumsan ipsum volutpat, interdum nulla. Cras maximus, diam ultricies tristique luctus, ex mi consectetur dui, ut feugiat magna purus et felis. Maecenas sit amet fringilla nunc. Donec vel ex vitae elit tincidunt pretium. Vivamus in nibh eu massa rhoncus finibus id quis orci. Proin vel libero quam. Vestibulum non maximus erat. Etiam condimentum, augue a rutrum efficitur, enim odio cursus elit, vitae fermentum dolor est in ipsum.',
        groupName: 'group name',
        groupLogo: 'images/test-img.svg',
        senderName: 'sender name',
        senderLogo: 'images/test-img.svg'
    },
    {
        id: 2,
        title: 'Vivamus ultricies facilisis mauris,',
        post: 'non facilisis velit pretium in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget posuere nibh. Sed sit amet eleifend ante. Mauris scelerisque at turpis ut tristique. Morbi consequat lorem lectus. Fusce augue nulla, efficitur ac pulvinar non, laoreet non sem. Fusce malesuada tincidunt purus sollicitudin eleifend.',
        groupName: 'group name',
        groupLogo: 'images/test-img.svg',
        senderName: 'sender name',
        senderLogo: 'images/test-img.svg'
    },
    {
        id: 3,
        title: 'Integer at pulvinar turpis,',
        post: 'nec dignissim ipsum. Nunc vitae dui lorem. Mauris egestas lacus nec luctus euismod. In eleifend erat ut ex tincidunt, sed blandit mauris commodo. Nullam nec est diam. In laoreet a orci et maximus. Phasellus commodo iaculis lectus. Fusce egestas mauris eget nunc dignissim, a blandit enim scelerisque. Vestibulum pulvinar odio et risus malesuada, id posuere justo facilisis. Sed non convallis ligula. Vestibulum vestibulum ipsum in arcu finibus vestibulum. Cras mattis accumsan dolor, sed condimentum nisi semper quis. Nullam pulvinar venenatis commodo.',
        groupName: 'group name',
        groupLogo: 'images/test-img.svg',
        senderName: 'sender name',
        senderLogo: 'images/test-img.svg'
    }
]
function postGenerator(post){
    post.forEach(el => {
        //declare textElement node
        let textElement;

        //ImgElement node templates
        const groupImgElement = document.createElement('img');
        groupImgElement.src = el.groupLogo;
        const senderImgElement = document.createElement('img');
        senderImgElement.src = el.senderLogo;


        //anchorElement node templates
        textElement = document.createTextNode(el.groupName);
        const anchorElementGroup = document.createElement('a');
        anchorElementGroup.href = ""
        anchorElementGroup.append(
            groupImgElement,
            textElement
        )
        textElement = document.createTextNode(el.senderName);
        const anchorElementSender = document.createElement('a');
        anchorElementSender.href = ""
        anchorElementSender.append(
            senderImgElement,
            textElement
        )

        //listItemElement node template
        const listItemElementGroup = document.createElement('li');
        listItemElementGroup.appendChild(anchorElementGroup);
        const listItemElementSender = document.createElement('li');
        listItemElementSender.appendChild(anchorElementSender);
        const anchorElementTime = anchorElementSender.cloneNode();
        anchorElementTime.innerHTML = ' 1h';
        listItemElementSender.appendChild(anchorElementTime);

        //listElement node template
        const listElementPostSender = document.createElement('ul');
        listElementPostSender.className = 'post-sender';
        listElementPostSender.append(
            listItemElementGroup,
            listItemElementSender
            );

//------coding Post Footer section --------------------------------------------------
        const listElementPostFooter = document.createElement('ul');
        listElementPostFooter.className = 'post-footer';

        //coding Like section
        const listItemElementLike = document.createElement('li');
        const anchorElementLike = anchorElementGroup.cloneNode(true);
        anchorElementLike.lastChild.data = 'Like';
        listItemElementLike.appendChild(anchorElementLike);

        //coding Comment section
        const listItemElementComment = document.createElement('li');
        const anchorElementComment = anchorElementGroup.cloneNode(true);
        anchorElementComment.lastChild.data = 'Comment';
        listItemElementComment.appendChild(anchorElementComment);

        //coding Forward section
        const listItemElementForward = document.createElement('li');
        const anchorElementForward = anchorElementGroup.cloneNode(true);
        anchorElementForward.lastChild.data = 'Forward';
        listItemElementForward.appendChild(anchorElementForward);

        listElementPostFooter.append(
            listItemElementLike,
            listItemElementComment,
            listItemElementForward
        )
//------end of Post Footer section
        //titleElement
        const titleElement= document.createElement('h1');
        titleElement.innerText = el.title;
        //paragraphElement
        const paragraphElement = document.createElement('p');
        paragraphElement.innerText = el.post;

        //preparing post node
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.append(
            listElementPostSender,
            titleElement,
            paragraphElement,
            listElementPostFooter,
        );

        let element = document.getElementsByClassName('main-page');
        if (element[0]) {
            element[0].append(postElement);
        }
    });
}
postGenerator(posts);