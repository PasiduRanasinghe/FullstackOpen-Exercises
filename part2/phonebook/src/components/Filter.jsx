const Filter = ({ handleFilter }) => {
  return (
    <div>
      filter shown with <input onChange={handleFilter} type="text" />
    </div>
  );
};

export default Filter;
