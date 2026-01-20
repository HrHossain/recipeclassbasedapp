import { RecipeErr } from "./js/error.js";

const API_URL = "https://dummyjson.com/recipes"
let limit = 6
let skip = 12

async function fetchRecipes(limit,skip){
    try{
         const res = await fetch(`${API_URL}?limit=${limit}&skip=${skip}`);
         if(!res.ok){
            RecipeErr.customError("recipe fetching failed!")
         }
            const data = await res.json();
            console.log(data)
    }catch(err){
        console.log(err)
    }
}

 fetchRecipes(limit , skip)
