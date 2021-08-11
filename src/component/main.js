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
            checkNum: ImgData,
        };
    }

    numberOfHonerd = (event) => {
        let index=Number(event.target.value);

console.log(event.target.value);
        let searchOnHornes=[];

        searchOnHornes=ImgData.filter(item=>{
            console.log(item.horns,"item");
            if (item.horns === index){
                

                return 1;
            }
        })
        console.log(searchOnHornes,"searchOnHornes");
        this.setState({
            checkNum:searchOnHornes,
        })
console.log(this.state.checkNum,"checkNum");
       
    }

    render() {

        return (
            <>

            <SelectList numberOfHonerd={this.numberOfHonerd}/>


                {ImgData.map((item, idx) => {
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