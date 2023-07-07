function Calculate() {
    var nameInput = document.getElementById("name-input");
    var ageInput = document.getElementById("age-input");
    var genderInput = document.getElementById("gender-input");
    var heightInput = document.getElementById("h-input");
    var weightInput = document.getElementById("w-input");
    var statusInput = document.getElementById("status-input");
    var emailInput = document.getElementById("email-input");
    var phoneInput = document.getElementById("phone-input");
    var bmiOutput = document.getElementById("bmi-output");
    var bmiStatus = document.getElementById("bmi-status");
    var bmiValueContainer = document.querySelector(".bmi-value");
    var statusContainer = document.querySelector(".status");

    var name = nameInput.value;
    var age = ageInput.value;
    var gender = genderInput.value;
    var height = heightInput.value;
    var weight = weightInput.value;
    var status = statusInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;

    // Check if any input field is empty
    if (name === "" || age === "" || gender === "" || height === "" || weight === "" || status === "" || email === "" || phone === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Validate the input values
    if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 1 || height <= 0 || weight <= 0) {
        alert("Please enter valid values for age, height, and weight.");
        return;
    }

    // Email validation using regular expression
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    var result = parseFloat(weight) / (parseFloat(height / 100) * parseFloat(height / 100));

    if (!isNaN(result)) {
        bmiOutput.innerHTML = result.toFixed(2);
        if (result < 18.5) {
            bmiStatus.innerHTML = "underweight. You need to eat more frequently, consume more protein, high energy foods like cheese, nuts, milk-based smoothies and dried fruit.";
        } else if (result < 25) {
            bmiStatus.innerHTML = "healthy, congratulation! Stay healthy and emphasizes fruits, vegetables, whole grains, and fat-free or low-fat milk and milk products.";
        } else if (result < 30) {
            bmiStatus.innerHTML = "overweight. Please eat a balanced, calorie-controlled diet. You also need to take up activities such as fast walking or jogging (two-and-a-half to five hours) a week.";
        } else {
            bmiStatus.innerHTML = "obesity. Please avoid situations where you know you may be tempted to overeat. Obese people may find it hard to do some exercises but you may try something simple like brisk walking and dancing";
        }

        // Show the BMI value and status
        bmiValueContainer.style.display = "block";
        statusContainer.style.display = "block";

        // Display the personalized message in the status div
        var statusMessage = "Hello " + name + ", you are " + age + " years old " + gender + " person. Confirming that your email address is " + email + " and your phone number is " + phone + ". Your last status were " + status + " and your current status is " + bmiStatus.innerHTML + ".";
        var statusDiv = document.getElementById("status-div");
        statusDiv.innerHTML = statusMessage;
    }
}
