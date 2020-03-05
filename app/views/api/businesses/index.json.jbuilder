@businesses.each do |business|
    json.set! business.id do
      json.extract! business, :id, :name, :business_phone, :url, :city, :state, :street_address, :zip_code, :email, :business_type, :lat, :lng
    end
end