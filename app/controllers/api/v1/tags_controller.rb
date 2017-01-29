class Api::V1::TagsController < ApplicationController

  def index
    tags = Tag.all
    render json: tags, status: 200
  end

end

# Group.find(6).inactive!
