
const request = (url, callback) => {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function(data) {
      const resData = JSON.parse(data.target.responseText);
      callback(resData);
    });
    oReq.open('GET', url);
    oReq.send();
  };
  
  request('http://www.reddit.com/r/TheOcho.json', function(data) {
    //console.log('data:', data);
    const individualChildren = data.data.children;
    console.log('individualChildren:', individualChildren);
    individualChildren.forEach((child) => {
        const author = child.data.author;
        const title = child.data.title;
        const textContent = child.data.selftext;
        const thumbnail = child.data.url;

        const getPostsBlock = document.getElementById('postsBlock');
        const newPostFrame = document.createElement('div');
        newPostFrame.className = 'postFrame';
        getPostsBlock.appendChild(newPostFrame);
        
        const newPostTitle = document.createElement('div');
        newPostTitle.className = 'postTitle';
        newPostTitle.innerHTML = title;
        newPostFrame.appendChild(newPostTitle); 

        const newPostAuthor = document.createElement('div');
        newPostAuthor.className = 'postAuthor';
        newPostAuthor.innerHTML = author;
        newPostFrame.appendChild(newPostAuthor); 

        // const newTextContent = document.createElement('div');
        // newTextContent.className = 'textContent';
        // newTextContent.innerHTML = textContent;
        // newPostFrame.appendChild(newTextContent); 

        request(thumbnail, function(data) {
          const newThumbnail = document.createElement('div');
          newThumbnail.className = 'postThumbnail';
          newThumbnail.innerHTML = thumbnail;
          newPostFrame.appendChild(newThumbnail);
        });
        
    
    });
  });










    // const author = post[3].data.author;
    // const title = post[3].data.title;
    // const theUrl = post[3].data.url;

    // const getBox = document.getElementById('box');
    // const authorElem = document.createElement('div');
    // getBox.appendChild(authorElem);
    // authorElem.innerHTML = author;
    // const titleElem = document.createElement('div');
    // titleElem.innerHTML = title;
    // getBox.appendChild(titleElem);
    // const urlElem = document.createElement('div');
    // urlElem.innerHTML = theUrl
    // getBox.appendChild(urlElem);

    // //console.log(post[4].data.thumbnail)

    // const itsThumbnail = post[3].data.url;
    // console.log('itsUrl:',itsThumbnail)

    
    // function opennLink(urll){
    //     window.open(urll)
    //     console.log('heard');
    // }


    // const thumbnailElem = document.createElement('div');
    // thumbnailElem.innerHTML = itsThumbnail;
    // getBox.appendChild(thumbnailElem);
    // thumbnailElem.addEventListener('click', opennLink);

    // request(itsThumbnail, function(data){
    //     const thumbnailElem = document.createElement('div');
    //     thumbnailElem.innerHTML = data;
    //     getBox.appendChild(thumbnailElem);
    //     thumbnailElem.addEventListener('click', opennLink);

    // })


    // post.forEach((single) => {
    //     const author = single.data.author;
    //     const title = single.data.title;
    //     const mainText = single.data.selftext;


    //     const getBox = document.getElementById('box');
    //     const authorElem = document.createElement('div');
    //     getBox.appendChild(authorElem);
    //     authorElem.innerHTML = author;

    //     request()
    // })


//   });


// Disecting each post
  // title = title
  // author = author
  // selftext = main text box
  // url = link or permalink
  // permalink = post page and comments 
  // thumbnail = starting img of video



// const oReq = new XMLHttpRequest ();
// oReq.addEventListener('load', function(data){
//     oReqParse = JSON.parse(data.target.responseText);
//     console.log(oReqParse);

//     const getTitleElem = document.getElementById('title');
//     const addAuthor = document.createElement('div');
//     addAuthor.innerHTML = oReqParse.data.children[0].data.author;
//     getTitleElem.appendChild(addAuthor);
// })

// oReq.open('GET', 'http://www.reddit.com/r/javascript.json');
// oReq.send();



