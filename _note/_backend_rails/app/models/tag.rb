class Tag < ActiveRecord::Base

  has_many :tag_joins, as: :targets
  has_many :targets, through: :tag_joins

  enum status: [:active, :inactive]
  enum kind: [:groups, :users]

  validates :name, presence: true, uniqueness: true

end
