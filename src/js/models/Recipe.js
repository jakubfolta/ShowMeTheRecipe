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
        } catch (error) {
            console.log(error);
        }
    }
}