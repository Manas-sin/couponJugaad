import React, { useState } from "react";

const DealCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: isHovered ? "0px 8px 16px rgba(0, 0, 0, 0.2)" : "0px 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
    margin: "10px",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const badgeStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "#ff5722",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
    fontWeight: "bold",
  };

  const progressContainer = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    backgroundColor: "#ddd",
    height: "8px",
  };

  const progressBar = {
    width: "90%",
    backgroundColor: "#ff5722",
    height: "100%",
  };

  const contentStyle = {
    padding: "15px",
    textAlign: "center",
  };

  const titleStyle = {
    textDecoration: "none",
    color: "#333",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#666",
    marginBottom: "15px",
  };

  const bottomStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const clockText = {
    fontSize: "12px",
    color: "#999",
    margin: "0",
  };

  const buttonStyle = {
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s ease",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: "relative" }}>
        <img src="images/deal8.jpg" alt="" style={imgStyle} />
        <div style={badgeStyle}>90%</div>
        <div style={progressContainer}>
          <div style={progressBar} />
        </div>
      </div>

      <div style={contentStyle}>
        <h6>
          <a href="coupon-sale.html" style={titleStyle}>
            Special Flash Sale
          </a>
        </h6>
        <p style={textStyle}>
          Get 87% discount on every single category, so hurry up...
        </p>

        <div style={bottomStyle}>
          <p style={clockText}>
            <i className="fa fa-clock-o" /> 0 days, 0h Remaining
          </p>
          <button style={buttonStyle} type="button">
            Get It
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
