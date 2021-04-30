import { useState } from "react";
import Player from "./Player";

function Team(props) {
  const [ showDetail, setShowDetail ] = useState(false);

  function handleShowMore() {
    setShowDetail(!showDetail);
  }

  return(
    <section>
      <h3>{props.name}</h3>
      <button onClick={handleShowMore} >{showDetail ? "Show less" : "Show more"}</button>
      {showDetail ?
        props.team.franchisePlayers.map((item, index) => < Player player={item} key={index} /> )
        : ""}
      </section>
  )
}

{/* <pre>{JSON.stringify(props.team, null, 2)}</pre>  */}

export default Team;