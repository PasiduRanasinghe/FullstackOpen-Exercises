import Part from "./Part";
function Content({ parts }) {
  return (
    <>
      {parts.map((part) => (
        <Part part={part} />
      ))}
    </>
  );
}

export default Content;
