import React from "react";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"welcome",
      value:"All"
    }
  }
  componentWillMount(){
    alert("we are learing Component life cycle")
  }
  change=()=>{
    this.setState({
      name:"good morning"
    })
  }
  render(){
    return(
      <div>
        <p>{this.state.name} {this.state.value}</p>
        <button onClick={this.change}>click</button>
        <button onClick={this.delete}>delete</button>
        <p id="para"></p>
        
      </div>
    )
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        name:"Thank you"
      })
    },2000)
  }
  componentWillUpdate(){
    alert("want to update value")
  }
  componentDidUpdate(){
    document.getElementById("para").innerHTML="updated state is :"+this.state.name
  }
  delete=()=>{
    this.setState({
     name:false,
     value:false 
    })
  }
}
export default App;
