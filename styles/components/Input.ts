import styled, { css } from 'styled-components';

interface InputProps {
    isErrored: boolean;
}

export const Container = styled.div<InputProps>`
    display: flex;
    align-items: center;
    justify-content: center;
   
    padding: 0 32px;
    width: 100%;
    height: 100%;
    background: #fff;

    border-radius: 5px 0 0 5px;


    ${props =>
        props.isErrored &&
        css`
           border: 1px solid #c53030;
           border-right: none;
        `}

        svg {
            margin-left: 16px;
        }
    
    input {
        height: 100%;
        width: 100%;
        border: 0;
        outline: 0;
        font-size: 20px;

        &::placeholder {
            color: #ABABB3;
        }
    }
`;