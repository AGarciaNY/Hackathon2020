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

  fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=volunteer&api-key=lI4WHMHoiOnZHoJwYyLmqAHuHs4IZZN8")
  .then((data)=>{
      return data.json();
  })
  .then((response)=>{
      // console.log("volunteer",response.respo nse)
      return response.response.docs;
  }).then((docs)=>{
      // console.log("volunteer docs",docs);
      for(let i=0; i<docs.length;i++){
        insideactivitys.push(new Projects(docs[i].headline.main, ["Jason"], docs[i].abstract, docs[i].web_url, "https://static01.nyt.com/"+docs[i].multimedia[0].url));
      }
  });


}

content();

let insideactivitys = [];
export default insideactivitys;
  