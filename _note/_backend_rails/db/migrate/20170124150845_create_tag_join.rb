class CreateTagJoin < ActiveRecord::Migration[5.0]
  def change
    create_table :tag_joins do |t|
      t.integer :tag_id
      t.integer :target_id
      t.string  :target_type
      t.timestamps null: false
    end
  end
end
