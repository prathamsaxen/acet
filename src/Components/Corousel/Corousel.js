import React from 'react'
import './Corousel.css';
import Carousel from 'react-bootstrap/Carousel'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import CourselItems from '../../configurations/Corousel/Corousel';

export default function Corousel() {
  return (
    <div className='Corousel'>
      <Carousel data-bs-theme="dark"> 
      {
        CourselItems.map((item, index) => {
          return (
            <Carousel.Item interval={3000} key={index}>
              <img className="d-block w-100" 
                   src={item.image} 
                   alt={`Error in Loading ${index + 1}`} />
            </Carousel.Item>
          );
        })
      }
      </Carousel> 
    </div>
  )
}
