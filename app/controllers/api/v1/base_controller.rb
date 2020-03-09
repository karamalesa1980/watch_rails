class Api::V1::BaseController < ApplicationController

  before_action :doorkeeper_authorize!, unless: :user_signed_in?
  respond_to :json
  

  

  def current_resource_owner
    if doorkeeper_token
      @current_resource_owner ||= User.find(doorkeeper_token.resource_owner_id)
    else
      warden.authenticate(scope: :user)
    end
  end

  
end    