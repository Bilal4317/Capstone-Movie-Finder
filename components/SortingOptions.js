import styled from "styled-components";

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SortingOptions = ({ onChange }) => {
  const handleSortChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Select onChange={handleSortChange}>
      <option value="title">Sort ascending by Title </option>
      <option value="releaseYear">Sort ascending by Release Year</option>
    </Select>
  );
};

export default SortingOptions;
