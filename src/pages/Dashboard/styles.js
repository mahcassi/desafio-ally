import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--background-color);
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 4rem;

  padding: 3rem 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .link {
    font-size: 1rem;
    color: #fff;
    background-color: var(--laranja);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    text-decoration: none;
    padding: 1.5rem 3rem;
    font-weight: 600;
    font-size: 1.2rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;

export const SectionSearch = styled.section`
  margin: 0 auto;
  width: 600px;

  input {
    height: 50px;
    border: 2px solid #ccc;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 2rem;
    padding: 0 1rem 0 1rem;
    font-size: 1.2rem;
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2.5rem 1rem;
  
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    margin: 0 auto;

    th {
      color: var(--branco);
      font-weight: 600;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      background-color: var(--azul);
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--branco);
      font-weight: 600;
      color: var(--preto);
       
      &:first-child {
        color: #e19300;
        font-weight: 600;
      }
    }
  }

`;