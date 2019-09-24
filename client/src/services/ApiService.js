const baseURL = 'http://localhost:3000/api/items'

export default {
  getItem() {
    return fetch(baseURL)
    .then(res => res.json())
  },
  getItemDetails(searchedItem) {
    return fetch(`${baseURL}?query=${searchedItem}`)
  }
}

