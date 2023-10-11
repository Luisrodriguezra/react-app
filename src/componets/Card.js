import React from "react";
import PropTypes from "react";
import './card.css'
export default function Card({id, title,image,instructor}){
// eslint-disable-next-line import/no-anonymous-default-export
    return(
        <div className='card text-center bg-dark'>

            <div className='card-body text-bg-light'>
              <img src={image} alt="" className="card-img-top"></img>
             <h4 className='card-title'>{title}</h4>
             <p className='card-text text-secundary'>
                instructor: {instructor}
             </p>
             <a href="#!" className='btn btn-outline-secundary rounded-0'>
                Ir al sitio web
             </a>
            </div>
        </div>
          )
} 