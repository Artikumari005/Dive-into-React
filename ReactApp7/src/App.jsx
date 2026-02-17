import React from "react"

export default function App(props) {
    const [starWarsData, setStarWarsState] = React.useState({})
     const [count, setCount] = React.useState(0)
    

    React.useEffect(function(){
        fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        //.then(data => setStarWarsState(data))
    } , [count])
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}