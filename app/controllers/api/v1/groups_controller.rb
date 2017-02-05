class Api::V1::GroupsController < ApplicationController

  def index
    tag = Tag.find(params[:tag_id])
    groups = Group.active.with_tag(tag)
    render json: groups, status: 200
  end

  def create
    screen_name = Group.parse_screen_name(params[:url])
    tag_id = params[:tag_id]

    group = Group.find_or_create_by!(screen_name: screen_name)

    if group.valid?

      API::V1::Groups::GetInfo.call(group: group)

      if tag_id.present?
        tag = Tag.find(tag_id)
        group.tags << tag if group.tags.where(name: tag.name).take.nil?
      end

      render json: group, status: 200
      # render json: group, status: :ok, serializer: API::V1::UserDeviceSerializer
    else
      render json: { errors: group.errors }, status: 422
    end
  end

  def destroy
    group = Group.find(params[:id] )
    group.inactive!
    render nothing: true, status: :no_content
  end

private

  # def group_params
  #   params.permit(
  #    :url,
  #   )
  # end

end
