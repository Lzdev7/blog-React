import styled from "styled-components";

export const HeaderContainer = styled.div`

    background: #A020F0;

    h1 {
        color: #fff     ;
    }

    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 200px;
    }

    .container ul {
        display: flex;
        gap: 50px;
    }

    .container ul li {
        cursor: pointer;
        color: #fff;
    }
`;