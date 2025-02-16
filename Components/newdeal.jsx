import React from "react";
import DealCard from "@/Components/card";

const Newdeal = () => {
  const scrollContainerStyle = {
    display: "flex",
    overflowX: "auto", // Enables horizontal scrolling
    gap: "15px", // Space between the cards
    padding: "10px 0", // Padding to avoid touching the container edges
    whiteSpace: "nowrap", // Ensures the items don't wrap
    flexWrap: "nowrap", // Makes sure the cards stay in a row
  };

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    fontSize: "24px",
    padding: "10px",
    cursor: "pointer",
    zIndex: "1",
  };

  const cardContainerStyle = {
    minWidth: "250px", // Default card size
    flexShrink: "0", // Prevents the card from shrinking
  };

  return (
    <>
      <div className="new-deal-wrapper">
        <div className="container">
          <div className="row align-items-center section-heading-wrapper">
            <div className="col-sm-10 col-xs-12">
              <h3 className="section-heading">New Deal</h3>
            </div>
            <div className="col-sm-2 col-xs-12">
              <div className="view-all">
                <a href="category.html">View All</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" style={{ position: "relative" }}>
              {/* Left Arrow */}
              <button
                style={{ ...arrowStyle, left: "0" }}
                onClick={() => {
                  document.getElementById("new-deal-carousel").scrollBy({
                    left: -200,
                    behavior: "smooth",
                  });
                }}
              >
                &lt;
              </button>

              <div
                id="new-deal-carousel"
                style={scrollContainerStyle}
              >
                {/* Deal Card Wrapper to Set Width */}
                <div style={cardContainerStyle}>
                  <DealCard />
                </div>
                <div style={cardContainerStyle}>
                  <DealCard />
                </div>
                <div style={cardContainerStyle}>
                  <DealCard />
                </div>

                <div style={cardContainerStyle}>
                  <DealCard />
                </div>
                <div style={cardContainerStyle}>
                  <DealCard />
                </div>
                {/* Add more DealCards as needed */}
              </div>

              {/* Right Arrow */}
              <button
                style={{ ...arrowStyle, right: "0" }}
                onClick={() => {
                  document.getElementById("new-deal-carousel").scrollBy({
                    left: 200,
                    behavior: "smooth",
                  });
                }}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newdeal;
