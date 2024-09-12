import Carousel from "react-elastic-carousel";
import styled from "styled-components";

export const StyledCarousel = styled(Carousel)`
    width:90%
`;

export const Container = styled.div`
    background-color: #EFEFEF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow{
        background-color: #9758a6;
        color: #efefef;
        filter: drop-shadow(0px 4ox 4px rgba(0, 0, 0, 0.25));
    }

    .rec.rec-arrow:hover {
        border: 2px solid #9758a6;
        background-color: #EFEFEF;
        color: #9758a6;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }

`;

export const CategoryImg = styled.img`

`;

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`;

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
`;
export const Button = styled.button`
    height: 50px;
    margin-top: 16px;
    border: none;
    background-color: #9758a6;
    border-radius: 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color: #fff;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`;
