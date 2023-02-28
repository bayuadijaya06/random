$("#card1").on("click", function () {
  if (document.getElementById("checkbox1").checked) {
    $("#checkbox1").prop("checked", false);
    $("#card1").removeClass("card1-hover card-big");
    $("#card1").addClass("card");
  } else {
    $("#checkbox1").prop("checked", true);
    $("#card1").addClass("card1-hover card-big");
    $("#card1").removeClass("card");
  }
});

$("#card2").on("click", function () {
  if (document.getElementById("checkbox2").checked) {
    $("#checkbox2").prop("checked", false);
    $("#card2").removeClass("card2-hover card-big");
    $("#card2").addClass("card");
  } else {
    $("#checkbox2").prop("checked", true);
    $("#card2").addClass("card2-hover card-big");
    $("#card2").removeClass("card");
  }
});

$("#card3").on("click", function () {
  if (document.getElementById("checkbox3").checked) {
    $("#checkbox3").prop("checked", false);
    $("#card3").removeClass("card3-hover card-big");
    $("#card3").addClass("card");
  } else {
    $("#checkbox3").prop("checked", true);
    $("#card3").addClass("card3-hover card-big");
    $("#card3").removeClass("card");
  }
});

function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);

$(document).ready(function () {
  function freshDot() {
    this.obj = document.createElement("div");
    this.obj.classList.add("box");
    this.obj.style.top = window.innerHeight * Math.random() + "px";
    this.obj.style.left = window.innerWidth * Math.random() + "px";
    this.size = Math.floor(5 * Math.random()) + 1;
    this.obj.style.height = this.size + "px";
    this.obj.style.width = this.size + "px";

    document.body.appendChild(this.obj);
  }
  var dot = [];
  for (var i = 0; i < 200; i++) {
    dot.push(new freshDot());
  }
  /*
     $(window).resize(function(){
       for(i=0;i<200;i++){
         document.body.removeChild(dot[i]);
       }
     });
     */
  $(".medium-card").on("click", function () {
    $(this).addClass("clicked");
    setTimeout(function () {
      $(".medium-card").removeClass("clicked");
      // $(".medium-card").addClass("clicked-next");
    }, 700);
    // setTimeout(function () {
    //   $(".medium-card").addClass("clicked-next");
    // }, 700);
    // setTimeout(function () {
    //   $(".medium-card").removeClass("clicked-next");
    // }, 700);
  });
});
