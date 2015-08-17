class PinsController < ApplicationController
  def index
    @pin = Pin.new
    if current_user
      @pins = current_user.pins
      render json: @pins
    else
      @pins = Pin.all
      render json: @pins
    end
  end

  def home
    @pin = Pin.new
  end

  def new
    @pin = Pin.new
  end

  def show
    @pin = Pin.find(params[:id])
  end

  def create
    authenticate_user!
    @pin = Pin.new(pin_params)
    @pin.user_id = current_user.id
    if @pin.save
      render json: @pin
    else
      render json: {errors: @pin.errors}, status: :unprocessable_entity
    end
  end

  private
  def pin_params
    params.require(:pin).permit(:url, :file, :note)
  end
end
