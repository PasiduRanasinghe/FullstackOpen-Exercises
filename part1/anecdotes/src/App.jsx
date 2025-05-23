import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(8).fill(0));
  const [topVotedAnecdote, setTopVotedAnecdote] = useState(0);

  const handleSelectAnecdote = () => {
    const number = Math.floor(Math.random() * 8);
    setSelected(number);
  };

  const handleTopVote = (copy) => {
    setTopVotedAnecdote(copy.indexOf(Math.max(...copy))); //find the highest vote count and then find the index of that count
  };

  const handleVote = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
    handleTopVote(copy); //added copy because vote array yet to be updated
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]}
        <br />
        has {vote[selected]} vote
      </p>
      <p></p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleSelectAnecdote}>next anecdote</button>
      <h1>Anecdote wite most votes</h1>
      <p>
        {anecdotes[topVotedAnecdote]}
        <br />
        has {vote[topVotedAnecdote]} vote
      </p>
    </div>
  );
};

export default App;
