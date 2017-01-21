class Api::V1::FiltersController < ApplicationController

  def index
    sex = params[:sex]
    less_age = params[:less_age]
    more_age = params[:more_age]

    result = API::V1::Filters::User.call(
      # token: @token,
      sex: sex,
      less_age: less_age,
      more_age: more_age,
      ids: ids
    ).data

    render json: result, status: 200
  end

end
