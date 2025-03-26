document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const wikiList = document.getElementById('wiki-list');

    const wikis = [
        { title: 'Wikipedia', url: 'https://www.wikipedia.org' },
        { title: 'Wiktionary', url: 'https://www.wiktionary.org' },
        { title: 'Wikibooks', url: 'https://www.wikibooks.org' },
        { title: 'Wikiquote', url: 'https://www.wikiquote.org' },
        { title: 'Wikisource', url: 'https://www.wikisource.org' },
        { title: 'Wikiversity', url: 'https://www.wikiversity.org' },
        { title: 'Wikivoyage', url: 'https://www.wikivoyage.org' },
        { title: 'Wikinews', url: 'https://www.wikinews.org' },
        { title: 'Wikidata', url: 'https://www.wikidata.org' },
        { title: 'Wikimedia Commons', url: 'https://commons.wikimedia.org' }
    ];

    function displayWikis(filteredWikis) {
        wikiList.innerHTML = '';
        filteredWikis.forEach(wiki => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = wiki.url;
            a.target = '_blank';
            a.textContent = wiki.title;
            li.appendChild(a);
            wikiList.appendChild(li);
        });
    }

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const filteredWikis = wikis.filter(wiki =>
            wiki.title.toLowerCase().includes(query)
        );
        displayWikis(filteredWikis);
    });

    // Afficher tous les wikis au chargement de la page
    displayWikis(wikis);
});
