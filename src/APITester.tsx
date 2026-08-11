import {useState} from "react";

export function APITester() {

  const [products, setProducts] = useState()

  function buttonHasBeenClicked() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(resp => {
          setProducts(resp)
        });
  }

  return (
    <div>
      {
        JSON.stringify(products)
      }
      <button onClick={buttonHasBeenClicked}>click me to send request to API</button>
 </div>
  );
}
