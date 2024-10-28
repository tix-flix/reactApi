import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import List from "./components/List/List";
import Buttons from "./components/UI/Buttons/Buttons";
import Title from "./components/UI/Title2/Title2";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [dota, setDota] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setDota(data.results);
      });
  }, [page]);

  
  const next = () => {
    setPage(page + 1)
  }
  const prev = () => {
    if(page >= 2){
    setPage(page - 1)
    }
  }

  return (
    <>
      <Layout>
        <Pagination>
        <Buttons onClick={() => prev()} text="<" bgcolor="#15a340" color="white" size="20px" br="50%"/>
        <Title text={page}/>
        <Buttons onClick={() => next()} text=">" bgcolor="#15a340" color="white" size="20px" br="50%"/>
        </Pagination>
        <List array={dota}/>
        <Pagination>
        <Buttons onClick={() => prev()} text="<" bgcolor="#15a340" color="white" size="20px" br="50%"/>
        <Title text={page}/>
        <Buttons onClick={() => next()} text=">" bgcolor="#15a340" color="white" size="20px" br="50%"/>
        </Pagination>
      </Layout>
    </>
  );
}

export default App;
