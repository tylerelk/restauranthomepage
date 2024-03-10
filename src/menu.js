import rootDiv from "./index";
import Data from './menuitems.json';
import bananabread from "./bananabread.jpeg";
import biscuits from "./biscuits.jpeg";
import crabs from "./crabs.jpeg";
import corn from "./grilledcorn.jpeg";
import veg from "./grilledveg.jpeg";
import lamb from "./lamb.jpeg";
import peaches from "./peaches.jpeg";
import ribs from "./ribs.jpeg";

export default function Menu() {
    const sectionHeader = document.createElement('h2');
    const menuSection = document.createElement('div');
    menuSection.classList.add('section');

    const menu = [];

    for (const key in Data) {
        menu.push(new MenuItem(Data[key].name, Data[key].description, Data[key].meal, Data[key].img));
    };

    menuSection.innerHTML = `
        <div class="meal-type" id="appetisers"><h2>Small Plates</h2></div>
        <div class="meal-type" id="mains"><h2>The Main Event</h2></div>
        <div class="meal-type" id="desserts"><h2>Sweets</h2></div>
    `;
    sectionHeader.textContent = 'Menu';
    sectionHeader.classList.add('section-header');
    rootDiv.appendChild(sectionHeader);
    rootDiv.appendChild(menuSection);

    menu.forEach(meal => {
        meal.findImage();
        const tile = document.createElement('div');
        tile.classList.add('menu-tile');
        tile.appendChild(meal.img);
        tile.innerHTML = meal.buildTile();

        switch(meal.meal) {
            case 'appetiser':
                document.querySelector('#appetisers').appendChild(tile);
                break;
            case 'main':
                document.querySelector('#mains').appendChild(tile);
                break;
            case 'dessert':
                document.querySelector('#desserts').appendChild(tile);
        };
        tile.appendChild(meal.img);
    });
}

class MenuItem {
    constructor(name, desc, meal, img) {
        this.name = name,
        this.desc = desc,
        this.meal = meal,
        this.img = img
    };

    buildTile() {
        return `
        <div class="menu-elements">
            <h2>${this.name}</h2>
            <p>${this.desc}</p>
        </div>`
    };

    findImage() {
        switch(this.img) {
            case 'bananabread':
                this.img = new Image();
                this.img.src = bananabread;
                break;
            case 'biscuits':
                this.img = new Image();
                this.img.src = biscuits;
                break;
            case 'crabs':
                this.img = new Image();
                this.img.src = crabs;
                break;
            case 'corn':
                this.img = new Image();
                this.img.src = corn;
                break;
            case 'veg':
                this.img = new Image();
                this.img.src = veg;
                break;
            case 'lamb':
                this.img = new Image();
                this.img.src = lamb;
                break;
            case 'peaches':
                this.img = new Image();
                this.img.src = peaches;
                break;
            case 'ribs':
                this.img = new Image();
                this.img.src = ribs;
                break;
        }
    }
}