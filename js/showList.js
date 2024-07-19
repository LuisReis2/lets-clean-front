export default class ShowList {
  constructor(elementsClick, elementShow){
    this.elementsClick = elementsClick;
    this.elementShow = elementShow
  }
  init(){

    this.elementsClick.forEach((elementClick, index) => {
      
      elementClick.addEventListener("click", ()=>{
        this.elementShow[index].classList.toggle("open");
        elementClick.classList.toggle("arrow-up")
      });

    });
   
  }
}