import React from "react";
import "./css/AppointmentComponent.css"
import PropertyService from "../services/PropertyService";
import UserService from "../services/UserService";
import IndividualPropertyDetailComponent from "./IndividualPropertyDetailComponent";
import Modal from "react-modal";
import UserDetailComponent from "./UserDetailComponent";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default class AppointmentComponent extends React.Component {

    state = {
        address: '',
        user: '',
        propertyDetailIsActive: false,
        profilePicIsActive: false,
        property: ''
    }

    componentDidMount() {
        PropertyService.findPropertyById(this.props.appointment.zpid)
            .then(property => {
                if (property.address.full !== undefined && property.address.full) {
                this.setState({
                                  address: property.address.full,
                                  property: property
                              })
                }
                if(!property.address.full && property.address) {
                    this.setState({
                                      address: property.address,
                                      property: property
                                  })
                }
            })

        UserService.findUserById(this.props.appointment.userId)
            .then(user => {
                this.setState({
                                  user: user
                              })
                console.log(this.state.user)
            })
    }

    togglePropertyDetailModal = () => {
        this.setState({
                          propertyDetailIsActive: !this.state.propertyDetailIsActive
                      })
    };

    toggleProfilePicModal = () => {
        this.setState({
                          profilePicIsActive: !this.state.profilePicIsActive
                      })
    };

    render() {
        return (
            // create an appointment row
            <tr key={this.props.appointment._id} className="table-secondary">
                <td>
                    <a
                        onClick={this.togglePropertyDetailModal}
                        title="view the property"
                        className="wbdv-hyperlink wbdv-appt-font-size">
                        {this.state.address}
                    </a>
                </td>

                <Modal isOpen={this.state.propertyDetailIsActive}
                       onRequestClose={this.togglePropertyDetailModal}
                       style={customStyles}>
                    <div className="container">
                        <IndividualPropertyDetailComponent
                            property={this.state.property}/>
                        <button onClick={this.togglePropertyDetailModal}
                                className="btn-primary btn btn-block">
                            Back
                        </button>
                    </div>
                </Modal>
                <td>
                    <a
                        onClick={this.toggleProfilePicModal}
                        title="see user"
                        className="wbdv-hyperlink wbdv-appt-font-size">
                        {this.state.user.name}
                    </a>
                </td>
                <Modal isOpen={this.state.profilePicIsActive}
                       onRequestClose={this.toggleProfilePicModal}
                       style={customStyles}>
                    {this.state && this.state.user !== '' && this.state.user !== undefined && this.state.user.profilePic !== undefined &&
                     <UserDetailComponent
                         user={this.state.user}/>
                    }
                </Modal>
                <td className="wbdv-appt-font-size">{this.props.appointment.appointmentDate.substring(0, 10)}</td>
                <td className="wbdv-appt-font-size">{this.props.appointment.message}</td>
                <td className="d-none d-md-table-cell">
                    <i title="delete appointment" className="fa fa-times fa-pull-right wbdv-table-body-icon"
                       onClick={() => this.props.cancelAppointment(this.props.appointment.zpid, this.props.appointment.userId)}/>
                </td>
            </tr>
        )
    }
}

