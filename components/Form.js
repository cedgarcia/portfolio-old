import styled from 'styled-components';

const FormWrap = styled.div`
  z-index: 500;
`;

export const Form = () => {
  return (
    <FormWrap>
      <form action="https://formsubmit.co/your@email.com" method="POST">
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <button type="submit">Send</button>
      </form>
    </FormWrap>
  );
};
