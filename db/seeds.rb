Character.destroy_all
User.destroy_all
Story.destroy_all

demoUser1 = User.create({
    name: "Demo Dave"
})

demoCharacter1 = Character.create({
    name: "Rainbow",
    occupation: "Princess",
    head_element: 2,
    body_element: 2,
    leg_element: 2,
    color_scheme: 3,
    user_id: demoUser1.id
})

demoCharacter2 = Character.create({
    name: "Hank",
    occupation: "Wizard",
    head_element: 3,
    body_element: 3,
    leg_element: 3,
    color_scheme: 2,
    user_id: demoUser1.id
})

demoCharacter2 = Character.create({
    name: "Buzz",
    occupation: "Dinosaur",
    head_element: 1,
    body_element: 1,
    leg_element: 1,
    color_scheme: 1,
    user_id: demoUser1.id
})

demoStory1 = Story.create({
    title: "a walk through the forest",
    theme: 1,
    difficulty: 1
})

demoStory2 = Story.create({
    title: "strolling the castle",
    theme: 2,
    difficulty: 2
})

puts "seeding done"