@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :rating, :body, :business_id, :user_id
        json.date_created review.created_at.getlocal.to_s.split(" ").first
    end
end