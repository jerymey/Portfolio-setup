/* eslint-disable no-unused-vars */
const hamb = document.querySelector('.hamb');
const navLinks = document.querySelector('.nav-links');

hamb.addEventListener('click', () => {
  hamb.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.navlink').forEach((n) => n
  .addEventListener('click', () => {
    hamb.classList.remove('active');
    navLinks.classList.remove('active');
  }));

// ----------------------popup------------------------------------------//

const projects = [
  {
    id: 1,
    title: 'Tonic',
    name: 'CANOPY',
    back: 'Back End Dev',
    SourceLink: 'https://github.com/jerymey',
    LiveLink: 'https://jerymey.github.io/Portfolio-setup/',
    years: '2015',
    Image: 'images/desktop-version/nature.png',
    Images: 'images/tonic.png',
    Image1: 'images/Frame.png',
    Image2: 'images/Icon - Export.png',
    descrip: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    name: 'FACEBOOK',
    back: 'Full Stack Dev',
    SourceLink: 'https://github.com/jerymey',
    LiveLink: 'https://jerymey.github.io/Portfolio-setup/)',
    years: '2015',
    Image: 'images/desktop-version/art.png',
    Images: 'images/Multi-Post Stories.png',
    Image1: 'images/Frame.png',
    Image2: 'images/Icon - Export.png',
    descrip: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  },
  {
    id: 3,
    title: 'Facebook 360',
    name: 'FACEBOOK',
    back: 'Full Stack Dev',
    SourceLink: 'https://github.com/jerymey',
    LiveLink: 'https://jerymey.github.io/Portfolio-setup/)',
    years: '2015',
    Image: 'images/desktop-version/facebook.png',
    Images: 'images/yoga.png',
    Image1: 'images/Frame.png',
    Image2: 'images/Icon - Export.png',
    descrip: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",

  },
  {
    id: 4,
    title: 'Uber Navigation',
    name: 'Uber',
    back: 'Lead Developer',
    SourceLink: 'https://github.com/jerymey',
    LiveLink: 'https://jerymey.github.io/Portfolio-setup/',
    years: '2018',
    Image: 'images/desktop-version/availaibility.png',
    Images: 'images/art.png',
    Image1: 'images/Frame.png',
    Image2: 'images/Icon - Export.png',
    descrip: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  },
];
document.getElementById('work').innerHTML = projects.map((item) => ` 
  <article class="cards cards-1">
  <figure>
      <img class="mobile" src="${item.Images}" alt="">
      <img class="desktop" src="${item.Image}" alt="">
  </figure>
<div class="detail-card">
  <h2 class="title-card">${item.title}</h2>    
<div class="header-details">
  <h4>${item.name}</h4>           
  <ul class="dot">              
      <li>${item.back}</li>               
      <li>${item.years}</li>    
  </ul>
</div>
  <p>
  ${item.descrip}
  </p>
  <ul class="skills-card">
      <li class="skill-1">html</li>
      <li class="skill-1">css</li>
      <li class="skill-1">Javascript</li>
  </ul>
  <button class="btn" onclick="display(${item.id})">See Project</button>
</div>   
</article>
      
     <div class="popup-window" id="element-${item.id}">
      <div class="popup">
      <div class="pop-head">
      <h2 class="title-card">${item.title}</h2>
      <button class="close-button" aria-hidden="true" onclick="undisplay(${item.id})">&times;</button>
      </div>
      <div class="header-details">
            <h4>
              CANOPY
            </h4>
            <ul class="dot">
              <li >
                Back End Dev
              </li>
              <li>
                2015
              </li>
            </ul>
          </div>
          <figure class="popup-image-container">
          <img class="desktop"src="${item.Image}" alt="tonic project" />
          <img class="mobile" src="${item.Images}" alt="tonic project" />
        </figure>
        
        <div class="text-section">
        <p class="mobile">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
        <p class="desktop">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</P>

        <p class="desktop">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</P>
        <div class="button-section">
        <ul class="skills-card">
          <li class="skill-1">
            html
          </li>
          <li class="skill-1">
            Ruby on rails
          </li>
          <li class="skill-1">
            css
          </li>
        </ul>
        <div class="separator-line"></div>
        <div class="display-btn">
          <button class="btn"><a href="${item.LiveLink}"> See live </a><img src="${item.Image1}"</button>
          <button class="btn"><a href="${item.SourceLink}"> See Source </a><img src="${item.Image2}"</button>
        </div>
        </div>
        </div>
      </div>
      </div>
      `).join('');

const display = (index) => {
  const obj = document.getElementById(`element-${index}`);
  obj.style.display = 'block';
  console.log('hi');
};

function undisplay(index) {
  const obj = document.getElementById(`element-${index}`);
  obj.style.display = 'none';
}
