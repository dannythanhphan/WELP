@users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :fname, :lname
      json.photoUrl url_for(user.avatar)
    end
end