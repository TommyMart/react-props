
import Card from 'react-bootstrap/Card';

export default function FoodCard(props){
    // cleaner version of below 
    const {foodName} = props
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{foodName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>
        // <div>
        //     <h3>{foodName}</h3>
        //     {/* <h3>{props.foodName}</h3> */}
        //     <p>description of food</p>
        // </div>
    )
}