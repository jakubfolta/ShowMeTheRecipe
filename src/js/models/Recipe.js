import axios from 'axios';
import {baseURL, apiAppID, apiKey} from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`${baseURL}/search?r=${this.id}&app_id=${apiAppID}&app_key=${apiKey}`);
            console.log(res);
            this.title = res.data[0].label;
            this.author = res.data[0].source;
            this.img = res.data[0].image;
            this.url = res.data[0].url;
            this.ingredients = res.data[0].ingredients;
        } catch (error) {
            console.log(error);
        }
    }

    calcTime() {
        // Assuming that we need 15 min for each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }
}