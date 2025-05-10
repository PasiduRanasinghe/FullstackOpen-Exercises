function Content(props) {
  return (
    <>
      <p>
        {props.parts.part1} {props.exercises.exercises1}
      </p>
      <p>
        {props.parts.part2} {props.exercises.exercises1}
      </p>
      <p>
        {props.parts.part3} {props.exercises.exercises1}
      </p>
    </>
  );
}

export default Content;
