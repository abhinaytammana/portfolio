import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

 function Projectcards(props) {
// const {id,title,excerpt,imageUrl}=props; 
  const {id,title,excerpt,imageUrl}=props.project; 
  return (
    <div className="card shadow">
      <img 
        className="card-img-top" 
        src={imageUrl} 
        alt={imageUrl}
      />
          <div className="card-body">
            <h4 card-title="">{title}</h4>
            <p className="card-text">{excerpt}</p>
            <Link to={`/project/${id}`} className="stretched-link"></Link>
          </div>
    </div>
  )
}

export default Projectcards;