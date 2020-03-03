json.set! @user.id do
    json.extract! @user, :id, :username, :fname, :lname, :email
end