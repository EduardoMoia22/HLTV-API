import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #FFF;
    text-align: center;

    margin: 0 auto;
    padding: 1rem;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;

    @media(max-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media(max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
`

