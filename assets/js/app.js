$(window).on("load", function () {
  const $container = $("#container");
  const $wrapper = $("#wrapper");
  const $img = $wrapper.find("img").first();
  const speed = 2;
  const frameTime = 20;
  const gap = 90;

  // Step 1: কতগুলো ইমেজ দরকার তা হিসেব করে ক্লোন করা
  const imgWidth = $img.outerWidth(true) + gap;
  const containerWidth = $container.width();
  const repeatCount = Math.ceil((containerWidth * 2) / imgWidth);

  for (let i = 0; i < repeatCount; i++) {
    $wrapper.append($img.clone());
  }

  let position = 0;

  function scrollImages() {
    position -= speed;
    $wrapper.css("left", position + "px");

    const totalWidth = $wrapper.width();
    if (Math.abs(position) >= imgWidth) {
      // এক ইমেজ পুরোটাই বের হয়ে গেছে, তাহলে আবার শেষে পাঠাও
      $wrapper.append($wrapper.children().first());
      position += imgWidth;
      $wrapper.css("left", position + "px");
    }
  }

  setInterval(scrollImages, frameTime);

  $("#plus ").click(function () {
    $("#content p").slideDown(100);
    $("#minus").show();
    $(this).hide();
  });
  $("#minus ").click(function () {
    $("#content p").slideUp(100);
    $("#plus").show();
    $(this).hide();
  });
  $(" li.list-item a:first").mouseenter(function () {
    $(".nav").show(200);
  });
  $(" li.list-item a:first").mouseout(function () {
    $(".nav").hide();
  });

  $("#select-cat").click(function () {
    $(".catagory-list").show();
  });

  function animateBox() {
    $(".one")
      .animate({ marginLeft: "50px" }, 1000)
      .animate({ marginTop: "30px" }, 1000)
      .animate({ marginLeft: "0px" }, 1000)
      .animate({ marginTop: "0px" }, 1000, animateBox);
  }

  $(document).ready(function () {
    animateBox();
  });

  $(document).ready(function () {
    function loopOpacity() {
      $(".one1")
        .css({ opacity: 0 })
        .animate({ opacity: 1 }, 500, function () {
          setTimeout(function () {
            $(".one1").animate({ opacity: 0 }, 500, function () {
              setTimeout(loopOpacity, 500);
            });
          }); // opacity = 1 অবস্থায় কতক্ষণ থাকবে (2 সেকেন্ড)
        });
    }

    loopOpacity(); // শুরু
  });
  function VadPasswod(pass) {
    return (
      pass.length >= 8 &&
      /[A-Z]/.test(pass) &&
      /[a-z]/.test(pass) &&
      /[0-9]/.test(pass) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(pass)
    );
  }

  $(".one-btn2").click(function () {
    let lastName = $("#fname").val().trim();
    let pass = $("#password").val().trim();

    if (lastName === "") {
      alert("দয়া করে First Name লিখুন।");
      return;
    }

    if (pass === "") {
      alert("দয়া করে Password লিখুন।");
      return;
    }

    if (!VadPasswod(pass)) {
      alert(
        "Password অবশ্যই ৮ অক্ষরের বেশি হতে হবে এবং বড় হাতের, ছোট হাতের, সংখ্যা ও স্পেশাল ক্যারেক্টার থাকতে হবে।"
      );
      return;
    }
    if (lastName === "Abdul Halim" && pass === "12345aS#") {
      $("#lname").val(lastName);
      $("#fname").val("");
      $("#password").val("");
      alert("log in Succes");
    } else {
      alert("log in Fail");
    }
  });
});
