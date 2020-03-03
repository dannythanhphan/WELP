class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :categories, null: false
      t.integer :business_phone, null: false
      t.string :url, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :street_address, null: false
      t.integer :zip_code, null: false
      t.string :email, null: false
      t.float :lat
      t.float :lng
      t.timestamps
    end
  end
end
