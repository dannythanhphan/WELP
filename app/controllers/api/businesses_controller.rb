class Api::BusinessesController < ApplicationController
    def index
        bizs = params[:bounds] ? Business.in_bounds(params[:bounds]) : Business.all
        # bizs = Business.all
        if bizs.length > 20
            @businesses = bizs[0...19]
        else
            @businesses = bizs
        end
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
