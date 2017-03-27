class AddKindTag < ActiveRecord::Migration[5.0]
  def change
    add_column :tags, :kind, :integer, default: 0
  end
end
