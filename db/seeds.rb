# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "👩👨 Seeding users..."
user1 = User.create(username: 'Jen', password: 'apple')
user2 = User.create(username: 'Shani', password: 'banana')
user3 = User.create(username: 'Gehrig', password: 'banana')
user4 = User.create(username: 'Ethan', password: 'banana')
user5 = User.create(username: 'Hain', password: 'banana')
user6 = User.create(username: 'Ilolo', password: 'banana')
user7 = User.create(username: 'Vivian', password: 'banana')
user8 = User.create(username: 'Rodney', password: 'banana')

puts "🧘🤸 Seeding yoga poses..."
yoga1 = YogaPose.create(title: "Downward-Facing Dog Pose", image: , category: , description: "Start on your hands and knees, with your hands stacked under your shoulders and knees under your hips. Spread your hands wide and press your index finger and thumb into your mat. Lift your tailbone and press your butt up and back, drawing your hips toward the ceiling. Straighten your legs as best as you can and press your heels gently toward the floor. Your head should be between your arms, facing your knees, and your backs should be flat. Hold for 5 to 10 breaths.", favorited: "false", video: "https://www.youtube.com/watch?v=j97SSGsnCAQ")

yoga2 = YogaPose.create(title: "Mountain Pose", image: , category: , description: "Stand with your toes together and heels slightly apart.
Spread your toes and place your weight evenly through both feet. Engage your core and tuck your hips under a bit so your tailbone is pointing down toward the floor. Relax your shoulders and roll them back and down. Inhale and reach your arms overhead, while pressing down into your feet. You may also put your hands in prayer position in front of your chest, or rest them by your sides—all are commonly used variations, and your instructor may cue one specifically or give you the choice. Take long, slow, deep breaths in and out of your nose. Hold for 3 to 5 breaths.", favorited: "false", video: "https://www.youtube.com/watch?v=NYhH8Gr35cI")

yoga3 = YogaPose.create(title: , image: , category: , description: , favorited: "false", video: )

yoga4 = YogaPose.create(title: , image: , category: , description: , favorited: "false", video: )

yoga5 = YogaPose.create(title: , image: , category: , description: , favorited: "false", video: )

yoga6 = YogaPose.create(title: , image: , category: , description: , favorited: "false", video: )

yoga7 = YogaPose.create(title: , image: , category: , description: , favorited: "false", video: )

yoga8 = YogaPose.create(title: , image: , category: , description: , favorited: "false", video: )

yoga9 = YogaPose.create(title: , image: , category: , description: , favorited: "false", video: )

yoga10 = YogaPose.create(title: , image: , category: , description: , favorited: "false", video: )

puts "✍🏻🗒️ Seeding comments..."
comment1 = Comment.create(description: "This pose really helped me with my anxiety", user_id: 1, yoga_pose_id: 1)
comment2 = Comment.create(description: , user_id: 1, yoga_pose_id: 2)
comment3 = Comment.create(description: , user_id: 2, yoga_pose_id: 3)
comment4 = Comment.create(description: , user_id: 2, yoga_pose_id: 4)
comment5 = Comment.create(description: , user_id: 3, yoga_pose_id: 5)
comment6 = Comment.create(description: , user_id: 3, yoga_pose_id: 6)
comment7 = Comment.create(description: , user_id: 4, yoga_pose_id: 7)
comment8 = Comment.create(description: , user_id: 4, yoga_pose_id: 8)
comment9 = Comment.create(description: , user_id: 5, yoga_pose_id: 9)
comment10 = Comment.create(description: , user_id: 5, yoga_pose_id: 10)
comment11 = Comment.create(description: , user_id: 6, yoga_pose_id: 1)
comment12 = Comment.create(description: , user_id: 6, yoga_pose_id: 2)
comment13 = Comment.create(description: , user_id: 7, yoga_pose_id: 3)
comment14 = Comment.create(description: , user_id: 7, yoga_pose_id: 4)
comment15 = Comment.create(description: , user_id: 8, yoga_pose_id: 5)
comment16 = Comment.create(description: , user_id: 8, yoga_pose_id: 6)

puts "✅ Done seeding!"