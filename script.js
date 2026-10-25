

const userProfile = {
    name: "Student",
    birthYear: 2006,
    isDeveloper: true,
    hobbies: ["Gaming", "Music"]
};



function showProfile() {
    let currentYear = new Date().getFullYear();
    let age = currentYear - userProfile.birthYear;

    document.getElementById("name").textContent =
        "Name: " + userProfile.name;

    document.getElementById("age").textContent =
        "Age: " + age;

    document.getElementById("developer").textContent =
        "Developer: " + userProfile.isDeveloper;

    document.getElementById("hobbyCount").textContent =
        "Total Hobbies: " + userProfile.hobbies.length;

    console.log(userProfile);
    console.log("Age:", age);
}



document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("username").value;
    let year = Number(document.getElementById("birthYear").value);

    if (year < 1900 || year > new Date().getFullYear()) {
        alert("Enter a valid birth year");
        return;
    }

    userProfile.name = name;
    userProfile.birthYear = year;

    showProfile();
});



function showHobbies() {
    let list = document.getElementById("hobbyList");
    list.innerHTML = "";

    userProfile.hobbies.forEach(function(hobby) {
        let li = document.createElement("li");
        li.textContent = hobby;
        list.appendChild(li);
    });

    showProfile();
}



document.getElementById("addBtn").addEventListener("click", function() {
    let hobby = document.getElementById("newHobby").value.trim();

    if (hobby !== "") {
        userProfile.hobbies.push(hobby);
        document.getElementById("newHobby").value = "";
        showHobbies();
    }
});



document.getElementById("removeBtn").addEventListener("click", function() {
    userProfile.hobbies.pop();
    showHobbies();
});



showHobbies();