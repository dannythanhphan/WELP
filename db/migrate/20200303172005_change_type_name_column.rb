class ChangeTypeNameColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :type
    add_column :businesses, :business_type, :string, null: false
  end
end
