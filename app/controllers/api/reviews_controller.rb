class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
    end

    def review_params
        params.require(:reviews).permit(:rating, :body)
    end
end
