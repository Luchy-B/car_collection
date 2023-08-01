class CarsController < ApplicationController
  def show
    @car = Car.find(params[:id])
    render json: @car
  end
end
