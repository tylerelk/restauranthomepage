export default function Footer() {
    const footer = document.createElement('footer');
    const copyright = document.createElement('h5');

    function thisYear() {return new Date().getFullYear()};

    copyright.textContent = `Copyright ${thisYear()} Ty Lewis`;

    document.body.appendChild(footer);
    footer.appendChild(copyright);
}