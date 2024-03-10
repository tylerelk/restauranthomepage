import rootDiv from "./index";

export default function Contact() {
    const sectionHeader = document.createElement('h2');
    const contactSection = document.createElement('div');
    const tagline = document.createElement('h3');
    const contactForm = document.createElement('form');

    contactSection.classList.add('section');
    sectionHeader.classList.add('section-header');
    contactForm.classList.add('contact-form');
    sectionHeader.textContent = 'Reservations';
    tagline.textContent = 'Reserve a table!';
    contactForm.innerHTML = `
        <label for="name">Your Name:</label>
        <input type="text" id="name" />
        <label for="email">Your Email:</label>
        <input type="text" id="email" />
        <label for="tel">Your Number:</label>
        <input type="text" id="tel" />
        <label for="guests">Number of Guests:</label>
        <input type="number" id="guests" />
        <input type="submit" />
    `
    contactSection.appendChild(contactForm);

    rootDiv.appendChild(sectionHeader);
    rootDiv.appendChild(contactSection);
}