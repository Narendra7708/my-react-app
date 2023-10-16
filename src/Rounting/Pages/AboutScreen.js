
import Header from "../../components/header/Header"
import FooterComp from "./Footer"




const AboutComp = () => {
    return (
        <>
            <Header />
        <div style={{backgroundColor:"#DD9"}}>
            <form >
                <div className='form-container'>

                    <h1> Create account </h1>

                    <label> Your name </label>
                    <input
                        className='alertInput'
                        name="userName"
                        type="text"
                        autoComplete="on"
                    />
                    <label> Email </label>
                    <input
                        className='alertInput'
                        name="email"
                        type="text"
                        autoComplete="on"
                    />
                    <label> Password </label>
                    <input
                        className='alertInput'
                        name="password"
                        type="text"
                        autoComplete="off"
                        placeholder="At least 6 characters"
                    />
                    <p>
                        Passwords must be at least 6 characters. </p>


                    <label> Re-enter password </label>
                    <input
                        className='alertInput'
                        name="rePassword"
                        autoComplete="off"
                    />
                    <button type='submit'> Create your account </button>
                    <p> By creating an account, you agree to Amazon's
                        <span className="sm-font">Conditions</span> of Use and <span className='sm-font'> Privacy Notice. </span></p>
                    <p> Already have an account?  <span>Sign-in ▸</span> </p>
                </div>
            </form>
        </div>
            <FooterComp />
            </>
    )
}
export default AboutComp