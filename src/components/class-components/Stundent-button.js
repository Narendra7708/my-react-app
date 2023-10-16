import { Component } from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "react-bootstrap";



class Stundent extends Component{
state={
    Stundentdate:[
        {
            Userid: 1,
            name:"Narendra",
            email:"narendra@gmail.com",
            company:"TCS",
            place:"Hyderabad",
            salary:30000,
            imgaeUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNza619tgAMXHh7QDK6kWxXbsBJ-K082-aMg&usqp=CAU"
        },
        {
            Userid:2,
            name:"Subbarao",
            email:"subbarao@gmail.com",
            company:"HCL",
            place:"Hyderabad",
            salary:40000,
            imgaeUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUheArlyd8y2_STzWb-dy00N1hacwRd59OaF2xxtX3sRk8lbirbzHg_1p-YvFfSdLArNA&usqp=CAU"
        },
        {
            Userid:3,
            name:"Sudhakar",
            email:"sudhakar@gmail.com",
            company:"Deloitte",
            place:"Mumbai",
            salary:25000,
            imgaeUrl:"https://m.economictimes.com/thumb/height-450,width-600,imgsize-385985,msid-67954694/deloitte-agencies.jpg"
        },
        {
            Userid: 4,
            name:"Venky",
            email:"venky@gmail.com",
            company:"Congnizant",
            place:"Pune",
            salary:35000,
            imgaeUrl:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202306/edl1-ofvaaahmlq-sixteen_nine.jpg?size=948:533s"
        },    
        {
            Userid:5,
            name:"Venkatarao",
            email:"venkatarao@gmail.com",
            company:"NTT",
            place:"Hyderabad",
            salary:40000,
            imgaeUrl:"https://contentstatic.techgig.com/thumb/msid-82998151,width-1200,height-900,resizemode-4/82998151.jpg"
        },
        {
            Userid:6,
            name:"Nagesh",
            email:"Nagesh@gmail.com",
            company:"GlobalData",
            place:"Hyderabad",
            salary:34000,
            imgaeUrl:"https://i.ytimg.com/vi/mlA9ck54vl4/maxresdefault.jpg "
        },
        
    ]
}
    render(){

        return(
            <div style={
                {
                    //display:"inline-flex",
                    backgroundColor:"black",
                    border:"2px solid "
                    }}>
                        <h1 style={{textAlign:"center",color:"red",margin:"20px"}}>Employee Detelis</h1>
                {
                    this.state.Stundentdate.map((stundent)=>{
                        return(
                            
                            <Card style={
                                {
                                    width:300,
                                    ///padding:"2px",
                                    margin:" 50px",
                                    border:"4px solid",
                                    font:"icon",
                                    display:"inline-flex",
                                    color:"black",
                                    
                                   
                                    }
                                    }>
                                <CardBody >
                                    <CardTitle style={{color:"black",textAlign:"center"}}>Employee Detelis</CardTitle>
                                    <Card.Img variant="top" src={stundent.imgaeUrl} width={200} height={200}/>
                                    <CardText style={{margin:"12px 2px"}}>
                                    <p>{`User-id: ${stundent["Userid"]}`}</p>
                                    <p>{`Name: ${stundent["name"]}`}</p>
                                    <p>{`Email: ${stundent["email"]}`}</p>
                                    <p>{`Company: ${stundent["company"]}`}</p>
                                    <p>{`Place: ${stundent["place"]}`}</p>
                                    <p>{`Salary: ${stundent["salary"]}`}</p>
                                    </CardText>
                                    <Button variant="primary">More Detelis</Button>
                                    </CardBody>    
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}
export default Stundent