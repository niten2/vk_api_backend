class Api::V1::UsersController < ApplicationController

  def index
    users = User.valid_users(100)
    render json: users, status: 200
  end

  def inactive
    id = params[:id]
    User.find(id).inactive!
    render json: { message: "ok"}, status: 200
  end

end

