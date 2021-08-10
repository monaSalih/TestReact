import React from 'react'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import  Button from 'react-bootstrap/Button'


class ModelRender extends React.Component{

    render(){
return(
    <div>

<Modal show={this.props.handleShow} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Img onClick={this.clickAdd} src={this.props.imageUrl} />
                <Card.Title>{this.props.title} </Card.Title>
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
      
    </div>

)

    }



}

export default ModelRender;