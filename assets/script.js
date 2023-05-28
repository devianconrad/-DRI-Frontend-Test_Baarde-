
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
  }
  
  function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
  }
  
  function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let line = document.getElementsByClassName("line");
  
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < line.length; i++) {
      line[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    line[slideIndex - 1].classList.add("active");
  }
  
  
  
  function toggleDropdown(event) {
    var dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "flex";
    } else {
      dropdownContent.style.display = "none";
    }
    
    event.stopPropagation(); 
  }
  
  document.addEventListener("click", function(event) {
    var dropdownContent = document.getElementById("myDropdown");
    var dropdownToggle = document.querySelector(".dropdown-toggle");
  
    if (!dropdownContent.contains(event.target) && event.target !== dropdownToggle) {
      dropdownContent.style.display = "none";
    }
  });

  function toggleDropdownMobile(event) {
    var dropdownContent = document.querySelector(".dropdown-contentMobile");
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "flex";
    } else {
      dropdownContent.style.display = "none";
    }
    
    event.stopPropagation(); 
  }
  
  document.addEventListener("click", function(event) {
    var dropdownContent = document.getElementById("myDropdownMobile");
    var dropdownToggle = document.querySelector(".dropdown-toggleMobile");
  
    if (!dropdownContent.contains(event.target) && event.target !== dropdownToggle) {
      dropdownContent.style.display = "none";
    }
  });

  const messages = document.querySelectorAll('.ideasTexts div');
const defaultImageSrc = 'assets/img/620d08005ae7bd10cda7ad66_Blog Image.jpg';
const image = document.getElementById('mainImage');

messages.forEach((message) => {
  message.addEventListener('mouseenter', () => {
    changeImage(message);
    image.src = newImageSrc;
    image.classList.add('fade-in');
  });});

messages.forEach((message) => {
  message.addEventListener('mouseleave', () => {
    image.classList.remove('fade-in');
    image.classList.add('fade-out');
    setTimeout(() => {
      image.src = defaultImageSrc;
      image.classList.remove('fade-out');
    }, 300); 
  });});


  function changeImage(message) {
    const messageId = message.id;
    let newImageSrc = '';
  
    switch (messageId) {
      case 'message1':
        newImageSrc = 'assets/img/61fa4fd439310c3222e142ba_Blog Image 2.jpg';
        break;
      case 'message2':
        newImageSrc = 'assets/img/61fa50143a337b6520618374_Blog Image 9.jpg';
        break;
      case 'message3':
        newImageSrc = 'assets/img/61fa503d384336649c7557ac_Blog Image 6.jpg';
        break;
      case 'message4':
        newImageSrc = 'assets/img/623376b57925d763656caec2_Blog Image.png';
        break;
      default:
        newImageSrc = defaultImageSrc;
    }
  
    const imageWidth = '100%'; 
  
    image.style.width = imageWidth;
    image.classList.add('fade-out');
  
    isAnimating = true;
  
    image.classList.remove('fade-in');
    image.classList.add('fade-out');
  
    setTimeout(() => {
      image.src = newImageSrc;
      image.classList.remove('fade-out');
      image.classList.add('fade-in');
      isAnimating = false;
    }, 300);
  }

  window.addEventListener('DOMContentLoaded', function() {
    var divsToLoad = Array.from(document.querySelectorAll('.load-on-scroll'));
    var loadedDivs = [];

    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    var isMobile = window.innerWidth <= 480;

  if (isMobile) {
  
    options.threshold = 0.3;
  }

    function handleIntersection(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !loadedDivs.includes(entry.target)) {
          entry.target.classList.remove('nonVisible');
          entry.target.classList.add('visible');
          loadedDivs.push(entry.target);
        }
      });
    }

    var observer = new IntersectionObserver(handleIntersection, options);
    divsToLoad.forEach(function(div) {
      observer.observe(div);
    });
  });

  function clearPlaceholder() {
    var input = document.getElementById('emailInput');
    input.setAttribute('placeholder', '');
  }
  
  function restorePlaceholder() {
    var input = document.getElementById('emailInput');
    input.setAttribute('placeholder', 'Your Email');
  }


  

