export class RecipeManager{
    constructor(service){
        this.service = service
        this.recipes = []
    }

    async load(limit,skip){
        try{
            const data = await this.service.getRecipes(limit,skip)
            if(data.length > 0){
                this.recipes = data
                return
            }
        }catch(err){
            // ui
            console.log(err)
        }
    }
    addLocalRecipe(recipe){
        this.recipes.push(recipe)
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
    deleteLocalRecipe(id){
        this.recipes = this.recipes.filter(recipe => recipe.id !== id)
    }
}