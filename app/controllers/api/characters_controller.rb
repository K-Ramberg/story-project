class Api::CharactersController < ApplicationController
    def index 
        @characters = User.find(params[:user_id]).characters
        render json: @characters
    end
end