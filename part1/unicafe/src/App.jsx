import { useState } from "react";

const StatisticLine = (props) => {
  return(
    <p>{props.text} {props.value}</p>
  )
}

const Button = (props) =>{
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

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
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive}/>
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
      <Button onClick={handleClickGood} text='good'/> 
      <Button onClick={handleClickNeutral} text='neutral'/> 
      <Button onClick={handleClickBad} text='bad'/> 

      <Statistics bad={bad} good={good} neutral={neutral} />
    </>
  );
}

export default App;
