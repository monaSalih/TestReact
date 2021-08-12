
import React from 'react'
import Header from './component/header'
import Footer from './component/footer'
import Main from './component/main'
import ImgData from "./component/imgData.json";
import SelectedBeast from './component/SelectedBeast'

class firstApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      picture: {}
    }
  }
  ////test find data
  showPicture = (title) => {
    let pickedImage = ImgData.find(playImage => {
      if (playImage.title === title) {
        return playImage;
      }
    })
    this.setState({
      picture: pickedImage,
      show: true,
    })
    console.log(pickedImage);
  // console.log(this.state.picture,"picture");
  // console.log(this.state.show,"show");
  }
  ///////


  ///////
  handleClose = () => {
    this.setState  ({
      show: false,
    })
  }
  handleShow = (data) => {
    this.setState = {

      show: true,
      picture: data
    }
  }
  ////test test
  
  render() {
    return (
      <div>
        < Header />
        <div className="mainCon">
          
           <Main showPicture={this.showPicture} imgArr={ImgData} />
           
           </div>

        <SelectedBeast picture={this.state.picture} show={this.state.show} handleClose={this.handleClose} />
        <Footer />

      </div>
    )
  }
}
export default firstApp