class AddAverageRatingColumnToBusinesses < ActiveRecord::Migration[5.2]
  def change
        add_column :businesses, :average_ratings, :integer
  end
end
