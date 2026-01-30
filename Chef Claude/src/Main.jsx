

import './index.css'
export default function Main(){
    return(
        <main>
            <form className='add-ingredient-form'>
                <input
                type="text"
                placeholder="e.g oregano"
                arial-label="add ingredient"></input>
                <button className='button'>Add ingredient</button>
            </form>
        </main>
    )
}