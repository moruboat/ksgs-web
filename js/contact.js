// 문의 폼 -> Formspree AJAX 제출
// 사용 전 아래 FORM_ENDPOINT 를 발급받은 Formspree 엔드포인트로 교체하세요.
// 예: https://formspree.io/f/xxxxxxxx
var FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (FORM_ENDPOINT.indexOf("YOUR_FORM_ID") !== -1) {
      status.textContent = "문의 폼 연결이 아직 설정되지 않았습니다. (js/contact.js 의 FORM_ENDPOINT를 교체해주세요)";
      status.className = "form-status error";
      return;
    }

    var data = new FormData(form);
    status.textContent = "전송 중입니다...";
    status.className = "form-status";
    status.style.display = "block";

    fetch(FORM_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (response.ok) {
          status.textContent = "문의가 정상적으로 접수되었습니다. 빠른 시일 내 연락드리겠습니다.";
          status.className = "form-status success";
          form.reset();
        } else {
          status.textContent = "전송에 실패했습니다. 잠시 후 다시 시도해주세요.";
          status.className = "form-status error";
        }
      })
      .catch(function () {
        status.textContent = "네트워크 오류로 전송에 실패했습니다.";
        status.className = "form-status error";
      });
  });
});
