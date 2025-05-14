export function projects() {
    let projects = `
      <div class="projects-container">
          <div class="projects-header"> 
              <h1>Our Projects!</h1>
          </div>
  
          <div class="projects-list">

              <div class="project-item project-item-1">
                <img class="project-img project-img-1" style="height:50%"  src="./images/project-1.png" alt="UTM Bus tracking system"/>

                <div class="project-item-content project-item-content-1">
                  <h2 class="project-title">
                  UTM Bus Tracking System
                  </h2>
                  <p class="project-description project-description-1">
                  The UTM Bus Tracking System enhances campus transportation with real-time tracking, interactive maps, and live traffic updates. It features an intuitive search function and highlights nearby bus stops when a bus is approaching, making travel smarter and more efficient for students and staff.
                  </p>
                </div>
              </div>

              <div class="project-item">
                <img class="project-img project-img-2"  src="./images/project-2.png" alt="Spectrumlink"/>

                <div class="project-item-content project-item-content-2">
                  <h2 class="project-title project-title-2">SpectrumLink</h2>
                    <p class="project-description">
                    SpectrumLink is an AI-powered app designed to support individuals with Autism Spectrum Disorder (ASD) in communication, sensory regulation, and social interaction. By offering personalized and adaptive tools, SpectrumLink empowers users to express themselves, manage daily challenges, and build confidence—fostering greater independence, emotional well-being, and meaningful connection.
                    </p>
                </div>

              </div>
          </div>
      </div>
    `;
  
    document.querySelector('.js-projects').innerHTML = projects;
  }
  
  projects();
  
