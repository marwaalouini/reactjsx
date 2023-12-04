import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name';
import Image from './Image';
import Description from './Description';
import Price from './Price';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  return (
    <div className="App">
     
     <Card style={{ width: '19rem' }}>
      <Card.Img variant="top"  /> <Image/>
      <Card.Body>
        <Card.Title> < Name/> </Card.Title>
        <Card.Text>
        
        </Card.Text>
      
      <ListGroup className="list-group-flush">
        
        <ListGroup.Item> <Description/> </ListGroup.Item>
  
        <ListGroup.Item> < Price/> </ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>

     
    </div>
  );
}

export default App;
