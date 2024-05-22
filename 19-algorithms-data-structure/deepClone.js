function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const originalData = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Wonderland",
        postalCode: "12345"
    },
    hobbies: ["reading", "gardening", "coding"],
    preferences: {
        colors: ["red", "green", "blue"],
        foods: {
            breakfast: "pancakes",
            lunch: "sandwich",
            dinner: "pasta"
        }
    },
    isActive: true,
    nullValue: null,
    undefinedValue: undefined,
    nestedArray: [[1, 2, 3], [4, 5, 6]],
    date: new Date()
};

// Clonación profunda
const clonedData = deepClone(originalData);

// Modificación del objeto clonado
clonedData.name = "Bob";
clonedData.address.city = "New City";
clonedData.hobbies.push("traveling");
clonedData.preferences.colors[0] = "purple";
clonedData.nestedArray[0][0] = 100;

// Comparación de los objetos
console.log("Original Data:", originalData);
console.log("Cloned Data:", clonedData);
