import apiRequest from '../../api/apiRequest.js';
import createDomElements from '../components/domElements.js';
import dom from '../dom.js';

const displayBook = async (bookId) => {
    try {
        const booksData = await apiRequest(bookId);

        if (!booksData || booksData.length === 0) {
            throw new Error('No book data received');
        }

        const container = dom.container;
        if (!container) {
            console.error('Container not found');
            return;
        }

        createDomElements(booksData);
    } catch (error) {
        console.error('Error displaying books:', error.message);
        const container = dom.container;
        if (container) {
            container.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    }
};

export default displayBook;
