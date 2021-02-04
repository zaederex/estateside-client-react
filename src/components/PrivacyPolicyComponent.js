import React from 'react';
import './css/PrivacyContact.css'
import FooterComponent from "./FooterComponent";
import TopNavigationComponent from "./TopNavigationComponent";

const PrivacyPolicyComponent = ({state, login, logout, updateSelectedNavItem, toggleProfileUpdated, toggleContactRequested, updateContact}) =>
    <div className="wbdv-privacy-policy">
        <div className="home-page-top">
            <TopNavigationComponent state={state}
                                    login={login}
                                    logout={logout}
                                    updateSelectedNavItem={updateSelectedNavItem}
                                    toggleProfileUpdated={toggleProfileUpdated}
                                    toggleContactRequested={toggleContactRequested}
                                    updateContact={updateContact}
            />
            <header id="wbdv-privacy-heading">
                <h1>Estateside Privacy Policy</h1>
            </header>
        </div>
        <div className="privacy-body container">

            <h3>General Terms</h3>
            <p>
                This privacy policy ("policy") will help you understand how Estateside
                ("us", "we", "our") uses and protects the data you provide to us when you visit and
                use
                Estateside ("website", "service").
            </p>
            <p>
                We reserve the right to change this policy at any given time, of which you will be
                promptly updated. If you want to make sure that you are up to date with the latest
                changes, we advise you to frequently visit this page.
            </p>

            <h3 id="what">What User Data We Collect</h3>
            <p>
                When you visit the website, we may collect the following data:
                <ol>
                    <li>Your IP address.</li>
                    <li>Your contact information and email address.</li>
                    <li>Other information such as interests and preferences.</li>
                    <li>Data profile regarding your online behavior on our website.</li>
                </ol>
            </p>

            <h3 id="why">Why We Collect Your Data</h3>
            <p>
                We are collecting your data for several reasons:
                <ol>
                    <li>To better understand your needs.</li>
                    <li>To improve our services and products.</li>
                    <li>To send you promotional emails containing the information we think you will
                        find
                        interesting.
                    </li>
                    <li>To contact you to fill out surveys and participate in other types of market
                        research.
                    </li>
                    <li>To customize our website according to your online behavior and personal
                        preferences.
                    </li>
                </ol>
            </p>

            <h3 id="safeguarding">Safeguarding and Securing the Data</h3>
            <p>
                Estateside is committed to securing your data and keeping it confidential.
                Estateside
                has done all in its power to prevent data theft, unauthorized access, and disclosure
                by
                implementing the latest technologies and software, which help us safeguard all the
                information we collect online.
            </p>

            <h3 id="cookies">Our Cookie Policy</h3>
            <p>
                Once you agree to allow our website to use cookies, you also agree to use the data
                it
                collects regarding your online behavior (analyze web traffic, web pages you spend
                the
                most time on, and websites you visit).
            </p>
            <p>
                The data we collect by using cookies is used to customize our website to your needs.
                After we use the data for statistical analysis, the data is completely removed from
                our
                systems.
            </p>
            <p>
                Please note that cookies don't allow us to gain control of your computer in any way.
                They are strictly used to monitor which pages you find useful and which you do not
                so
                that we can provide a better experience for you.
            </p>
            <p>
                If you want to disable cookies, you can do it by accessing the settings of your
                internet
                browser. (Provide links for cookie settings for major internet browsers).
            </p>

            <h3 id="links">Links to Other Websites</h3>
            <p>
                Our website contains links that lead to other websites. If you click on these links,
                Estateside is not held responsible for your data and privacy protection. Visiting
                those
                websites is not governed by this privacy policy agreement. Make sure to read the
                privacy
                policy documentation of the website you go to from our website.
            </p>

            <h3 id="restrictions">Restricting the Collection of your Personal Data</h3>

            <p>
                When you are filling the forms on the website, make sure to check if there is a box
                which you can leave unchecked, if you don't want to disclose your personal
                information.
            </p>
            <p>
                If you have already agreed to share your information with us, feel free to contact
                us
                via email and we will be more than happy to change this for you.
            </p>
            <p>
                Estateside will not lease, sell or distribute your personal information to any third
                parties, unless we have your permission. We might do so if the law forces us. Your
                personal information will be used when we need to send you promotional materials if
                you
                agree to this privacy policy.
            </p>

            <h3 id="contact">
                <a href="/contact">Contact us</a>
            </h3>

            <p>
                To contact us or request a copy of this policy, reach out to Northeastern University
                and reference Estateside in regards to CS5610 - Fall 2020.
            </p>
        </div>
        <FooterComponent/>
    </div>

export default PrivacyPolicyComponent;
