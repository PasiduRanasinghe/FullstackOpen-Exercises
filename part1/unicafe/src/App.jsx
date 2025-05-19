import { useState } from "react";

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const positive = (props.good / all) * 100;
  const average = (1 * props.good + 0 * props.neutral + -1 * props.bad) / all;

  return (
    <>
      <h1>statistic</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <p>good {props.good}</p>
          <p>neutral {props.neutral}</p>
          <p>bad {props.bad}</p>
          <p>all {all}</p>
          <p>average {average}</p>
          <p>positive {positive}%</p>
        </>
      )}
    </>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>

      <Statistics bad={bad} good={good} neutral={neutral} />
    </>
  );
}

export default App;
