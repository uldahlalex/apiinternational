import {useState} from "react";

export function APITester() {

  const [data, setData] = useState()

  async function buttonHasBeenClicked() {
      const response = await fetch('/api/hello')
      const json = await response.json();
      setData(json)
  }

  return (
    <div>
      {
        JSON.stringify(data)
      }
      <button onClick={buttonHasBeenClicked}>click me to send request to API</button>
 </div>
  );
}
