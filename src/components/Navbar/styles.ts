import styled from "styled-components";

export const Input = styled.input`
  
`

export const Main = styled.div`
  /* position: fixed; */
  width: 100%;
  top: 0;
  /*   .nav {
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: fixed;
    top: 0; 
    width: 100%;
  } */
  .links {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    outline: none;
    color: #22312a;
    padding: 8px 5px;
    border-radius: 5px;
    margin: 5px;
    transition: 0.3s;
  }

  a:hover {
    transform: scale(1.2);
    color: #5cf8ad;
  }
`;
