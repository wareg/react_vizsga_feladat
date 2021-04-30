import { useState } from "react";
import Player from "./Player";

function Team(props) {
  const [ showDetail, setShowDetail ] = useState(false);

  function handleShowMore() {
    setShowDetail(!showDetail);
  }

  return(
    <>
    <h3>{props.name}</h3>
    <button onClick={handleShowMore} >{showDetail ? "Show less" : "Show more"}</button>
    {showDetail ?
      props.franchisePlayers.map((item, index) => < Player /> )
      : ""}
    </>
  )
}

{/* <pre>{JSON.stringify(props.team, null, 2)}</pre>  */}
  // !!! nem működött. miért ???
  // <h3>{props.name}</h3>

export default Team;