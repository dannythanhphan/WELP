{
    entities: {
        users: {
            1: {
                id: 1,
                username: "dannyphantom",
                email: "dannyphantom@gmail.com",
            }
            2: {
                id: 2,
                username: "JustTakeIt",
                email: "JustTakeIt@gmail.com",
            }
            3: {
                id: 3,
                username: "Phancy",
                email: "Phancy@gmail.com",
            }
        }
        business: {
            1: {
                id: 1,
                name: "Danny's Diner",
                categories: "Vietnamese Comfort Food",
                business_phone: 4151234567,
                url: "ddiner.com",
                city: "San Francisco",
                state: "California",
                street_address: "123 Main Street",
                zip_code: 94016,
                email: "ddiner@gmail.com",
                lat: 37.7749,
                long: 122.4194
            }
            15: {
                id: 15,
                name: "Static Shock",
                categories: "Electrician",
                business_phone: 5107654321,
                url: "electricman.com",
                city: "Oakland",
                state: "California",
                street_address: "456 Dub Street",
                zip_code: 94606,
                email: "electricmanr@gmail.com",
                lat: 37.8044,
                long: 122.2712
            }
            48: {
                id: 48,
                name: "Wash Spot",
                categories: "Car Wash",
                business_phone: 7181234567,
                url: "",
                city: "New York",
                state: "California",
                street_address: "123 High Street",
                zip_code: 10001,
                email: "washer@gmail.com",
                lat: 40.7128,
                long: 74.0060
            }
            157: {
                id: 157,
                name: "23 Hour Fitness",
                categories: "Gym",
                business_phone: 2061234567,
                url: "23fitness.com",
                city: "Seattle",
                state: "California",
                street_address: "123 Rain Street",
                zip_code: 98101,
                email: "23fitness@gmail.com",
                lat: 47.6062,
                long: 122.3321
            }
        }
        review: {
            1: {
                id: 1,
                business_id: 157,
                user_id: 1,
                rating: 2,
                body: "Staff members are rude when asked for help. The equipments are never put back"
            }
            2: {
                id: 2,
                business_id: 15,
                user_id: 2,
                rating: 5,
                body: "The electric man was helpful and fair with his price. He even gave us a small discount."
            }
            3: {
                id: 3,
                business_id: 1,
                user_id: 3,
                rating: 3,
                body: "The food was mediocre at best but the staff members were awesome."
            }
        }
    }
    ui: {
        loading: true/false
    }
    errors: {
        login: ["Incorrect username/password combination"],
        biz: ["Name cannot be blank.", "You must pick a category", "Phone number cannot be blank", "city cannot be blank",
                "State cannot be blank", "Street address cannot be blank", "Please enter a zip code", "Please enter your email"],
        review: ["You must rate this business", "Please write a review of this business"]
    }
}