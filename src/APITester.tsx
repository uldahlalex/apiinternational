import {useEffect, useState} from "react";

export function APITester() {

  const [data, setData] = useState()
    
    useEffect(() => {
        loadData()
    }, []);


  async function loadData() {
      const response = await fetch('/api/hello')
      const json = await response.json();
      setData(json)
  }

  return (
    <div>
      {
        JSON.stringify(data)
      }
 </div>
  );
}
