class Business < ApplicationRecord
    validates :name, :categories, :business_phone, :url, :city, presence: false
    validates :state, :street_address, :zip_code, :email, :type, presence: true

    has_many :reviews,
        foreign_key: :business_id,
        class_name: :Review
end
