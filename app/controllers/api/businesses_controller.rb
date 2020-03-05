class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.all
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
