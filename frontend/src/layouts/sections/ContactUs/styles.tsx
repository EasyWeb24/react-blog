import styled from 'styled-components';

export const Container = styled.section`
  padding: 64px 32px;
  border-top: 3px solid hsl(210, 100%, 45%);
  background: linear-gradient(30deg, hsl(210, 100%, 25%), hsl(210, 100%, 35%));
`;

export const SectionTextHeading = styled.span`
  color: hsl(210, 100%, 95%);
  font-size: 18px;
  text-transform: capitalize;
  position: relative;
  display: inline-block;

  &::after {
    position: absolute;
    content: '';
    top: 24px;
    width: 24px;
    height: 3px;
    background-color: hsl(210, 100%, 65%);
    left: 0;
  }
`;

export const ContactForm = styled.form`
  margin-top: 32px;
  input,
  textarea {
    padding: 16px;
    background-color: hsl(0, 0%, 95%);
    width: 100%;
    border: 0;
    outline: none;
    margin-top: 24px;
    border-radius: 10px;
    border-top: 4px solid hsl(210, 100%, 65%);
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);

    &:hover {
      box-shadow: none;
      border-color: hsl(210, 100%, 45%);
    }
  }

  button {
    padding: 8px 16px;
    background-color: hsl(210, 100%, 45%);
    color: hsl(210, 100%, 95%);
    text-decoration: none;
    border-radius: 24px;
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
    border: none;
    margin-top: 24px;

    &:hover {
      background-color: hsl(210, 100%, 25%);
    }
  }
`;
