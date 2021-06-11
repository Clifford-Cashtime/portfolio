import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Skills and attributes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= 'images/img-12.webp'
              text='Take a short tour to my work experience'
              label='Experience'
              path='/Experience'
            />
            <CardItem
              src='images/img-13.webp'
              text='Explore more about my work'
              label='Projects'
              path='/Project'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-14.webp'
              text='My achievements'
              label='Achievements'
              path='/Achievement'
            />
            <CardItem
              src='images/img-11.webp'
              text='The skills i possesses'
              label='Skills'
              path='/Skills'
            />
            <CardItem
              src='images/img-15.webp'
              text='Take a look to my Awards'
              label='Awards'
              path='/Award'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;