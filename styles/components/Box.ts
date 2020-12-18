import styled from 'styled-components';

export const Card = styled.a`
    display: flex;
    align-items: center;
    background: #fff;
    padding: 16px;
    border-radius: 5px;
    transition: .2s;
    cursor: pointer;

    width: 100%;
    max-width: 714px;


    & + a {
        margin-top: 16px;
    }

    &:hover {
        transform: translateX(8px);
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    div.description {
        margin-left: 24px;
        flex: 1;
        
        strong {
            font-size: 24px;
            line-height: 32px;
            font-weight: 700;
            margin-bottom: 4px;
            color: #3D3D4D;
        }

        p {
            font-size: 18px;
            font-weight: 400;
            color: #A8a8b3;
        }
    }

    svg {
        margin-left: auto;
        color: #C9C9D4;
    }
`;