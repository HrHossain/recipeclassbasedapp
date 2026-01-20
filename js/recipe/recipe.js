export class Recipe{
     constructor(id, title, ingredients,instructions) {
        this.id = id;
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.createdAt = new Date();
  }
    getFormattedData(){
        const options = {
            year:'numeric',
            month:'short',
            day:'numeric',
            hour:'2-digit',
            minute:'2-digit'
        }
        return this.createdAt.toLocaleString("en-US", options)
  }
}