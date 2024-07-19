export default class Scroll {
  constructor(sections){
    this.sections = sections;
  }
  init(){
    const observer = new IntersectionObserver((sections) =>{

      sections.forEach((section)=>{
        if(section.isIntersecting){
          section.target.classList.add("show");
        }else{
          section.target.classList.remove("show");
        }
      })
    })
    this.sections.forEach((section)=>{
      observer.observe(section);
    })
  }
}


