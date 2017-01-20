class API::V1::Groups::Get

  include StandardService::Wrapper
  # attr_accessor :token, :sex, :less_age, :more_age, :ids
  attr_accessor :token, :ids

  service do
    # @valid_users = []
    create_vk_api_client

    filter_users

    # { users: @valid_users }
  end

  def create_vk_api_client
    @vk = VkontakteApi::Client.new(token)
  end

  def filter_users

    binding.pry


    # users = @vk.groups.get(group_ids: [ids.first], fields: [:sex, :bdate, :city ])
    # users = @vk.groups.get(group_ids: [ids.first])

    groups = @vk.groups.get_by_id(group_id: ids.first, fields: [:members_count])




    # users.each do |user|
    #   if user.city == 73 && valid_date?(user) && user.sex == 1
    #     hash = {
    #       id: user.uid,
    #       full_name: "#{user.first_name} #{user.last_name}",
    #       city: "Красноярск",
    #       links: create_link(user),
    #       age: create_age(user),
    #     }
    #     @valid_users << hash
    #   end
    # end
  end

private

  # def valid_date?(user)
  #   # binding.pry

# # full_date =~ "8.6.1972"
# # full_date =~ "2.11"
# # full_date =~ "2.3"
# # full_date =~ "32.13"



  #   if user.bdate.present?
  #     full_date = /.[0-9][0-9][0-9][0-9]$/
  #     regex = full_date =~ user.bdate

  #     if regex.present?
  #       return true
  #     else
  #       return false
  #     end
  #   else
  #     return false
  #   end
  # end

  # def create_age(user)
  #   # user.bdate
  #   # test = "8.6.1972"

  #   2017 - user.bdate.slice(-4..-1).to_i
  # end


  # def create_link(user)
  #   "http://vk.com/id#{user.uid}"
  # end

end

# urls = [
#   "http://vk.com/club107619435",
#   "http://vk.com/club105945053",
#   "http://vk.com/club60793626",
# ]
# {
#   users:  [
#     {
#       id: 35947617,
#       links: "http://vk.com/id35947617",
#       full_name: "Константин Костылев",
#       city: "Красноярск",
#       age: 29,
#     },
#     {
#       id: 35947618,
#       links: "http://vk.com/id35947617",
#       full_name: "Константин Костылев",
#       city: "Красноярск",
#     {
#       id: 35947619,
#       links: "http://vk.com/id35947617",
#       full_name: "Константин Костылев",
#       city: "Красноярск",
#       age: 29,
#     },
#   ]
# }
# users = ["niten2", "maks.petrov_krsk", "olehouse24"]
# @vk.groups.get_by_id(group_id: 90116995, fields: [:members_count])


