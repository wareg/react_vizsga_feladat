import { useState } from "react";

function Player(props) {
  const [loading, setLoading] = useState(false);
  const [voted, setVoted] = useState(false);

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
      console.log(response);
      setLoading(false);
      setVoted(true);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return(
    <>
    <p>{props.player.name}</p>
    {!voted 
      ?
        <button onClick={handleVote}>Vote</button>
      :
        <p>voted</p>
    }
    </>
  )
}

export default Player;