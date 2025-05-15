export function homePage() {
    let home = `
        <div class="home-content">
            <div class="content-box">
                <div class="box-image">
                    <img src="./images/web-project.png" alt="vision">
                </div>
                <div class="box-content">
                    <h2>Vision</h2>
                    <p>To inspire innovation and collaboration through meaningful web development projects that make a real-world impact.
                </p>
                </div>
            </div>
            
            <div class="content-box">
                <div class="box-image">
                    <img src="./images/mission.jpg" alt="mission">
                </div>
                <div class="box-content">
                    <h2>Mission</h2>
                    <p>Our mission is to apply our web programming skills to develop practical, user-friendly solutions while fostering teamwork, creativity, and continuous learning throughout every project. We aim to contribute meaningfully to the tech community by creating open, accessible, and well-crafted web applications.</p>
                </div>
            </div>
        </div>
    `;
    
    document.querySelector('.js-home').innerHTML = home;

    return home;
}
homePage();