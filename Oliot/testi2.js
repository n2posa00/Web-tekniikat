let car = {
    plateNumber: "OOP-001",
    currentSpeed: 120 + "km/h"
}

document.querySelector("#car").textContent = "Plate number is: " +car.plateNumber + " " + "Current speed is: " + car.currentSpeed;

let book = {
    bookName: "Testi123",
    releaseDate: "20.12.2008",
    price: 19.99 + "$"
}

book.price = 25.00 + "$";

document.querySelector("#book").textContent = "Book name is: " + book.bookName + " " + "It was relesed on: " + book.releaseDate + " " + "It's price is " + book.price;

