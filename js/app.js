
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
        const thumbnail = child.data.thumbnail;

        const getPostsBlock = document.getElementById('postsBlock');
        const newPostFrame = document.createElement('div');
        newPostFrame.className = 'postFrame';
        getPostsBlock.appendChild(newPostFrame);
        
        function titleLength (title) {
          if(title.length <= 80){
            return title;
          }else{
            return 'Title Length Way Too Long';
          }
        }

        const newPostTitle = document.createElement('div');
        newPostTitle.className = 'postTitle';
        newPostTitle.innerHTML = titleLength(title);
        newPostFrame.appendChild(newPostTitle); 

        // const newTextContent = document.createElement('div');
        // newTextContent.className = 'textContent';
        // newTextContent.innerHTML = textContent;
        // newPostFrame.appendChild(newTextContent); 

        // request(thumbnail, function(data) {
        //   const newThumbnail = document.createElement('div');
        //   newThumbnail.className = 'postThumbnail';
        //   newThumbnail.innerHTML = thumbnail;
        //   newPostFrame.appendChild(newThumbnail);
        // });

        const newThumbnail = document.createElement('img');
        newThumbnail.className = 'postThumbnail';
        newThumbnail.src = thumbnail;
        newPostFrame.appendChild(newThumbnail);

        const newPostAuthor = document.createElement('div');
        newPostAuthor.className = 'postAuthor';
        newPostAuthor.innerHTML = 'Posted By: ' + author;
        newPostFrame.appendChild(newPostAuthor); 
        
    });
  });

  const getJavaScript = document.getElementById('javaScript');

  getJavaScript.addEventListener('click', () => {
    const getPostsBlock = document.getElementById('postsBlock');
    getPostsBlock.innerHTML = '';
    request('https://www.reddit.com/r/javascript.json', function(data) {
      //console.log('data:', data);
      const individualChildren = data.data.children;
      console.log('individualChildren:', individualChildren);
      individualChildren.forEach((child) => {
          const author = child.data.author;
          const title = child.data.title;
          const textContent = child.data.selftext;
          const thumbnail = child.data.thumbnail;
  
          const getPostsBlock = document.getElementById('postsBlock');
          const newPostFrame = document.createElement('div');
          newPostFrame.className = 'postFrame';
          getPostsBlock.appendChild(newPostFrame);
          
          function titleLength (title) {
            if(title.length <= 80){
              return title;
            }else{
              return 'Title Length Way Too Long';
            }
          }
  
          const newPostTitle = document.createElement('div');
          newPostTitle.className = 'postTitle';
          newPostTitle.innerHTML = titleLength(title);
          newPostFrame.appendChild(newPostTitle); 
  
          // const newTextContent = document.createElement('div');
          // newTextContent.className = 'textContent';
          // newTextContent.innerHTML = textContent;
          // newPostFrame.appendChild(newTextContent); 
  
          // request(thumbnail, function(data) {
          //   const newThumbnail = document.createElement('div');
          //   newThumbnail.className = 'postThumbnail';
          //   newThumbnail.innerHTML = thumbnail;
          //   newPostFrame.appendChild(newThumbnail);
          // });
  
          const newThumbnail = document.createElement('img');
          newThumbnail.className = 'postThumbnail';
          newThumbnail.src = thumbnail;
          newPostFrame.appendChild(newThumbnail);
  
          const newPostAuthor = document.createElement('div');
          newPostAuthor.className = 'postAuthor';
          newPostAuthor.innerHTML = 'Posted By: ' + author;
          newPostFrame.appendChild(newPostAuthor); 
          
      });
    });
  })





