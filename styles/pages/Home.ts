import styled from 'styled-components';

import { Form } from '@unform/web';

import {shade} from 'polished';

export const Title = styled.h1`
    color: #3A3A3A;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    max-width: 480px;
    margin-bottom: 40px;
`;

export const FormCustom = styled(Form)`
    width: 100%;
    max-width: 710px;

    height: 72px;
    margin-bottom: 120px;

    display: flex;
    align-items: center;
    
    input[type="submit"] {
        height: 100%;
        padding: 24px 64px;

        border-radius: 0px 5px 5px 0px;

        background: #04D361;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;

        &:hover {
            background: ${shade(0.15, '#04D361')}
        }
    }
`;