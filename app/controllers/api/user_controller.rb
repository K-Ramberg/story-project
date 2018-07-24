class Api::UserController < ApplicationController
  def index
    @users = Users.all
    render json: @users
  end

  def show
    @artist = Artist.find(params[:id])
    render json: @artist
  end
end
