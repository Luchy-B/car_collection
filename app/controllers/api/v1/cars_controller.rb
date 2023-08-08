class Api::V1::CarsController < ApplicationController
  before_action :set_car, only: %i[show update destroy]

  # GET /cars
  def index
    @cars = Car.includes({snapshot_attachment: :blob})

    cars_with_snapshot_url = @cars.map do |car|
      car_data = car.attributes
      car_data[:snapshot_url] = url_for(car.snapshot)
      car_data
    end

    render json: cars_with_snapshot_url
  end

  # GET /cars/1
  def show
    @car = Car.find(params[:id])
    car_data = @car.attributes
    car_data[:snapshot_url] = url_for(@car.snapshot)
    render json: car_data
  end

  # POST /cars
  def create
    @car = Car.new(car_params)

    if @car.save
      render json: @car, status: :created
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cars/1
  def destroy
    @car.reservations.destroy_all
    if @car.destroy
      render json: { message: 'Car was deleted' }
    else
      render json: { message: 'There were some errors deleting the car' }, status: :unprocessable_entity
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_car
    @car = Car.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def car_params
    params.require(:car).permit(:name, :description, :finance_fee, :purchase_fee, :total_amount, :duration, :apr,
                                :snapshot)
  end
end
