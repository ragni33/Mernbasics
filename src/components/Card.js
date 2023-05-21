import React from "react";
import card1 from '../assets/card1.jpg';

function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3" 
          style={{ height: "350px", width: "300px", maxHeight: "360px" }}
        >
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <img src={card1} alt= "" width={200} height={150} />

            <p className="card-text">make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded text-white">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}> {i + 1}
                    </option>
                  );
                })}
                
              </select>

              <select className="m-2 h-100 bg-success rounded text-white">
                <option value="half">Half</option>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>

              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    <div>
</div>
</div>
  );
}

export default Card;
