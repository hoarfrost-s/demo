function run() {
    setInterval(() => {
        let hh = document.getElementById('hh');
        let mm = document.getElementById('mm');
        let ss = document.getElementById('ss');
        let sec_dot = document.querySelector('.sec_dot');
        let min_dot = document.querySelector('.min_dot');
        let hr_dot = document.querySelector('.hr_dot');
        let hr = document.getElementById('hr');
        let min = document.getElementById('min');
        let sec = document.getElementById('sec');
        let time_co = document.getElementById('time_co')
        let time_b = document.getElementById('time_b')

        let date = new Date();
        let h = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let time = h + ':' + m + ':' + s;
        let str_time_co = time_fun(h);

        hh.style.strokeDashoffset = 505 - (500 * h) / 12; // 24 hrs clock
        mm.style.strokeDashoffset = 630 - (630 * m) / 60; // 60 minutes
        ss.style.strokeDashoffset = 755 - (750 * s) / 60; // 60 seconds

        sec_dot.style.transform = `rotateZ(${s * 6}deg)`; // 360 / 60 seconds = 6
        min_dot.style.transform = `rotateZ(${m * 6}deg)`; // 360 / 60 minutes = 6
        hr_dot.style.transform = `rotateZ(${h * 30}deg)`; // 360 / 12 hours = 30

        sec.style.transform = `rotateZ(${s * 6}deg)`;
        min.style.transform = `rotateZ(${m * 6}deg)`;
        hr.style.transform = `rotateZ(${h * 30}deg)`;

        time_co.textContent = str_time_co
        time_b.textContent = time;

    });
};

function time_fun(h) {
    let co = '';
    if (h >= 1 & h < 5) {
        co = '凌晨'
    } else if (h >= 5 & h < 8) {
        co = '早晨'
    } else if (h >= 8 & h < 11) {
        co = '上午'
    } else if (h >= 11 & h < 14) {
        co = '中午'
    } else if (h >= 14 & h < 18) {
        co = '下午'
    } else if (h >= 18 & h < 23) {
        co = '晚上'
    } else if (h >= 23 | h < 1) {
        co = '午夜'
    }
    return co;
};
