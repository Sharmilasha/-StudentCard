import { useState } from 'react';
import './App.css' 
import Photo from "./images.png";

const StudentCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <img src={Photo} alt="Student Photo" className="photo-img" />
      <h2 className="title">Name: SHARMILA A</h2>
      <p className="details">Registration No: 212221230094</p>
      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div className="additional-info">
          <p>Artificial Intelligence and Machine Learning</p>
        </div>
      )}
    </div>
  );
};

export default StudentCard;