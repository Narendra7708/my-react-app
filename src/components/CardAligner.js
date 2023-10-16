import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../Rounting/Navigation";
import { BsCurrencyRupee } from "react-icons/bs";
import { Button } from "react-bootstrap";


const CardData = ({ ProductData, }) => {
  const Product = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card."
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card."
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card."
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card."
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card."
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card."
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card."
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card."
    },
    // Add more cards here if needed.
  ];
  const cartConsumer = useContext(Cartcontext)
  // console.log(cartConsumer)
  // Define the number of cards to display in each row.
  const cardsPerRow = 4;

  // Create an array of rows, each containing a subset of card data.
  const rows = [];
  for (let i = 0; i < ProductData.length; i += cardsPerRow) {
    const row = ProductData.slice(i, i + cardsPerRow);
    rows.push(row);
  }

  return (
    <div className="container" >
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex} style={{ marginTop: 30 }} >
          {row.map((card) => (
            <div className="col" key={card.id}>
              <div className="card" style={{ height: 280, textAlign: "center" }} >
                <div className="card-body">
                  <h4 className="card-title">{card.title.slice(0, 15)}</h4>
                  <img src={card.image} width={120} height={100} />
                  <h5 className="card-title"><BsCurrencyRupee/>{card.price}</h5>
                  <button style={{ marginTop: 10 }}>
                    <Link to={`/product/${card.id}`} style={{ textDecoration: "none",color:"black"}}>view Product</Link>
                  </button>  
                  <button style={{ marginTop: 10 ,marginLeft:10 }} onClick={() => cartConsumer.addItemToCart(card)}><Link to={"/cart"} style={{ textDecoration: "none" ,color:"black"}}>Add to cart</Link></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardData;
