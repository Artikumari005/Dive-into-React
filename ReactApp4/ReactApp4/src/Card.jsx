export default function Card(){
    return (
         <div className='card-container'>
              <div className='img-container'>
                <img src='./src/assets/mount-fauji.jpg' className='card-image'></img>
              </div>
              <div className='content'>
               <div className='location'>

                  <h3>JAPAN </h3>
                   <a
                  href="https://www.google.com/maps/place/Mount+Fuji/@35.3393434,138.6683902,12.87z/data=!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                   rel="noopener noreferrer"
                      className="map-link" >  View on Google Maps</a>
                 
                </div>
                <h1 className='place-name'><span>Mount Fuji</span></h1>
                <h4 className='dates'>12 Jan, 2023- 24 Jan , 2023</h4>
                <p className='about'>Mount Fuji is the tallest mountain in Japan , standing at 3,776 meters.
                  Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
                
              </div>

            </div>
    )
}