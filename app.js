async function loadLinks() {
    try {
        const response = await fetch('links.json');
        const data = await response.json();
        const linksContainer = document.getElementById('links-container');

        data.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'link-item';
            linkElement.textContent = link.name;
            linkElement.target = '_blank';
            linksContainer.appendChild(linkElement);
        });
    } catch (error) {
        console.error('Erro ao carregar os links:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadLinks);
