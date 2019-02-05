
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
    // console.log('data:', data);
    const individualPost = data.data.children;
    // console.log('individualPost:', individualPost);
    request(individualPost[4].data.thumbnail, function(data){
        console.log(data)
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




// var person4Req = new XMLHttpRequest();
// person4Req.addEventListener('load', function(data){

//     //console.log(data.target.responseText);
//     const person4Obj = JSON.parse(data.target.responseText);
//     //console.log('person4Obj:', person4Obj);
    
//     const getPerson4Name = document.getElementById('person4Name');
//     getPerson4Name.innerHTML = person4Obj.name;

//     //// NEW REQUEST FOR HOMEWORLD LINK

//     var planetReq = new XMLHttpRequest();
//     planetReq.addEve"https://i.redd.it/3s7ega4808e21.jpg"ntListener('load', function(data){
//         const homeWorld4 = JSON.parse(data.target.responseText);
    
//         //console.log(homeWorld4)

//         const getPerson4HomeWorld = document.getElementById('person4HomeWorld');
//         getPerson4HomeWorld.innerHTML = homeWorld4.name;
//     });

//     planetReq.open('GET', "https://swapi.co/api/planets/1/");
//     planetReq.send();
    
// });

// person4Req.open('GET', 'https://swapi.co/api/people/4/');
// person4Req.send();





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



