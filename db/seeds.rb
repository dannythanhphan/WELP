# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

name_file = File.open("./generators/name.txt")
name = name_file.readlines.map(&:chomp)
name_file.close

res_file = File.open("./generators/restaurant_names.txt")
res_name = res_file.readlines.map(&:chomp)
res_name.shuffle()
res_file.close

food_file = File.open("./generators/food_categories.txt")
food_category = food_file.readlines.map(&:chomp)
food_file.close

street_file = File.open("./generators/street_names.txt")
street_name = street_file.readlines.map(&:chomp)
street_file.close

service_file = File.open("./generators/home_services.txt")
home_service = service_file.readlines.map(&:chomp)
service_file.close

def address_gen(street_name)
    result = ""
    range_of_nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    3.times do
        result += range_of_nums.sample
    end
    result += " #{street_name.sample}"
    return result
end

def number_generator
    result = "999"
    range_of_nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    7.times do 
        result += range_of_nums.sample
    end
    result.to_i
end

def lat_gen
    return rand(37.741214...37.803970)
end

def lng_gen
    result = "-" + rand(122.403630...122.477445).to_s
    return result.to_f
end

def ran_cost
    return rand(1..4)
end

def open_gen
    return rand(6..10)
end

def close_gen
    return rand(5..11)
end

User.destroy_all
Business.destroy_all
# Reviews.destroy_all

# USERS
    u1 = User.create!(username: "Phantom", fname: "Danny", lname: "Fenton", email: "dannyphantom@gmail.com", password: "password")
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/demo-pp.jpg')
        u1.avatar.attach(io: file, filename: 'demo-pp.jpg')

    u2 = User.create!(username: "dk", fname: "Donkey", lname: "Kong", email: "dk@gmail.com", password: "password")
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/dk-pp.jpg')
        u2.avatar.attach(io: file, filename: 'dk-pp.jpg')

    u3 = User.create!(username: "power", fname: "Ganon", lname: "Dorf", email: "ganonsCastle@gmail.com", password: "password")
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/ganon-pp.jpg')
        u3.avatar.attach(io: file, filename: 'ganon-pp.jpg')

    u4 = User.create!(username: "courage", fname: "Link", lname: "Elf", email: "zeldasluver@gmail.com", password: "password")
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/link-pp.jpg')
        u4.avatar.attach(io: file, filename: 'link-pp.jpg')   

    u5 = User.create!(username: "wisdom", fname: "Zelda", lname: "AlsoAnElf", email: "saveme@gmail.com", password: "password")
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/zelda.jpg')
        u5.avatar.attach(io: file, filename: 'zelda.jpg') 
        
    u6 = User.create!(username: "paper", fname: "Mario", lname: "Bro", email: "thousandyeardoor@gmail.com", password: "password")
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/mario-pp.jpg')
        u6.avatar.attach(io: file, filename: 'mario-pp.jpg')

    u7 = User.create!(username: "ghostexterminator", fname: "Luigi", lname: "bro", email: "scaredstraight@gmail.com", password: "password")
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/luigi-pp.jpg')
        u7.avatar.attach(io: file, filename: 'luigi-pp.jpg')

    u8 = User.create!(username: "excalibur", fname: "Saber", lname: "Servent", email: "bestwaifu@gmail.com", password: "password")
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/saber-pp.jpg')
        u8.avatar.attach(io: file, filename: 'saber-pp.jpg')

    u9 = User.create!(username: "popsiclemelted", fname: "Todoroki", lname: "Shoto", email: "songoffireandice@gmail.com", password: "password")
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/todoroki-pp.jpg')
        u9.avatar.attach(io: file, filename: 'todoroki-pp.jpg')

    u10 = User.create!(username: "iflydragons", fname: "Jon", lname: "Snow", email: "wolvesanddragons@gmail.com", password: "password")
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/jon-pp.jpg')
        u10.avatar.attach(io: file, filename: 'jon-pp.jpg')

# BUSINESSES
    # RESTAURANTS
        res1 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r1.jpeg')
        res1.photo.attach(io: file, filename: 'r1.jpeg')
        
        res2 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r2.jpg')
        res2.photo.attach(io: file, filename: 'r2.jpg')
        
        res3 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r3.png')
        res3.photo.attach(io: file, filename: 'r3.png')
        
        res4 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r4.jpeg')
        res4.photo.attach(io: file, filename: 'r4.jpeg')
        
        res5 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r5.jpeg')
        res5.photo.attach(io: file, filename: 'r5.jpeg')
        
        res6 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r6.jpg')
        res6.photo.attach(io: file, filename: 'r6.jpg')
        
        res7 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r7.jpg')
        res7.photo.attach(io: file, filename: 'r7.jpg')
        
        res8 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r8.jpeg')
        res8.photo.attach(io: file, filename: 'r8.jpeg')
        
        res9 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r9.jpeg')
        res9.photo.attach(io: file, filename: 'r9.jpeg')
        
        res10 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r10.jpg')
        res10.photo.attach(io: file, filename: 'r10.jpg')
        
        res11 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r11.jpeg')
        res11.photo.attach(io: file, filename: 'r11.jpeg')
        
        res12 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r12.jpg')
        res12.photo.attach(io: file, filename: 'r12.jpg')
        
        res13 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r13.jpg')
        res13.photo.attach(io: file, filename: 'r13.jpg')
        
        res14 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r14.jpeg')
        res14.photo.attach(io: file, filename: 'r14.jpeg')
        
        res15 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r15.jpg')
        res15.photo.attach(io: file, filename: 'r15.jpg')
        
        res16 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r16.jpg')
        res16.photo.attach(io: file, filename: 'r16.jpg')
        
        res17 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r17.jpg')
        res17.photo.attach(io: file, filename: 'r17.jpg')
        
        res18 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r18.jpg')
        res18.photo.attach(io: file, filename: 'r18.jpg')
        
        res19 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r19.jpg')
        res19.photo.attach(io: file, filename: 'r19.jpg')
        
        res20 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r20.jpg')
        res20.photo.attach(io: file, filename: 'r20.jpg')
        
        res21 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r21.jpg')
        res21.photo.attach(io: file, filename: 'r21.jpg')
        
        res22 = Business.create!(name: "#{curr_res = res_name.pop()}", categories: "#{food_category.sample}", business_phone: number_generator,
                              url: "#{curr_res.split("").join("")}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr_res}@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r22.jpg')
        res22.photo.attach(io: file, filename: 'r22.jpg')
        
        res23 = Business.create!(name: "Two Worlds Collide", categories: "Bakery", business_phone: number_generator,
                              url: "twoworldscollide.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#twoworldscollide@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r23.jpg')
        res23.photo.attach(io: file, filename: 'r23.jpg')
        
        res24 = Business.create!(name: "The Joint", categories: "Breakfast", business_phone: number_generator,
                              url: "thejoint.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "thejoint@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r24.jpeg')
        res24.photo.attach(io: file, filename: 'r24.jpeg')
        
        res25 = Business.create!(name: "24/7 Dim Sum", categories: "Chinese", business_phone: number_generator,
                              url: "dimsum.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "dimsum@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r25.jpg')
        res25.photo.attach(io: file, filename: 'r25.jpg')
        
        res26 = Business.create!(name: "Top Ramen", categories: "Japanese", business_phone: number_generator,
                              url: "topramen.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "topramen@welp.com", business_type: "Restaurant", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/r26.jpg')
        res26.photo.attach(io: file, filename: 'r26.jpg')
    
    # HOME SERVICES

        home_service_name = home_service.sample.split("-")
        h1 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h1.jpeg')
        h1.photo.attach(io: file, filename: 'h1.jpeg')
        
        home_service_name = home_service.sample.split("-")
        h2 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h2.jpeg')
        h2.photo.attach(io: file, filename: 'h2.jpeg')
        
        home_service_name = home_service.sample.split("-")
        h3 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h3.jpg')
        h3.photo.attach(io: file, filename: 'h3.jpg')
        
        home_service_name = home_service.sample.split("-")
        h4 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h4.jpg')
        h4.photo.attach(io: file, filename: 'h4.jpg')
        
        home_service_name = home_service.sample.split("-")
        h5 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h5.jpg')
        h5.photo.attach(io: file, filename: 'h5.jpg')
        
        home_service_name = home_service.sample.split("-")
        h6 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h6.jpeg')
        h6.photo.attach(io: file, filename: 'h6.jpeg')
        
        home_service_name = home_service.sample.split("-")
        h7 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h7.jpg')
        h7.photo.attach(io: file, filename: 'h7.jpg')
        
        home_service_name = home_service.sample.split("-")
        h8 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h8.jpg')
        h8.photo.attach(io: file, filename: 'h8.jpg')
        
        home_service_name = home_service.sample.split("-")
        h9 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h9.jpg')
        h9.photo.attach(io: file, filename: 'h9.jpg')
        
        home_service_name = home_service.sample.split("-")
        h10 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h10.jpg')
        h10.photo.attach(io: file, filename: 'h10.jpg')
        
        home_service_name = home_service.sample.split("-")
        h11 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h11.jpeg')
        h11.photo.attach(io: file, filename: 'h11.jpeg')
        
        home_service_name = home_service.sample.split("-")
        h12 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h12.jpeg')
        h12.photo.attach(io: file, filename: 'h12.jpeg')
        
        home_service_name = home_service.sample.split("-")
        h13 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h13.jpg')
        h13.photo.attach(io: file, filename: 'h13.jpg')
        
        home_service_name = home_service.sample.split("-")
        h14 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h14.jpg')
        h14.photo.attach(io: file, filename: 'h14.jpg')
        
        home_service_name = home_service.sample.split("-")
        h15 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h15.jpeg')
        h15.photo.attach(io: file, filename: 'h15.jpeg')
        
        home_service_name = home_service.sample.split("-")
        h16 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h16.jpg')
        h16.photo.attach(io: file, filename: 'h16.jpg')
        
        home_service_name = home_service.sample.split("-")
        h17 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h17.jpeg')
        h17.photo.attach(io: file, filename: 'h17.jpeg')
        
        home_service_name = home_service.sample.split("-")
        h18 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h18.jpg')
        h18.photo.attach(io: file, filename: 'h18.jpg')
        
        home_service_name = home_service.sample.split("-")
        h19 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h19.jpg')
        h19.photo.attach(io: file, filename: 'h19.jpg')
        
        home_service_name = home_service.sample.split("-")
        h20 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h20.jpg')
        h20.photo.attach(io: file, filename: 'h20.jpg')
        
        home_service_name = home_service.sample.split("-")
        h21 = Business.create!(name: "#{curr = name.sample()}'s #{home_service_name.first}", categories: "#{home_service_name.last}", business_phone: number_generator,
                              url: "#{curr}#{home_service_name.first}.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "#{curr}@welp.com", business_type: "Home", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/h21.jpeg')
        h21.photo.attach(io: file, filename: 'h21.jpeg')
    
    # AUTO SERVICES

        a1 = Business.create!(name: "Joe's Auto Repair Shop", categories: "Auto Repair", business_phone: number_generator,
                              url: "joesautorepair.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "joes@welp.com", business_type: "Auto", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/a1.jpg')
        a1.photo.attach(io: file, filename: 'a1.jpg')
        
        a2 = Business.create!(name: "Prettier", categories: "Auto Detailing", business_phone: number_generator,
                              url: "prettier.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "prettier@welp.com", business_type: "Auto", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/a2.jpg')
        a2.photo.attach(io: file, filename: 'a2.jpg')
        
        a3 = Business.create!(name: "Used Parts", categories: "Body Shop", business_phone: number_generator,
                              url: "cheaperparts.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "usedlikenew@welp.com", business_type: "Auto", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/a3.jpg')
        a3.photo.attach(io: file, filename: 'a3.jpg')
        
        a4 = Business.create!(name: "Shiny Cars", categories: "Car Wash", business_phone: number_generator,
                              url: "letsclean.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "shiny@welp.com", business_type: "Auto", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/a4.jpg')
        a4.photo.attach(io: file, filename: 'a4.jpg')
        
        a5 = Business.create!(name: "Phancy Dealership", categories: "Car Dealership", business_phone: number_generator,
                              url: "phancy.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "phancy@welp.com", business_type: "Auto", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/a5.jpg')
        a5.photo.attach(io: file, filename: 'a5.jpg')
        
        a6 = Business.create!(name: "Detox", categories: "Oil Change", business_phone: number_generator,
                              url: "changethatoil.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "oilman@welp.com", business_type: "Auto", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/a6.jpg')
        a6.photo.attach(io: file, filename: 'a6.jpg')
        
        a7 = Business.create!(name: "Big Lot", categories: "Parking", business_phone: number_generator,
                              url: "biglot.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "biglot@welp.com", business_type: "Auto", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/a7.jpg')
        a7.photo.attach(io: file, filename: 'a7.jpg')
        
        a8 = Business.create!(name: "Big Mike's Towing Company", categories: "Towing", business_phone: number_generator,
                              url: "bigmike.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "mikey@welp.com", business_type: "Auto", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/a8.jpg')
        a8.photo.attach(io: file, filename: 'a8.jpg')

    # OTHER

        o1 = Business.create!(name: "Lee Cleaning", categories: "Dry Cleaning", business_phone: number_generator,
                              url: "lee.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "lee@welp.com", business_type: "Other", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/o1.jpg')
        o1.photo.attach(io: file, filename: 'o1.jpg')
        
        o2 = Business.create!(name: "Fix It", categories: "Phone Repair", business_phone: number_generator,
                              url: "fixit.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "fixit@welp.com", business_type: "Other", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/o2.jpeg')
        o2.photo.attach(io: file, filename: 'o2.jpeg')
        
        o3 = Business.create!(name: "Tap in", categories: "Bar", business_phone: number_generator,
                              url: "tapin.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "tapin@welp.com", business_type: "Other", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/o3.jpeg')
        o3.photo.attach(io: file, filename: 'o3.jpeg')
        
        o4 = Business.create!(name: "Ring", categories: "Nightlife", business_phone: number_generator,
                              url: "ring.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "ring@welp.com", business_type: "Other", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/o4.jpg')
        o4.photo.attach(io: file, filename: 'o4.jpg')
        
        o5 = Business.create!(name: "Chez Moi Salon", categories: "Hair Salons", business_phone: number_generator,
                              url: "chezmoisalon.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "chezmoi@welp.com", business_type: "Other", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/o5.jpg')
        o5.photo.attach(io: file, filename: 'o5.jpg')
        
        o6 = Business.create!(name: "23 Hour Fitness", categories: "Gym", business_phone: number_generator,
                              url: "23hour.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "23hour@welp.com", business_type: "Other", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/o6.png')
        o6.photo.attach(io: file, filename: 'o6.png')
        
        o7 = Business.create!(name: "Happy", categories: "Massage", business_phone: number_generator,
                              url: "happy.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "happy@welp.com", business_type: "Other", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/o7.jpg')
        o7.photo.attach(io: file, filename: 'o7.jpg')
        
        o8 = Business.create!(name: "Excellent Mall", categories: "Shopping", business_phone: number_generator,
                              url: "excellent.com", city: "San Francisco", state: "California", street_address: "#{address_gen(street_name)}", zip_code: 94133, 
                              email: "excellent@welp.com", business_type: "Other", lat: lat_gen, lng: lng_gen, cost: ran_cost)
        file = open('https://welp-biz-seeds.s3-us-west-1.amazonaws.com/o8.jpg')
        o8.photo.attach(io: file, filename: 'o8.jpg')


# REVIEWS
    r1 = Review.create!(business_id: res1.id, user_id: u1.id, rating: 5, body: "Excellent service and the food was A1")
    r2 = Review.create!(business_id: res2.id, user_id: u2.id, rating: 3, body: "Poor service but the food was delicious")
    r3 = Review.create!(business_id: res3.id, user_id: u3.id, rating: 2, body: "My party and I had to wait an extra 45 minutes even though we had a reservation. Food was subpar")
    r4 = Review.create!(business_id: res4.id, user_id: u4.id, rating: 4, body: "I came when it was busy but the waiter was very attentive.")
    r5 = Review.create!(business_id: res5.id, user_id: u5.id, rating: 1, body: "How is this restaurant kept afloat? My entire dining experience was ruined by the horrible waiter. They must have used old ingredients because the food was disgusting")
    r6 = Review.create!(business_id: res6.id, user_id: u6.id, rating: 1, body: "DO NOT GO HERE")
    r7 = Review.create!(business_id: res7.id, user_id: u7.id, rating: 4, body: "Although the waiter was not as attentive, the food was great. The restaurant was busy so I understand that it can get hectic.")
    r8 = Review.create!(business_id: res8.id, user_id: u8.id, rating: 5, body: "Excellent service and the food was A1")
    r9 = Review.create!(business_id: res9.id, user_id: u9.id, rating: 3, body: "The only redeeming factor of this restaurant is their food. The staff was incredibly rude")
    r10 = Review.create!(business_id: res10.id, user_id: u10.id, rating: 3, body: "You would think that having a reservation would get you a table on time, but not at this place. The food was amazing though.")
    r11 = Review.create!(business_id: res11.id, user_id: u1.id, rating: 2, body: "Decided to try this restaurant after passing by it so many times. I was disappointed with the food and the staff was decent.")
    r12 = Review.create!(business_id: res12.id, user_id: u2.id, rating: 4, body: "You have to try this restaurant. The view of the ocean is so nice and complements the ambient setting really well")
    r13 = Review.create!(business_id: res13.id, user_id: u3.id, rating: 5, body: "The waitress was attentive and checked on my partner and I frequently. I would give this a 5* solely on the waitress but the food was also amazing.")
    r14 = Review.create!(business_id: res14.id, user_id: u4.id, rating: 5, body: "Good food and good music")
    r15 = Review.create!(business_id: res15.id, user_id: u5.id, rating: 5, body: "10/10 would recommend")
    r16 = Review.create!(business_id: res16.id, user_id: u6.id, rating: 3, body: "5/10")
    r17 = Review.create!(business_id: res17.id, user_id: u7.id, rating: 5, body: "You will never meet a better group of stafff members then at this restaurant.")
    r18 = Review.create!(business_id: res18.id, user_id: u8.id, rating: 4, body: "Top tier food")
    r19 = Review.create!(business_id: res19.id, user_id: u9.id, rating: 5, body: "TRY THIS PLACE")
    r20 = Review.create!(business_id: res20.id, user_id: u10.id, rating: 3, body: "I will have to go here again to judge this place completely.")
    r21 = Review.create!(business_id: res21.id, user_id: u1.id, rating: 2, body: "Decided to try this restaurant after passing by it so many times. I was disappointed with the food and the staff was decent.")
    r22 = Review.create!(business_id: res22.id, user_id: u2.id, rating: 4, body: "You have to try this restaurant. The view of the ocean is so nice and complements the ambient setting really well")
    r23 = Review.create!(business_id: h1.id, user_id: u3.id, rating: 5, body: "Prompt and fast.")
    r24 = Review.create!(business_id: h2.id, user_id: u4.id, rating: 1, body: "Never hire these clowns")
    r25 = Review.create!(business_id: h3.id, user_id: u5.id, rating: 3, body: "Person was late but he got the job done")
    r26 = Review.create!(business_id: h4.id, user_id: u6.id, rating: 4, body: "Excellent service")
    r27 = Review.create!(business_id: h5.id, user_id: u7.id, rating: 1, body: "I could have did this myself.")
    r28 = Review.create!(business_id: h6.id, user_id: u8.id, rating: 5, body: "Top tier service")
    r29 = Review.create!(business_id: h7.id, user_id: u9.id, rating: 5, body: "HIRE THEM")
    r30 = Review.create!(business_id: h8.id, user_id: u10.id, rating: 3, body: "He was late but got the job done.")
    r31 = Review.create!(business_id: h9.id, user_id: u1.id, rating: 2, body: "Don't do it. Don't hire these fools")
    r32 = Review.create!(business_id: h10.id, user_id: u2.id, rating: 4, body: "I would highly recommend hiring these people. They are fast and efficient")
    r33 = Review.create!(business_id: h11.id, user_id: u3.id, rating: 5, body: "It was clear with our short conversation that Timmy was a true professional.")
    r34 = Review.create!(business_id: h12.id, user_id: u4.id, rating: 1, body: "Was recommended by a friend but had a horrible experience")
    r35 = Review.create!(business_id: h13.id, user_id: u5.id, rating: 2, body: "The person was nice but did and awful job")
    r36 = Review.create!(business_id: h14.id, user_id: u6.id, rating: 3, body: "Got the job done")
    r37 = Review.create!(business_id: h15.id, user_id: u7.id, rating: 4, body: "Great service.")
    r38 = Review.create!(business_id: h16.id, user_id: u8.id, rating: 1, body: "These guys know nothing")
    r39 = Review.create!(business_id: h17.id, user_id: u9.id, rating: 3, body: "Decent")
    r40 = Review.create!(business_id: h18.id, user_id: u10.id, rating: 4, body: "I had a really good experience with this company.")
    r41 = Review.create!(business_id: h19.id, user_id: u1.id, rating: 5, body: "Just look at their ratings. Would highly recommend.")
    r42 = Review.create!(business_id: h20.id, user_id: u2.id, rating: 2, body: "Just don't")
    r43 = Review.create!(business_id: h21.id, user_id: u3.id, rating: 3, body: "They got the job done.")
    r44 = Review.create!(business_id: a1.id, user_id: u4.id, rating: 5, body: "EXCELLENT SERVICE")
    r45 = Review.create!(business_id: a2.id, user_id: u5.id, rating: 5, body: "10/10 would recommend")
    r46 = Review.create!(business_id: a3.id, user_id: u6.id, rating: 3, body: "Staff was rude but they did a good job")
    r47 = Review.create!(business_id: a4.id, user_id: u7.id, rating: 2, body: "Find another place. Not worth the money spent.")
    r48 = Review.create!(business_id: a5.id, user_id: u8.id, rating: 1, body: "Not worth at all")
    r49 = Review.create!(business_id: a6.id, user_id: u9.id, rating: 4, body: "Cheap and fast")
    r50 = Review.create!(business_id: a7.id, user_id: u10.id, rating: 1, body: "No parking at all.")
    r51 = Review.create!(business_id: a8.id, user_id: u1.id, rating: 5, body: "Big Mike helped tow my car in a fast and timely manner.")
    r52 = Review.create!(business_id: o1.id, user_id: u2.id, rating: 5, body: "My white shirt came out stain free. Thank you Lee!")
    r53 = Review.create!(business_id: o2.id, user_id: u3.id, rating: 2, body: "Phone broke again soon after picking up my phone.")
    r54 = Review.create!(business_id: o3.id, user_id: u4.id, rating: 3, body: "Good food, drinks, and music")
    r55 = Review.create!(business_id: o4.id, user_id: u5.id, rating: 1, body: "This place sucks. Go to temple")
    r56 = Review.create!(business_id: o5.id, user_id: u6.id, rating: 4, body: "Great service")
    r57 = Review.create!(business_id: o6.id, user_id: u7.id, rating: 5, body: "It's only open for 23 hours a day but people put the gym equipment back where it's supposed to be.")
    r58 = Review.create!(business_id: o7.id, user_id: u8.id, rating: 1, body: "I was depressed after getting a massage. Do not go here")
    r59 = Review.create!(business_id: o8.id, user_id: u9.id, rating: 5, body: "The name speaks for itself")
    r60 = Review.create!(business_id: res23.id, user_id: u10.id, rating: 4, body: "Great service")
    r61 = Review.create!(business_id: res24.id, user_id: u1.id, rating: 5, body: "The food is spectacular!")
    r62 = Review.create!(business_id: res25.id, user_id: u2.id, rating: 5, body: "Awsome service and even better food!")
    r63 = Review.create!(business_id: res26.id, user_id: u3.id, rating: 5, body: "Best ramen in San Francisco")
  
