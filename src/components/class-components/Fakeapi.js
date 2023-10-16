import { Component } from "react";
import axios from 'axios';
import { Button, Card, CardBody, CardText, CardTitle } from "react-bootstrap";




class Fakeapi extends Component{

constructor(){
    super()
    this.state={
        products:[],
        count:0
    }
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

   componentDidMount(){

    axios.get('https://fakestoreapi.com/products')
  .then(response=>this.setState({products:response.data}))
    
    
   }


    render(){
        console.log("render")
        console.log(this.state.products)
        return(
            <div style={{backgroundColor:"black",
            border:"2px solid "
        }}>
             <h1 style={{color:"red", textAlign:"center"}}>products Detelis</h1>
            {
                this.state.products.map((product)=>{
                    return(
                    <Card style={{
                    //     width:"350px",
                    //     height:"520px",
                    //    fontSize:"15px",
                    //   display:'inline-flex',
                    //    marginLeft:"50px",
                    //    //padding:"5px",
                    //    border:"4px solid "
                                    width:300,
                                    height:550,
                                    margin:" 60px",
                                    border:"4px solid",
                                    font:"icon",
                                    display:"inline-flex",
                                    color:"black"
                        }}>
                        <CardBody>
                            <CardTitle style={{textAlign:"center",color:"red"}}><h1>product</h1></CardTitle>
                            <Card.Img src={product.image} alt={product.image} width={50} height={150}/>
                            <CardText style={{margin:"12px 2px"}}>
                                <ul>
                                <li>Id:{product.id}</li>
                                <li>Title:{product.title}</li>
                                {/* <li>Description:{product.description}</li> */}
                                <li>Category:{product.category}</li>
                                <li>price:{product.price}</li>
                                <li>Rating:{product.rating["rate"]}</li>
                                </ul>
                                <Button href="#button" variant="success">Add to cart</Button>
                                <Button style={{margin:"5px"}}>More Detelis</Button>

                                <h1 style={{textAlign:"center"}}>{this.state.count}</h1>
                               <center> <Button variant="secondary"  onClick={this.incrementHandler}>+</Button>
                                <Button  variant="danger" style={{margin:"5px"}} onClick={this.decrementHandler}>-</Button>
                                <Button variant="warning" style={{margin:"5px"}} onClick={this.resetHandler}>0</Button></center>
                            </CardText>
                            
                        </CardBody>
                       
                    </Card>
                    )
                })
            }
            </div>

        )
    }
}
export default Fakeapi