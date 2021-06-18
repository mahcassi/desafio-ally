import styled from "styled-components";

export const Form = styled.form`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--laranja);
    font-weight: 500;

    img {
      width: 15rem;
      margin: 2rem 0 2.5rem 0;
    }
  }

  .course-form__group {
    display: flex;
    flex-direction: column;
    
    label {
      margin-bottom: 5px;
      font-size: 1rem;
      font-weight: 600;
      color: #333333;
    }

    input {
      width: 100%;
      padding: 0 0 0 1rem;
      height: 3rem;
      border-radius: 0.25rem;
      border: 1px  solid #d7d7d7;
      background: #e7e9ee;
      color: var(--preto);

      font-size: 1.1rem;
      font-weight: 400;
      margin: 0.2rem 0 1rem 0;
    } 

  }

  button[type="submit"] {
    width: 100%;
    padding: 0 0 0 1rem;
    height: 3rem;
    background: #00ff8b;
    color: #333333;
    border-radius: 0.25rem;
    border: 0;
    font-weight: 400;
    font-size: 1.5rem;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;

export const CourseDate = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;