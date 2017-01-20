class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.string :link
      t.integer :count
      t.string :note
    end
  end
end
