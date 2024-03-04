function calculateMileage() {
    var distance = parseFloat(document.getElementById('distance').value);
    var fuel = parseFloat(document.getElementById('fuel').value);

    if (isNaN(distance) || isNaN(fuel) || fuel <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid values.";
        return;
    }

    var mileage = distance / fuel;
    document.getElementById('result').innerHTML = "Your mileage is " + mileage.toFixed(2) + " kilometer per liter.";
}
