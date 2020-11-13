import React from "react";
import Juice from "./juice";
import { Spinner } from "reactstrap";

function JuiceList({ juiceList, juiceListLoaded }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {juiceListLoaded ? (
        juiceList == null ? (
          <p>Not Found</p>
        ) : (
          juiceList.map((el) => <Juice key={el.idDrink} juice={el} />)
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default JuiceList;
