import discordPng from '../asset/icon-discord.png';

export default function footerFactory() {
    const footerElement = document.createElement('footer');

    const footerText = document.createElement('p');
    footerText.textContent = "Created by Nefrodzv";

    const footerAnchor = document.createElement('a');
    footerAnchor.href = 'https://github.com/NefrodzV/to-do-list';

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');

    const icon = new Image();
    icon.src = discordPng;

    iconContainer.appendChild(icon)
    footerAnchor.appendChild(iconContainer);
    

    footerElement.append(footerText, footerAnchor);

    return {
        footerElement
    }
}