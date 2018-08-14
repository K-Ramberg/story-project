class Api::CharactersController < ApplicationController
    def index 
        @characters = User.find(params[:user_id]).characters
        render json: @characters
    end

    def show
        @character = Character.find(params[:id])
        render json: @character
    end

    def create
        @user = User.find(params[:user_id])
        @character = @user.characters.create(character_params)
        render json: @character
    end

    def update
        @character = Character.find(params[:id])
        @character.update(character_params)
        render json: @character
    end

    def destroy
        @character = Character.find(params[:id]).destroy
        render status: :ok
    end

    private

    def character_params
        params.require(:character).permit(:name, :occupation, :head_element, :body_element, :leg_element, :color_scheme, :stories_completed, :points)
    end

end
