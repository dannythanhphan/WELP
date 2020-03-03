class AddColumnTypeToBusiness < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :type, :string, null: false
  end
end
