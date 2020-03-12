import React from 'react';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            body: "",
            business_id: this.props.match.params.business_id
        }
        this.handleSubmitReview = this.handleSubmitReview.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.business_id)
    }

    handleInput(e) {
        this.setState({ body: e.target.value })
    }

    handleRating(value) {
        this.setState({ rating: value})
    }

    handleSubmitReview(e) {
        e.preventDefault();
        this.props.createNewReview(this.state);
        this.props.history.push(`/businesses/${this.props.business.id}`)
    }

    render() {
        const textPlaceholder = "Spicy jalapeno bacon ipsum dolor amet jerky venison andouille bresaola burgdoggen, chicken pork chop leberkas sirloin ball tip tenderloin buffalo alcatra.Ball tip sirloin pastrami, strip steak short ribs rump kielbasa.Cow alcatra pork loin shoulder frankfurter.Strip steak chicken venison flank fatback bacon, shoulder jerky alcatra spare ribs frankfurter sirloin pork loin kielbasa pork chop.Bresaola filet mignon shoulder prosciutto.Beef ribs doner spare ribs, ball tip burgdoggen kevin prosciutto leberkas capicola.Prosciutto ham hock buffalo boudin turkey cupim."

        const { business } = this.props

        const businessName = business ? (
            <div className="review-biz-name">
                {business.name}
            </div>
        ) : (
            null
        )

        return (
            <div>
                <div id="login-top-bar">
                    <div id="welp-name-logo-login">

                    </div>
                </div>
                <div className="review-form-container">
                    <div className="review-form-content">
                        <div>
                            {businessName}
                        </div>
                        <form>
                            <div className="review-form">
                                <div className="review-rating-buttons">
                                    <span className={`review-stars ${this.state.rating >= 1 ? "chosen" : ""}`} onClick={() => this.handleRating(1)}><i className="fa fa-star rev-stars" /></span>
                                    <span className={`review-stars ${this.state.rating >= 2 ? "chosen" : ""}`} onClick={() => this.handleRating(2)}><i className="fa fa-star rev-stars" /></span>
                                    <span className={`review-stars ${this.state.rating >= 3 ? "chosen" : ""}`} onClick={() => this.handleRating(3)}><i className="fa fa-star rev-stars" /></span>
                                    <span className={`review-stars ${this.state.rating >= 4 ? "chosen" : ""}`} onClick={() => this.handleRating(4)}><i className="fa fa-star rev-stars" /></span>
                                    <span className={`review-stars ${this.state.rating >= 5 ? "chosen" : ""}`} onClick={() => this.handleRating(5)}><i className="fa fa-star rev-stars" /></span>
                                </div>
                                <div className="review-text-box">
                                    <textarea onChange={this.handleInput} placeholder={textPlaceholder} className="actual-text" />
                                </div>
                            </div>
                            <button className="post-review-button" onClick={this.handleSubmitReview}>Post Review</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
};

export default ReviewForm;