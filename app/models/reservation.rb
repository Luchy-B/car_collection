class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :car

  validates :user, :car, :date, :city, presence: true

end
