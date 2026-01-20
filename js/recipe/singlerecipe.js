import { RecipeManager } from "./recipeManager.js"

const params = new URLSearchParams(window.location.search)
const id = params.get("id")

if(!id){
    alert("recipe is not valid")
}

const manager = new RecipeManager()

console.log(manager.recipes)