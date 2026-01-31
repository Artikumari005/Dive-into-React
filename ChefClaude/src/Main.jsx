

import './index.css'
export default function Main(){

   
    
    const ingredient= ["chicken", "oregano", "tomatoes"]
    const ingredientListItems = ingredient.map(ingredient=>(
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
       const formData = new FormData(event.currentTarget)
       const newIngredient = formData.get("ingredient")
       ingredient.push(newIngredient)
       console.log(newIngredient)
    }
    return(
        <main>
            <form onSubmit={handleSubmit} className='add-ingredient-form'>
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
