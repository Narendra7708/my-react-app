import { Component } from "react";
import { Button } from "react-bootstrap";
import Stundent from "./Stundent-button";
import Card from "./Card";




class YoutubeButton extends Component{
    
    state={
        textMessage:"please subsribe",
        count:0,
        stundentdata:[
            {
                name:"nari",
                roll:1,
                class:"b tech",
                place:"hyd"
            },
            {
                name:"suubu",
                roll:2,
                class:"b tech",
                place:"hyd"
            },
            {
                name:"uday",
                roll:3,
                class:"b tech",
                place:"hyd"
            }
        ]
    }

    handleClick=()=>{
        this.setState(
            {
            textMessage:"thanks for subscribing"
        }
      )
    }
    incrementHandler=()=>{
     this.setState(
        {
            count:this.state.count+2
                
        }
     )
    }
    
    decrementHandler=()=>{
        this.setState(
            {
                count:this.state.count-1
            }
         )
    }

    resetHandler=()=>{
        this.setState(
            {
                count:0
            }
         )
    }

    render(){

        return(
            <div>

            <button style={{background:"red",color:"white"}} onClick={this.handleClick}>{this.state.textMessage}</button>
            <h1>{this.state.count}</h1>
            <center><h1 >narendra</h1></center>
            <button onClick={this.incrementHandler}>increment</button>
            <button onClick={this.decrementHandler}>decrement</button>
            <button onClick={this.resetHandler}>reset</button>
            <Button as="a" variant="success">
    Button as link
  </Button>

  <Card/>

             {
                this.state.stundentdata.map((stundent)=>{
                    return(

                           <div> 
                            <h1>{stundent.name}</h1>
                            <h1>{stundent.roll}</h1>
                            <h1>{stundent.class}</h1>
                            
                           </div>
                            
                    )
                    })
             }
             <Stundent/>
            </div>
        )
    }
}
export default YoutubeButton