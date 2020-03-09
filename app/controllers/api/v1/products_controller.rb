class Api::V1::ProductsController < Api::V1::BaseController

  skip_before_action :doorkeeper_authorize!

  def index
    @products = Product.all.limit(5)
    respond_with @products
  end
end  