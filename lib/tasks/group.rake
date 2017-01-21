namespace :group do

  # rake group:search_info
  desc "search info"
  task search_info: :environment do
    API::V1::Groups::SearchInfo.call(ids: Group.screen_names)
  end

  # rake group:create_groups_ofers
  desc "create users by lib/ids/groups_ofers.yml"
  task create_groups_ofers: :environment do
    screen_names = YAML.load_file('lib/ids/groups_ofers.yml').split(" ")

    screen_names.each do |screen_name|
      begin
        Group.create!(screen_name: screen_name, status: Group.statuses["offers"])
        puts "Group with create screen_name: #{screen_name}"
      rescue
        puts "error #{screen_name}"
      end
    end

  end

end
