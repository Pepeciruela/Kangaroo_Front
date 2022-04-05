import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  min-height: 45px;
  outline-style: none;
  text-decoration: none;
  padding: 0.5rem 1.5rem;

  font: inherit;
  font-weight: 700;
  border-radius: 0.5rem;
  cursor: pointer;

  transition: all 0.4s;

  ${(props) =>
    props.full
      ? css`
          width: 100%;
        `
      : ``}

  ${(props) =>
    props.rounded
      ? css`
          border-radius: 100rem;
        `
      : ``}

  ${(props) =>
    props.primary
      ? css`
          background-color: var(--primary);
          color: white;
          border: 2px solid var(--primary);

          :hover {
            background-color: var(--secondary);
            color: var(--primary);
            border: 2px solid var(--secondary);
          }
        `
      : ``}
      
  ${(props) =>
    props.red
      ? css`
          background-color: var(--red);
          color: white;
          border: 2px solid var(--red);

          :hover {
            background-color: var(--red);
            color: white;
            border: 2px solid var(--red);
          }
        `
      : ``}

  ${(props) =>
    props.secondary
      ? css`
          background-color: var(--secondary);
          color: var(--primary);
          border: 2px solid var(--secondary);
          :hover {
            background-color: var(--primary);
            color: white;
            border: 2px solid var(--primary);
          }
        `
      : ``}
      

  ${(props) =>
    props.language
      ? css`
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 5rem;
          color: rgba(255, 255, 255, 0.3);
          height: 55px;
          padding: 0 2rem;
          font-weight: 600;
          border: 2px solid var(--primary);
          :hover {
          }
        `
      : ``}
      
  ${(props) =>
    props.white
      ? css`
          background-color: white;
          color: var(--primary);
          border: 2px solid white;
          :hover {
            background-color: var(--secondary);
            color: var(--primary);
            border: 2px solid var(--secondary);
          }
        `
      : ``}
      
  ${(props) =>
    props.textWhite
      ? css`
          background-color: transparent;
          color: white;

          :hover {
            color: var(--secondary);
            text-decoration: underline;
          }
        `
      : ``}
      
      
  ${(props) =>
    props.text
      ? css`
          background-color: transparent;
          color: var(--primary);

          :hover {
            color: var(--secondary);
            text-decoration: underline;
          }
        `
      : ``}
      
  ${(props) =>
    props.disabled
      ? css`
          background-color: #4f547b;
          opacity: 0.4;
          color: #111827;
          pointer-events: none;
        `
      : ``}


  ${(props) =>
    props.primaryOutline
      ? css`
          color: var(--primary);
          border: 2px solid var(--primary);
          background-color: transparent;

          :hover {
            background-color: var(--secondary);
            color: var(--primary);
            border: 2px solid var(--secondary);
          }
        `
      : ``}
      
  ${(props) =>
    props.secondaryOutline
      ? css`
          color: var(--secondary);
          border: 2px solid var(--secondary);
          background-color: transparent;

          :hover {
            background-color: var(--secondary);
            color: var(--primary);
            border: 2px solid var(--secondary);
          }
        `
      : ``}
`;

export default Button;
