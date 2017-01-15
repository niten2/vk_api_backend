describe "Api::V1::Filters::User" do
  let!(:token) { "test" }
  let!(:sex) { "men" }
  let!(:less_age) { "20" }
  let!(:more_age) { "45" }

  let!(:ids) { [1,2,3] }

  let!(:result) {
    {
      users:  [
        {
          id: 35947617,
          links: "http://vk.com/id35947617",
          full_name: "Константин Костылев",
          city: "Красноярск",
          age: 29,
        },
        {
          id: 35947618,
          links: "http://vk.com/id35947617",
          full_name: "Константин Костылев",
          city: "Красноярск",
        },
        {
          id: 35947619,
          links: "http://vk.com/id35947617",
          full_name: "Константин Костылев",
          city: "Красноярск",
          age: 29,
        },
      ]
    }
  }

  describe '#hash' do
    it 'should ...' do
      # acct.property = 5
      # binding.pry

      # expect_any_instance_of(VkontakteApi::Client).to receive_messages(:users, :get).with(user_ids: users, fields: [:sex, :bdate, :city]).and_return(result)

      # expect_any_instance_of(VkontakteApi::Client).to receive(:users)
      # expect_any_instance_of(VkontakteApi::Client).to receive(:users).and_return(:result)

      # binding.pry
      # a = VkontakteApi::Client.new(333)
      # u = a.users


      # expect(VkontakteApi::Namespace).to receive(:get).and_return(:result)


# VkontakteApi::Namespace



      # result = API::V1::Filters::User.call(token: token, sex: sex, less_age: less_age, more_age: more_age, ids: ids).data

      # expect(acct).to_not be_nil
    end
  end

end
