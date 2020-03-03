class AddIntegerLimit < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :business_phone, :integer, limit: 8
  end
end
