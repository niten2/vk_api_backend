# HEROKU_APP=app-name rake dumps:get
namespace :dumps do
  # heroku pg:backups --app=cross-clearance-backend

  task :get => :environment do
    if ENV["HEROKU_APP"].blank?
      puts "HEROKU_APP env variable required"
      exit 1
    end

    db_config = Rails.configuration.database_configuration[Rails.env]

    heroku_params = "--app=#{ ENV["HEROKU_APP"] }"
    backups_list = `heroku pg:backups #{ heroku_params }`.split("\n").map(&:strip).grep(/Completed/)
    last_backup_id, last_backup_data, last_backup_time = backups_list.first.split(/\s+/)

    db_name = [ENV["HEROKU_APP"], last_backup_data, last_backup_time].to_param.gsub(/[^\w\d]/, "_")

    common_psql_options = [
      ("--user=#{ db_config["username"] }"   if db_config["username"].present?),
      ("--host=#{ db_config["host"] }"       if db_config["host"].present?),
      ("--port=#{ db_config["port"] }"       if db_config["port"].present?),
    ].join(" ")

    psql_options = [
      ("--dbname=#{ db_config["database"] }" if db_config["database"].present?)
    ].join(" ")

    puts "Creating database #{ db_name }";

    `PGPASSWORD="#{ db_config["password"] }" psql #{ common_psql_options } #{ psql_options } -c "CREATE DATABASE #{ db_name };"`

    dumps_dir = Rails.root.join('tmp/dumps')
    dump_file_name = dumps_dir.join("#{db_name}.dump").to_s
    FileUtils.mkdir_p(dumps_dir.to_s)

    psql_options = "--dbname=#{ db_name }"

    cmd = %Q(curl -o #{ dump_file_name } "$(heroku pg:backups public-url #{ last_backup_id } #{ heroku_params })")
    puts cmd
    puts `#{cmd}`

    `PGPASSWORD="#{ db_config["password"] }" pg_restore --verbose --clean --no-acl --no-owner #{ common_psql_options } #{ psql_options } < #{ dump_file_name }`

    puts "Created and loaded database #{ db_name }";
  end
end
