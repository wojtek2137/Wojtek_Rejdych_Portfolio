function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');

}
function toggleProject() {
    const projectToggle = document.querySelector('.toggle-project');
    const projectSidebar = document.querySelector('.sidebar-project');
    projectToggle.classList.toggle('active');
    projectSidebar.classList.toggle('active');
}

const btnForm = document.querySelector('input[type="submit"]');
const inputs = document.querySelector('form');
btnForm.addEventListener('click', () => {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'adebe.beats@gmail.com',
        Password: 'aqhhrbbtbgfvghoa',
        To: 'adebe.beats@gmail.com',
        From: inputs.elements["email"].value,
        Subject: "Contact from the contact form",
        Body: inputs.elements["message"].value + "<br>" + inputs.elements["name"].value
    }).then(msg => alert("The email has been succesfully sent"))
})