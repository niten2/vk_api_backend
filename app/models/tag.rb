class Tag < ActiveRecord::Base

  has_many :tag_joins, as: :targets
  has_many :targets, through: :tag_joins

end
