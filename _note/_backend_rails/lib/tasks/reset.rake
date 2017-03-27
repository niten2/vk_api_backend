task :reset => :environment do

  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
  system("bundle exec rake db:migrate RAILS_ENV=test")
  Rake::Task['db:seed_fu'].invoke

end

