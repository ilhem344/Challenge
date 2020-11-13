import Axios from "axios";
import React, { useState, useEffect } from "react";
import DetailsCard from "./DetailsCard";
function JuiceDetails(props) {
  const id = props.match.params.idDrink;
  const [state, setstate] = useState([]);
  const [juiceLoaded, setjuiceLoaded] = useState(false);
  const getSingleJuice = () => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setstate(res.data.drinks);
        setjuiceLoaded(true);
      })
      .catch((err) => err);
  };
  useEffect(() => {
    getSingleJuice();
  }, []);
  return (
    <div>
      <DetailsCard juice={state} juiceLoaded={juiceLoaded} />
    </div>
  );
}

export default JuiceDetails;
