
import React from 'react'
import './index.css'
export default function Main(){

   
    
    const [ingredient ,setIngredient]= React.useState([])
    const ingredientsListItems = ingredient.map(ingredient=>(
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData){ 
       const newIngredient = formData.get("ingredient")
       setIngredient(preIngredients => [ ...preIngredients , newIngredient])
      
    }
    return(
        <main >
            <form action={addIngredient} className='add-ingredient-form'>
                <input
                type="text"
                placeholder="e.g oregano"
                arial-label="add ingredient" 
                name='ingredient'></input>
                <button className='button' >Add ingredient</button>
            </form>
          {ingredient.length > 0 &&  <section className='list-ingredient' >
            <h1>Ingredients on Hands:</h1>
            <ul className='ingredients-list' arial-alive="polite">{ingredientsListItems}</ul>
             {ingredient.length > 3 && <div className='get-recipe-container'>
                <div>
                    <h3>Ready fo a recipe</h3>
                    <p>Generate a recipe your list of ingredients.</p>
                </div>
                <button>Get a recipe</button>
             </div>}

           </section>}
        </main>
    )
}
