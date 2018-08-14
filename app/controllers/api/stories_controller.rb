class Api::StoriesController < ApplicationController
    def index
        @stories = Story.all
        render json: @stories
    end

    def show
        @story = Story.find(params[:id])
        render json: @story
    end

    def create
        @story = Story.create(story_params)
        render json: @story
    end

    def update
        @story = Story.find(params[:id])
        @story.update(story_params)
        render json: @story
    end

    def destroy
        @story = Story.find(params[:id]).destroy
        render status: :ok
    end

    private

    def story_params
        params.require(:story).permit(:title, :theme, :difficulty, :enemy, :enemy_gender, :enemy_prefix)
    end

end
