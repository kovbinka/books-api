import { searchValue } from './handlers/searchHandler.js';
import dom from './dom.js';

dom.btn.addEventListener('click', () => {
    searchValue();
});
