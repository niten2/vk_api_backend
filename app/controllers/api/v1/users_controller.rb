class Api::V1::UsersController < ApplicationController

  def index
    tag = Tag.find(params[:tag_id])
    users = User.valid_users.with_tag(tag.name) if tag.present?

    render json: users.limit(500), status: 200
  end

  def create
    result = API::V1::Users::CreateUser.call(params: user_params)

    if result.ideal?
      render json: result.data, status: :ok
    else
      render json: result.conditions, status: :ok
    end
  end

  def inactive
    id = params[:id]
    User.find(id).inactive!
    render json: { message: "ok"}, status: 200
  end

private

  def user_params
    params.permit(
      :url,
      :tag_id
    )
  end

end

