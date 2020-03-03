class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.all
        render :index
    end

    def create
        @business = Business.new(biz_params)

        if @business.save
            render :show
        else
            flash[:errors] = "Invalid credentials"
        end
    end

    def show

    end

    def biz_params
        params.require(:businesses).require(:name, :categories, :business_phone, :url, :city,
                                            :state, :street_address, :zip_code, :email, :lat, :lng,
                                            :type)
    end
end
