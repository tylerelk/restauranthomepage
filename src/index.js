import _ from 'lodash';
import Menu from './menu';
import About from './about';
import Contact from './contact';
import Home from './home';
import './style.css'
import Footer from './footer';
import PigFace from './pig-face-svgrepo-com.svg'

const rootDiv = document.querySelector('#content');
export default rootDiv;

const sectionTitle = document.createElement('h3');
sectionTitle.classList.add('section-title');
sectionTitle.textContent = 'Welcome!'

Home();

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        rootDiv.innerHTML = '';
        switch(btn.id) {
            case 'btn-home':
                Home();
                sectionTitle.innerHTML = '<h3 class="section-title">Home</h3>'
                break;
            case 'btn-menu':
                Menu();
                sectionTitle.innerHTML = '<h3 class="section-title">The Food</h3>'
                break;
            case 'btn-about':
                About();
                sectionTitle.innerHTML = '<h3 class="section-title">Our Family</h3>'
                break;
            case 'btn-contact':
                Contact();
                sectionTitle.innerHTML = '<h3 class="section-title">Get a Table!</h3>'
                break;
        };
    });
});

Footer();

//header elements
const header = document.querySelector('header');
const titleContainer = document.createElement('div');
titleContainer.classList.add('title-container');
const pigIcon = new Image();
pigIcon.src = PigFace;
pigIcon.classList.add('img-icon');
const headerTitle = document.createElement('h1');
headerTitle.textContent = "Jerry's";

//appends
titleContainer.appendChild(pigIcon);
titleContainer.appendChild(headerTitle);
header.insertBefore(titleContainer, header.firstChild);
header.appendChild(sectionTitle);