import React from 'react';
import './main.css'
import HonerdBest from './honerdBest'
import ImgData from "./imgData.json";
import SelectList from "./SelectList"

// import SelectedBeast from './SelectedBeast.js'



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showImage: ImgData,
        };
    }

 numberOfHonerd = async (test) => {

        // event.preventDefault();
        let index=Number(test);

console.log(index);
        let searchOnHornes=[];

        searchOnHornes=ImgData.filter(item=>{
            console.log(item.horns,"item");
            // if (!(isNaN(index)))
            if (item.horns === index){
                //console.log(index,"isnan result");
                return true;
            }else{
                searchOnHornes=ImgData;
            }
            
        })
        console.log(searchOnHornes,"searchOnHornes");
       await this.setState({
            showImage: searchOnHornes,
        })
console.log(this.state.showImage,"checkNum");
       
    }

    render() {

        return (
            <>

            <SelectList numberOfHonerd={this.numberOfHonerd}/>


                {this.state.showImage.map((item, idx) => {
                    return (
                        <HonerdBest
                            key={idx}
                            title={item.title}
                            imageUrl={item.image_url}
                            description={item.description}
                            showPicture={this.props.showPicture}
                        // handleShow={this.state.Show}
                        //  handleClose={this.handleClose} 
                        />
                    )
                })}
            </>
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