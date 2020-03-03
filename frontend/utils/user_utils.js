export const fetchUsers = () => (
    $.ajax({
        method: "GET",
        url: "/api/users"
    })
)

export const createUser = (user) => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    })
);

export const updateUser = (user) => (
    $.ajax({
        method: "PATCH",
        url: `/api/user/${user.id}`,
        data: { user }
    })
);

export const deleteUser = (userId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/user/${userId}`
    })
)