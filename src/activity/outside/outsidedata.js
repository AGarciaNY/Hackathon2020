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

let outsideactivitys = [
   new Projects("testing",["Aldair"],"hi there out","https://agarciany.github.io/piglaten/","https://i.imgur.com/CScNoZw.pngs"),

];
console.log(outsideactivitys);
export default outsideactivitys;
  