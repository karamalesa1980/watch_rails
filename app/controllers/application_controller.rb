require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  respond_to :html

  protect_from_forgery
  include Pundit

  def current_cart
    @current_cart ||= begin
      Cart.find_or_create_by(user: current_user) 
    end 
  end

  def cart_items
    current_cart.cart_items
  end

  def cart_total
    return 0 if cart_items.none? 

    cart_items
      .joins(:product)
      .select('(cart_items.quantity * products.price) as total')
      .sum{ |x| x[:total] }
  end  
  
  helper_method :current_cart, :cart_items, :cart_total

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  
  private

  def user_not_authorized
    flash[:alert] = "You are not authorized to perform this action."
    redirect_to(request.referrer || root_path)
  end
  
end
