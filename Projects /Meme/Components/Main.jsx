import { useState, useEffect } from "react"
import html2canvas from "html2canvas"


export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
     function getRandomImage(){
    if (allMemes.length === 0) return 
    
    const randomNUmber = Math.floor(Math.random() * allMemes.length)
    const newMemeUrl = allMemes[randomNUmber].url 
    setMeme(preMeme=> ({
        ...preMeme,
        imageUrl: newMemeUrl
    }))
}

    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

   //download meme as image
   function downloadMeme()
{
    const memeDiv = document.getElementById("meme")

    html2canvas(memeDiv, { useCORS:true , scale:2}).then(canvas=>{
        const link= document.createElement("a")
        link.download = "my-meme.png"
        link.href = canvas.toDataURL("image/png")
link.click()
    })
}
    return (
        <main>
            <div className="container">
                <div className="form">
                    <label>Top Text
                        <input
                            type="text"
                            placeholder="One does not simply"
                            name="topText"
                            onChange={handleChange}
                            value={meme.topText}
                        />
                    </label>

                    <label>Bottom Text
                        <input
                            type="text"
                            placeholder="Walk into Mordor"
                            name="bottomText"
                            onChange={handleChange}
                            value={meme.bottomText}
                        />
                    </label>
                    <button onClick={getRandomImage}>Get a new meme image 🖼</button>
                </div>
                <div className="meme" id="meme">
                    <img src={meme.imageUrl}  crossOrigin="anonymous"/>
                    <span className="top">{meme.topText}</span>
                    <span className="bottom">{meme.bottomText}</span>
                </div>
                 <button className="download-btn" onClick={downloadMeme}>Download Meme ⬇</button>
                
                
            </div>
        </main>
    )
}