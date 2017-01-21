class Api::V1::GroupsController < ApplicationController

  def index
    groups = Group.offers
    render json: groups, status: 200
  end

end

# Group.find(6).inactive!
