
import React from 'react'
// import ImgData from "./imgData.json";
import Header from './component/header'
import Footer from './component/footer'
import Main from './component/main'

class firstApp extends React.Component {
  render() {
    return (
      <div>
        < Header />
        <div className="mainCon"> <Main /></div>
       
        <Footer />

      </div>
    )
  }
}
export default firstApp