class Group < ActiveRecord::Base

  validates :screen_name, presence: true, uniqueness: true

  enum status: [:active, :inactive, :offers]

  scope :screen_names, -> { select(:screen_name).map(&:screen_name) }

  # has_many :tags, :through => :tag_relation, :as => :target
  # has_many :user_groups, dependent: :destroy
  # has_many :users, through: :user_groups, dependent: :destroy
  # Group.offers.screen_names
  # Group.screen_names

  # screen_names

  # def self.screen_names
  #   Group.select(:screen_name).map(&:screen_name)
  # end

end
