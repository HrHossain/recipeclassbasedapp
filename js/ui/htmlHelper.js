export class HtmlHelper{
    static render(recipes){
        console.log(recipes)
        const recipediv = document.getElementById("recipe")
        if (!recipes || recipes.length === 0) {
            return
            }
            recipediv.innerHTML = ""
            recipediv.innerHTML =
            recipes.map((recipe) => `<a
            href="singlerecipe.html?id=${recipe.id}" 
            class="col-span-12 sm:col-span-6 md:col-span-4 w-full min-h-[300px] ">
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
                ${recipe.name.slice(0,19)}
            </h2>
            
           
            <div class="flex items-center gap-4 text-sm text-gray-600">
                <div class="flex flex-col items-center gap-1">
                    <i class="far fa-clock"></i>
                    <span>${recipe.cookTimeMinutes} min</span>
                </div>
                <div class="flex flex-col items-center gap-1">
                    <i class="fa-solid fa-globe"></i>
                    <span>${recipe.cuisine}</span>
                </div>
                <div class="flex flex-col items-center gap-1">
                    <i class="fas fa-utensils"></i>
                    <span>Serves ${recipe.servings}</span>
                </div>
            </div>
        </div>
             </div>
            </a>`).join("")
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
    static singleRecipeRender(singleRecipe){
        return `<div class="max-w-4xl mx-auto p-6">
        
        <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            <img src="${singleRecipe.image}" alt="Classic Margherita Pizza" class="w-full h-96 object-cover">
            
            <div class="p-8">
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">Italian</span>
                    <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Easy</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Dinner</span>
                </div>
                
                <h1 class="text-4xl font-bold text-gray-900 mb-4">${singleRecipe.name}</h1>
                
                <div class="flex items-center gap-2 mb-6">
                    <div class="flex items-center">
                        <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                        <span class="ml-1 text-gray-700 font-semibold">4.6</span>
                    </div>
                    <span class="text-gray-500">•</span>
                    <span class="text-gray-600">3 reviews</span>
                    <span class="text-gray-500">•</span>
                    <span class="text-gray-600">300 calories per serving</span>
                </div>

                
                <div class="grid grid-cols-3 gap-4 mb-8">
                    <div class="bg-gray-50 rounded-lg p-4 text-center">
                        <svg class="w-6 h-6 mx-auto mb-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <div class="text-sm text-gray-500">Prep Time</div>
                        <div class="text-lg font-semibold text-gray-900">20 min</div>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-4 text-center">
                        <svg class="w-6 h-6 mx-auto mb-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                        </svg>
                        <div class="text-sm text-gray-500">Cook Time</div>
                        <div class="text-lg font-semibold text-gray-900">15 min</div>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-4 text-center">
                        <svg class="w-6 h-6 mx-auto mb-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                        <div class="text-sm text-gray-500">Servings</div>
                        <div class="text-lg font-semibold text-gray-900">4</div>
                    </div>
                </div>

                
                <div class="mb-8">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Ingredients</h2>
                    <ul class="space-y-2">
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-700">Pizza dough</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-700">Tomato sauce</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-700">Fresh mozzarella cheese</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-700">Fresh basil leaves</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-700">Olive oil</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-700">Salt and pepper to taste</span>
                        </li>
                    </ul>
                </div>

                
                <div>
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Instructions</h2>
                    <ol class="space-y-4">
                        <li class="flex items-start">
                            <span class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">1</span>
                            <p class="text-gray-700 pt-1">Preheat the oven to 475°F (245°C).</p>
                        </li>
                        <li class="flex items-start">
                            <span class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">2</span>
                            <p class="text-gray-700 pt-1">Roll out the pizza dough and spread tomato sauce evenly.</p>
                        </li>
                        <li class="flex items-start">
                            <span class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">3</span>
                            <p class="text-gray-700 pt-1">Top with slices of fresh mozzarella and fresh basil leaves.</p>
                        </li>
                        <li class="flex items-start">
                            <span class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">4</span>
                            <p class="text-gray-700 pt-1">Drizzle with olive oil and season with salt and pepper.</p>
                        </li>
                        <li class="flex items-start">
                            <span class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">5</span>
                            <p class="text-gray-700 pt-1">Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.</p>
                        </li>
                        <li class="flex items-start">
                            <span class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">6</span>
                            <p class="text-gray-700 pt-1">Slice and serve hot.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        
        <div class="text-center text-gray-500 text-sm pb-6">
            <p>Total Time: 35 minutes | Recipe by User #45</p>
        </div>
    </div>`


    }
    static singleRecipeSkeletop(){
        return ` <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            
           
            <div class="w-full h-96 skeleton"></div>
            
            <div class="p-8">
                
                <div class="flex items-center gap-2 mb-3">
                    <div class="h-6 w-16 bg-gray-200 rounded-full skeleton"></div>
                    <div class="h-6 w-14 bg-gray-200 rounded-full skeleton"></div>
                    <div class="h-6 w-16 bg-gray-200 rounded-full skeleton"></div>
                </div>
                
                
                <div class="mb-4 space-y-3">
                    <div class="h-10 bg-gray-200 rounded w-3/4 skeleton"></div>
                    <div class="h-10 bg-gray-200 rounded w-1/2 skeleton"></div>
                </div>
                
               
                <div class="flex items-center gap-2 mb-6">
                    <div class="h-5 w-12 bg-gray-200 rounded skeleton"></div>
                    <div class="h-4 w-1 bg-gray-200 rounded skeleton"></div>
                    <div class="h-5 w-20 bg-gray-200 rounded skeleton"></div>
                    <div class="h-4 w-1 bg-gray-200 rounded skeleton"></div>
                    <div class="h-5 w-40 bg-gray-200 rounded skeleton"></div>
                </div>

               
                <div class="grid grid-cols-3 gap-4 mb-8">
                    <div class="bg-gray-50 rounded-lg p-4">
                        <div class="w-6 h-6 mx-auto mb-2 bg-gray-200 rounded skeleton"></div>
                        <div class="h-4 bg-gray-200 rounded w-16 mx-auto mb-2 skeleton"></div>
                        <div class="h-6 bg-gray-200 rounded w-12 mx-auto skeleton"></div>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-4">
                        <div class="w-6 h-6 mx-auto mb-2 bg-gray-200 rounded skeleton"></div>
                        <div class="h-4 bg-gray-200 rounded w-16 mx-auto mb-2 skeleton"></div>
                        <div class="h-6 bg-gray-200 rounded w-12 mx-auto skeleton"></div>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-4">
                        <div class="w-6 h-6 mx-auto mb-2 bg-gray-200 rounded skeleton"></div>
                        <div class="h-4 bg-gray-200 rounded w-16 mx-auto mb-2 skeleton"></div>
                        <div class="h-6 bg-gray-200 rounded w-12 mx-auto skeleton"></div>
                    </div>
                </div>

                
                <div class="mb-8">
                    <div class="h-8 bg-gray-200 rounded w-32 mb-4 skeleton"></div>
                    <ul class="space-y-2">
                        <li class="flex items-start">
                            <div class="w-5 h-5 bg-gray-200 rounded-full mr-3 mt-0.5 flex-shrink-0 skeleton"></div>
                            <div class="h-5 bg-gray-200 rounded w-3/4 skeleton"></div>
                        </li>
                        <li class="flex items-start">
                            <div class="w-5 h-5 bg-gray-200 rounded-full mr-3 mt-0.5 flex-shrink-0 skeleton"></div>
                            <div class="h-5 bg-gray-200 rounded w-2/3 skeleton"></div>
                        </li>
                        <li class="flex items-start">
                            <div class="w-5 h-5 bg-gray-200 rounded-full mr-3 mt-0.5 flex-shrink-0 skeleton"></div>
                            <div class="h-5 bg-gray-200 rounded w-4/5 skeleton"></div>
                        </li>
                        <li class="flex items-start">
                            <div class="w-5 h-5 bg-gray-200 rounded-full mr-3 mt-0.5 flex-shrink-0 skeleton"></div>
                            <div class="h-5 bg-gray-200 rounded w-1/2 skeleton"></div>
                        </li>
                        <li class="flex items-start">
                            <div class="w-5 h-5 bg-gray-200 rounded-full mr-3 mt-0.5 flex-shrink-0 skeleton"></div>
                            <div class="h-5 bg-gray-200 rounded w-2/5 skeleton"></div>
                        </li>
                        <li class="flex items-start">
                            <div class="w-5 h-5 bg-gray-200 rounded-full mr-3 mt-0.5 flex-shrink-0 skeleton"></div>
                            <div class="h-5 bg-gray-200 rounded w-3/5 skeleton"></div>
                        </li>
                    </ul>
                </div>

                
                <div>
                    <div class="h-8 bg-gray-200 rounded w-32 mb-4 skeleton"></div>
                    <ol class="space-y-4">
                        <li class="flex items-start">
                            <div class="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full mr-4 skeleton"></div>
                            <div class="flex-1 pt-1 space-y-2">
                                <div class="h-4 bg-gray-200 rounded w-full skeleton"></div>
                                <div class="h-4 bg-gray-200 rounded w-3/4 skeleton"></div>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <div class="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full mr-4 skeleton"></div>
                            <div class="flex-1 pt-1 space-y-2">
                                <div class="h-4 bg-gray-200 rounded w-full skeleton"></div>
                                <div class="h-4 bg-gray-200 rounded w-4/5 skeleton"></div>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <div class="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full mr-4 skeleton"></div>
                            <div class="flex-1 pt-1 space-y-2">
                                <div class="h-4 bg-gray-200 rounded w-full skeleton"></div>
                                <div class="h-4 bg-gray-200 rounded w-2/3 skeleton"></div>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <div class="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full mr-4 skeleton"></div>
                            <div class="flex-1 pt-1 space-y-2">
                                <div class="h-4 bg-gray-200 rounded w-full skeleton"></div>
                                <div class="h-4 bg-gray-200 rounded w-3/5 skeleton"></div>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <div class="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full mr-4 skeleton"></div>
                            <div class="flex-1 pt-1 space-y-2">
                                <div class="h-4 bg-gray-200 rounded w-full skeleton"></div>
                                <div class="h-4 bg-gray-200 rounded w-5/6 skeleton"></div>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <div class="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full mr-4 skeleton"></div>
                            <div class="flex-1 pt-1">
                                <div class="h-4 bg-gray-200 rounded w-1/3 skeleton"></div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        
        <div class="text-center pb-6">
            <div class="h-4 bg-gray-200 rounded w-64 mx-auto skeleton"></div>
        </div>`
    }

}