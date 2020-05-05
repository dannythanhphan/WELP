import React from 'react';

// const SingleReview = ({ review, users }) => {
class SingleReview extends React.Component {
    render() {
        const {review, users, deleteReview, currentUser} = this.props;
        const loggedIn = (currentUser === review.user_id) ? (
            <div className="review-delete-button-container">
                <button onClick={() => deleteReview(review)} className="review-delete-button">
                    Delete Review
                </button>
            </div>
        ) : (
            null
        )
        return (
            <div className="single-review-container">
                <div className="review-profile-info-container">
                    <img src={`${users[review.user_id].photoUrl}`} className="review-pp-container"/>
                    <div className="profile-info-container">
                        <div className="reviewer-name">
                            {users[review.user_id].fname} {users[review.user_id].lname}
                            
                        </div>
                        <div className="reviewer-username">
                            {users[review.user_id].username}
                        </div>
                    </div>
                </div>
                <div className="review-content-container">
                    <div className="stars-count-container">
                        <div className="stars-container">
                            <span className={`fa fa-star index-star ${review.rating >= 1 ? "checked" : ""}`} />
                            <span className={`fa fa-star index-star ${review.rating >= 2 ? "checked" : ""}`} />
                            <span className={`fa fa-star index-star ${review.rating >= 3 ? "checked" : ""}`} />
                            <span className={`fa fa-star index-star ${review.rating >= 4 ? "checked" : ""}`} />
                            <span className={`fa fa-star index-star ${review.rating >= 5 ? "checked" : ""}`} />
                        </div>
                        <div className="review-created-at">{review.date_created}</div>
                    </div>
                    <div className="review-text">
                        {review.body}
                    </div>
                    {loggedIn}
                </div>
                
            </div>
        )
    }
};

export default SingleReview;