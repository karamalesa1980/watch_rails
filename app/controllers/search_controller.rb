class SearchController < ApplicationController
  before_action :set_page_options

  def index
    @products = Product.ransack(title_cont: params[:q]).result(distinct: true)
    
    respond_to do |format|
    format.html {}
    format.json {
      @products = @products.limit(5)
    }
    end
  end

  def set_page_options
    set_meta_tags title: 'Search'
    add_breadcrumb "Home", root_path, title: "Home"
  end
  
  def search_params
    params.permit( :query )
  end

  def text_search
    search_text = ["%" + search_params[:query] + "%"].join
    Product.where('title ILIKE ?', search_text)
  end  

   
end
