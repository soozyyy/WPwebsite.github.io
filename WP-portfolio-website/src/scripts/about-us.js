export function aboutus(){

    let aboutus=`
        <div class="about-us"> 
            <div class="about-us-header">
                <h1>Meet The Team!</h1>
            </div>

            <div class="about-us-box card1">
                <div class="profile-img-wrapper">
                    <div class="profile-img">
                        <img src="./images/leehom.jpg" alt="img1">
                    </div>
                </div>

                <div class="card-content">
                    <h2>LING LEE HOM</h2>
                    <p>
                    Ling Lee Hom is a Graphic Design and Multimedia student with a passion for web development and user-focused design. He aims to build software that benefits communities in need, combining aesthetics with functionality to create accessible digital experiences. 
                    </p>
                    <div class="icons">
                    <a href="https://www.linkedin.com/in/lee-hom-b67367250/" target="_blank"><img src="./images/linkedin.png" alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>

            <div class="about-us-box reverse card2">
                <div class="profile-img-wrapper">
                    <div class="profile-img">
                        <img src="./images/jason.jpg" alt="img2">
                    </div>
                </div>

                <div class="card-content">
                    <h2>JASON JOEL JOHNNY</h2>
                    <p>
                    I’m Jason, a dedicated and creative computer scientist with a passion for building engaging and impactful digital experiences. I enjoy turning ideas into polished, user-friendly solutions through thoughtful design and clean, efficient code. I’ve worked on a variety of projects that reflect both my technical abilities and my commitment to quality. 
                    </p>
                    <div class="icons">
                    <a href="https://my.linkedin.com/in/jason-joel-johnny-95b0b6342" target="_blank"><img src="./images/linkedin.png" alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>

            <div class="about-us-box card3">
                <div class="profile-img-wrapper">
                    <div class="profile-img">
                        <img src="./images/zhenyang.jpg" alt="img3">
                    </div>
                </div>

                <div class="card-content">
                    <h2>SOO ZHEN YANG </h2>
                    <p>
                    Hello, I am a student at UTM, currently studying graphics and multimedia software in faculty of computer science. I spend my time learning C++ and HTML, trying to improve my coding skill. When I am not coding, I enjoy playing games with my friends.
                    </p>
                    <div class="icons">
                    <a href="https://www.linkedin.com/in/soo-zhen-yang-b2138b365/" target="_blank"><img src="./images/linkedin.png" alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>
        </div>        
    `

    document.querySelector('.js-about-us').innerHTML=aboutus;
}

aboutus();
