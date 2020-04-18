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

let insideactivitys = [
  new Projects("Hangman",["Aldair"],"testing","https://agarciany.github.io/Hangman/","https://i.imgur.com/yXijUj2.png"),
];
console.log(insideactivitys);
export default insideactivitys;
  