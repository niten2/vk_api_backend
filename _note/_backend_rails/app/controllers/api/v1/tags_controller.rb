class Api::V1::TagsController < ApplicationController

  def index
    case params[:kind]
    when "groups"
      tags = Tag.active.groups
    when "users"
      tags = Tag.active.users
    else
      tags = Tag.active
    end

    render json: tags, status: 200
  end

  def create
    tag = Tag.create(name: params[:name], kind: params[:kind] )

    if tag.valid?
      render json: tag, status: 200
    else
      render json: tag.errors.messages, status: 422
    end
  end

  def destroy
    tag = Tag.find(params[:id] )

    tag.inactive!
    render nothing: true, status: :no_content
  end

end
