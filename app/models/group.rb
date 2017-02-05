class Group < ActiveRecord::Base

  validates :screen_name, presence: true, uniqueness: true

  enum status: [:active, :inactive, :offers]

  scope :screen_names, -> { select(:screen_name).map(&:screen_name) }

  has_many :tag_joins, as: :target
  has_many :tags, through: :tag_joins

  scope :for_offers, -> { includes(:tags).where(tags: { name: "Для офферов" }) }
  # scope :with_tag, -> (tag = nil) { includes(:tags).where(tags: { name: tag.try(:name) }) }
  scope :with_tag, -> (tag = nil) { includes(:tags).where(tags: { name: tag.kind_of?(String) ? tag : tag.try(:name) }) }

  # has_many :tags, :through => :tag_relation, :as => :target
  # has_many :user_groups, dependent: :destroy
  # has_many :users, through: :user_groups, dependent: :destroy
  # Group.offers.screen_names
  # Group.screen_names

  # screen_names

  # def self.screen_names
  #   Group.select(:screen_name).map(&:screen_name)
  # end

  def self.parse_screen_name(url)
    name = url.split("/").last
    name = name.slice(4..-1) if name[/^club/].present?
    name = name.slice(6..-1) if name[/^public/].present?
    name
  end

  # def self.with_tag(tag)

  #   self.tags

  #   binding.pry


  # end

end
