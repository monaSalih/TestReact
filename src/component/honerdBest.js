import React from 'react';

class HonerdBest extends React.Component{
    render() {
        return (
    
          <div>  <h2>{this.props.title}</h2>
          <img src={this.props.imageUrl} alt = {this.props.alt} title ='h' keyword={this.props.keyword} />
          <p>{this.props.description}  this image keyword:{this.props.keyword} and this animal have{this.props.horns} Horns</p> </div>
        )
    
      }
    }

export default HonerdBest