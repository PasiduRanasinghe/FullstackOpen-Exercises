import { useState } from "react";

const Statistics = (props) =>{
  return(
    <>
    <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [positive, setPositive] = useState(0);
  const [average, setAverage] = useState(0);

  const handleStatistics = (valueGood, valueNeutral, valueBad) => {
    setAll(valueGood + valueNeutral + valueBad);
    setPositive((good / all) * 100);
    setAverage((1 * good + 0 * neutral + -1 * bad) / all);
  };
  const handleClickGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    handleStatistics(updatedGood, neutral, bad);
  };
  const handleClickNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    handleStatistics(good, updatedNeutral, bad);
  };
  const handleClickBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    handleStatistics(good, neutral, updatedBad);
  };

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h1>statistic</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <Statistics average={average} positive={positive}/>
    </>
  );
}

export default App;
