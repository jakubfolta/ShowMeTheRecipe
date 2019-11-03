import {elements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView'
import Search from './models/Search';
import Recipe from './models/Recipe';

/** Global state of the app
* - Search object
* - Current recipe object
* - Shopping list object
* - Liked recipes
*/
const state = {};


/**
* SEARCH CONTROLLER
*/
const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput();

    if (query) {
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        clearLoader();
        searchView.renderResults(state.search.recipes);
        // console.log(state.search.recipes);
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');

    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.recipes, goToPage);
    }
});

/**
* RECIPE CONTROLLER
*/

const r = new Recipe(`http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_a7d58871fda455844753aace394440ae`);
r.getRecipe();

console.log(r);




















