class Business < ApplicationRecord
    validates :name, :categories, :business_phone, :url, :city, presence: false
    validates :state, :street_address, :zip_code, :email, :business_type, presence: true

    has_many :reviews,
        foreign_key: :business_id,
        class_name: :Review

    has_one_attached :photo

    after_initialize :average_rating
    
    def self.in_bounds(bounds)
        ne_lat = bounds["northEast"]["lat"]
        ne_lng = bounds["northEast"]["lng"]
        sw_lat = bounds["southWest"]["lat"]
        sw_lng = bounds["southWest"]["lng"]

        Business.where("lat < ?", ne_lat).where("lng < ?", ne_lng).where("lat > ?", sw_lat).where("lng > ?", sw_lng)
    end

    def average_rating
        total = 0
        if !reviews.empty?
            reviews.each { |review| total += review.rating }
            average = (total / reviews.length)
            self.average_ratings = average
            self.save
        end
        !average.nil? ? average : total
    end

    def number_of_reviews
        reviews.length
    end
    
end
