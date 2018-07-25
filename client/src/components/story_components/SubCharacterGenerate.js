const chance = require('chance').Chance()
export function EnemyGenerate () {
    const boolGet = chance.bool()
    const genderGet = chance.gender()
    const name = chance.name({ gender: genderGet, prefix: boolGet})
    const character = {
        name: name
    }
    return (
       character.name 
    )
}

export function FriendGenerate () {
    const genderGet = chance.gender()
    const name = chance.name({ gender: genderGet})
    return (name)
}

export function ThemeGenerate () {
    const themeSelect = chance.integer({min: 1, max: 2})
    return (themeSelect)
}