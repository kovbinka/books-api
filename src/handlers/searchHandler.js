import dom from '../dom.js';
import displayBook from './bookHandler.js';

export const searchValue = () => {
    const value = dom.input.value.trim();
    if (value) {
        displayBook(value);
    } else {
        const container = dom.container;
        if (container) {
            container.innerHTML = `<p>Type the title of the book please!</p>`;
        }
    }
};
