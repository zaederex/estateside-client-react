import React from "react";
import AppointmentComponent from "./AppointmentComponent";
import "./css/AppointmentListComponent.css"

export default class AppointmentListComponent extends React.Component {

    state = {
        appointments:  []
    };

    componentDidMount() {
        this.setState({
                          appointments: this.props.appointments
                      })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ appointments: nextProps.appointments });
    }

    render () {
        return (
            <div>
                <div>
                    <div className="container">
                        <table className="table">
                            <thead className="text-white">
                            <tr>
                                <th>
                                    <i className="fa fa-map-pin wbdv-table-header-icon"/>
                                    Property Address
                                </th>
                                <th>
                                    <i className="fa fa-users wbdv-table-header-icon"/>
                                    Viewer
                                </th>
                                <th>
                                    <i className="fa fa-calendar-plus wbdv-table-header-icon"/>
                                    Appointment Date
                                </th>
                                <th>
                                    <i className="fa fa-check-square wbdv-table-header-icon"/>
                                    Message
                                </th>
                                <th className="d-none d-md-table-cell wbdv-col-width"/>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.appointments &&
                                this.state.appointments.map(appointment =>
                                                     <AppointmentComponent
                                                         appointment={appointment}
                                                         cancelAppointment={this.props.cancelAppointment}
                                                     />)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }

}

