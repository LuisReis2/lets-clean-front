import Scroll from "./scrollView.js"; //Scroll view
import ShowList from "./showList.js"; // Show list do services
import ScrollTo from "./scrollTo.js";
import Home from "./menu.js";
import Flip from "./flip.js";

// Animação de scroll
const scroll = new Scroll(document.querySelectorAll(".hidden"));

scroll.init();

//Click da lista nos serviços                           // Elemento clicavel                       
const showList = new ShowList(document.querySelectorAll('.service-accordion'), document.querySelectorAll(".close"));// elemento que irá mostrar

showList.init();

const scrollTo = new ScrollTo(document.querySelectorAll('[data-scroll]'));

console.log(document.querySelectorAll('[data-scroll]'))
scrollTo.init()

const menu = new Home();

menu.init();

const flip = new Flip(document.querySelectorAll('.flip-btn'));

flip.init()