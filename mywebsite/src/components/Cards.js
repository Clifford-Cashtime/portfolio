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
              src='images/img-15.webp'
              text='My Educational Timeline'
              label='Education'
              path='/Education'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
               src='images/img-11.webp'
              text='My Skills'
               label='Skills'
              path='/Skills'
            />
            <CardItem
                src='images/img-14.webp'
              text='My Archievements'
              label='Achievements'
              path='/Achievement'
            />
            <CardItem
               src='images/img-13.webp'
              text='Take a look to my Projects'
              label='Projects'
              path='/Projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;