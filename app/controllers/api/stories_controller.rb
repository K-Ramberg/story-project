class Api::StoriesController < ApplicationController
    def index
        @stories = Story.all
        render json: @stories
    end
end
