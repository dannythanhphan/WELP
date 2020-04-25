class Api::BusinessesController < ApplicationController
    def index
        if params[:bounds].nil?
            bounds = { 
                "northEast" => { "lat" => "37.80971", "lng" => "-122.39208"},
                "southWest" => { "lat" => "37.74187", "lng" => "-122.47791"}
            }
        else
            bounds = params[:bounds]
        end

        if !params[:category].nil?
            search = params[:category].capitalize
            bizs = Business.where("name LIKE ?", "%#{search}%")
            bizs = Business.where("business_type LIKE ?", "%#{search}%").in_bounds(bounds) if bizs.length == 0
            bizs = Business.where("categories LIKE ?", "%#{search}%").in_bounds(bounds) if bizs.length == 0
            bizs += Business.where("business_type LIKE ?", "%#{bizs[0].business_type}%").in_bounds(bounds) if bizs.length != 0
        else
            bizs = Business.in_bounds(bounds)
        end

        @businesses = bizs.length > 20 ? bizs[0...19] : bizs

        render :index
    end

    def show
        @business = Business.find(params[:id])
        render :show
    end

    def biz_params
        params.require(:businesses).require(:name, :categories, :business_phone, :url, :city,
                                            :state, :street_address, :zip_code, :email, :lat, :lng,
                                            :type)
    end
end
