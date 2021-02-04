import React from "react";
import "./css/PropertyCardComponent.css"
import Modal from 'react-modal'
import {BookAppointmentComponent} from "./BookAppointmentComponent";
import DateUtil from "../util/DateUtil";
import IndividualPropertyDetailComponent from "./IndividualPropertyDetailComponent";
import PropertyService from "../services/PropertyService";
import {UpdateListingComponent} from "./UpdateListingComponent";
import AppointmentService from "../services/AppointmentService";
import LoginComponent from "./LoginComponent";

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

export default class PropertyCardComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            propertyDetailIsActive: false,
            isFavourite: false,
            countFavourite: 0,
            appointmentDate: new Date(),
            appointmentMessage: ''
        }
    }

    toggleModal = () => {
        this.setState({
                          isActive: !this.state.isActive
                      })
    };

    toggleFavourite = () => {
        if (!this.state.isFavourite) { //fav a property
            PropertyService.createFavProperty(this.props.parentState.userProfile.userId,
                                              this.props.property.zpid)
                .then(r => this.setState({
                                             isFavourite: true,
                                             countFavourite: this.state.countFavourite + 1
                                         }))
        } else { //undo fav
            PropertyService.deleteFavProperty(this.props.parentState.userProfile.userId,
                                              this.props.property.zpid)
                .then(r => {
                    this.setState({
                                      isFavourite: false,
                                      countFavourite: this.state.countFavourite - 1
                                  })
                    this.props.removeFav(this.props.parentState.userProfile.userId,
                                         this.props.property.zpid)
                })
        }
    };

    togglePropertyDetailModal = () => {
        this.setState({
                          propertyDetailIsActive: !this.state.propertyDetailIsActive
                      })
    };

    updateAppointmentDate = (date) => {
        this.setState(prevState => ({
            appointmentDate: new Date(date)
        }))
    };

    updateAppointmentMessage = (message) => {
        this.setState(prevState => ({
            appointmentMessage: message
        }))
    };

    submitAppointment = (zpid) => {
        AppointmentService.createAppointmentForProperty(zpid, {
            userId: this.props.parentState.userProfile.userId,
            zpid: zpid,
            appointmentDate: this.state.appointmentDate,
            message: this.state.appointmentMessage
        }).then(response => {
            window.alert('Appointment created!');
        })
    };

    componentWillMount() {
        PropertyService.isPropertyFavouritesForUser(this.props.parentState.userProfile.userId,
                                                    this.props.property.zpid)
            .then(res => {
                if (res.isFav === true) {
                    this.setState({
                                      isFavourite: res
                                  })
                }
            })

        PropertyService.countInterestedUsers(this.props.property.zpid)
            .then(res => {
                if (res.count !== 0) {
                    this.setState({
                                      countFavourite: res.count
                                  })
                }
            })

        Modal.setAppElement('body');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        let randomNum = Math.random() * 100;
        const imageUrl = `https://source.unsplash.com/collection/1896718/300x200/?sig=${randomNum}`
        // const imageUrl = "https://picsum.photos/300/200"; // use this if the other image url
        // fails to load images
        return (
            // creating a property card
            <div className="col-sm-6 col-md-4 col-lg-3 wbdv-property-card">
                <div className="card h-100">
                    <img className="card-img-top" src={imageUrl}/>
                    <div className="card-body bg-primary">
                        {(this.props.property.zestimate || (this.props.property.rental
                                                            && this.props.property.rental.zestimate))
                         &&
                         <h2>${this.props.property.zestimate
                               || this.props.property.rental.zestimate}</h2>
                        }
                        <h4 className="card-title">
                            <a
                                onClick={this.togglePropertyDetailModal}
                                title="view the property"
                                className="wbdv-hyperlink">{this.props.property.address.full
                                                            !== undefined
                                                            && this.props.property.address.full}
                                {!this.props.property.address.full && this.props.property.address}
                            </a>
                        </h4>
                        <Modal isOpen={this.state.propertyDetailIsActive}
                               onRequestClose={this.togglePropertyDetailModal}
                               style={customStyles}>
                            <div className="container">
                                <IndividualPropertyDetailComponent
                                    property={this.props.property}/>
                                <button onClick={this.togglePropertyDetailModal}
                                        className="btn-primary btn btn-block">
                                    Back
                                </button>
                            </div>
                        </Modal>
                        {this.props.property.date &&
                         <p className="card-text text-white">
                             Available: {DateUtil.convertToDate(this.props.property.date)} <br/>
                         </p>
                        }
                    </div>

                    {/* card footer that displays option buttons */}
                    {this.props.showOptions &&
                     <div className="card-footer">
                         {
                             this.props.parentState.isLoggedIn &&
                             this.props.parentState.userProfile.role === 'landlord' &&
                             window.location.href.indexOf("portal") > -1 && // check if the current
                             // page is the
                             // landlord's property
                             // list
                             <span>
                                <div>
                                    {/*delete a property as a landlord (on his own property list page)*/}
                                    <i title="delete property"
                                       className="fa fa-trash-alt fa-lg wbdv-landlord-card-icon-trash float-right"
                                       onClick={() => this.props.deleteListing(
                                           this.props.property.zpid)}/>
                                </div>
                                 <div>
                                     {/*view a property appointment as a landlord (on his own property list page)*/}
                                     <a title="view the appointments for property"
                                        href={`/properties/${this.props.property.zpid}/appointments`}
                                        className="wbdv-hyperlink wbdv-landlord-card-icon float-right">
                                         <i className="fa fa-calendar-alt fa-lg"/>
                                     </a>
                                 </div>
                                 <div>
                                     {/*update a property as a landlord (on his own property list page)*/}
                                     <i title="edit property"
                                        className="fa fa-pencil-alt fa-lg wbdv-property-card-icon float-left"
                                        onClick={() => {
                                            this.props.setTemporaryPropertyObject(
                                                this.props.property.zpid);
                                            this.toggleModal();
                                            this.props.startEditingProperty(this.props.property);
                                        }}/>
                                     <Modal isOpen={this.state.isActive}
                                            onRequestClose={this.toggleModal}
                                            style={customStyles}>
                                         <div className="container">
                                             <UpdateListingComponent property={this.props.property}
                                                                     updateExistingProperty={this.props.updateExistingProperty}
                                                                     finishEditingProperty={this.props.finishEditingProperty}
                                                                     state={this.props.state}
                                                                     toggleModal={this.toggleModal}/>
                                             <button onClick={this.toggleModal}
                                                     className="btn-danger btn btn-block">
                                                 Cancel
                                             </button>
                                         </div>
                                     </Modal>
                                 </div>
                            </span>
                         }

                         {/*book appointment as a regular user*/}
                         {
                             this.props.parentState.isLoggedIn &&
                             this.props.parentState.userProfile.role !== 'landlord' &&
                             <span>
                                 <a title="book appointments"
                                    className="fa fa-calendar-alt fa-lg wbdv-property-card-icon float-left"
                                    style={{paddingLeft : "0px"}}
                                    onClick={this.toggleModal}/>
                                 <Modal isOpen={this.state.isActive}
                                        onRequestClose={this.toggleModal}
                                        style={customStyles}>
                                     <div className="container">
                                         <BookAppointmentComponent
                                             property={this.props.property}
                                             submitAppointment={this.submitAppointment}
                                             updateAppointmentDate={this.updateAppointmentDate}
                                             updateAppointmentMessage={this.updateAppointmentMessage}
                                         />
                                         <button onClick={this.toggleModal}
                                                 className="btn-primary btn btn-block">
                                             Cancel
                                         </button>
                                     </div>
                                 </Modal>
                             </span>
                         }

                         {/*see fav property info as a regular user*/}
                         {
                             this.props.parentState.isLoggedIn &&
                             this.props.parentState.userProfile.role !== 'landlord' &&
                             <span className="float-right">

                              <label className="wbdv-like-count">
                                  {this.state.countFavourite}
                              </label>
                                 {
                                     this.state.isFavourite &&
                                     <a className="fa fa-heart fa-lg wbdv-fav-property-icon-active"
                                        onClick={this.toggleFavourite}/>
                                 }
                                 {
                                     !this.state.isFavourite &&
                                     <i className="fa fa-heart fa-lg wbdv-fav-property-icon-inactive"
                                        onClick={this.toggleFavourite}/>
                                 }
                            </span>
                         }
                         {
                             !this.props.parentState.isLoggedIn &&
                             <span className="float-right">

                              <label className="wbdv-like-count">
                                  {this.state.countFavourite}
                              </label>
                                 {
                                     this.state.isFavourite &&
                                     <a className="fa fa-heart fa-lg wbdv-fav-property-icon-active"
                                        onClick={this.toggleFavourite}/>
                                 }
                                 {
                                     !this.state.isFavourite &&

                                     <LoginComponent clientLogin={this.props.login}
                                                     role="user"
                                                     buttonText={<i
                                                         className="fa fa-heart fa-lg wbdv-fav-property-icon-inactive"/>}
                                                     updateSelectedNavItem={this.props.updateSelectedNavItem}/>
                                 }
                            </span>
                         }
                     </div>
                    }
                </div>
            </div>
        )
    }
}
