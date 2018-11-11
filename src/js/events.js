import flickity from 'flickity';
import { setTimeout } from 'timers';

// const events = [
//   {
//     name: "Hackathon",
//     img: ""
//   }
// ]

let flkty1 = new flickity(
  '.carousel', {
    wrapAround: true,
    draggable: true,
    pageDots: false,
  }
);

let flkty2 = new flickity(
  '.carousel-speaker', {
    wrapAround: true,
    draggable: true,
    pageDots: false,
  }
);

setTimeout(function () {
  flkty1.reloadCells();
  flkty1.reloadCells();
  flkty1.next();

  flkty2.reloadCells();
  flkty2.reloadCells();
  flkty2.next();
}, 500);