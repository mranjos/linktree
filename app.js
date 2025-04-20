async function loadLinks() {
    try {
        const response = await fetch('links.json');
        const data = await response.json();
        const linksContainer = document.getElementById('links-container');

        data.links.forEach(link => {
            const linkWrapper = document.createElement('div');
            linkWrapper.className = 'link-wrapper';

            const thumbnail = document.createElement('img');
            thumbnail.src = link.image;
            thumbnail.className = 'link-thumbnail';
            thumbnail.alt = link.name;

            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'link-item';
            linkElement.textContent = link.name;
            linkElement.target = '_blank';

            linkWrapper.appendChild(thumbnail);
            linkWrapper.appendChild(linkElement);
            linksContainer.appendChild(linkWrapper);
        });
    } catch (error) {
        console.error('Erro ao carregar os links:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadLinks);
