import React from "react";
import TopNavigationComponent from "./TopNavigationComponent";
import FooterComponent from "./FooterComponent";

const RegisterComponent = ({state, login, logout, updateSelectedNavItem, toggleProfileUpdated, toggleContactRequested, updateContact}) =>
    <div>
        <TopNavigationComponent state={state}
                                login={login}
                                logout={logout}
                                updateSelectedNavItem={updateSelectedNavItem}
                                toggleProfileUpdated={toggleProfileUpdated}
                                toggleContactRequested={toggleContactRequested}
                                updateContact={updateContact}
        />
        <header id="main-header">
            <h1>Register</h1>
        </header>
        <div className="container">
            <div className="form-group row">
                <label htmlFor="first-name" className="col-sm-3 col-form-label"> First Name </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-password"
                           id="password" type="password" name="username"
                           placeholder="Enter first name" required/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="last-name" className="col-sm-3 col-form-label"> Last Name </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-password"
                           id="password" type="password" name="username"
                           placeholder="Enter last name" required/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="email" className="col-sm-3 col-form-label"> Email </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-password"
                           id="password" type="password" name="username"
                           placeholder="Enter email" required/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="verify-email" className="col-sm-3 col-form-label"> Verify Email </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-password"
                           id="password" type="password" name="username"
                           placeholder="Re-enter email" required/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="username" className="col-sm-3 col-form-label"> Username </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-username"
                           id="username" type="text" name="username" placeholder="Enter username" required/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="password" className="col-sm-3 col-form-label"> Password </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-password"
                           id="password" type="password" name="username"
                           placeholder="Enter password" required/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="verify-password"
                       className="col-sm-3 col-form-label"> Verify Password </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-password-verify"
                           id="verify-password" type="password" name="username"
                           placeholder="Re-enter password" required/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-3"/>
                <div className="col-sm-9">
                    <button className="btn-success btn-block wbdv-register"
                            formAction="../profile/profile.template.client.html">Sign up
                    </button>
                    <button className="btn-danger btn-block wbdv-register"
                            formAction="../profile/profile.template.client.html">Cancel
                    </button>
                </div>
            </div>
        </div>
        <FooterComponent/>
    </div>

export default RegisterComponent
