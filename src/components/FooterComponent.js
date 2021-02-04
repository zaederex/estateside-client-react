import React from 'react';
import './css/Footer.css'

const FooterComponent = () =>
    <div>
        <footer id="footer">
            <ul className="copyright">
                <li>&copy; Estateside.</li>
                <li>Powered by: <a href="https://www.zillow.com">Zillow</a>&nbsp;
                    | <a href={"https://www.bridgeinteractive.com/"}>Bridge API</a>
                </li>
            </ul>
        </footer>
    </div>

export default FooterComponent
