import { Button, Alert, Card } from 'react-bootstrap';


const WebCard = (props) => {
    return (
        <>
            <Card className='mb-3'>
                <Card.Img src={props.image} />
                <Card.Title>
                    <Card.Text>{props.cardText}</Card.Text>
                </Card.Title>
                <Card.Body>
                    <Card.Link href={props.webLink}>Github</Card.Link>
                    <Card.Link>{props.githubLink}</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default WebCard;