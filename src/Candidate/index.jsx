import React from "react";
import "./style.css";

const Candidate = (props) => {
  const handleClick = () => {
    props.voted(props.name);
  };

  return (
    <div className="candidate">
      <h3 className="candidate__name">{props.name}</h3>
      <img className="candidate__avatar" src={props.avatar} />
      <button onClick={handleClick} className="btn-vote">
        Select
      </button>
    </div>
  );
};

export default Candidate;
