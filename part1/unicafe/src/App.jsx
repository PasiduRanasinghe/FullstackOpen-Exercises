import { useState } from "react";

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const positive = (props.good / all) * 100;
  const average = (1 * props.good + 0 * props.neutral + -1 * props.bad) / all;

  return (
    <>
      <h1>statistic</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };
  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };
  const handleClickBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
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
