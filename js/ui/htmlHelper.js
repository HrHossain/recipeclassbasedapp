export class HtmlHelper{
    static render(recipes){
        console.log(recipes)
        const recipediv = document.getElementById("recipe")
        if (!recipes || recipes.length === 0) {
            return
            }
            recipediv.innerHTML = ""
            recipediv.innerHTML =
            recipes.map((recipe) => `<div class="col-span-12 sm:col-span-6 md:col-span-4 w-full min-h-[300px] ">
             <div class="group  w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
        
        <div class="relative">
            <img src="${recipe.image}" 
                 alt="${recipe.title}" 
                 loading="lazy"
                 class="w-full h-64 object-cover"/>
            
            
            <div class="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-500  top-4 left-4 bg-white rounded-full px-3 py-1 shadow-md flex items-center gap-1">
                <span class="text-yellow-500">⭐</span>
                <span class="font-semibold text-gray-800">${recipe.rating}</span>
            </div>
            
            
            <div class="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-500 top-4 right-4 flex flex-col gap-2">
                <button class="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition">
                    <i class="fas fa-heart text-red-500"></i>
                </button>
                <button class="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition">
                    <i class="far fa-bookmark text-gray-600"></i>
                </button>
            </div>
        </div>
        
        
        <div class="p-6">
            
            <span class="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                ${recipe.mealType[0]}
            </span>
            
            
            <h2 class="text-xl font-bold text-gray-900 mb-4">
                ${recipe.name}
            </h2>
            
           
            <div class="flex items-center gap-4 text-sm text-gray-600">
                <div class="flex items-center gap-1">
                    <i class="far fa-clock"></i>
                    <span>${recipe.cookTimeMinutes} min</span>
                </div>
                <div class="flex items-center gap-1">
                    <span class="text-lg">🇮🇹</span>
                    <span>${recipe.cuisine}</span>
                </div>
                <div class="flex items-center gap-1">
                    <i class="fas fa-utensils"></i>
                    <span>Serves ${recipe.servings}</span>
                </div>
            </div>
        </div>
             </div>
            </div>`).join("")
    }

    static recipeSkeleton(count){
        const recipediv = document.getElementById("recipe")
        recipediv.innerHTML = ""
        recipediv.innerHTML = Array.from({length:count},()=>HtmlHelper.recipeSkeletonCard()).join("")
    }

    static recipeSkeletonCard() {
  return `
    <div class="col-span-12 sm:col-span-6 md:col-span-4 w-full min-h-[300px]">
                <div class="group w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
                    
                    <!-- Image Skeleton -->
                    <div class="relative">
                        <div class="w-full h-64 skeleton"></div>
                        
                        <!-- Rating Badge Skeleton -->
                        <div class="absolute top-4 left-4 bg-gray-200 rounded-full px-3 py-1 shadow-md flex items-center gap-1 w-16 h-8 skeleton"></div>
                        
                        <!-- Action Buttons Skeleton -->
                        <div class="absolute top-4 right-4 flex flex-col gap-2">
                            <div class="bg-gray-200 w-10 h-10 rounded-full shadow-md skeleton"></div>
                            <div class="bg-gray-200 w-10 h-10 rounded-full shadow-md skeleton"></div>
                        </div>
                    </div>
                    
                    <!-- Content Skeleton -->
                    <div class="p-6">
                        <!-- Category Tag Skeleton -->
                        <div class="inline-block bg-gray-200 h-6 w-20 rounded-full mb-3 skeleton"></div>
                        
                        <!-- Title Skeleton -->
                        <div class="mb-4 space-y-2">
                            <div class="h-6 bg-gray-200 rounded w-3/4 skeleton"></div>
                            <div class="h-6 bg-gray-200 rounded w-1/2 skeleton"></div>
                        </div>
                        
                        <!-- Meta Info Skeleton -->
                        <div class="flex items-center gap-4">
                            <div class="flex items-center gap-1">
                                <div class="w-16 h-4 bg-gray-200 rounded skeleton"></div>
                            </div>
                            <div class="flex items-center gap-1">
                                <div class="w-20 h-4 bg-gray-200 rounded skeleton"></div>
                            </div>
                            <div class="flex items-center gap-1">
                                <div class="w-16 h-4 bg-gray-200 rounded skeleton"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

  `
}

}