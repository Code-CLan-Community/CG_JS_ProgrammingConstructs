function convertTemperature(choice, temp) {
    switch (choice) {
        case "CtoF":
            if (temp >= 0 && temp <= 100) {
                console.log(temp + "°C = " + ((temp * 9 / 5) + 32) + "°F");
            } else {
                console.log("Temperature out of range!");
            }
            break;
        case "FtoC":
            if (temp >= 32 && temp <= 212) {
                console.log(temp + "°F = " + ((temp - 32) * 5 / 9) + "°C");
            } else {
                console.log("Temperature out of range!");
            }
            break;
        default:
            console.log("Invalid choice!");
    }
}

convertTemperature("CtoF", 30);
convertTemperature("FtoC", 100);
