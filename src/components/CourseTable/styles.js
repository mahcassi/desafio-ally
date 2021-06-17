import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    margin: 0 auto;

    th {
      color: var(--branco);
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--branco);
       
      &:first-child {
        color: #e19300;
        font-weight: 500;
      }
    }
  }

`;