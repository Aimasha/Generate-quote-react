import './App.css';
import React from "react"
import { FaTwitterSquare } from "react-icons/fa";
class App extends React.Component{
  constructor (){
    super();
    this.state = {
      quotes : [],
      index : 0,
      isLoading : false
    }
  }

  componentDidMount () {
    const url = "https://type.fit/api/quotes"
    fetch(url)
    .then(res => res.json())
    .then(data => {
       setTimeout(()=>{
        this.setState({quotes : data , isLoading:true})
       }, 1000)
    })
  }

  handleNext = () =>{
    const { quotes, index } = this.state;
    
    if(index < quotes.length -1){
      this.setState({index: index +1 });
    }
 
  }
 
render (){
  const { quotes, index, isLoading } = this.state;
  console.log("data",quotes)
  console.log(isLoading)


  const mainContent = isLoading ? 
    <>
    <div className="main">
        <h1>{quotes[index].text}</h1>
        <h3>-{quotes[index].author}</h3>
        <button onClick={this.handleNext}>Next quote </button>
       
        <i className='icon'>< FaTwitterSquare /></i>
      </div>
  </>
  :         <i className="fa fa-spinner fa-spin" style={{ fontSize: "48px" }}></i>

     return(
    <div className="App"> 
    <div className='container'>{mainContent}</div>

    </div>
  );
}
}

export default App;
