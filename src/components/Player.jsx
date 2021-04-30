import { useState } from "react";

function Player(props) {
  const [loading, setLoading] = useState(false);

  function handleVote(e) {
    setLoading(true);
    fetch("/api/vote", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        "id": `"${props.player.id}"`,
       })
    })
    .then(response => {
      response.json()
      console.log("response");
      console.log(response);
      console.log("OK:"+response.ok);
      console.log("Status:"+response.status);
      setLoading(false);
    })
  }

  return(
    <>
    <p>{props.player.name}</p>
    <button onClick={handleVote}>Vote</button>
    </>
  )
}

export default Player;