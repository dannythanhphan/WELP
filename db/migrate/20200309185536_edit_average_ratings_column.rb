class EditAverageRatingsColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :average_ratings
    add_column :businesses, :average_ratings, :integer, default: 0
  end
end
