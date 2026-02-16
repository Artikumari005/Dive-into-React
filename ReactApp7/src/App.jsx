import React from "react"

export default function App(props) {
    const [starWarsData, setStarWarsState] = React.useState(null)
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsState(data))
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}