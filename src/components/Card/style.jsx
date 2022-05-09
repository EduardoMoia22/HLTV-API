import styled from 'styled-components'


export const CardBody = styled.div`
    max-width: 300px;
    min-height: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: aliceblue;
    border-radius: 2rem;

    color: #000;
    font-size: 12px;

    margin-top: 3rem;
    padding: 1rem;

    p{
        font-size: 1.5rem;
    }
`

export const Button = styled.div`
    width: 15rem;
    height: 3rem;
    
    background-color: #35305c;
    border-radius: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    margin-top: 2rem;
    padding: 5px;

    a{
        text-decoration: none;
        color: #FFF;
        font-weight: 700;
        font-size: 1.5rem;
    }
`