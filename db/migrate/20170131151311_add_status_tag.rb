class AddStatusTag < ActiveRecord::Migration[5.0]
  def change
    add_column :tags, :status, :integer, default: 0
  end
end
