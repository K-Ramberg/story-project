class Api::PagesController < ApplicationController

    def index
        @pages = Story.find(params[:story_id]).pages
        render json: @pages 
    end

    def show
        @page = Page.find(params[:id])
        @res = Page.generate
        render json: {
            page: @page,
            question: @res
        }
    end

    def update
        @page = Page.find(params[:id])
        @page.update(page_params)
        render json: @page
    end

    private

    def page_params
        params.require(:page).permit(:number, :completed)
    end

end
