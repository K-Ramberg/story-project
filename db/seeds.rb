Character.destroy_all
User.destroy_all
Story.destroy_all

demoUser1 = User.create({
    name: "Demo Dave",
    stories_completed: 0
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
    difficulty: "beginner"
})

demoStory2 = Story.create({
    title: "strolling the castle",
    theme: 1,
    difficulty: "beginner"
})

demoPage1 = Page.create({
    number: 1,
    completed: false,
    story_id: demoStory1.id
})

demoPage2 = Page.create({
    number: 2,
    completed: false,
    story_id: demoStory1.id
})

demoPage3 = Page.create({
    number: 3,
    completed: false,
    story_id: demoStory1.id
})

demoPage4 = Page.create({
    number: 4,
    completed: false,
    story_id: demoStory1.id
})

demoPage5 = Page.create({
    number: 1,
    completed: false,
    story_id: demoStory2.id
})

demoPage6 = Page.create({
    number: 2,
    completed: false,
    story_id: demoStory2.id
})

demoPage7 = Page.create({
    number: 3,
    completed: false,
    story_id: demoStory2.id
})

demoPage8 = Page.create({
    number: 4,
    completed: false,
    story_id: demoStory2.id
})

puts "seeding done"