const Total = ({ parts }) => {
  const totalExercises = parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <>
      <p>
        <b>Total of  {totalExercises} exercises</b>
      </p>
    </>
  );
};

export default Total;
