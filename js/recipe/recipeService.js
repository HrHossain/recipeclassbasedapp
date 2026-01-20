import { RecipeErr } from "../error.js";

export class RecipeService{
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }
    async getRecipes(limit = 6 , skip = 0){
        try{
            const res = await fetch(`${this.baseUrl}?limit=${limit}&skip=${skip}`);
            if(!res.ok){
            RecipeErr.customError("recipe fetching failed!")
            }
            const data = await res.json();
            return data.recipes
            }catch(err){
                return err
            }
    }

}