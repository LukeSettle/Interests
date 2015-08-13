class PinsController < ApplicationController
  def index
    @pin = Pin.new
    @pins = Pin.all
  end

  def new
    @pin = Pin.new
  end

  def show
    @pin = Pin.find(params[:id])
  end

  def create
    @pin = Pin.new(pin_params)
    respond_with do |format|
      format.html do
        if request.xhr?
          render :partial => "pin/show", :locals => { :pin => @pin }, :layout => false, :status => :created
        else
          redirect_to @pin
        end
      end
    end
  else
    respond_with do |format|
      format.html do
        if request.xhr?
          render :json => @pin.errors, :status => :unprocessable_entity
        else
          render :action => :new, :status => :unprocessable_entity
        end
      end
    end
  end

  private
  def pin_params
    params.require(:pin).permit(:url, :file, :note)
  end
end
