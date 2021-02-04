import React from 'react';
import GoogleLogin from 'react-google-login';

import {login} from "../services/GoogleOauthService";
import {Link} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import {useHistory} from "react-router";

const LoginComponent = ({clientLogin, role, buttonText, updateSelectedNavItem}) => {
    const history = useHistory();

    const responseGoogle = async (authResult) => {
        try {
            if (authResult['code']) {
                const result = await login(authResult['code'], role);
                clientLogin(result);
                if (role === 'landlord') {
                    updateSelectedNavItem('profile');
                    history.push('/profile');
                }
            } else {
                throw new Error(authResult);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <GoogleLogin
            // use your client id here
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={renderProps => (
                <Tooltip title="Login">
                    <Link to="/api/login" onClick={renderProps.onClick}
                          disabled={renderProps.disabled}>{buttonText} </Link>
                </Tooltip>
            )}
            buttonText=""
            responseType="code"
            /**
             * To get access_token and refresh_token in server side,
             * the data for redirect_uri should be postmessage.
             * postmessage is magic value for redirect_uri to get credentials without actual redirect uri.
             */
            redirectUri="postmessage"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default LoginComponent
