class UserController < ApplicationController
  def index
    render json: { status: "It's Working" }
  end
end
