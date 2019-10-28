import Search from './models/Search';

/** Global state of the app
* - Search object
* - Current recipe object
* - Shopping list object
* - Liked recipes
*/
const state = {};

const controlSearch = () => {
    // 1. Get query from view
    const query = 'pizza'; // TODO

    if (query) {
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results

        // 4. Search for recipes
        state.search.getResults();
    }
}


document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault;
    controlSearch();
});
