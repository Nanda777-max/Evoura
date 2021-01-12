import React  from "react";
//Calling React-Router
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
 
 
 

function App() {
  return (

    <div className="App">
       <header id="landing">
    <div className="logo"><img alt="random" src="img/Webp.net-resizeimage (1).png" /></div>
    <nav> 
      <ul>
        <li><a href="#landing" className="active   li">HOME</a></li>
        <li><a href="#about" className="li">ABOUT</a></li>
        <li><a href="#services" className="li">SERVICES</a></li>
        <li><a href="#products" className="li">PRODUCTS</a></li>
        <li><a href="#contact" className="li">CONTACT</a></li>
      </ul>
    </nav>
    <div className="menu-toggle"><i className="fa fa-bars" /></div>
  </header>
  <div id="main-wrapper">
    <div className="firstcontent">
      <div className="firsttext">
        <p>WELCOME TO</p>
        <h1>EVOURA , THE HOME OF INNOVATIONS</h1><br />
        <form action="#about">
          <button className="landbutton" type="submit">   LEARN MORE </button>
        </form>
      </div>
    </div>
    <div id="my-carousel" className="carousel slide hero-slide hidden-xs" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#my-carousel" data-slide-to={0} className="active" />
        <li data-target="#my-carousel" data-slide-to={1} />
        <li data-target="#my-carousel" data-slide-to={2} />
      </ol>
      {/* Wrapper for slides */}
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="img/hero-slide-1.jpg" alt="Hero Slide" />
          <div className="carousel-caption">
            <h1>WHO ARE WE?</h1>
            <p>We are the pioneers in Direct Streaming Virtual Reality gaming.  Gaming is an experience.<br /> We can deliver the new ultimate experience with the combination of VR and Cloud <br /> Infrastructure.  We are a group of motivated individuals who are trying to change the way the <br />world is connected.</p>
          </div>
        </div>
        <div className="item">
          <img src="img/hero-slide-2.jpg" alt="..." />
          <div className="carousel-caption">
            <h1>Space cloud infrastructure</h1>
            <p>Space Cloud infrastructure is something that can change cloud computing altogether.   <br />  The ultimate focus is the development of Space cloud technologies with the help of LASER. <br />It could be the game changer of the whole of mankind. 
            </p>
          </div>
        </div>
        <div className="item">
          <img src="img/hero-slide-3.jpg" alt="..." />
          <div className="carousel-caption">
            <h1>Vision</h1>
            <p>At evoura, we pursue this Vision! Space cloud infrastructure could open a lot of new ways to<br /> colonise the planets and help the racers with the backbone of technologies like Machine <br /> Learning and AI at the acute conditions of Space.
            </p>
          </div>
        </div>
      </div>
      {/* Controls */}
      <a className="left carousel-control" href="#my-carousel" role="button" data-slide="prev">
        <i className="fa fa-angle-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#my-carousel" role="button" data-slide="next">
        <i className="fa fa-angle-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
    {/* #my-carousel*/}
    {/*  About*/}
    <section id="about">
      <div className="title-text" data-aos="fade-up">
        <h1>ABOUT US</h1>
        <p>Z Stream is a subsidiary under Evoura Technologies which is a artificial intelligence compan based in Kerala, India with a recognized background working in various field of Artificial intelligence including Generative Models</p> 
      </div>
    </section>
    <section id="info">
      <div className="inforow"> 
        <div className="what" data-aos="fade-down-right">
          <h1>What we Do</h1>
          <p>We understand that gamers have a difficult time choosing the gaming hardware. More Cost, Need physical upgrade, and anything can go wrong in between our sweet play. As well as, Game developers also having high difficulty in choosing which hardware to build the game for. PCs are often the first priority, but PC specifications can change from one person to other. Game developers cannot expect the players to pay their games to their ultimate potential using PCs.
          </p><p> 
            We, at Z Stream, understand these problems and is in-front of you with a solution. What if you can play the AAA title games even with a Pentium-Age computer with the same Quality? What if you could play those games on Mobile Phones and play wherever you want? What if you could access to the largest game library in your browser?
          </p><p> 
            Yes, Cloud gaming makes it possible for you, to play AAA title games even without a GPU, that too, in any hardware of your choice. A simple and cheap subscription to you to play all games without need to think of DOWNLOAD, INSTALL or any other headaches. That with the same quality as the game developers intend.
          </p><p> 
            We are coming soon . . .</p>
        </div>
        <div className="mission" data-aos="fade-down-left">
          <h1>Our Vision</h1>
          <p>"Our vision is to remove the barrier in gaming"</p>
          <p> Longing to afford a GPU? Never able to play games in its full potential just because it is much hardware intensive? Not able to play games with hardware restrictions?
          </p>
          <p>   One Solution  "Z stream.in"</p>
        </div>
      </div>
    </section>
    {/* /.services-left-icon */}
    <section className="featured-box">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="featured-content-wrapper">
              <div className="featured-img">
                <img className="img-responsive cloud" src="img/img-featured-2.jpg" alt="random" />
              </div>
              <div className="featured-content">
                <h1>Cloud Computing</h1>
                <p>
                  Cloud computing is the new hardware norm. India is impacted by the trend of cloud computing in the most progressive way, with cloud rapidly altering the IT landscape and companies allocating huge shares of their revenues for upcoming cloud innovations. Today, we can connect everything digitally to Cloud Computing. It provides a whole new world of jobs, applications, services, and platforms. We can see the future of Cloud computing as a combination of cloud-based software products and on-premises computing which will help to create hybrid IT solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /.featured-box */}
    <section className="testimonial">
      <div className="container">
        <div id="testimonialSlider" className="carousel slide" data-ride="carousel">
          {/* Wrapper for slides */}
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <blockquote>
                <p>
                  Cloud is about how you do computing, not where you do computing.
                </p>
                <ul className="user-details">
                  <li className="avatar"><img src="img/img-testimonial-1.jpg" className="img-responsive" alt="random" /></li>
                  <li className="name">Paul Maritz</li>
                  <li className="company"> CEO of VMware</li>
                </ul>
              </blockquote>
            </div>
          </div>
        </div>
        {/* #testimonialSlider */}
      </div>
    </section>
    {/* /.testimonial */}
    <section className="featured-box">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="featured-content-wrapper">
              <div className="featured-img">
                <img className="img-responsive cloud" src="img/img-featured-3.jpg" alt="random" />
              </div>
              <div className="featured-content">
                <h1>Cloud Gaming</h1>
                <p>
                  Cloud computing is the new hardware norm. India is impacted by the trend of cloud computing in the most progressive way, with cloud rapidly altering the IT landscape and companies allocating huge shares of their revenues for upcoming cloud innovations. Today, we can connect everything digitally to Cloud Computing. It provides a whole new world of jobs, applications, services, and platforms. We can see the future of Cloud computing as a combination of cloud-based software products and on-premises computing which will help to create hybrid IT solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* /.client-logo */}
    <section className="case-studies" id="products">
      <div className="container">
        <div className="section-title text-center">
          <h1 style={{fontSize: 50}}>OUR PRODUCTS</h1>
          <p>Z Stream is a subsidiary under Evoura Technologies which is an artificial intelligence company based in Kerala, India with a recognized background working in various fields of Artificial Intelligence including generative, optimization and computational models.</p>
        </div>
        <div className="testimonial-row">
          <div className="testimonial-col">
            <h2>ZVR ONE</h2>
            <img className="img-responsive" src="img/img-case-sudies-1.png" alt="case sudies.png" />
            <p>content</p>
          </div>
          <div className="testimonial-col">
            <h2>ZSTREAM </h2>
            <img className="img-responsive" src="img/img-case-sudies-3.png" alt="case sudies.png" />
            <p>content</p>
          </div>
        </div>
      </div>{/* /.container */}
    </section>
    {/* Services*/}
    <section id="services">
      <div className="title-text">
        <h1>SERVICES</h1>
      </div>
      <div className="testimonial-row">
        <div className="testimonial-col">
          <h2>Web Developement</h2>
          <p>We are looking for a Creative Officer. Excited to work with us? Drop your resume below.</p>
        </div>
        <div className="testimonial-col">
          <h2>Digital Marketing</h2>
          <p>We are looking for a Marketting Officer. Excited to work with us? Drop your resume below.</p>
        </div>
      </div>
    </section>
    {/*contact*/}
    <section id="contact" className="case-studies">
      <div className="title-text">
        <h1>Subscribe OUR NEWS LETTER</h1>
        <p>Be the first to know about new games, exclusive previews &amp; special promotions</p>
      </div>
      <form className="contact-content">
        <input type="email" placeholder="Email Address" />
        <button type="submit" className="btn btn-default btn-lg"> Submit</button>
      </form>
    </section>
    <footer className="footer">
      {/* Footer Widget Section */}
      <div className="footer-widget-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-logo">
                <a href="#landing"><img className="img-responsive" src="img/logo-removebg-preview.png" alt="random" /></a>
              </div>
            </div>{/* /.col-sm-4 */}
            <div className="col-md-8">
              <div className="footer-text">
                <p>We started our company back in November 2019. We kept innovating new products for cloud infrastructure. We basically were two friends being not able to play together without high-end PCs. One of them was a Machine Learning Engineer and other was an Electrical and Electronics engineer. 
                </p>
                <ul>
                  <li className="phone"><i className="fa fa-volume-control-phone" aria-hidden="true" /> +91 9446033872, +91 8907053455 
                    <small><i className="fa fa-clock-o" aria-hidden="true" /> Mon - Sat 8.00 - 18.00h</small></li>
                  <li className="address">
                    <address>
                      <i className="fa fa-map-pin" aria-hidden="true" />
                      Karippode, Palakkad, Kerala,  
                      678503
                    </address>
                  </li>
                </ul>
              </div>
            </div>{/* /.col-sm-4 */}
          </div>
        </div>
      </div>{/* /.Footer Widget Section */}
      <div className="copyright-section">
        <div className="container clearfix">
          <ul className="list-inline pull-right">
            <li className="active"><a href="#landing">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <span className="copytext">Copyright © 2020 | <a href="#landing">Evoura Technologies Pvt Ltd</a> | All rights reserved </span>
        </div>{/* .container */}
      </div>{/* .copyright-section */}
    </footer>
    {/* .footer */}
    {/* .content-wrapper */}
    {/* .uc-mobile-menu */}
  </div>
    </div>
     


  );
}

export default App;
