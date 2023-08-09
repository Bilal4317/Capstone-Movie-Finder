import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
  max-width: 100%;

  ::placeholder {
    color: #ccc;
  }
`;

const SearchInput = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <InputContainer>
      <Input
        type="text"
        onChange={handleChange}
        placeholder="Search for movies..."
      />
    </InputContainer>
  );
};

export default SearchInput;
