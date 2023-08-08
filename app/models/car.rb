class Car < ApplicationRecord
  has_many :reservations
  has_one_attached :snapshot

  validates :name, :description, :finance_fee, :purchase_fee, :total_amount, :duration, :apr, :snapshot, presence: true
  validates :finance_fee, :purchase_fee, :total_amount, :duration, :apr, numericality: { greater_than_or_equal_to: 0 }
  
  validate :validate_total_amount

  private

  def validate_total_amount
    unless finance_fee + purchase_fee == total_amount
      errors.add(:base, "Finance fee and purchase fee should sum up to total amount")
    end
  end
end
