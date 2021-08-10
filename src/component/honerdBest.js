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

  clickAdd = () => {
    console.log(this);
    this.setState({
      clickNumber: this.state.clickNumber + 1
    })
  }

  render() {
    return (

      <>

        <Card style={{ width: '18rem' }}>

          <Card.Body>
            <Card.Img onClick={this.clickAdd} src={this.props.imageUrl} />
            <Card.Title>{this.props.title} {this.state.clickNumber}</Card.Title>
            <Card.Text>

              <p>{this.props.description}
                🐱‍🐉🐱‍🚀 </p></Card.Text>
          </Card.Body>
        </Card>

        <Button variant="primary" onClick={this.props.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.props.handleShow} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Img onClick={this.clickAdd} src={this.props.imageUrl} />
                <Card.Title>{this.props.title} {this.state.clickNumber}</Card.Title>
                <Card.Text>

                  <p>{this.props.description}
                    🐱‍🐉🐱‍🚀 </p></Card.Text>
              </Card.Body>
            </Card></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
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