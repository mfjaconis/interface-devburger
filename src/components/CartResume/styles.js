import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .container-top{
        display: grid;
        grid-gap: 30px 50px;
        grid-template-areas: 
        'h2 h2'
        'items items-price'
        'delivery-tax delivery-tax-price'
        ;

    h2{
       grid-area: h2;
       margin-bottom: 20px;
    }

    .items{
        grid-area: items;
    }

    .items-price{
        grid-area: items-price;
    }

    .delivery-tax{
        grid-area: delivery-tax;
    }

    .delivery-tax-price{
        grid-area: delivery-tax-price;
    }

    }

 
    .container-bottom{
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 24px;
    }

`;
