import { CardBody, Button } from "./style"

function Card(props) {
    return (

        <CardBody>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <Button>
                <a href={props.link} target="_blank">About</a>
            </Button>
        </CardBody>

    )
}

export default Card