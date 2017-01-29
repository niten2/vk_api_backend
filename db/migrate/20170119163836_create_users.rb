class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :uid
      t.string :first_name
      t.string :last_name

      t.integer :followers_count

      t.string :sex
      t.integer :city
      t.string :bdate
      t.string :crop_photo_url

      t.integer :status, default: 0

      t.timestamps null: false
    end
  end
end
