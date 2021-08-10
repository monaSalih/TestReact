import React from 'react';
import './main.css'
import HonerdBest from './honerdBest'
import ImgData from "./imgData.json";


class Main extends React.Component{
    constructor (props){
    super(props);
 this.state={
     show:false
 }
}
    handleClose = () =>{
        this.setState={
            
             Show:false}
       }
     handleShow  = () =>{
        this.setState={
            
            Show:true}
       }
    render(){
        return(
        //   <ImgData/>
        <>
          {  ImgData.map((item,idx)=>{
                return(
                    <HonerdBest 
                    key={idx}
                    title={item.title}
                    imageUrl={item.image_url}
                    description={item.description}
                    handleShow={this.state.Show}
                    handleClose={this.handleClose}
                    />
                    )
            })}
            {/* show new form */}

</>

        
        )
    }
}

export default Main