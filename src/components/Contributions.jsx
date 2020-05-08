import React, { useEffect } from 'react'


const Contributions = () => {
  useEffect(() => {
    const squares = document.querySelector('.squares');
    for (var i = 1; i < 85; i++) {
      const level = Math.floor(Math.random() * 4 + 1);
      squares.insertAdjacentHTML('beforeend', `<li class="progress-square" data-level="${level}"></li>`);
    }
    setInterval(function () {
      let sqs = document.querySelectorAll('.progress-square');
      sqs.forEach((item, index) => {
        let level = Math.floor(Math.random() * 4 + 1);
        item.setAttribute('data-level', level)
      })
    }, 2000)
  }, [])
  return (
    <div>
      <a class="black-text" href="https://github.com/akimi-yano" target="_blank">
        <div class="graph hoverable">
        <ul class="months">
          <li>Jan</li>
          <li>Apr</li>
          <li>Jul</li>
          <li>Oct</li>
        </ul>
        <ul class="days">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul class="squares">

        </ul>
      </div>
      </a>
    </div>
  )
}

export default Contributions
