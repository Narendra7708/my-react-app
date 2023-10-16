import logourl from "./logo.jpeg"

import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { FaAmazon, FaGooglePlusG, FaWhatsapp } from "react-icons/fa6";



const FooterComp = () => {

    return (
        <div>
            <footer class="bg-dark text-center text-white" style={{borderRadius:'9px'}}>
                <div class="container p-4 pb-0">
                    <section class="mb-4">
                        <div>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button"><i class="fab fa-facebook-f"><CiFacebook /></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/i/flow/login" role="button"><i class="fab fa-twitter"><CiTwitter /></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.google.com/" role="button"><i class="fab fa-google"><FaGooglePlusG /></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/?hl=en" role="button"><i class="fab fa-instagram"><CiInstagram /></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.amazon.in/" role="button"><i class="fab fa-amazon"><FaAmazon /></i></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://web.whatsapp.com/" role="button"><i class="fab fa-whatsup"><FaWhatsapp /></i></a>
                        </div>
                        <img src={logourl} width={200} height={"auto"}/>

                    </section>
                </div>
                <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    Conditions of Use and  Privacy Notice.   © 1996-2023
                    <a class="text-white" href="http://localhost:3000/"> Stop-shop.com</a> Inc. or its affiliates
                </div>
            </footer>
        </div>
    )
}
export default FooterComp




