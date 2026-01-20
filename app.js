import { RecipeManager } from "./js/recipe/recipeManager.js";
import { RecipeService } from "./js/recipe/recipeService.js";
import { HtmlHelper } from "./js/ui/htmlHelper.js";



document.addEventListener("DOMContentLoaded", () => {
    // landing page development
const service = new RecipeService("https://dummyjson.com/recipes")
const manager = new RecipeManager(service)
  const path = window.location.pathname
  if (path.endsWith("index.html") || path === "/") {
    let limit = 9
    let skip = 0
    let totalRecipe 
    const previous = document.getElementById("previous")
    const next = document.getElementById("next")
    async function dataLoad(limit,skip){
    HtmlHelper.recipeSkeleton(7)
    const value = await manager.load(limit , skip)
    console.log(value)
    HtmlHelper.render(manager.recipes)

}

dataLoad(9,0)
console.log(totalRecipe)

}
  
// single page development

  if (path.endsWith("singlerecipe.html")) {
     const params = new URLSearchParams(window.location.search)
    const id = Number(params.get("id"))
    if(!id){
        alert("recipe is not valid")
    }
   async function fetchSingle(){
    const uiHolder = document.getElementById("singlerecipe")

        uiHolder.innerHTML = HtmlHelper.singleRecipeSkeletop()
        const recipe = await service.getSingleRecipe(id)
        uiHolder.innerHTML = HtmlHelper.singleRecipeRender(recipe)
   }
    fetchSingle()
  }
})