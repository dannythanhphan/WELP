import React from 'react';

class HomeBody extends React.Component {
    // componentDidMount() {
    //     this.props.fetchAllBusinesses();
    // }

    render() {
        // const { businesses } = this.props

        // let pickThree = []

        // if (Object.keys(this.props.businesses).length > 0) {
        //     let bizKeys = Object.keys(businesses)
        //     for (let i = 0; i < 3; i++) {
        //         let randomNumber = bizKeys[Math.floor(Math.random() * bizKeys.length)]
        //         let indexToRemove = bizKeys.indexOf(randomNumber)
        //         delete bizKeys[indexToRemove]
        //         pickThree.push(randomNumber)
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
            <div>
                <div className="body-categories-search">
                    <div className="asian-fusion-search">
                        
                    </div>
                    <div className="breakfast-search">

                    </div>
                    <div className="chinese-search">

                    </div>
                    <div className="japanese-search">

                    </div>
                </div>
                <div className="body-welp-title">
                    Yelp San Francisco
                </div>
                {/* {threeBusinesses} */}
            </div>
        );
    }
}

export default HomeBody;