class User < ActiveRecord::Base

  WOMEN = 1
  MEN = 2
  KRSK = 73
  ValidFollowersCount = 20..1000

  validates :uid, presence: true, uniqueness: true

  has_many :tag_joins, as: :target
  has_many :tags, through: :tag_joins

  enum status: [:active, :inactive, :staging]

  scope :men, -> { where(sex: MEN) }
  scope :women, -> { where(sex: WOMEN) }
  scope :krsk, -> { where(city: KRSK) }
  scope :good_friends, -> { where(followers_count: ValidFollowersCount) }
  scope :uids, -> { select(:uid).map(&:uid) }

  scope :valid_users, -> (limit = 9999999999) { active.where(sex: WOMEN).where(city: KRSK).where(followers_count: ValidFollowersCount).limit(limit) }
  scope :with_tag, -> (tag = nil) { includes(:tags).where(tags: { name: tag.kind_of?(String) ? tag : tag.try(:name) }) }

end
