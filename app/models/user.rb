class User < ActiveRecord::Base

  WOMEN = 1
  MEN = 2
  KRSK = 73
  ValidFollowersCount = 50..1000

  validates :uid, presence: true, uniqueness: true

  enum status: [:active, :inactive, :staging]

  scope :men, -> { where(sex: MEN) }
  scope :women, -> { where(sex: WOMEN) }
  scope :krsk, -> { where(city: KRSK) }
  scope :good_friends, -> { where(followers_count: ValidFollowersCount) }
  scope :uids, -> { select(:uid).map(&:uid) }

  scope :valid_users, -> (limit = 9999999999) { active.where(sex: WOMEN).where(city: KRSK).where(followers_count: ValidFollowersCount).limit(limit) }

  # User.valid_users.map { |user| puts user.uid }
  # User.good_friends.count
  # User.valid_users.count

  # User.where(city: 0..100)
  # User.where(sex: 1).where(city: 73).where(followers_count: 50..1000)
  # User.where(:followers_count > 50)

  # User.where("followers_count > ?", 50)

  # User.where("followers_count < ?", 1000)

  # User.active.where(sex: 1).where(city: 73).where(followers_count: 50..1000).limit(limit)
  # User.valid_users

  # User.where(city: 73).limit(100000)

  # has_many :tags, :through => :tag_relation, :as => :target

  # has_many :user_groups, dependent: :destroy
  # has_many :groups, through: :user_groups, dependent: :destroy

end
