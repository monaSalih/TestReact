
import React from 'react'
import Header from './component/header'
import Footer from './component/footer'
import Main from './component/main'
import ImgData from "./component/imgData.json";
import SelectedBeast from './component/SelectedBeast'

class firstApp extends React.Component {
  constructor (props){
    super(props);
 this.state={
     show:false,
     picture:{}
 }
}
    handleClose = (data) =>{
        this.setState={
            
             Show:false,
           }
       }
     handleShow  = (data) =>{
        this.setState={
            
            Show:true,
            picture:data}
       }
  render() {
    return (
      <div>
        < Header />
        <div className="mainCon"> <Main ImgArr={ImgData} /></div>
       <SelectedBeast picture={this.state.picture} show={this.state.show} handleClose={this.handleClose} />
        <Footer />

      </div>
    )
  }
}
export default firstApp