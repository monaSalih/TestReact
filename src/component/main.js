import React from 'react';
import './main.css'
import HonerdBest from './honerdBest'
import ImgData from "./imgData.json";
// import SelectedBeast from './SelectedBeast.js'

class Main extends React.Component{
   
    render(){
        return(

      this.props.ImgArr.map((item,idx)=>{
          return <HonerdBest 
          key={idx}
            title={item.title}
            imageUrl={item.image_url}
            description={item.description}
            // handleShow={this.state.Show}
            //  handleClose={this.handleClose} 
            />
      })

        
        )
    }
}

export default Main


  //   <ImgData/>
//         <>
//           {  ImgData.map((item,idx)=>{
//                 return(
//                     <HonerdBest 
//                     key={idx}
//                     title={item.title}
//                     imageUrl={item.image_url}
//                     description={item.description}
//                     handleShow={this.state.Show}
//                     handleClose={this.handleClose} />
//                     // <>
//                     <SelectedBeast
//                     key={idx}
//                     title={item.title}
//                     imageUrl={item.image_url}
//                     description={item.description}
//                     handleShow={this.state.Show}
//                     handleClose={this.handleClose}/>
//                     // </>
//                     )
//             })}
//             {/* show new form */}

// </>