export default class ScrollTo{
  constructor(elementsClick){
    this.elementsClick = elementsClick;
  }
  init(){
    this.elementsClick.forEach((elementClick)=>{
      elementClick.addEventListener("click", (event)=>{
        event.preventDefault();
        const elementView = document.querySelector("." + elementClick.getAttribute("data-scroll"));
        elementView.scrollIntoView({ behavior: 'smooth' });
      })
    })
  }
}