import axios from 'axios';
import {baseURL, apiAppID, apiKey} from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`${baseURL}/get?r=${this.id}&app_id=${apiAppID}&app_key=${apiKey}`)
        } catch (error) {
            console.log(error);
        }
    }
}