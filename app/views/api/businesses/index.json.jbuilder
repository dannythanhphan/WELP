@businesses.each do |business|
    json.set! business.id do
      json.extract! business, :id, :name, :business_phone, :url, :city, :state, :zip_code, :email, :type, :lat, :lng
    end
  end