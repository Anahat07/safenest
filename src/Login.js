import React, { useEffect } from 'react'; 
import './styles/login.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react';
import Navbar from './Navbar';


const Login = withAuthInfo((props) => {
    const logoutFunction = useLogoutFunction();
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions();

    useEffect(() => {
        AOS.init(); 
        AOS.refresh(); 
    }, []);

    const handleContinue = () => {
        window.location.href = '/welcome';
    };

    return (
        <div className="welcome-page">
            <Navbar />

            <main className="welcome-content">
                <div className="intro-text" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="heading">Welcome to SafeNest</h2>
                    <p className="subheading">Built to Empower.</p>
                    {!props.isLoggedIn ? (
                        <button className="cta-button" onClick={() => redirectToSignupPage()}>Get Started</button>
                    ) : (
                        <>
                        <button className="account-button" onClick={() => redirectToAccountPage()}>My Account</button>
                        <button className="continue-button" onClick={handleContinue}>Continue</button>
                        </>
                    )}
                </div>

                <section className="about-us" data-aos="fade-up" data-aos-duration="1000">
                    <h3>About Us</h3>
                    <p>
                        SafeNest is dedicated to creating a secure and supportive environment 
                        for women. Our mission is to empower individuals and provide resources 
                        that promote safety and well-being in the community. With a team of 
                        passionate individuals, we strive to make a positive impact and ensure 
                        that everyone feels valued and protected.
                    </p>
                </section>
            </main>

            <footer className="footer">
                <div className="footer-content" data-aos="fade-up" data-aos-duration="1000">
                    <h3>Contact Us</h3>
                    <p>Email: contact@safenest.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 SafeNest Lane, City, Country</p>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} SafeNest. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
});

export default Login;