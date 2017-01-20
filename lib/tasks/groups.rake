namespace :groups do
  # desc "Copy name column into full_name column"
  task get: :environment do

    ids = []
    Group.select(:link).each do |group|
      ids << group.link.gsub("https://vk.com/", "")
    end

    @vk = VkontakteApi::Client.new(ENV["VK_TOKEN"])


    groups = @vk.groups.get_by_id(group_ids: ids, fields: [:members_count])

    groups.each do |group|
      name = group.name
      link = group.screen_name
      count = group.members_count

      object = Group.where(link: "https://vk.com/#{link}").take



      object.update_attributes(name: name, count: count)
    end



    # API::V1::Groups::Get.call(token: ENV["VK_TOKEN"], ids: array)

    # @vk = VkontakteApi::Client.new(ENV["VK_TOKEN"])

    # Blogger.update_all("full_name = name")

  end

  # desc "Format name column in username style"
  # task format_names_as_usernames: :environment do
  #   Blogger.all.each do |blogger|
  #     blogger.update_attributes(name: blogger.name.downcase.strip.gsub(/ /, ''))
  #   end
  # end
end
