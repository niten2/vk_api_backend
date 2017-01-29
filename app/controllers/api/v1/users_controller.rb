class Api::V1::UsersController < ApplicationController

  def index

    # users = User.valid_users(100)
    users = User.active.with_tag("winter")

    render json: users, status: 200
  end

  def inactive
    id = params[:id]
    User.find(id).inactive!
    render json: { message: "ok"}, status: 200
  end

end

