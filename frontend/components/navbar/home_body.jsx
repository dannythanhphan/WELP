import React from 'react';

class HomeBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: true
        }
        this.handleSearchCategory = this.handleSearchCategory.bind(this)
    }

    // componentDidMount() {
    //     this.props.fetchAllBusinesses();
    // }

    handleSearchCategory(category) {
        return e => {
            e.preventDefault();
            this.setState({ loaded: false })
            this.props.updateFilters("category", category)
                .then(() => {
                    this.setState({ loaded: true })
                    document.getElementsByClassName("footer-container")[0].style.display = "block"
                    this.props.history.push("/search")
                })
        }
    }

    render() {
        const { businesses } = this.props

        if (this.state.loaded === false) {
            document.getElementsByClassName("nav-bar")[0].style.display = "none"
            document.getElementsByClassName("footer-container")[0].style.display = "none"
            window.scrollTo(0, 0)
            return (
                <div className="loading-container">
                    <div className="loading-header">
                        <div id="welp-name-logo-login"></div>
                    </div>
                    <div className="loading-body">
                        <div className="big-o-popup"></div>    
                    </div>
                    <div className="loading-footer">
                        <div className="footer-image-pop"></div>
                    </div>
                </div>
            )
        }

        // let pickThree = []

        // if (Object.keys(this.props.businesses).length > 0) {
        //     let bizKeys = Object.keys(businesses)
        //     while (pickThree.length < 4) {
        //         let randomNumber = bizKeys[Math.floor(Math.random() * bizKeys.length)]
        //         if (pickThree.includes(randomNumber)) {
        //             continue;
        //         } else {
        //             pickThree.push(randomNumber)
        //         }
        //     }
        // }

        // const threeBusinesses = Object.keys(this.props.businesses).length > 0 ? (
        //     <div className="home-info-container">
        //         <div className="home-main-content-container">
        //             <div>
        //                 {businesses[parseInt(pickThree[0])].name}
        //             </div>
        //             <div>
        //                 {businesses[parseInt(pickThree[1])].name}
        //             </div>
        //             <div>
        //                 {businesses[parseInt(pickThree[2])].name}
        //             </div>
        //         </div>
        //     </div>
        // ) : (
        //     null
        // )

        return (
            <div className="body-container">
                <div className="body-categories-search">
                    <p className="body-cat-title">Find the Best Businesses in San Francisco</p>
                    <div className="body-categories-container">
                        <div className="body-search" onClick={this.handleSearchCategory("Bakery")}>
                            <img src="bakery.jpg"/>
                            <p className="body-cat-text">Bakery</p>
                        </div>
                        <div className="body-search" onClick={this.handleSearchCategory("Breakfast")}>
                            <img src="breakfast.jpg" />
                            <p className="body-cat-text">Breakfast</p>
                        </div>
                        <div className="body-search" onClick={this.handleSearchCategory("Chinese")}>
                            <img src="chinese.jpg" />
                            <p className="body-cat-text">Chinese</p>
                        </div>
                        <div className="body-search" onClick={this.handleSearchCategory("Japanese")}>
                            <img src="japanese1.jpg" />
                            <p className="body-cat-text">Japanese</p>
                        </div>
                    </div>    
                </div>
                <div className="body-welp-title">
                    Welp San Francisco
                </div>
                {/* {threeBusinesses} */}
            </div>
        );
    }
}

export default HomeBody;