import Search from './models/Search';

/** Global state of the app
* - Search object
* - Current recipe object
* - Shopping list object
* - Liked recipes
*/

const search = new Search('pizza');
search.getResults();
