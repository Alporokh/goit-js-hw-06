class StringBuilder {
  // Оголошення приватної властивості
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Повертає поточне значення приватної властивості value
  getValue() {
    return this.#value;
  }

  // Додає рядок str у кінець значення
  padEnd(str) {
    this.#value += str;
  }

  // Додає рядок str на початок значення
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Додає рядок str і на початок, і в кінець значення
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
    // Або одним рядком: this.#value = str + this.#value + str;
  }
}

// Перевірка роботи класу
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="