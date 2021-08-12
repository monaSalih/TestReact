import React from 'react';
import Form from 'react-bootstrap/Form';

class SelectList extends React.Component{
    renderImage=(event)=>{
    
    ///////////////test
    }
    render(){
        return(
            <>
            <Form>
            <Form.Select onChange={this.props.numberOfHonerd} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </Form.Select>
        </Form>
        </>
        )
    }
}

export default SelectList
