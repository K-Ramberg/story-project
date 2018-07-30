class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
      end

      def show
        @user = User.find(params[:id])
        render json: @user
      end

      def update
        @user= User.find(params[:id])
        @user.update(user_params)
        render json: @user
    end

    private

    def user_params
        params.require(:user).permit(:name, :stories_completed)
    end

end
