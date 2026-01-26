

import './index.css'

{/*export default function Card(props) {
  return (
    <article className="card">
      <img 
        className="img"
        src={props.img}
        alt={props.name}
      />

      <div className="info-group">
        <h3 className="name">{props.name}</h3>
        <p className="email">{props.email}</p>
        <p className="phone">{props.phone}</p>
      </div>
    </article>
  )
}
  */}

  {/*destruction of props */}

  export default function Card({img, name, email, phone}) {
  return (
    <article className="card">
      <img 
        className="img"
        src={img}
        alt={name}
      />

      <div className="info-group">
        <h3 className="name">{name}</h3>
        <p className="email">{email}</p>
        <p className="phone">{phone}</p>
      </div>
    </article>
  )
}
