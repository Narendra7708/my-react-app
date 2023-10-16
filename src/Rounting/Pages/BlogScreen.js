import { Button } from "react-bootstrap"
import Header from "../../components/header/Header"
import FooterComp from "./Footer"



const Blog=()=>{
    return(
        <>
        <Header/>
        <div style={{border:"4px solid #fff "}}>
        
       <h3>Contact us</h3>
       <p>If you have any questions or concerns, feel free to reach out to us!</p>
       <form>
        <div>
        <label>Name:</label>
        <input type="text" style={{width:"1250px",padding:"10px",marginBottom:"10px"}}/>
       </div>
       <div>
        <label>Email:</label>
        <input type="email" style={{width:"1250px",padding:"10px",marginBottom:"10px"}}/>
       </div><div>
        <label>Message:</label>
        <input type="text" style={{width:"1250px",padding:"10px",marginBottom:"10px",height:"80px"}}/>
       </div>
       <div>
        <Button>submit</Button>
       </div>
        </form>
        </div>
      <FooterComp/>
        
        </>
    )
}
export default Blog