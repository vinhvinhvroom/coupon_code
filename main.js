let click = document.getElementById('click-here')

let coupon = document.getElementById('coupon-code')

let changeText = (event) => {
  let text = '50OFF-YOWZA!'
  coupon.innerHTML = text
}

click.addEventListener('click', changeText)
