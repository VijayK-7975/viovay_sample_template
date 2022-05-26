jQuery(document).ready(function (d) {
  d(this).scrollTop(0);

  //ScrollTo Section
  d(".sectionLink").on("click", function (e) {
    e.preventDefault();
    if (d(this).data("link")) {
      let id = d(this).data("link");
      d("html,body").animate({ scrollTop: d(id).offset().top - 50 });
    }
  });

  // Initialize animation
  d(window).ready(function () {
    d("#preloader").delay(100).fadeOut("fade");
    AOS.init();
  });
  // Onscroll make header fixed
  d(window).on("scroll", function () {
    var scroll = d(window).scrollTop();
    if (scroll < 2) {
      d("nav.sticky-header").removeClass("affix");
    } else {
      d("nav.sticky-header").addClass("affix");
    }
  });

  // Image preview
  d(".feature-content-area img").on("click", function () {
    let imgPath = d(this).attr("src");
    d("#previewLargeImg").modal("show").find("img").attr("src", imgPath);
  });

  //Change playStore and Apple Store links
  let tryGoogleLink = "https://play.google.com/store/apps/details?id=com.v3it.tryvsurve";
  let tryAppleLink = "https://apps.apple.com/in/app/try-vsurve/id1607454520";
  let vsurveGoogleLink = "https://play.google.com/store/apps/details?id=com.v3it.vsurve";
  let vsurveAppleLink = "https://apps.apple.com/in/app/try-vsurve/id1607454520";
  window.location.host == "www.vsurve.com" ? (d(".googleStore").attr("href", vsurveGoogleLink), d(".appleStore").attr("href", vsurveAppleLink)) : (d(".googleStore").attr("href", tryGoogleLink), d(".appleStore").attr("href", tryAppleLink));

  //VSURVE video play
  d("video").on("click touchstart", function () {
    if (d(this).hasClass("is-playing")) {
      d(this).removeClass().addClass("is-paused");
      d(this)[0].pause();
      d(".video-info").not("video").show();
    } else {
      d(this).removeClass().addClass("is-playing");
      d(this)[0].play();
      d(".video-info").not("video").hide();
    }
    return false;
  });

  //   Toggle navbar for mobile
  d(".navbar-toggler").click(function () {
    d(".offcanvas ").css("visibility", "visible").addClass("show");
    d("body").addClass("offcanvas-backdrop");
  });
  d(".close-btn, .offcanvas-body .nav a, .action-btns a").click(function () {
    d(".offcanvas ").removeClass("show");
    d("body").removeClass("offcanvas-backdrop");
  });

  let e = moment.tz.guess(Boolean),
    a,
    l;
  var s = "";
  var forgotPwdEmailId = "";

  function t() {
    var e = document.querySelector("#signUpPhoneNum");
    l = window.intlTelInput(e, {
      preferredCountries: a,
      separateDialCode: !0,
      hiddenInput: "full",
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
    let o = document.querySelector("#signUpPhoneNum"),
      n = document.querySelector("#error-msg");

    function t() {
      o.classList.remove("error"), (n.innerHTML = ""), n.classList.add("hide");
    }
    var i = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
    o.addEventListener("blur", function () {
      var e;
      t(), o.value.trim() && (l.isValidNumber() || (o.classList.add("error"), (e = l.getValidationError()), (n.innerHTML = i[e]), n.classList.remove("hide")));
    }),
      o.addEventListener("change", t),
      o.addEventListener("keyup", t);
  }
  a = ("Asia/Calcutta" == e && (e = "Asia/Kolkata"), moment.tz.zone(e).countries());
  var o = window.location.hash.substr();

  function n(screen = "") {
    let pageLoad = s == "supportlk" ? "supportlogin.html" : "loginSignup.html";
    s = screen !== "" ? screen : s;

    d("body").prepend('<div class="loader active"><span class="loadingspinner"></span></div>'),
      d(".modal-container").load(pageLoad, function (e, o, n) {
        408 == n.status
          ? location.reload()
          : (setTimeout(() => {
              d("body").find(".loader").remove(), d("#sign_in_up_popup").modal("show");
            }, 1000),
            d.form_validator("login_form")),
          "supportlk" == s ? d("#login_footer").hide() : d("#login_footer").show();
        // check if devices are touch enabled devices
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          d(".login-social").addClass("mobileLogin");
        }
      });
  }

  function i() {
    d("body").prepend('<div class="loader active"><span class="loadingspinner"></span></div>'),
      d(".modal-container").load("loginSignup.html", function (e, o, n) {
        408 == n.status
          ? location.reload()
          : (setTimeout(() => {
              d("body").find(".loader").remove(), d("#sign_in_up_popup").modal("show");
            }, 1000),
            d(".loginTab, #loginForm").removeClass("active"),
            d(".signUpTab, #signupForm").addClass("active"),
            d.form_validator("signup_form"),
            d.urlParam("fname") && (d("#signUpFname").val(d.urlParam("fname")), d("#signUpFname").prop("disabled", !0)),
            d.urlParam("lname") && (d("#signUpLname").val(d.urlParam("lname")), d("#signUpLname").prop("disabled", !0)),
            d.urlParam("email") && (d("#signUpEmail").val(d.urlParam("email")), d("#signUpEmail").prop("disabled", !0)),
            d.hasClassadd(),
            d.editHasClassadd(),
            t());
      });
  }
  function r(s) {
    d("#sign_in_up_popup").modal("hide"),
      d("body").prepend('<div class="loader active"><span class="loadingspinner"></span></div>'),
      d(".modal-container").load("VerificationCodeMod.html", function (e, o, n) {
        408 == n.status
          ? location.reload()
          : (d("body").find(".loader").remove(),
            d("#verificatonCode_popup").modal("show"),
            d("#otp")
              .find("input")
              .each(function () {
                d(this).on("keyup", function (e) {
                  var o,
                    n = d(d(this).parent());
                  8 === e.keyCode || 37 === e.keyCode ? (o = n.find("input#" + d(this).data("previous"))).length && d(o).select() : ((48 <= e.keyCode && e.keyCode <= 57) || (65 <= e.keyCode && e.keyCode <= 90) || (96 <= e.keyCode && e.keyCode <= 105) || 39 === e.keyCode) && ((e = n.find("input#" + d(this).data("next"))).length ? d(e).select() : n.data("autosubmit") && n.submit());
                });
              }),
            (document.getElementById("disp_emailID").innerHTML = s),
            document.getElementById("signUp_verCode_subbtn").addEventListener("click", function () {
              d("#signUp_verCode_subbtn").prop("disabled", !0), d(".loading-fa").html("<i class='fa fa-spinner fa-spin'></i>");
              var e = document.getElementById("first").value,
                o = document.getElementById("second").value,
                n = document.getElementById("third").value,
                t = document.getElementById("fourth").value,
                i = document.getElementById("fifth").value,
                a = document.getElementById("sixth").value;
              "" == e
                ? document.getElementById("first").focus()
                : "" == o
                ? document.getElementById("second").focus()
                : "" == n
                ? document.getElementById("third").focus()
                : "" == t
                ? document.getElementById("fourth").focus()
                : "" == i
                ? document.getElementById("fifth").focus()
                : "" == a
                ? document.getElementById("sixth").focus()
                : ((i = e + o + n + t + i + a),
                  (a = {
                    UserPoolId: _config.cognito.userPoolId,
                    ClientId: _config.cognito.clientId,
                  }),
                  (a = new AmazonCognitoIdentity.CognitoUserPool(a)),
                  (a = {
                    Username: s,
                    Pool: a,
                  }),
                  new AmazonCognitoIdentity.CognitoUser(a).confirmRegistration(i, !0, function (e, o) {
                    return e
                      ? (d("#signUp_verCode_subbtn").prop("disabled", !1), d(".loading-fa").html(""), (e.code = "CodeMismatchException"), void toast.warning(e.message || JSON.stringify(e)))
                      : (d("#signUp_verCode_subbtn").prop("disabled", !1),
                        d(".loading-fa").html(""),
                        d("#verificatonCode_popup").css("display", "none"),
                        void Swal.fire({
                          text: "Your account has been successfully created. You can login now!!",
                          icon: "success",
                          showCancelButton: !1,
                          confirmButtonColor: "#155724",
                          confirmButtonText: "OK",
                          allowOutsideClick: !1,
                        }).then(function (e) {
                          location.reload();
                        }));
                  }));
            }));
      });
  }

  o && "#supportLogin" == o && (history.replaceState(null, null, " "), n("supportlk")),
    o && "#login" == o && (history.replaceState(null, null, " "), n()),
    o && "#sign-up" == o && (history.replaceState(null, null, " "), i()),
    (d.urlParam = function (e) {
      return (e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")), null === (e = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search)) ? "" : decodeURIComponent(e[1].replace(/\+/g, " "));
    }),
    -1 < window.location.href.indexOf("?") && (d.urlParam("fname") || d.urlParam("lname") || d.urlParam("email")) && i(),
    d(document).on("click", ".loginPwd-hide-show", function () {
      var e = d(this).parents(".row").find(".password-toggle-check");
      "text" == e.attr("type") ? (e.attr("type", "password"), d(this).find("i").attr("class", "fas fa-eye-slash ")) : (e.attr("type", "text"), d(this).find("i").attr("class", "fas fa-eye"));
    }),
    d(document).on("click", ".cnf-pwd-eye, .frgtCnf-pwd-show", function () {
      var e = d(".cnf-pwd-show-hide, #confnewPassword");
      "text" == e.attr("type") ? (e.attr("type", "password"), d(".cnf-pwd-eye i, .frgtCnf-pwd-show i").attr("class", "fas fa-eye-slash ")) : (e.attr("type", "text"), d(".cnf-pwd-eye i, .frgtCnf-pwd-show i").attr("class", "fa fa-eye"));
    }),
    d(document).on("click", "#signUp_nav, .signUpCta", function () {
      i();
    }),
    d(document).on("click", "#signUp_href,.signUpTab", function () {
      d("#signup_form div.input-error").remove(""), d("#signup_form input").removeClass("input-error").removeClass("has-val, valid"), d("#signup_form").trigger("reset").find(".form-group").removeClass("focused"), t(), d.form_validator("signup_form"), d(".loginTab, #loginForm").removeClass("active"), d(".signUpTab, #signupForm").addClass("active");
    }),
    d(document).on("click", "#login_href", function () {
      d("#loginEmail-error, #loginPwd-error").remove(), d("#loginForm input").removeClass("input-error").removeClass("has-val"), d("#login_form").trigger("reset").find(".form-group").removeClass("focused"), d.form_validator("login_form"), d(".loginTab, #loginForm").addClass("active"), d(".signUpTab, #signupForm").removeClass("active");
    }),
    d(document).on("click", ".signIn_nav", function () {
      (s = d(this).attr("data-act")), n(), d.hasClassadd();
    }),
    d(document).on("click", "#btnSubmitSignUp", function () {
      var n, e, o, t, i, a, s;
      new AWS.CognitoIdentityServiceProvider({
        apiVersion: "2016-04-18",
        region: "us-east-2",
      }),
        jQuery("#signup_form").valid() &&
          (d("#btnSubmitSignUp").prop("disabled", !0),
          d(".loading-fa").html("<i class='fa fa-spinner fa-spin'></i>"),
          (o = d("#signUpFname").val()),
          (t = d("#signUpLname").val()),
          (n = d("#signUpEmail").val()),
          (a = o + " " + t),
          (e = d("#signupPassword").val()),
          (s = l.getNumber(intlTelInputUtils.numberFormat.E164)),
          (i = {
            UserPoolId: _config.cognito.userPoolId,
            ClientId: _config.cognito.clientId,
          }),
          (o = new AmazonCognitoIdentity.CognitoUserPool(i)),
          (t = []),
          (i = {
            Name: "email",
            Value: n,
          }),
          (a = {
            Name: "name",
            Value: a,
          }),
          (s = {
            Name: "phone_number",
            Value: s,
          }),
          (i = new AmazonCognitoIdentity.CognitoUserAttribute(i)),
          (a = new AmazonCognitoIdentity.CognitoUserAttribute(a)),
          (s = new AmazonCognitoIdentity.CognitoUserAttribute(s)),
          t.push(i),
          t.push(a),
          t.push(s),
          o.signUp(n, e, t, null, function (e, o) {
            d("#btnSubmitSignUp").prop("disabled", !1), d(".loading-fa").html(""), e ? toast.warning(e.message || JSON.stringify(e)) : ((cognitoUser = o.user), r(n));
          }));
    }),
    d(document).on("click", "#btnSubmitLogin", function (e) {
      var t,
        o,
        i,
        a = new AWS.CognitoIdentityServiceProvider({
          apiVersion: "2016-04-18",
          region: "us-east-2",
        });
      jQuery("#login_form").valid() &&
        (d("#btnSubmitLogin").prop("disabled", !0),
        d("#btnSubmitLogin span.loading-fa").html("<i class='fa fa-spinner fa-spin'></i>"),
        (t = d("#loginEmail").val()),
        (e = d("#loginPwd").val()),
        (o = {
          Username: t,
          Password: e,
        }),
        (e = new AmazonCognitoIdentity.AuthenticationDetails(o)),
        (o = {
          UserPoolId: _config.cognito.userPoolId,
          ClientId: _config.cognito.clientId,
        }),
        (o = new AmazonCognitoIdentity.CognitoUserPool(o)),
        (o = {
          Username: t,
          Pool: o,
        }),
        (i = new AmazonCognitoIdentity.CognitoUser(o)).authenticateUser(e, {
          onSuccess: function (e) {
            d("#btnSubmitLogin").prop("disabled", !1), d(".loading-fa").html("");
            var o = e.getAccessToken().getJwtToken(),
              e = e.getIdToken().getJwtToken();
            (location.href = "supportlk" == s ? _supUrl + "/awslogin#id_token=" + e + "&access_token=" + o : _vsUrl + "/awslogin#id_token=" + e + "&access_token=" + o), (s = "");
          },
          onFailure: function (e) {
            d("#btnSubmitLogin").prop("disabled", !1),
              d(".loading-fa").html(""),
              "UserNotConfirmedException" == e.code
                ? (Swal.fire({
                    text: e.message,
                    icon: "warning",
                    showCancelButton: !0,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Confirm User",
                    cancelButtonText: "Cancel",
                  }).then(function (n) {
                    var e;
                    n.isConfirmed &&
                      ((e = {
                        ClientId: _config.cognito.clientId,
                        Username: t,
                      }),
                      a.resendConfirmationCode(e, function (e, o) {
                        e ? toast.warning(e.message || JSON.stringify(e)) : ((i = n.user), r(t));
                      }));
                  }),
                  d("#sign_in_up_popup").modal("hide"))
                : (d("#btnSubmitLogin").prop("disabled", !1), d(".loading-fa").html(""), toast.error(e.message || JSON.stringify(e)));
          },
          mfaRequired: function (e, o) {
            var n = this;
            toast.success("An OTP has been sent."),
              d("#sign_in_up_popup").modal("hide"),
              d("#sms_otp_verify")
                .modal("show")
                .find("p")
                .html("We have delivered the authentication code by SMS to " + o.CODE_DELIVERY_DESTINATION + ". Please enter the code to complete authentication."),
              d(".authentication_otp").on("click", function (e) {
                d(this).prop("disabled", !1).find(".loading-fa").html("<i class='fa fa-spinner fa-spin'></i>"), jQuery("#verify_OTP").valid() && ((e = d("input.authentication_code").val()), i.sendMFACode(e, n));
              });
          },
        }));
    }),
    d(document).on("click", "#resendOtp", function () {
      var e = d("#disp_emailID").text();
      d(".frgtpwd_resendotp").length && (e = d("#frg_loginEmail").val());
      var o = {
          UserPoolId: _config.cognito.userPoolId,
          ClientId: _config.cognito.clientId,
        },
        o = {
          Username: e,
          Pool: new AmazonCognitoIdentity.CognitoUserPool(o),
        };
      new AmazonCognitoIdentity.CognitoUser(o).resendConfirmationCode(function (e, o) {
        e ? toast.warning(e.message || JSON.stringify(e)) : toast.success("OTP has been sent to your registered email address.");
      });
    }),
    d(document).on("click", "#forgPwdbtn", function () {
      d("body").prepend('<div class="loader active"><span class="loadingspinner"></span></div>'),
        d(".modal-container").load("AddEmailMod.html", function (e, o, n) {
          408 == n.status ? location.reload() : (d("body").find(".loader").remove(), d(".modal").modal("hide"), d("#email_popup").show(), d.form_validator("email_form"));
        });
    }),
    d(document).on("click", "#sub_email", function () {
      var e, o, t;
      (document.getElementById("email_popup").style.display = "block"),
        jQuery("#email_form").valid() &&
          (d("#sub_email").prop("disabled", !0),
          d(".loading-fa").html("<i class='fa fa-spinner fa-spin'></i>"),
          (e = d("#frg_loginEmail").val()),
          (forgotPwdEmailId = d("#frg_loginEmail").val()),
          (o = {
            UserPoolId: _config.cognito.userPoolId,
            ClientId: _config.cognito.clientId,
          }),
          (o = {
            Username: e,
            Pool: new AmazonCognitoIdentity.CognitoUserPool(o),
          }),
          (t = new AmazonCognitoIdentity.CognitoUser(o)).forgotPassword({
            onSuccess: function (e) {
              d("#sub_email").prop("disabled", !1), d(".loading-fa").html("");
            },
            onFailure: function (e) {
              d("#sub_email").prop("disabled", !1), d(".loading-fa").html(""), alert(e.message || JSON.stringify(e)), toast.warning(e.message || JSON.stringify(e));
            },
            inputVerificationCode: function (e) {
              d("#email_popup").hide(),
                d("#sub_email").prop("disabled", !1),
                d(".loading-fa").html(""),
                d("body").prepend('<div class="loader active"><span class="loadingspinner"></span></div>'),
                d(".modal-container").load("ForgotPasswordMod.html", function (e, o, n) {
                  408 == n.status
                    ? location.reload()
                    : (d("body").find(".loader").remove(),
                      d("#forgotpwd_popup").show(),
                      d("#frg_loginEmail").val(forgotPwdEmailId),
                      d.form_validator("fgtpwd_form"),
                      d("#fgtpwd_code").focus().val(""),
                      document.getElementById("sub_fgtpwd").addEventListener("click", function () {
                        var e, o;
                        jQuery("#fgtpwd_form").valid() &&
                          (d("#sub_fgtpwd").prop("disabled", !0),
                          d(".loading-fa").html("<i class='fa fa-spinner fa-spin'></i>"),
                          (e = document.getElementById("fgtpwd_code").value),
                          (o = document.getElementById("newPassword").value),
                          t.confirmPassword(e, o, {
                            onSuccess: function () {
                              d("#sub_fgtpwd").prop("disabled", !1),
                                d(".loading-fa").html(""),
                                d("#forgotpwd_popup").hide(),
                                d("body").removeClass("modal-open").css({ overflow: "auto", "padding-right": "0" }).find(".modal-backdrop").remove(),
                                swal("Your password has been changed successfully.", "", "success"),
                                setTimeout(function () {
                                  window.location.href = _vsUrl + "/logout";
                                }, 5e3);
                            },
                            onFailure: function (e) {
                              d("#sub_fgtpwd").prop("disabled", !1), d(".loading-fa").html(""), (e.code = "CodeMismatchException"), toast.warning(e.message || JSON.stringify(e));
                            },
                          }));
                      }));
                });
            },
          }));
    }),
    d.urlParam("sub") &&
      ((o = d.urlParam("sub")),
      d.ajax({
        url: _resetpwdUrl + "?sub=" + o,
        type: "GET",
        beforeSend: function () {
          d("body").prepend('<div class="loader active"><span class="loadingspinner"></span></div>');
        },
        success: function (t) {
          d("body").find(".loader").remove(),
            "object" == typeof t && null == t
              ? swal("The link you clicked has either expired or is invalid.", "", "error")
              : d(".modal-container").load("SetNewPassword.html", function (e, o, n) {
                  (document.getElementById("user_emailId").value = t), d("#newpwd_popup").modal("show"), d.form_validator("newpwd_form");
                });
        },
      }),
      d.form_validator("newpwd_form")),
    d(document).on("click", "#setNew_pwd_btn", function () {
      var e, o;
      d("#newpwd_form").valid() &&
        (d(this).find(".loading-fa").html("<i class='fa fa-spinner fa-spin'></i>"),
        (e = document.getElementById("user_emailId").value),
        (o = document.getElementById("setNewPassword").value),
        d.ajax({
          url: _setpwdUrl + "?subuser=" + e + "&data=" + encodeURIComponent(o),
          crossDomain: !0,
          success: function (e) {
            d("#setNew_pwd_btn").find(".loading-fa").html(""),
              e &&
                (swal("Your password has been set. You can login now!!", "", "success"),
                setTimeout(function () {
                  var e = window.location.href.split("?")[0];
                  window.location = e + "#login";
                }, 3e3));
          },
        }));
    }),
    d(document).on("click", "#modalClose", function () {
      d("#forgotpwd_popup").modal("hide"), d("body").removeClass("modal-open");
    }),
    d(document).on("click", ".close", function () {
      d(".modal").hide(), d("body").removeClass("modal-open").css({ overflow: "auto", "padding-right": "0" }).find(".modal-backdrop").remove();
    }),
    d(document).on("show.bs.modal", ".modal", function (e) {
      var o = 1050 + Math.max(...Array.from(document.querySelectorAll("*")).map((e) => +e.style.zIndex));
      d(this).css("z-index", o),
        setTimeout(function () {
          d(".modal-backdrop")
            .not(".modal-stack")
            .css("z-index", o - 1)
            .addClass("modal-stack");
        }, 0);
    }),
    d(document)
      .on("focus blur", ".form-control", function (e) {
        d(this)
          .parents(".form-group")
          .toggleClass("focused")
          .toggleClass("focused", e.type === "focusin" || this.value.length > 0);
      })
      .trigger("blur"),
    d("#fgtpwd_form").validate({
      rules: {
        fgtpwd_code: {
          digits: !0,
        },
      },
    }),
    d("#verify_OTP").validate({
      rules: {
        authentication_code: {
          digits: !0,
          required: !0,
          minlength: 6,
        },
      },
    }),
    d.validator.addMethod(
      "pwcheck",
      function (e) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(e);
      },
      "Password must contain minimum 6 characters, atleast one uppercase, one lowercase, one number and special character."
    ),
    jQuery.validator.addMethod(
      "intlTelNumber",
      function (e, o) {
        return this.optional(o) || d(o).intlTelInput("isValidNumber");
      },
      "Please enter a valid Phone Number"
    );
});
