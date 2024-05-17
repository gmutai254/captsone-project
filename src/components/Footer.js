
import React from "react";
import logo from '../images/small_logo.png';
function Footer() {
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>Address: <br/>123 Street Lane, USA</li>
                        <li>Phone: <br/>12345XXXXX</li>
                        <li>Email: <br/>littlelem12@example.com</li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;