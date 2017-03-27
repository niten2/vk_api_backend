FactoryGirl.define do

  factory :group do
    gid { 1..100 }
    screen_name { Faker::Lorem.word }
    # name { Faker::Lorem.word }
  end

end
