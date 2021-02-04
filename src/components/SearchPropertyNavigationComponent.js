import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import {Link} from "react-router-dom";
import Modal from 'react-modal'
import {NewListingComponent} from "./NewListingComponent";

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

export default class SearchPropertyNavigationComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    toggleModal = () => {
        this.setState({
                          isActive: !this.state.isActive
                      })
    };

    componentWillMount() {
        Modal.setAppElement('body');
    }

    render() {
        return (
            <div className="topnav">
                <ul className="icons">
                    <li>
                        <Tooltip title="Your hosted properties">
                            <Link to={`/landlord/portal/${this.props.landlordId}/properties`}>
                                Listed Properties</Link>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Add a new listing">
                            <Link onClick={this.toggleModal}>
                                Add new listing
                            </Link>
                        </Tooltip>

                        <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}
                               style={customStyles}>
                            <div className="container">
                                <NewListingComponent createListing={this.props.createListing}
                                                     updateNewProperty={this.props.updateNewProperty}
                                                     state={this.props.state}
                                toggleModal={this.toggleModal}/>
                                <button onClick={this.toggleModal}
                                        className="btn-danger btn btn-block">
                                    Cancel
                                </button>
                            </div>
                        </Modal>
                    </li>
                </ul>
            </div>
        )
    }
}
