// countdown.js 倒數計時設定
function updateCountdown() {
    const targetDate = new Date("2023-09-06T00:00:00"); // 設定目標日期和時間
    const currentDate = new Date();

    const timeDifference = targetDate - currentDate;
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = formatTime(days);
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

updateCountdown();
setInterval(updateCountdown, 1000);

//進度條
// 获取进度条填充元素和百分比文本元素
const myprogressFill = document.querySelector(".myprogress-fill");
const myprogressText = document.querySelector(".myprogress-text");

// 设置进度条的目标百分比（假设进度为70%）
const targetPercentage = 70;

// 动态更新进度条的宽度和整数百分比文本
function updatemyprogressBar(percentage) {
    // 使用 Math.round() 将浮点数百分比四舍五入为整数
    const integerPercentage = Math.round(percentage);
    
    // 更新进度条的宽度和百分比文本，并设置0.8秒的动画
    myprogressFill.style.transition = "width 0.8s ease-out";
    myprogressFill.style.width = integerPercentage + "%";

    myprogressText.style.transition = "opacity 0.8s ease-out";
    myprogressText.textContent = integerPercentage + "%";
    myprogressText.style.opacity = 1; // 显示文本
}

// 启动动画
function animatemyprogressBar() {
    const animationDuration = 800; // 动画持续时间（毫秒），与文本动画时间一致
    const animationInterval = 30; // 更新频率（毫秒）
    const increment = targetPercentage / (animationDuration / animationInterval);
    let currentPercentage = 0;

    const animationIntervalId = setInterval(() => {
        currentPercentage += increment;

        if (currentPercentage >= targetPercentage) {
            clearInterval(animationIntervalId);
            currentPercentage = targetPercentage;
        }

        // 更新进度条和百分比文本
        updatemyprogressBar(currentPercentage);
    }, animationInterval);
}

// 开始动画
animatemyprogressBar();
