import React from 'react';
import { Link } from 'react-router-dom';

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
        const textPlaceholder = "Write a review..."

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
                    <Link to="/">
                        <div id="welp-name-logo-login"/>
                    </Link>
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