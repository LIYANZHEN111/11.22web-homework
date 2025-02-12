// JavaScript 添加事件处理器（onclick、onchange、onmousedown、onmouseout、onmouseover、onmouseup）

document.addEventListener("DOMContentLoaded", function() {
  // 选择所有书籍项
  const employeeCard = document.querySelectorAll(".employee-card");

  // 添加点击事件（onclick）
  employeeCard.forEach(function(card) {
    card.onclick = function() {
      alert("你点击了： " + this.textContent);
    };
  });


  // 添加鼠标按下事件（onmousedown）
  employeeCard.forEach(function(card) {
   card.onmousedown = function() {
      this.style.backgroundColor = "#d1c4e9"; // 按下时改变背景色
    };
  });

  // 添加鼠标移出事件（onmouseout）
  employeeCard.forEach(function(card) {
    card.onmouseout = function() {
      this.style.backgroundColor = ""; // 鼠标移出时恢复原样
    };
  });

  // 添加鼠标悬停事件（onmouseover）
  employeeCard.forEach(function(card) {
   card.onmouseover = function() {
      this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
    };
  });

  // 添加鼠标松开事件（onmouseup）
  employeeCard.forEach(function(card) {
    card.onmouseup = function() {
      this.style.backgroundColor = "#ffe0b2"; // 松开鼠标时改变背景色
    };
  });
});
