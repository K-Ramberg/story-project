const chance = require('chance').Chance()

export function EnemyGenerate () {
    const genderGet = chance.gender()
    const prefixGet = chance.bool()
    const name = chance.name({ gender: genderGet, prefix: prefixGet})
    const character = {
        name: name,
        gender: genderGet,
        prefix: prefixGet
    }
    return (
       character
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
