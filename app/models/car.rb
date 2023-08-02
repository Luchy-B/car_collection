class Car < ApplicationRecord
  has_many :reservations
  has_one_attached :icon
end
