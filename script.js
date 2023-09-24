const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", () => {
    const value = e.target.value
    user
    const isVisible
})

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const bodys = card.querySelector("[data-bodys]")
        header.textContent = user.name
        bodys.textContent = user.id
        userCardContainer.append(card)
        return { name: user.name, id: user.id, Element: card }
    })
    
})