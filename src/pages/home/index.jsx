import { Container, Wrapper } from "./style"
import Card from "../../components/Card/"
import { useEffect, useState } from "react"

function Home() {

    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        fetch('https://hltv-api.vercel.app/api/news.json')
            .then(response => response.json())
            .then(data => setNoticias(data))
    }, [])

    return (
        <Container>
            <h1>Ultimas Notícias</h1>
            <Wrapper>
                {noticias.map(noticia => {
                    return (
                        <Card title={noticia.title} description={noticia.description} link={noticia.link}/>
                    )
                })}
            </Wrapper>
        </Container>
    )
}

export default Home