import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

interface MySingleCardProps {
    img:string;
    title:string;
    price:number;
    desc:string;
    url:any
}

const SecondSingleCard = (props: MySingleCardProps ) => {
  return (
    <div className='col-lg-3 p-3 mt-'>
  
   <Card className='mycard'>
      <Card.Img variant="top" src={props.img} />
      <Card.Body >
        <Card.Title className='cardtitle' style={{color:"whitesmoke"}}>{props.title}</Card.Title>
       
      <LinkContainer to={`/shop/${props.url}`}>
      <Button  className='btnvdr mt-3' style={{marginLeft:"20px"}}>DISCOVER</Button>
      </LinkContainer>  
      </Card.Body>
    </Card>


    </div>
  )
}

export default SecondSingleCard