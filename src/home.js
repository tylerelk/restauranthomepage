import rootDiv from "./index";
import splash from './bbq-splash.jpeg'

export default function Home() {
  const splashImage = new Image();
  splashImage.src = splash;
  splashImage.style.width = '100%';
  splashImage.classList.add('splash-image');
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const background = document.createElement('div');

  background.appendChild(title);
  background.classList.add('main-title-background');
  title.innerHTML = _.join(["Jerry's", "BBQ", "Joint"], " ");
  title.classList.add('main-title');
  splashImage.setAttribute("alt", "Barbecue");
  description.classList.add('desc');
  description.innerHTML =
    "<h3>A Porkville tradition for over 80 years!</h3><br>Established after the great Pork Fires of the 1940s, Jerry Hamhock, son of Ham Magnate Walter Hamhock, opened his now-famed BBQ Joint on the corner of Main and Maple. Ever since, he's focused on serving up good-old down-home barbecue to Porkville's family of citizens and, of course, the brave men and women who work the town's Pork Mines!";

  rootDiv.appendChild(background);
  rootDiv.appendChild(splashImage);
  rootDiv.appendChild(description);
}
