import data from '../src/data.js';

const apiRequest = async (book) => {
    try {
        const response = await fetch(
            `${data.originUrl}${encodeURIComponent(book)}`
        );
        if (response.status !== 200) {
            throw new Error(
                `Sorry, something wrong :( Status: ${response.status})`
            );
        }
        const result = await response.json();
        console.log(result);
        if (!result.docs || result.docs.length === 0) {
            throw new Error('No books found for this query');
        }
        return result.docs.slice(0, 15);
    } catch (err) {
        console.log(err.message);
        throw err;
    }
};

export default apiRequest;
