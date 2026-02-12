
import './App.css'
import Card from './Card'
import CardData from './CardData'
import Navbar from './nav'

function App() {
  const cardElement = CardData.map((card)=>{
    {/*return  (
          <Card
      key={card.id}
      img={card.img.src}
      location={card.location}
      link={card.link}
      place={card.place}
      date={card.date}
      para={card.para}
    />

    )*/}
    return(
      <Card
      key = {card.id}
      card={card}
      />
    )
  })
 return(
<>
<Navbar/>
<main>
  {cardElement}
</main>
</>
 )
}

export default App
