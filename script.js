function rotate() {
    var lastChild = $('.slider div:last-child').clone();
    $('.slider div').removeClass('firstSlide');
    $('.slider div:last-child').remove();
    $('.slider').prepend(lastChild);
    $(lastChild).addClass('firstSlide');
}

window.setInterval(function () {
    rotate();
}, 4000);



// owl


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,  // Number of cards to show at a time
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.nav-link');
    const underline = document.querySelector('.underline');
    
    function updateUnderlinePosition() {
      const activeTab = document.querySelector('.nav-link.active');
      const tabWidth = activeTab.offsetWidth;
      const tabLeft = activeTab.offsetLeft;
      
      // Move the underline and update its width
      underline.style.width = `${tabWidth}px`;
      
      underline.style.transform = `translateX(${tabLeft-12}px)`;
    }
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        // Wait for the Bootstrap class to change
        setTimeout(updateUnderlinePosition, 200);
      });
    });
  
    // Set the initial underline position on page load
    updateUnderlinePosition();
  });
  
  window.addEventListener('resize', function() {
    // Update underline position on window resize to ensure it adjusts with screen size changes
    updateUnderlinePosition();
  });
  
  



  // FAQ Toggle

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isVisible = answer.style.maxHeight;
  
      // Collapse all answers first
      document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.style.maxHeight = null;
      });
  
      // Expand/Collapse the current answer
      if (!isVisible) {
        answer.style.maxHeight = answer.scrollHeight + "px"; // Expand the clicked answer
      } else {
        answer.style.maxHeight = null; // Collapse if already open
      }
    });
  });
  
  // FAQ Search Functionality
  document.getElementById('faqSearch').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
  
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question').textContent.toLowerCase();
  
      // Show/Hide FAQ items based on the search term
      if (question.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
  
  