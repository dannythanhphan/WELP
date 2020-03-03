class Review < ApplicationRecord
    validates :body, presence: true
    validates :rating, inclusion: { in: [1, 2, 3, 4, 5] }, presence: true

    belongs_to :writer
        foreign_key: :user_id,
        class_name: :User

    belongs_to :business
        foreign_key: :business_id,
        class_name: :Business
end
