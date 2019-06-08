const API_KEY = "c714a18f-4ba7-46e8-b873-2e0fabcebfc0"

export const fetchHoliday = () => {
    return fetch(`https://holidayapi.com/v1/holidays-dkey=${API_KEY}`)
    .then( res => {
        console.log(res)
        return res.json()
    })
}