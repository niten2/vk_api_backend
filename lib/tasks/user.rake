namespace :user do

  # rake user:search_info
  desc "search info"
  task search_info: :environment do
    begin
      API::V1::Users::SearchInfo.call(ids: User.with_tag("winter"))
      # API::V1::Users::SearchInfo.call(ids: User.uids)
      puts "search info update correct"
    rescue
      puts "error!"
    end

  end

  # rake user:create
  desc "create users by lib/ids/users.yml"
  task create: :environment do
    ids = YAML.load_file('lib/ids/users.yml').split(" ").uniq.compact

    ids.each do |id|
      begin
        User.create!(uid: id)
        puts "User with create uid: #{id}"
      rescue
        puts "error #{id}"
      end
    end
  end

  # rake user:create_with["winter"]
  # desc "create users by lib/ids/users.yml"
  task :create_with, [:tag] => :environment do |t, args|
    tag_name = args[:tag]
    tag = Tag.find_or_create_by(name: tag_name)

    users_posts = YAML.load_file('lib/ids/users_posts.yml').split(" ").uniq.compact
    fakes = YAML.load_file('lib/ids/fake.yml').split(" ").uniq.compact

    correct_users = users_posts - fakes

    correct_users.each do |id|
      begin
        user = User.find_or_create_by!(uid: id)
        user.tags << tag if user.tags.where(name: tag.name).take.nil?
        puts "User with create with tag #{tag.name} uid: #{id} "
      rescue
        puts "error #{id}"
      end
    end

  end

  # rake user:set_image_not_found
  desc "set image_not_found"
  task set_image_not_found: :environment do
    users = User.where(crop_photo_url: nil)
    users.each { |user| user.update_attributes(crop_photo_url: "https://pp.vk.me/c313920/v313920651/82c3/_fEeZgNPUec.jpg") }
  end

  # rake user:write
  desc "write valid users"
  task write: :environment do
    users = User.valid_users
    File.open("./valid_users.txt", "w+") do |file|
      users.each do |user|
        puts "User with write #{user.uid}"
        file.puts(user.uid)
      end
    end
  end

end
