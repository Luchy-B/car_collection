class Api::V1::ReservationsController < ApplicationController
  before_action :set_reservation, only: %i[ show update destroy ]
  skip_before_action :verify_authenticity_token

  # GET /reservations
  def index
    @reservations = Reservation.all.includes(:car)

    reservations_with_car_name = @reservations.map do |reservation|
      reservation_data = reservation.attributes
      reservation_data[:car_name] = reservation.car.name
      reservation_data
    end
  
    render json: reservations_with_car_name
  end

  # GET /reservations/1
  def show
    render json: @reservation
  end

  # POST /reservations
  def create
    @reservation = Reservation.new(reservation_params)

    if @reservation.save
      render json: { message: 'Reservation was created' }, status: :created
    else
      render json: { errors: @reservation.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservations/1
  def update
    if @reservation.update(reservation_params)
      render json: @reservation
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservations/1
  def destroy
    @reservation.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_reservation
    @reservation = Reservation.find(params[:id])
  end

    # Only allow a list of trusted parameters through.
    def reservation_params
      params.require(:reservation).permit(:date, :city, :user_id, :car_id)
    end
end
