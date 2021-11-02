import React, { useState } from "react"; 
import people from "./data";                 //importing data
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";  //importing react-icons

function Reviews() {
  const [index, setIndex] = useState(0);              //usestate hooks for counting
  const { job, text, image, name } = people[index];  //destructuring the items with respect to the index of array


  // To return the first element after the last element, vice versa.

  const checkNumber=(number)=>{  
    if(number>people.length-1){  // to return the first element
      return 0
    }

    if(number<0){                // to return the last element
      return people.length-1
    }

    return number                //by default return the number
  }

  // prevbutton

  const prevPerson = () => {
    setIndex((index) => {
      const newindex = index - 1;
      return checkNumber(newindex);
    });
  };

  // nextbutton
  const nextPerson = () => {
    setIndex((index) => {
      const newindex = index + 1;
      return checkNumber(newindex);
    });
  };

  // random button 
  const randomPerson = () => {
    let randomnumber=Math.floor(Math.random() *people.length-1) //To generate a random number

    // rendered item is same as randomnumber then next item is rendered
    if(randomnumber===index){
       randomnumber =index+1
    }
      setIndex(checkNumber(randomnumber))  
  };
  return (
    <article className={"review"}>
      <div className={"img-container"}>
        <img className={"person-img"} src={image} alt={name} />
        <span className={"quote-icon"}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={'auther'}>{name}</h4>
      <p className={'job'}>{job}</p>
      <p className={'info'}>{text}</p>
      <div className={'button-container'}>
        <button className={'prev-btn'} onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className={'next-btn'} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className={'random-btn'} onClick={randomPerson}>suprise me</button>
    </article>
  );
}

export default Reviews;
