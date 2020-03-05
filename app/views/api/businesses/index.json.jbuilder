@businesses.each do |business|
    json.set! business.id do
      json.extract! business, :id, :name, :business_phone, :url, :city, :state, :street_address, :zip_code, :email, :business_type, :lat, :lng
      json.rating business.average_rating
      json.num_reviews business.number_of_reviews
    end
end