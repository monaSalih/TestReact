import React from 'react';
import './main.css'
import HonerdBest from './honerdBest'
import ImgData from "./imgData.json";


class Main extends React.Component{
   
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
                    description={item.description}/>
                    )
            })}
            {/* show new form */}

</>

        
        )
    }
}

export default Main