import React from 'react';
import '../components/css/Help.css'
import FooterComponent from "./FooterComponent";
import TopNavigationComponent from "./TopNavigationComponent";

const HelpComponent = ({state, login, logout, updateSelectedNavItem, toggleProfileUpdated, toggleContactRequested, updateContact}) =>
    <div className="wbdv-help">
        <div className="home-page-top">
            <TopNavigationComponent state={state}
                                    login={login}
                                    logout={logout}
                                    updateSelectedNavItem={updateSelectedNavItem}
                                    toggleProfileUpdated={toggleProfileUpdated}
                                    toggleContactRequested={toggleContactRequested}
                                    updateContact={updateContact}
            />
            <header id="wbdv-help-heading">
                <h1>FAQs</h1>
            </header>
        </div>
        <div className="help-body container">
            <h1 className="faqHeader">General Questions</h1>

            <div className="panel-group">
                <div className="panel panel-default">
                    <input type="checkbox" id="q1"/>
                    <label htmlFor="q1">Is account registration required?</label>
                    <span id="content">
                        Account registration is not required.
                    </span>
                </div>
                <div className="panel panel-default ">
                    <input type="checkbox" id="q2"/>
                    <label htmlFor="q2">What is Estateside?</label>
                    <span id="content">
                        Estateside is a property rental application. Please see the "info" tab for more information.
                    </span>
                </div>
                <div className="panel panel-default">
                    <input type="checkbox" id="q3"/>
                    <label htmlFor="q3">Is Estateside trustworthy?</label>
                    <span id="content">
                        Estateside brings renters to properties and properties to renters. We verify property managers
                        before listings are posted and verify renters before they can make an account.
                    </span>
                </div>
                <br/>

                <h1 className="faqHeader">Accounts</h1>

                <div className="panel panel-default">
                    <input type="checkbox" id="q4"/>
                    <label htmlFor="q4">How do I sign up for an account?</label>
                    <span id="content">
                        Under the "Login" screen, there is an additional place to "Register."
                    </span>
                </div>
                <div className="panel panel-default">
                    <input type="checkbox" id="q5"/>
                    <label htmlFor="q5">Do I have to have an account to schedule an appointment?</label>
                    <span id="content">
                        An account is required to make an appointment.
                    </span>
                </div>
                <div className="panel panel-default">
                    <input type="checkbox" id="q6"/>
                    <label htmlFor="q6">How do I update my information?</label>
                    <span id="content">
                        Once logged into your account, select your "profile" and you will be able to update your information.
                    </span>
                </div>
                <div className="panel panel-default">
                    <input type="checkbox" id="q7"/>
                    <label htmlFor="q7">How do I delete my account?</label>
                    <span id="content">
                        From your profile, click the "delete account" button. This will permanently
                        delete your account and none of your saved properties or history will be recoverable.
                    </span>
                </div>
                <div className="panel panel-default">
                    <input type="checkbox" id="q8"/>
                    <label htmlFor="q8">How is my information kept safe?</label>
                    <span id="content">
                        Estateside will not sell, post, or otherwise use your information without your
                        expressed permission. Please refer to our privacy policy for more information.
                    </span>
                </div>
                <div className="panel panel-default">
                    <input type="checkbox" id="q9"/>
                    <label htmlFor="q9">How do I report a suspicious rental?</label>
                    <span id="content">
                        Contact Estateside via the "Contact Us" tab.
                    </span>
                </div>
                <br/>

                <h1 className="faqHeader">Listings</h1>

                <div className="panel panel-default">
                    <input type="checkbox" id="q10"/>
                    <label htmlFor="q10">How do I search listings?</label>
                    <span id="content">
                            Enter a location (either a ZipCode or City,State) in the search bar, then
                            click the "Search" button.
                    </span>
                </div>
                <div className="panel panel-default">
                    <input type="checkbox" id="q11"/>
                    <label htmlFor="q11">How can I save listings I like?</label>
                    <span id="content">
                        From the search results page, you will be able to save the listing.
                    </span>
                </div>
                <div className="panel panel-default">
                    <input type="checkbox" id="q12"/>
                    <label htmlFor="q12">What about scams?</label>
                    <span id="content">
                        There are a variety of ways to check for scams. Estateside will never ask you
                        for money. Additionally, if the property manager is asking for a MoneyOrder,
                        Visa Prepaid Card, or other prepaid money option or if the deal seems to good
                        to be true, it might be. Be wary of scams and use your best judgement.
                    </span>
                </div>
                <br/>

                <h1 className="faqHeader">Contacting a Property</h1>

                <div className="panel panel-default">
                    <input type="checkbox" id="q13"/>
                    <label htmlFor="q13">How do I contact a property?</label>
                    <span id="content">
                        From a property page, you can make an appointment to view a property.
                    </span>
                </div>
                <div className="panel panel-default">
                    <input type="checkbox" id="q14"/>
                    <label htmlFor="q14">I've seen a property. What's next?</label>
                    <span id="content">
                        At this point, if you like property, you can work with the property manager
                        for further steps. If you didn't like it, there's no obligation!
                    </span>
                </div>

            </div>
        </div>
        <FooterComponent/>
    </div>

export default HelpComponent
