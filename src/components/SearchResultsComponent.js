import React from "react"
import {Link} from "react-router-dom";
import {getSearchResults} from "../services/SearchService";
import "./HomeComponent.css"

export default class SearchResultsComponent extends React.Component {
    state = {
        listings: [],
        mounted: false
    }

    componentDidMount = async () => {
        const searchResults = await getSearchResults(this.props.searched)
        this.setState({listings: searchResults, mounted: true})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.searched !== this.props.searched) {
            this.setState({mounted: false});
            getSearchResults(this.props.searched)
                .then(searchResults => this.setState({words: searchResults, mounted: true}))
        }
    }

    render() {
        return (
            <div className="search-results-page">
                <div className="container">

                    {!this.state.mounted &&
                     <div className="search-result-item">
                         <h4 className="wbdv-white-font">Search in progress</h4>
                     </div>}

                    {this.state.results.length > 0 && this.state.mounted &&
                     this.state.results.map((item, index) =>
                                                <div className="search-result-item" key={index}>
                                                    <Link to={`/`}>
                                                        <h4 className="wbdv-white-font">{item}</h4>
                                                    </Link>
                                                </div>)}

                    {this.state.listings.length < 1 && this.state.mounted &&
                     <div className="search-result-item">
                         <h5 className="wbdv-white-font">No results found.</h5>
                     </div>}
                </div>
            </div>
        )
    }
}
