import React from 'react';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import  Button from 'react-bootstrap/Button'


// import Button from 'react-bootstrap/Button'


class HonerdBest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickNumber: 0
    }
  }
  showPic =()=>{
    this.props.showPicture(this.props.title)
    
  }



  clickAdd = () => {
    // console.log(this);
    this.setState({
      clickNumber: this.state.clickNumber + 1
    })
  }

  render() {
    return (

      <>

        <Card style={{ width: '18rem' } } onClick={this.showPic}>

          <Card.Body>
            <Card.Img onClick={this.clickAdd} src={this.props.imageUrl} />
            <Card.Title>{this.props.title}  {this.state.clickNumber}</Card.Title>
            <Card.Text>

              <p>{this.props.description}
                🐱‍🐉🐱‍🚀 </p></Card.Text>
          </Card.Body>
        </Card>

        <Button variant="primary" onClick={this.props.handleShow}>
          Launch demo modal
        </Button>


      
      </>
    )

  }
  // creat pop up model 
  // return (
  //   <>

  //   </>
  // );
}
// }

export default HonerdBest