import Part from "./Part";
function Content(props) {
  return (
    <>
      <Part part={props.parts.part1} />
      <Part part={props.parts.part2} />
      <Part part={props.parts.part3} />
    </>
  );
}

export default Content;
