import React from "react";

const Card = ({ image, date, description } :{
  image: string;
  date: string;
  description: string;
}) => {
  return (
    <div style={cardStyle as React.CSSProperties}>
      <img src={image} alt="News" style={imageStyle} />
      <p style={dateStyle}>{date}</p>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};


const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  width: "200px",
  padding: "15px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "10px",
  objectFit: "cover",
};

const dateStyle = {
  fontWeight: "bold",
  margin: "10px 0",
  fontSize: "14px",
};

const descriptionStyle = {
  fontSize: "12px",
  color: "#555",
};

export default Card;
