class Pin < ActiveRecord::Base
  validates :url, presence: true
end
