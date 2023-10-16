import { useContext, useEffect, useState } from "react"
import { LoginInfo } from "../../App"
import axios from "axios"
import { FaUser } from "react-icons/fa6";
import { BiSolidLock } from "react-icons/bi";
import loginurl from "./loginuser.jpeg"
import FooterComp from "./Footer";





function Login() {

    const [userInput, setUserInput] = useState({ username: "", password: "" });
    const [DataAuthentication, setDataAuthentication] = useState([])
    const [loginSuccess, setLoginSuccess] = useState(null)

    const loginInfo = useContext(LoginInfo)


    const InputHandler = (event) => {
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value
        });
    }

    useEffect(
        () => {
            axios.get(`https://fakestoreapi.com/users`)
                .then((res) => setDataAuthentication(res.data))
                .catch(err => console.log(err));
        }, []
    )

    const SubmitHandler = (event) => {
        event.preventDefault();


        const user = DataAuthentication.find((userData) => {
            return userData.username === userInput.username && userData.password === userInput.password;
        });

        if (user) {

            setLoginSuccess(true);
            loginInfo.loginUser()
        } else {

            setLoginSuccess(false);
        }

        setUserInput({
            username: "",
            password: ""
        });
    }

    return (
        <div className="div1">
            
            <form  onSubmit={SubmitHandler}>
            <div className='form-container'>
            <h1 style={{marginLeft:"80px"}}>Login From</h1>
              
                <img src={loginurl} width={100} height={"auto"} style={{marginLeft:"90px"}}/>
                <div >
                    <div>
                        <label><FaUser/>  User Name :</label>
                        <input type="text" value={userInput.username} onChange={InputHandler} name='username' />
                    </div>
                    <div>
                        <label><BiSolidLock/>Password :</label>
                        <input type="password" value={userInput.password} onChange={InputHandler} name='password' />
                    </div>
                    <div>
                        <input type="submit" />
                        {loginSuccess !== null && <p>{loginSuccess ? "Login Successfully" : "Username or password is invalid"}</p>}
                    </div>
                    <div>
                   <p>Forgot Password?<a href="#">Click Here</a></p>
                   </div>
                </div>
                </div>
            </form>
            <FooterComp/>
        </div>
    )
}
export default Login