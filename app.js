import { RecipeManager } from "./js/recipe/recipeManager.js";
import { RecipeService } from "./js/recipe/recipeService.js";
import { HtmlHelper } from "./js/ui/htmlHelper.js";

const service = new RecipeService("https://dummyjson.com/recipes")
const manager = new RecipeManager(service)
async function dataLoad(){
    HtmlHelper.recipeSkeleton(7)
    await manager.load(9,0)
    HtmlHelper.render(manager.recipes)
}
dataLoad()

 
