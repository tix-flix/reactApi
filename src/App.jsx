import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import List from "./components/List/List";
import Buttons from "./components/UI/Buttons/Buttons";

function App() {
  const [dota, setDota] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setDota(data.results);
      });
  }, []);
  console.log(dota);


  return (
    <>
      <Layout>
        <List array={dota}/>
        <Buttons text="next" bgcolor="green" color="white" size="25px" br="8px"/>
      </Layout>
    </>
  );
}

export default App;
