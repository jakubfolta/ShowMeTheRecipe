import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const baseURL = 'http://cors-anywhere.herokuapp.com/https://api.edamam.com';
        const apiKey = 'e87069e249c008138c270ffbdfc73fb8';
        const apiAppID = '606b6753';

        try{
            const results = await axios(`${baseURL}/search?q=${this.query}&from=0&to=50&app_id=${apiAppID}&app_key=${apiKey}`);
            this.recipes = results.data.hits;
           console.log(this.recipes);
        }catch(error){
            alert(error);
        }
    }
};