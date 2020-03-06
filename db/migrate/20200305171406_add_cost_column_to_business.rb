class AddCostColumnToBusiness < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :cost, :integer, null: false
  end
end
