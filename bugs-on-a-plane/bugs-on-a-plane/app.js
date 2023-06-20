const form = document.getElementById("airline-form");
//const submit = document.getElementByID("submit");// useless
//const submitForm = document.querySelector("");// useless

form.addEventListener("submit",formAlert)//working with a form... change from click to submit

function formAlert(e) { // add (e) to access event properties
    e.preventDefault()// prevent the page from refreshing
    const firstName = form.firstN.value;//change"elements" to the name of the input
    const lastName = form.lastN.value;//get rid of square brackets
    const age = form.age.value;
    const gender = form.gender.value;
    const location = form.travelLocation.value;
    const diet = [];//this should be an array... change curly brackets to square
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);// pop removes the last item, chanage to push
    }
    else if (form.elements['gluten'].checked) {
        diet.push(document.getElementById("gluten").value);
    }
    else if (form.elements['paleo'].checked) {
        diet.push(document.getElementById("paleo").value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet[0] + "\nAwesome, now if you die, it won't be an accident..");
}


