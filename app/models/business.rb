class Business < ApplicationRecord
    validates :name, :categories, :business_phone, :url, :city, presence: false
    validates :state, :street_address, :zip_code, :email, :business_type, presence: true

    has_many :reviews,
        foreign_key: :business_id,
        class_name: :Review

    def average_rating
        total = 0
        reviews.each { |review| total += review.rating }
        average = (total / reviews.length)
    end

    def number_of_reviews
        reviews.length
    end
end
