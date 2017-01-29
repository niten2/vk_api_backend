class Api::V1::GroupsController < ApplicationController

  def index
    groups = Group.for_offers
    render json: groups, status: 200
  end

end
