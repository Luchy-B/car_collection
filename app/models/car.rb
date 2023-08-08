class Car < ApplicationRecord
  has_many :reservations
  has_one_attached :snapshot

  validates :name, presence: true
  validates :description, presence: true
  validates :finance_fee, presence: true
  validates :purchase_fee, presence: true
  validates :total_amount, presence: true
  validates :duration, presence: true
  validates :apr, presence: true
  validates :snapshot, presence: true
end
