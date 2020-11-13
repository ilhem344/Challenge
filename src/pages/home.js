import Axios from "axios";
import React, { useState, useEffect } from "react";
import JuiceList from "../components/juiceList";
function Home() {
  const [juiceList, setjuiceList] = useState([]);
  const [juiceListLoaded, setLoad] = useState(false);
  const [searchName, setsearchName] = useState("margarita");
  const getJuiceList = () => {
    Axios.get(
      ` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`
    )
      .then((res) => {
        console.log(res);
        setjuiceList(res.data.drinks);
        setLoad(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getJuiceList();
  }, [searchName]);
  const handleChange = (e) => {
    e.preventDefault();
    setsearchName(e.target.value);
  };
  return (
    <div>
      <h3 style={{ marginTop: "20px" }}>
        <b>Search for your drink</b>
      </h3>

      <input
        style={{ marginTop: "20px" }}
        value={searchName}
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>

      <JuiceList juiceList={juiceList} juiceListLoaded={juiceListLoaded} />
    </div>
  );
}

export default Home;
