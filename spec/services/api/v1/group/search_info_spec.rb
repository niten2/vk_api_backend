describe API::V1::Groups::SearchInfo do

  context "valid params given" do
    # let!(:groups) { create_list(:group, 5) }
    let!(:group) { create(:group, screen_name: "reklamatovarov") }


    it "test"  do
      API::V1::Groups::SearchInfo.call(ids: [group.screen_name])
      # expect(group.gid).to
    end


  end



end
