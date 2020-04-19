import NewYorkTimesLogo from "../../Icons/NewYorkTimesLogo.png";

class Projects {

  constructor(id, parents, info,link,image) {

    this.id = id;
    this.info=info;
    this.link=link;
    this.image=image;
    
    this.parents = [];
    for (const parent of parents) {
      this.parents.push({ id: parent });
    }

  }
}


async function content(){
  
  //most viewed new york times articles

  fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=lI4WHMHoiOnZHoJwYyLmqAHuHs4IZZN8")
  .then((data)=>{
      return data.json();
  })
  .then((response)=>{
    for(let i=0; i<response.results.length;i++){
          insideactivitys.push(new Projects(response.results[i].title, ["Jason"], response.results[i].abstract, response.results[i].url, NewYorkTimesLogo));
      }
      return response.results;
  });

  //books to read topsellers

  fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=lI4WHMHoiOnZHoJwYyLmqAHuHs4IZZN8")
  .then((data)=>{
      return data.json();
  })
  .then((response)=>{
      // console.log("books to read",response.results.books);
      for(let i=0; i<response.results.books.length;i++){
          insideactivitys.push(new Projects(response.results.books[i].title, ["Jason"], response.results.books[i].description, response.results.books[i].buy_links[0].url, response.results.books[i].book_image));
      }
      return response.results.books;
  })


  //top stories about home nyt

  fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=lI4WHMHoiOnZHoJwYyLmqAHuHs4IZZN8")
  .then((data)=>{
      return data.json();
  })
  .then((response)=>{
      // console.log("articles to read",response.results);
      for(let i=0; i<response.results.length;i++){
        insideactivitys.push(new Projects(response.results[i].title, ["Jason"], response.results[i].abstract, response.results[i].url, response.results[i].multimedia[0].url));
      }
      return response.results;
  });

  // fetch("https://raw.githubusercontent.com/soroushchehresa/450-free-courses/master/README.md")
  // .then((data)=>{
  //     // console.log("free courses", data);
  //     return data.text();
  // })
  // .then((response)=>{
  //     let spiltData = response.split("<h2");            
  //     // console.log(spiltData);
  // });

}
content();


let insideactivitys = [];
export default insideactivitys;
  