
import React from 'react'
import './index.css'
export default function Main(){

   
    
    const [ingredient ,setIngredient]= React.useState([])
    const ingredientListItems = ingredient.map(ingredient=>(
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData){
        
       const newIngredient = formData.get("ingredient")
       setIngredient(preIngredients => [ ...preIngredients , newIngredient])
      
    }
    return(
        <main>
            <form action={addIngredient} className='add-ingredient-form'>
                <input
                type="text"
                placeholder="e.g oregano"
                arial-label="add ingredient" 
                name='ingredient'></input>
                <button className='button' >Add ingredient</button>
            </form>
            <ul>
                {ingredientListItems}
            </ul>
        </main>
    )
}
