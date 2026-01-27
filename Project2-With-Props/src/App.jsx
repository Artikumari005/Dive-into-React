import { useState } from 'react'
import './App.css'
import TravelCard from './TravelCard'
import img1 from './images/mount-fauji.jpg'
import img2 from './images/norway.jpg'
import img3 from './images/japan.jpg'
import Navbar from './Navbar'

function App() {
  
  return(
    <>
    <Navbar
    navbar="Travel Journey"/>
    <TravelCard
    img={img1}
    country="JAPAN"
    location="https://www.google.com/maps/place/Mount+Fuji/@35.3393434,138.6683902,12.87z/data=!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D" target="_blank"rel="noopener noreferrer"
    place="Mount Fauji"
    date="12 Jan, 2023- 24 Jan , 2023"
    about="Mount Fuji is the tallest mountain in Japan , standing at 3,776 meters. Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    />
    
    {/*second card*/}
    <TravelCard
    img={img2}
    country="AUSTRALIA"
    location="https://www.google.com/maps/place/Mount+Fuji/@35.3393434,138.6683902,12.87z/data=!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D" target="_blank"rel="noopener noreferrer"
    place="Sydney Opera House"
    date="27 June, 2021- 8 Jun , 2021"
    about="The Sydney Opera house is  a multi-venue performing arts centre in Sydney. Located on the banks of 
    Sydney Harvour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
    />
    
    {/*third card*/}
    <TravelCard
    img={img3}
    country="NORWAY"
    location="https://www.google.com/maps/place/Mount+Fuji/@35.3393434,138.6683902,12.87z/data=!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D" target="_blank"rel="noopener noreferrer"
    place="Geirangerfjord"
    date="1 Oct, 2021- 18 Nov , 2021"
    about="The Geirangerfjord is a fjord in the Sunnmore region of More og Romsdal country, Norway. It is located entirely in the Stranda Municipality."
    />
    
    
    
    </>
  )
}

export default App
