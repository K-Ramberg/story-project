class Api::PagesController < ApplicationController

    def index
        @pages = Story.find(params[:story_id]).pages
        render json: @pages 
    end

    def show
        @page = Page.find(params[:id])
        render json: @page
    end

end
