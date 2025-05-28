const PersonForm = ({
  handleSubmit,
  name,
  number,
  handleInputName,
  handleInputNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input required value={name} onChange={handleInputName} />
      </div>
      <div>
        number: <input required value={number} onChange={handleInputNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
