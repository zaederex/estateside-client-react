import React from 'react';
import TopNavigationComponent from "./TopNavigationComponent";
import AppointmentListComponent from "./AppointmentListComponent";
import AppointmentService from "../services/AppointmentService";

export default class VisitingAppointment extends React.Component {
    state = {
        appointments: []
    };

    cancelAppointment = (zpid, userId) => {
        AppointmentService.deleteAppointment(zpid, userId)
            .then(r => {
                this.setState({
                                  appointments: this.state.appointments.filter(a => a.zpid !== zpid),
                              })
                console.log(this.state.appointments)
            })

            // .then(this.setState(prevState => ({
            //     appointments: prevState.appointments.filter(a => a.zpid !== zpid) //&& a.userId !== userId
            // })));
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;
        const zpid = this.props.match.params.zpid;

        if (userId === null || userId === undefined || userId === '') { //search appointments by property
            this.setState(() => {
                AppointmentService.findAppointmentsForProperty(zpid)
                    .then(response => {
                        this.setState({
                                          appointments: response
                                      })
                    });
            })
        }

        if (zpid === null || zpid === undefined || zpid === '') { //search appointments by user
            this.setState(() => {
                AppointmentService.findAppointmentsForUser(userId)
                    .then(response => {
                        this.setState({
                                          appointments: response
                                      })
                    });
            })
        }

    }

    render() {
        return (
            <div>
                <div className="home-page-top">
                    <TopNavigationComponent state={this.props.state}
                                            login={this.props.login}
                                            logout={this.props.logout}
                                            updateSelectedNavItem={this.props.updateSelectedNavItem}
                                            toggleProfileUpdated={this.props.toggleProfileUpdated}
                                            toggleContactRequested={this.props.toggleContactRequested}
                                            updateContact={this.props.updateContact}
                    />
                    {this.state.appointments.length > 0 &&
                     <header id="wbdv-about-heading">
                         <h1>Your appointments</h1>
                     </header>
                    }
                    {this.state.appointments.length === 0 &&
                     <div className="no-result-div">
                     <span>
                         <i className="fa fa-exclamation-circle" aria-hidden="true"/>
                         &nbsp; There are no requested appointments.
                     </span>
                     </div>
                    }
                </div>


                {this.state.appointments.length > 0 &&
                 <AppointmentListComponent state={this.props.state}
                                           login={this.props.login}
                                           logout={this.props.logout}
                                           updateSelectedNavItem={this.props.updateSelectedNavItem}
                                           toggleProfileUpdated={this.props.toggleProfileUpdated}
                                           toggleContactRequested={this.props.toggleContactRequested}
                                           updateContact={this.props.updateContact}
                                           appointments={this.state.appointments}
                                           cancelAppointment={this.cancelAppointment}

                 />
                }

                <br/>
            </div>
        )
    }
}
