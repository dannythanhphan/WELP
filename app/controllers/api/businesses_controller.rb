class Api::BusinessesController < ApplicationController
    def index
        if params[:category] != ""
            search = params[:category].capitalize
            bizs = Business.where("name LIKE ?", "%#{search}%")
            bizs = Business.where("business_type LIKE ?", "%#{search}%") if bizs.length == 0
            bizs = Business.where("categories LIKE ?", "%#{search}%") if bizs.length == 0
            bizs += Business.where("business_type LIKE ?", "%#{bizs[0].business_type}%") if bizs.length != 0
        else
            bizs = Business.all
        end
        
        bizs = bizs.in_bounds(params[:bounds]) if params[:bounds]

        bizs = bizs.where("cost <= ?", params[:maxCost]).order(cost: :DESC) if params[:maxCost].to_i > 0

        if params[:rating] === "true"
            bizs = bizs.order(average_ratings: :DESC)
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
