class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :screen_name
      t.integer :gid

      t.string :name

      t.integer :members_count
      t.string :note

      t.string :photo_50

      t.integer :status, default: 0

      t.timestamps null: false
    end
  end
end
