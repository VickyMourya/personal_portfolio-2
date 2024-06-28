function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    
  }


  function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  } 
 
 
// Add an event listener to toggle the class when the menu button is clicked
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const links = document.querySelector(".links");

    menuButton.addEventListener("click", function() {
        links.classList.toggle("show");
    });
});


$(document).ready(function() {
    $('.menu-icon').click(function() {
        $('.links').toggleClass('show');
    });
});

document.getElementById("downloadButton").addEventListener("click", function () {
    // Replace 'resume.pdf' with the actual path to your resume file.
    var resumePath = 'tanyasResume.pdf';

    var a = document.createElement('a');
    a.href = resumePath;
    a.download = 'tanyasResume.pdf'; // Specify the desired download file name.
    
    // Trigger a click event to initiate the download.
    a.click();
});


