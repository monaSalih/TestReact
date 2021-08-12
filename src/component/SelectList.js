import React from 'react';
import Form from 'react-bootstrap/Form';

class SelectList extends React.Component{
    // renderImage=(event)=>{
    
    // ///////////////test
    // }
    numberOfHonerd=(event)=>{this.props.numberOfHonerd(
        event.target.value)
    }
    

    render(){
        return(
            // onClick={this.props.numberOfHonerd}
            <>
            <Form>
            <Form.Select onChange={this.numberOfHonerd}  >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
        </Form.Select>
        </Form>
        </>
        )
    }
}

export default SelectList
