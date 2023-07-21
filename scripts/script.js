$(function() {
    $("#headerContainer").load("header.html");
});

$(function() {
    $("#footerContainer").load("footer.html");
  });

  document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  });