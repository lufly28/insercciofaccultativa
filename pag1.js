<<<<<<< HEAD
const triggerTabList = document.querySelectorAll('#myTab a')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})

const triggerFirstTabEl = document.querySelector('#myTab li:first-child a')
=======
const triggerTabList = document.querySelectorAll('#myTab a')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})

const triggerFirstTabEl = document.querySelector('#myTab li:first-child a')
>>>>>>> 81eb1a50d1136dcad27cf0b7f47a3dcd0afc36fb
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab