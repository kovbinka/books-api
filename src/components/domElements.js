import dom from '../dom.js';

const createDomElements = (booksData) => {
    if (!booksData || booksData.length === 0) {
        dom.container.innerHTML = `<p>No books available</p>`;
        return;
    }

    dom.container.innerHTML = booksData
        .map((bookData) => {
            const coverUrl = bookData.cover_i
                ? `https://covers.openlibrary.org/b/id/${bookData.cover_i}-M.jpg`
                : 'https://trendlist.org/img/images/big/2118a31bb89fc009800c17e50a79f001.jpg';

            return `
                <div class="book">
                    <h2>🔘${bookData.title || 'Unknown Title'}</h2>
                    <p><strong>✍🏻Author:</strong> ${bookData.author_name?.join(', ') || 'Unknown'}</p>
                    <p><strong>📅Year:</strong> ${bookData.first_publish_year || 'Unknown'}</p>
                    <img src="${coverUrl}" alt="${bookData.title || 'Book Cover'}" style="max-width: 200px;" />
                </div>
            `;
        })
        .join('');
};

export default createDomElements;
