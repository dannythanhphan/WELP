json.extract! user, :id, :username, :fname, :lname, :email
json.photoUrl url_for(user.avatar)
