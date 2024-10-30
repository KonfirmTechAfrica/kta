/****** LOADER */

const loader = document.querySelector(".loader");

$(window).on("load", function () {
  $(".loader").fadeOut(1000);
});

/***************************SECTION 5 TEAM SCROLL  */

const team = document.querySelector("#section5 .images");
const scrollLeft = document.querySelector("#section5 .scroll-team .left");
const scrollRight = document.querySelector("#section5 .scroll-team .right");

scrollLeft.onclick = () => {
  team.scrollLeft -= 900;
  scrollRight.classList.remove("active");
  scrollLeft.classList.add("active");
};

scrollRight.onclick = () => {
  team.scrollLeft += 900;
  scrollLeft.classList.remove("active");
  scrollRight.classList.add("active");
};

team.addEventListener("scroll", () => {
  if (team.scrollLeft <= 400) {
    scrollRight.classList.remove("active");
    scrollLeft.classList.add("active");
  } else {
    scrollLeft.classList.remove("active");
    scrollRight.classList.add("active");
  }
});

/********************************************** SIDE BAR */

$(".more1").click(function () {
  $(".sidebar").toggleClass("open");
  $(".sidebar .fa-times-div").toggleClass("open");
  $(".sidebar .ul-sidebar").toggleClass("open");
  $(".sidebar .copywright").toggleClass("open");
  $(".full").toggleClass("open");
  $(".sidebar .logo").toggleClass("open");
});

$(".brief-info>.fa-times").click(() => {
  $(".brief-info").removeClass("open");
});
$(".more2").click(() => {
  $(".brief-info").toggleClass("open");
});

$(".fa-times-div").click(function () {
  $(".sidebar").removeClass("open");
  $(".sidebar .fa-times-div").removeClass("open");
  $(".sidebar .ul-sidebar").removeClass("open");
  $(".sidebar .copywright").removeClass("open");
  $(".full").removeClass("open");
  $(".sidebar .logo").removeClass("open");
});

$(".sidebar .ul-sidebar li a").click(() => {
  $(".sidebar").toggleClass("open");
  $(".sidebar .ul-sidebar").removeClass("open");
  $(".sidebar .copywright").removeClass("open");
  $(".sidebar .fa-times-div").removeClass("open");
});

$("section").click(function () {
  $(".sidebar").removeClass("open");
  $(".sidebar .fa-times-div").removeClass("open");
  $(".sidebar .ul-sidebar").removeClass("open");
  $(".sidebar .copywright").removeClass("open");
  $(".full").removeClass("open");
  $(".brief-info").removeClass("open");
  $(".sidebar .logo").removeClass("open");
});

// Services
const buttons = document.querySelectorAll(".btn");
const descriptions = document.querySelectorAll(".description");
const services = document.querySelectorAll(".services");

buttons.forEach((btn, btnIndex) =>
  btn.addEventListener("click", () => {
    descriptions.forEach((description, descriptionIndex) => {
      services.forEach((service, serviceIndex) => {
        if (btnIndex === descriptionIndex && btnIndex === serviceIndex) {
          description.classList.toggle("visible");
          btn.classList.toggle("btn-rotate");
          service.classList.toggle("services-active");
          //   console.log("clicked");
          if (btnIndex === descriptionIndex) {
            btn.classList.toggle("add-color");
            // btn.classList.toggle("add-btn-styles");
          }
        }
      });
    });
  })
);
// Internship
const faqTitle = document.querySelectorAll(".faq-title");
const faqAnswer = document.querySelectorAll(".faq-answer");
const iconOption = document.querySelectorAll(".icon-option");
const faqDiv = document.querySelectorAll(".faq-group");

faqTitle.forEach((title, titleIndex) =>
  title.addEventListener("click", () => {
    faqAnswer.forEach((answer, answerIndex) => {
      faqDiv.forEach((faq, faqIndex) => {
        if (titleIndex === answerIndex && titleIndex === faqIndex) {
          //   alert("true");

          answer.classList.add("visible");
          faq.classList.add("show-block");
          iconOption.forEach((icon, iconIndex) => {
            if (titleIndex === iconIndex) {
              icon.textContent = "-";
            } else {
              icon.textContent = "+";
            }
          });

          //   console.log(titleIndex, faqIndex);
        } else if (titleIndex !== answerIndex && titleIndex !== faqIndex) {
          //   alert("false");
          faq.classList.remove("show-block");
          answer.classList.remove("visible");
        }
      });
    });
  })
);

//Form

function handleForm() {
  window.location.href = "internForm.html";
}
//Back
function handleBack() {
  window.location.href = "internship.html";
}
