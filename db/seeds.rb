# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# puts "👩👨 Seeding users..."

user1 = User.create(username: 'Jen', password: 'apple')
user2 = User.create(username: 'Shani', password: 'banana')
user3 = User.create(username: 'Gehrig', password: 'banana')
user4 = User.create(username: 'Ethan', password: 'banana')
user5 = User.create(username: 'Hain', password: 'banana')
user6 = User.create(username: 'Ilolo', password: 'banana')
user7 = User.create(username: 'Vivian', password: 'banana')
user8 = User.create(username: 'Rodney', password: 'banana')


puts "🧘🤸 Seeding yoga poses..."

yoga1 = YogaPose.create(title: "Downward-Facing Dog", image: "https://media.self.com/photos/5b841151bfb49a655b4bf2ec/master/w_2580%2Cc_limit/downward-dog-beginner-yoga.jpg", category: "Beginner", description: "Start on your hands and knees, with your hands stacked under your shoulders and knees under your hips. Spread your hands wide and press your index finger and thumb into your mat. Lift your tailbone and press your butt up and back, drawing your hips toward the ceiling. Straighten your legs as best as you can and press your heels gently toward the floor. Your head should be between your arms, facing your knees, and your backs should be flat. Hold for 5 to 10 breaths.", is_favorited: "false", video: "https://www.youtube.com/embed/j97SSGsnCAQ")

yoga2 = YogaPose.create(title: "Mountain Pose", image: "https://media.self.com/photos/5b7c4e702efd865291548a83/master/w_2580%2Cc_limit/mountain-pose-beginner-yoga.jpg", category: "Beginner", description: "Stand with your toes together and heels slightly apart.
Spread your toes and place your weight evenly through both feet. Engage your core and tuck your hips under a bit so your tailbone is pointing down toward the floor. Relax your shoulders and roll them back and down. Inhale and reach your arms overhead, while pressing down into your feet. You may also put your hands in prayer position in front of your chest, or rest them by your sides—all are commonly used variations, and your instructor may cue one specifically or give you the choice. Take long, slow, deep breaths in and out of your nose. Hold for 3 to 5 breaths.", is_favorited: "false", video: "https://www.youtube.com/embed/NYhH8Gr35cI")

yoga3 = YogaPose.create(title: "Crescent Lunge", image: "https://media.self.com/photos/5b7c4e6d3327c070925be48d/master/w_2580%2Cc_limit/crescent-lunge-beginner-yoga.jpg", category: "Beginner", description: "Take a big step forward with your left foot to start in a staggered stance, with your feet almost mat-length apart. Bend your front knee and keep your back leg straight and heel lifted off the floor. Try to bend your front leg so that your thigh is parallel to the floor. Square your hips toward the front. Extend your arms toward the ceiling on either side of your head and stretch up as you also press into the mat and feel the stretch in your hips.Hold for 5 breaths and repeat on the other side. To move into Low Lunge/Anjaneyasana, simply drop your back knee to the floor, keeping the leg extended long and the shin flat on the mat.", is_favorited: "false", video: "https://www.youtube.com/embed/zaongQlYTto")

yoga4 = YogaPose.create(title: "Warrior II", image: "https://media.self.com/photos/5b8411524c1c2e249b195c1b/master/w_2580%2Cc_limit/warrior-2-beginner-yoga.jpg", category: "Beginner", description: "Take a big step forward with your left foot to start in a staggered stance, with your feet almost mat-length apart. Extend your arms so that they are parallel to the floor. Bend your left knee so that it's at or near a 90-degree angle, your thigh parallel to the floor, while keeping the right leg straight. Point your left toes forward and turn your right foot out to the right so that it's perpendicular to your left foot. Your left heel should be in line with the arch of your right foot. At the same time, twist your torso to the right so that your left hip is facing toward the front of the room and your right hip is facing toward the back. Your left arm and your head should both be pointing forward and your right arm should be pointing back. Hold for 1 to 5 breaths.", is_favorited: "false", video: "https://www.youtube.com/embed/4Ejz7IgODlU")

yoga5 = YogaPose.create(title: "Triangle Pose", image: "https://media.self.com/photos/5b7c4e71ecbb7f4c41c77335/master/w_2580%2Cc_limit/triangle-pose-beginner-yoga.jpg", category: "Intermediate", description: "Start in Warrior II. Straighten your front leg. Then, reach forward with your left hand toward the ground. Tilt your torso forward and rotate it open to the right side. Rotate your arms to 6 and 12 o’clock. Rest your left hand on your shin, or the floor if you can, and extend your top arm fingers toward the ceiling. Hold for 5 to 10 breaths, then switch sides.", is_favorited: "false", video: "https://www.youtube.com/embed/upFYlxZHif0")

yoga6 = YogaPose.create(title: "High Plank", image: "https://media.self.com/photos/5b85ad8e2bc4b7636663a613/master/w_2580%2Cc_limit/high-plank-beginner-yoga.jpg", category: "Intermediate", description: "Start on all fours, with your knees under your hips and your hands flat on the floor directly underneath your shoulders. Lift your knees off the floor and extend your legs out behind you. You should now be on your toes and your hands, with your body forming one long line. Keep your palms flat on the floor, hands shoulder-width apart, shoulders stacked directly above your wrists, and core engaged. Keep your neck and spine in a neutral position by looking down at the top of your mat. Hold this position for 3-5 breaths.", is_favorited: "false", video: "https://www.youtube.com/embed/6qg3r4zZE_k")

yoga7 = YogaPose.create(title: "Low Plank", image: "https://media.self.com/photos/5b85ad8c0eed546bd4c7024a/master/w_2580%2Cc_limit/low-plank-beginner-yoga.jpg", category: "Intermediate", description: "Start in Plank Pose with your palms flat on the floor, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended, and core engaged. Slowly lower down to a Low Plank by bending your elbows, keeping them tucked in close to the side of your body, until they form 90-degree angles. Hold for 1 breath.", is_favorited: "false", video: "https://www.youtube.com/embed/3vzTYq4BX68")

yoga8 = YogaPose.create(title: "Upward-Facing Dog", image: "https://media.self.com/photos/5b7c4e6eecbb7f4c41c77331/master/w_2580%2Cc_limit/upward-facing-dog-beginner-yoga.jpg", category: "Beginner", description: "From Low Plank/Chaturanga, drop your hips down to the floor and flip your toes over so the tops of your feet touch the floor. Tighten your core and straighten your arms to push your chest up. Pull your shoulders back, squeeze your shoulder blades, and tilt your head toward the ceiling, to open up your chest.", is_favorited: "false", video: "https://www.youtube.com/embed/pVmOOluGAv8")

yoga9 = YogaPose.create(title: "Tree Pose", image: "https://media.self.com/photos/5b7c4e6f2efd865291548a81/master/w_2580%2Cc_limit/tree-pose-beginner-yoga.jpg", category: "Intermediate", description: "Start in mountain pose with your toes together and heels slightly apart.
Bring your right foot to the inner thigh of your left leg. Squeeze your foot and inner thigh together. The knee of your right leg should be turned out and your right thigh facing down toward the ground at a 45-degree angle. Once you’ve found your balance, lift your hands to prayer position in front of your chest, or up overhead if that feels better for you. Keep your gaze focused on a fixed point in front of you to help stay balanced. Hold for 5 to 10 breaths, then switch sides.", is_favorited: "false", video: "https://www.youtube.com/embed/yVE4XXFFO70")

yoga10 = YogaPose.create(title: "Dancer Pose", image: "https://media.self.com/photos/5b7c4e70ecbb7f4c41c77333/master/w_2580%2Cc_limit/dancers-pose-beginner-yoga.jpg", category: "Advanced", description: "Stand tall with your feet together. Bend your left knee and bring your left foot toward your glutes. Grab onto the inner arch of your left foot with your left hand and slowly lift your foot toward the ceiling. At the same time, reach your right arm forward and up toward the ceiling. Actively press down into the floor with your entire right foot as you start to open your chest and pull your lifted leg up. Keep your chest lifted. Hold on one side for 5 to 10 breaths, and then switch sides.", is_favorited: "false", video: "https://www.youtube.com/embed/TXNgRNsqcPo")

yoga11 = YogaPose.create(title: "Pigeon Pose", image: "https://media.self.com/photos/5b7c4e6d3327c070925be48c/master/w_2580%2Cc_limit/half-pigeon-beginner-yoga.jpg", category: "Advanced", description: "From Downward-Facing Dog, extend your left leg high, and then bring your leg underneath your body and place it in front of you, with your shin parallel to the top of your mat. Extend your right leg straight behind you. Rest the top of your foot on the floor. Keep your left foot flexed. Try to keep your right hip as close to the mat as you can. If it lifts off the floor, bring your left foot in a little closer to your body. Stay upright for three breaths. Then, fold over and rest your head on the ground for 5 to 10 breaths. Repeat on the other leg.", is_favorited: "false", video: "https://www.youtube.com/embed/0_zPqA65Nok")

yoga12 = YogaPose.create(title: "Seated Forward Fold", image: "https://media.self.com/photos/5b7c4e6d37ff4e0e38e2eff0/master/w_2580%2Cc_limit/seated-forward-fold-beginner-yoga.jpg", category: "Beginner", description: "Sit on the floor with your legs extended in front of you. Flex your feet. Sit up tall with a straight back. Bending from your hips and keeping your flat back, fold your upper body over your lower body. If you are able to, grab onto the outside of each foot, or your ankles or shins. Release your neck and let your head hang heavy. Hold for 5 to 10 breaths.", is_favorited: "false", video: "https://www.youtube.com/embed/CNRLcEPJdIU")


puts "✍🏻🗒️ Seeding comments..."

comment1 = Comment.create(description: "This pose really helped me with my anxiety", user_id: 2, yoga_pose_id: yoga1.id)

comment2 = Comment.create(description: "I felt so relaxed and aware of my body while doing this! Thank you!", user_id: 2, yoga_pose_id: yoga2.id)

comment3 = Comment.create(description: "Loved this. Thank you 😊❤️", user_id: 2, yoga_pose_id: yoga3.id)

comment4 = Comment.create(description: "I love this pose! It makes me feel really strong", user_id: 2, yoga_pose_id: yoga4.id)

comment5 = Comment.create(description: "I've never connected to this pose like this! I felt the energy building just standing there breathing. I was smiling like a loon and my eyes watered a little...haha amazing", user_id: 3, yoga_pose_id: yoga5.id)

comment6 = Comment.create(description: "This is also one of my favorite poses. It has really made an impact in my life and I come to this pose in different situations, like when I'm feeling anxious.", user_id: 3, yoga_pose_id: yoga6.id)

comment7 = Comment.create(description: "I just started to practice and I already can feel the difference. I loved the video!!", user_id: 4, yoga_pose_id: yoga7.id)

comment8 = Comment.create(description: "Watched the other videos. This is the first one I actually tried to do. Kinda new to all this. Thanks for the entertaining and well instructed videos. Cheers", user_id: 4, yoga_pose_id: yoga8.id)

comment9 = Comment.create(description: "YAAAAASSSSS...great video...very helpfulllll", user_id: 5, yoga_pose_id: yoga9.id)

comment10 = Comment.create(description: "Just did this during my lunch break at work. Thanks!", user_id: 5, yoga_pose_id: yoga10.id)

comment11 = Comment.create(description: "I thought yoga would be something much more complicated, but it isn't. Like everything else it just needs practice.", user_id: 6, yoga_pose_id: yoga11.id)

comment12 = Comment.create(description: "started with sciatica pain and it eased by the time the video was done", user_id: 6, yoga_pose_id: yoga2.id)

comment13 = Comment.create(description: "After doing this pose i just realised that i distribute most of my weight to the medial side of my feet, therefore i was struggling to use all four corners of my foot. Hope to get better with practice!", user_id: 7, yoga_pose_id: yoga3.id)

comment14 = Comment.create(description: "Thank you ❤️😊 🙏", user_id: 7, yoga_pose_id: yoga4.id)

comment15 = Comment.create(description: "THIS POSE WAS REALLY GOOD", user_id: 8, yoga_pose_id: yoga5.id)

comment16 = Comment.create(description: "I am so grateful for this yoga pose because it makes me feel confident, like I can do anything. So empowering!", user_id: 8, yoga_pose_id: yoga6.id)

puts "✅ Done seeding!"