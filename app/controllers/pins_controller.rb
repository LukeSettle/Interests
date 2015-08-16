class PinsController < ApplicationController
  def index
    @pin = Pin.new
    @pins = Pin.all
    render json: @pins
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
    @pin = Pin.new(pin_params)
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
