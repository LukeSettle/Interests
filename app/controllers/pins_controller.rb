class PinsController < ApplicationController
  def index
    @pins = Pins.all
  end

  def new
    @pin = Pin.new
  end

  def create
    @pin = Pin.find(pin_params)
    if @pin.save
      flash("Nice Pin!")
    else
      flash[:warning] = "Your pin was not created"
      redirect_to pins_path
  end

  private
  def pin_params
    params.require(:pin).permit(:url, :file, :note)
  end

end
