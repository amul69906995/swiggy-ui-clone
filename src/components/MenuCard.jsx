import React, { useState } from 'react';
import '../css/MenuCard.css';
import Accordiancontent from './Accordiancontent';
import { useContext } from 'react';
import { userContext } from '../context/usercontext';

const MenuCard = (props) => {
  const { menuTitle, showIndex, menuContent, handleShowIndex } = props;

  const handleClick = () => {

    handleShowIndex();
  }

const contextData=useContext(userContext)
// console.log(contextData)
  return (
    <div className="accordian">
      <div
        className="accordianTitle"
        style={{ fontFamily: 'cursive', fontSize: '40px' ,cursor:'pointer'}}
        onClick={handleClick}
      >
        {menuTitle}
      </div>
      {showIndex && (
        <div>
          {menuContent.map((item, index) => (
            <Accordiancontent key={index} accordiancontent={item.card.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCard;


