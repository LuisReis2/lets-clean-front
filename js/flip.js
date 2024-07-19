export default class Flip {
  constructor(elementClick){
    this.elementClick = elementClick;
  }

  init(){
    const flipCard = document.querySelector('.flip-card');
    const inner = document.querySelector('.flip-card-inner');
    const mobile = window.navigator.appVersion.includes("Android")
    const event = mobile? 'touchstart' : 'click';

    this.elementClick.forEach((btn)=>{
      btn.addEventListener(event, ()=>{
        flipCard.classList.toggle('back');
        inner.classList.toggle('back');
      })
    })
  }
}