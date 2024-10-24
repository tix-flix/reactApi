import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import List from "./components/List/List";

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

  // const [users, setUsers] = useState([
  //   {name: "Sarah", age: 22, job: "Driver"},
  //   {name: "Джамал", age: 16, job: "Тачкист"},
  //   {name: "Ахмед", age: 44, job: "Тандыр-master"},
  // ])

  return (
    <>
      <Layout>
        <>
          {dota.map((e, i) => (
            <div key={e.id}>
              <h1>{e.name}</h1>
              <h2>{e.status}</h2>
              <h2>{e.gender}</h2>
            </div>
          ))}
        </>
      </Layout>
    </>
  );
}

export default App;
