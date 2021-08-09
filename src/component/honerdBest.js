import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card form 'react-bootstrap/Card'
// import Button form 'react-bootstrap/Button'


class HonerdBest extends React.Component{
    
  constructor(props){
    super(props);
    this.state={
      clickNumber:0
    }
  }
  
  clickAdd =()=>{
    console.log(this);
    this.setState({
      clickNumber:this.state.clickNumber+1
    })
  }
  
  render() {
        return (
    
          <> 
          
          
          <Card.img onClick={this.clickNumber} src={this.props.imageUrl}/>
          <Card.Body>
          
         <Card.Title>{this.props.title}</Card.Title> 
         <Card.Text>
           alt = {this.props.alt}  keyword={this.props.keyword} 
          <p>{this.props.description}  this image keyword:{this.props.keyword} 
          and this animal have{this.props.horns} Horns</p></Card.Text>
         </Card.Body>  </>
        )
    
      }
    }

export default HonerdBest