class Storage {
  // Приватна властивість для зберігання товарів
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }

  // Повертає масив поточних товарів
  getItems() {
    return this.#items;
  }

  // Додає новий товар до масиву
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Видаляє товар з масиву, якщо він там є
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Перевірка роботи класу
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]