class RecipeManager{
    constructor(){
        this.recipes = []
    }
    addRecipe(recipe){
        this.recipes.push(recipe)
    }
    getAllRecipes(){
        return this.recipes
    }
    getRecipesById(id){
        return this.recipes.find(recipe =>recipe.id === id)
    }
    updateRecipe(id,updateData){
        const recipe = this.getRecipesById(id)
        if(recipe){
        recipe.title = updateData.title;
        recipe.ingredients = updateData.ingredients;
        recipe.instructions = updateData.instructions;
            }
    }
}