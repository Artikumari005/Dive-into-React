import './index.css'
export default function TravelCard(props){
    return (
        <>

            {/*body of content*/}
             <div className="card">
           
            <div className="image-container">
                 <img src={props.img} alt={props.place}  className='img'/>
            </div>
            
           <main className='content-box'>
             <div className="info-container">
                 <h3>{props.country}</h3>
                <a href={props.location} target="_blank" rel="noopener noreferrer">
                   View on Google Map
                 </a>
              </div>
            
        
        <div className='inf'>
                 <h1>{props.place}</h1>
                <h4>{props.date}</h4>
            <p className="about">{props.about}</p>
            </div>
           </main>
        
        </div> 
        
        
        </>
    )
}