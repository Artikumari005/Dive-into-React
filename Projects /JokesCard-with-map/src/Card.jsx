import './index.css'
export default function Card(props){
    return (
        <>
        
        <main className='card-container'>
            <img src={props.card.img.src} alt={props.card.img.alt} className='image' />

            <div className='info'>
               <div className='title'>
                 <h3 className='location'>{props.card.location}</h3>
                <a href={props.card.link} className='google-link'> view in google map</a>
                
               </div>
            <div className='text'>
                <h1 className='place'>{props.card.place}</h1>
                <h4 className='date'>{props.card.date}</h4>
                <p className='para'>{props.card.para}</p>
            </div>
            </div>
           
        </main>
        
        </>
    )
}