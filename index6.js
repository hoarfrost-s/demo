async function dropFall () {

  var main = document.querySelector('body')

  var colors = [

    '#ff0000',

    '#FF8C00',

    '#AEFF00',

    '#00BBFF',

    '#0022FF',

    '#AE00FF',

    '#FF00B3',

    '#FF0051',

    '#FF0000'

  ]

  var count = 200

  var offsetWidth = main.offsetWidth

  // setInterval(() => {

  function drop () {

    for (var i = 0; i < count; i++) {

      var color = colors[Math.floor(Math.random() * colors.length)]

      var drop = document.createElement('drop')

      drop.classList.add('drop')

      drop.style.background = `linear-gradient(transparent, ${color})`

      drop.style.left = Math.random() * offsetWidth + 'px'

      drop.style.animationDelay = Math.random() * -3 + 's'

      drop.style.animationDuration = 2 + Math.random() * 5 + 's'

      main.appendChild(drop)

    }

  }

  function remove() {

    for (var i = 0; i < count; i++) {

      main.removeChild(main.children[0])

    }

  }

  drop()

  // }, 10);

  // 获取窗口宽高

  var getWindowsInfo = () => {

    var windowInfo = {

      width: window.innerWidth,

      height: window.innerHeight

    }

    offsetWidth = windowInfo.width

    drop();

    remove();

  }

  // 防抖

  var debounce = (fn, delay) => {

    let timer

    return function () {

      if (timer) {

        clearTimeout(timer)

      }

      timer = setTimeout(() => {

        fn()

      }, delay)

    }

  }

  var cancelDebounce = debounce(getWindowsInfo, 500)

  window.addEventListener('resize', cancelDebounce, true)

}

dropFall()

