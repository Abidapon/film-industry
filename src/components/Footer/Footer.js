import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-primary">
                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title text-warning">Media</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="rt">Online</a>
                            </li>

                            <li>
                                <a href="huy" >Print</a>
                            </li>

                            <li>
                                <a href="hhg">Alternative Ads</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title text-warning">Teaching Method</h2>

                        <ul className="nav__ul nav__ul--extra">
                            <li>
                                <a href="gf">Intensive care</a>
                            </li>

                            <li>
                                <a href="t">Competing globaly </a>
                            </li>

                            <li>
                                <a href="tf">After course helpline</a>
                            </li>

                            <li>
                                <a href="tfh">Notes</a>
                            </li>

                            <li>
                                <a href="th">Online Sessions</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title text-warning">Legal</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="asx">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="vv">Terms & Condition</a>
                            </li>

                        </ul>
                    </li>
                </ul>
                <br />
                <br />
                <div className="legal">

                    <p>&copy; All rights reserved by Premium Courses 2021</p>

                </div>
            </footer>
        </div>
    );
};

export default Footer;