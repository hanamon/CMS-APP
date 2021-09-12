import styled from "styled-components";

const Wrapper = styled.div``;
const Label = styled.label``;
const Input = styled.input``;

function InputWithLabel({ onChange, label, name, ...rest }) {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} {...rest} onChange={(e) => onChange(e)} />
    </Wrapper>
  );
}

export default InputWithLabel;
