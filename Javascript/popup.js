// const openModalsButton = document.querySelectorAll('[data-modal-target]')
// const closeModalsButton = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalsButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal)
// })

// closeModalsButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = document.closest('.modal')
//         openModal(modal)
// })

// overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal.active')
//     modals.forEach(modal =>{
//         closeModal(modal)
//     })
// function openModal {
//  if (modal == null) return
//  modal.classList.add('active')
//  overlay.classList.add('active')
// }

// function closeModal {
//     if (modal == null) return
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
//    }

async function api() {
  const response = await fetch("./javascript/html.json");

  const jsonData = await response.json();

  jsonData.data.portfolio.forEach((el, index) => {
    const cardTemplate = `
  
            <article class="cards-1">
  
                <div class=${
                  (index + 1) % 2 === 0 ? "card-img-left" : "card-img-right"
                }>
  
                    <img
  
                    class="mobile"
  
                    src=${el.featured_image}
  
                    alt=${el.name + index}
  
                    />
  
                </div>
  
                <div class=${
                  (index + 1) % 2 === 0
                    ? '"card-work-info info-right" '
                    : '"info-left card-work-info"'
                }>
  
                    <h2 class="title-card">${el.name}</h2>
  
                    <div class="header-details">
  
                        <p id="bold-st">${el.subheading[0]}</p>
  
                        <ul class="dot"></ul>
  
                        <p>${el.subheading[1]}</p>
  
                        <ul class="dot"></ul>
  
                        <p>${el.subheading[2]}</p>
  
                    </div>
  
                    <p>
  
                        ${el.description}
  
                    </p>
  
                    <div class="skills-card">
  
                        ${el.technology.map(
                          (res) => `<span class="language">${res}</span>`
                        )};
  
                    </div>
  
                    <div>
  
                        <button class="card-work-info show-modal">See project</button>
  
                    </div>
  
                </div>
  
            </section>
  
        `;

    const element = document.querySelector(".card-works");

    element.innerHTML += cardTemplate;
  });
}

api();
