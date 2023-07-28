// const body = document.querySelector('body');
// const section =document.createElement('section');
// body.append(section);
// section.innerHTML = `
// <section class="card-container" id="card-container">
// <article class="cards cards-1">
//     <figure>
//         <img class="mobile" src="images/tonic.png" alt="">
//         <img class="desktop" src="images/desktop-version/nature.png" alt="">
//     </figure>
// <div class="detail-card">
//     <h2 class="title-card">Tonic</h2>    
// <div class="header-details">
//     <h4>CANOPY</h4>           
//     <ul class="dot">              
//         <li>Back End Dev</li>               
//         <li>2015</li>    
//     </ul>
// </div>
//     <p>
//         A daily selection of privately personalized reads; no accounts or sign-ups required.
//     </p>
//     <ul class="skills-card">
//         <li class="skill-1">html</li>
//         <li class="skill-1">css</li>
//         <li class="skill-1">Javascript</li>
//     </ul>
//     <button data-modal-target="#modal" class="btn">See Project</button>
// </div>   
// </article>

// <article class="cards cards-2">
//     <figure>
//         <img class="mobile" src="images/Multi-Post Stories.png" alt="">
//         <img class="desktop" src="images/desktop-version/art.png" alt="">
//     </figure>
// <div class="detail-card">
//     <h2 class="title-card">Multi-Post
//         Stories</h2>    
// <div class="header-details">
//     <h4 class="mobile">CANOPY</h4>
//     <h4 class="desktop">FACEBOOK</h4>
//     <ul class="dot">              
//         <li class="mobile">Back End Dev</li> 
//         <li class="desktop">Full Stack Dev</li>             
//         <li>2015</li>    
//     </ul>
// </div>
//     <p class="mobile">
//         A daily selection of privately personalized reads; no accounts or sign-ups required.
//     </p>
//     <p class="desktop">Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.</p>
//     <ul class="skills-card">
//         <li class="skill-1">html</li>
//         <li class="desktop skill-1">Ruby on rails</li>
//         <li class="skill-1">css</li>
//         <li class="skill-1">Javascript</li>
//     </ul>
//     <button data-modal-target="#modal" class="btn">See Project</button>
// </div>
// </article>

// <article class="cards">
//     <figure>
//         <img class="mobile" src="images/yoga.png" alt="">
//         <img class="desktop" src="images/desktop-version/facebook.png" alt="">
//     </figure>
// <div class="detail-card">
//     <h2 class="title-card mobile">Tonic</h2> 
//     <h2 class="title-card desktop">Facebook 360</h2>  
// <div class="header-details">
//     <h4 class="mobile">CANOPY</h4> 
//     <h4 class="desktop">FACEBOOK</h4>          
//     <ul class="dot">              
//         <li class="mobile">Back End Dev</li>
//         <li class="desktop">Full Stack Dev</li>               
//         <li>2015</li>    
//     </ul>
// </div>
//     <p class="mobile">
//         A daily selection of privately personalized reads; no accounts or sign-ups required.
//     </p>
//     <p class="desktop">Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.</p>
//     <ul class="skills-card">
//         <li class="skill-1">html</li>
//         <li class="skill-1 desktop">Ruby on rails</li>
//         <li class="skill-1">css</li>
//         <li class="skill-1">Javascript</li>
//     </ul>
//     <button data-modal-target="#modal" class="btn">See Project</button>
// </div>
// </article>

// <article class="cards cards-2">
//     <figure>
//         <img class="mobile" src="images/art.png" alt="">
//         <img class="desktop" src="images/desktop-version/availaibility.png" alt="">
//     </figure>
// <div class="detail-card">
//     <h2 class="title-card mobile">Multi-Post Stories</h2>  
//     <h2 class="title-card desktop">Uber Navigation</h2>  
// <div class="header-details">
//     <h4 class="mobile">CANOPY</h4>
//     <h4 class="desktop">Uber</h4>          
//     <ul class="dot">              
//         <li class="mobile">Back End Dev</li>
//         <li class="desktop">Lead Developer</li>
//         <li class="mobile">2015</li>    
//         <li class="desktop">2018</li>
//     </ul>
// </div>
//     <p class="mobile">
//         A daily selection of privately personalized reads; no accounts or sign-ups required.
//     </p>
//     <p class="desktop">A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.</p>
//     <ul class="skills-card">
//         <li class="skill-1">html</li>
//         <li class="skill-1 desktop">Ruby on rails</li>
//         <li class="skill-1">css</li>
//         <li class="skill-1">Javascript</li>
//     </ul>
//     <button data-modal-target="#modal" class="btn">See Project</button>
// </div>
// </article>
// </section>  
// <script src="Javascript/popup.js"></script>
// `;

// const openModalsButton = document.querySelectorAll('[data-modal-target]')
// openModalsButton.forEach(button => {
//     button.addEventListener('click', () => {
//         const main = document.createElement('div')
//         const popup = document.createElement('div')
//         popup.innerHTML = `
//         <Section class="about-myself" id="about-myself">
//         <article class="about">
//     <div class="cards-3">
//         <h2 class="title-card">About Myself</h2>
//             <p class="para-about">Hello I’m a software developer! I can help you build a product , feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
//             <a class="link-2" href="#">LET'S CONNECT</a>
//         <ul class="social-icons-2">
//            <li><a href=""><img src="images/social-media-icon/tw.png" alt="twitter"></a></li>
//            <li><a href=""><img src="images/social-media-icon/linkedin.png" alt="linkedin"></a></li>
//            <li><a href=""><img src="images/social-media-icon/medium.png" alt="medium"></a></li>
//            <li><a href=""><img src="images/social-media-icon/github.png" alt="github"></a></li>
//            <li><a href=""><img src="images/social-media-icon/v.png" alt="v"></a></li>
//         </ul>
//         <button class="btn btn-1">Get my resume</button>
//     </div>
//     <div class="detail-card-1">
//         <div class="language">
//         <h3>Languages</h3>
//         <img class="chev" src="images/browser-icons/chev-dow.svg" alt="">
//        </div>
//         <ul>
//             <li class="skill-2"><img src="images/browser-icons/javascript.svg" alt="">Javascript</li>
//                 <li class="skill-2"><img src="images/browser-icons/html.svg" alt="">HTML</li>
//                     <li class="skill-2"><img src="images/browser-icons/css.svg" alt="">CSS</li>
            
//         </ul>
//         <div class="framwork">
//         <h3>Framework</h3>
//             <img class="chev" src="images/browser-icons/chev-right.svg" alt="" />
//         </div>
//         <div class="separator-line"></div>
//         <div class="framwork">
//         <h3>Skills</h3>
//         <img class="chev" src="images/browser-icons/chev-right.svg" alt="" />
        
//         </div> 
//         <div class="separator-line"></div>
//     </div>
//       </article>
//       </Section>
//         `;

//         main.append(popup);
//         body.append(main);
//         // const modal = document.querySelector(button.dataset.modalTarget)
//         // openModal(modal)
//   }) 
// })