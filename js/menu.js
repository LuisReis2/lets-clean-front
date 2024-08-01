export default class Home {

  init(){
    const elementclick = document.querySelector('nav');
    const elementShow = document.querySelector('.hide');
    const nav = document.querySelector('nav')
    const test = window.navigator.appVersion.includes("Android")
    const event = test? 'touchstart' : 'click';

      elementclick.addEventListener(event, ()=>{
        elementShow.classList.toggle('active');
        nav.classList.toggle('navClose');
      })
    
  }
}