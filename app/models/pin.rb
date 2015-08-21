class Pin < ActiveRecord::Base
validates :url, presence: true
belongs_to :user
attachment :file, type: :image
end
