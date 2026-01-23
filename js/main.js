// LOGIN HANDLER
document.addEventListener("DOMContentLoaded", () => {

    const studentForm = document.getElementById("student");
    const facultyForm = document.getElementById("faculty");
    const adminForm = document.getElementById("admin");

    // STUDENT LOGIN
    studentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const id = this.querySelector("input[type='text']").value;
        const pass = this.querySelector("input[type='password']").value;

       if (id === "student" && pass === "1234") {
    localStorage.setItem("role", "student");
    window.location.href = "student.html";
}

    });

    // FACULTY LOGIN
    facultyForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const id = this.querySelector("input[type='text']").value;
        const pass = this.querySelector("input[type='password']").value;

        if (id === "faculty" && pass === "1234") {
    localStorage.setItem("role", "faculty");
    window.location.href = "faculty.html";
}

    });

    // ADMIN LOGIN
    adminForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const id = this.querySelector("input[type='text']").value;
        const pass = this.querySelector("input[type='password']").value;

        if (id === "admin" && pass === "admin") {
    localStorage.setItem("role", "admin");
    window.location.href = "admin.html";
}

    });
});

// SWITCH LOGIN TYPE
function showLogin(type) {
    document.querySelectorAll(".login-form").forEach(f => f.classList.add("d-none"));
    document.getElementById(type).classList.remove("d-none");
}
