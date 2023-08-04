class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :name
      t.string :description
      t.integer :finance_fee, default: 129
      t.integer :purchase_fee, default: 249
      t.integer :total_amount
      t.integer :duration, default: 48
      t.decimal :apr, precision: 3, scale: 1, default: 5.9
      t.binary :snapshot

      t.timestamps
    end
  end
end
