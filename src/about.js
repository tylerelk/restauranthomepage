import rootDiv from "./index";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export default function About() {
    const sectionHeader = document.createElement('h2');
    const aboutSection = document.createElement('div');
    sectionHeader.classList.add('section-header');
    aboutSection.classList.add('section');

    sectionHeader.textContent = 'About Our Joint';
    aboutSection.innerHTML = `
        <h4 class="about-subheader">Family</h4>
        <p class="about-desc">${lorem.generateParagraphs(2)}</p>
        <h4 class="about-subheader">Tradition</h4>
        <p class="about-desc">${lorem.generateParagraphs(2)}</p>
        <h4 class="about-subheader">Pork</h4>
        <p class="about-desc">${lorem.generateParagraphs(2)}</p>
    `;

    rootDiv.appendChild(sectionHeader);
    rootDiv.appendChild(aboutSection);
}