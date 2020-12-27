import React, { useState } from "react";
//Calling React-Router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import './components/ComponentsOfMainPage/homeMobile.css';
 
 
 

function App() {
  return (

    <div id="main-wrapper">
    {/* Page Preloader */}
    
    <div className="uc-mobile-menu-pusher">
      <div className="content-wrapper">
        {/* .navbar-top */}
        <nav className="navbar m-menu navbar-default">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="index.html"><img src="  img/logo3.png" alt /></a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="#navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right main-nav">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            {/* .navbar-collapse */}
          </div>
          {/* .container */}
        </nav>
        {/* .nav */}
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
        {/* /.services-left-icon */}
        <section className="featured-box">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="featured-content-wrapper">
                  <div className="featured-img">
                    <img className="img-responsive" src="img/img-featured-2.jpg" alt />
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
                      <li className="avatar"><img src="img/img-testimonial-1.jpg" className="img-responsive" alt /></li>
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
                    <img className="img-responsive" src="img/img-featured-3.jpg" alt />
                  </div>
                  <div className="featured-content">
                    <h1>Cloud Gaming</h1>
                    <p>
                      Cloud computing is the new hardware norm. India is impacted by the trend of cloud computing in the most progressive way, with cloud rapidly altering the IT landscape and companies allocating huge shares of their revenues for upcoming cloud innovations. Today, we can connect everything digitally to Cloud Computing. It provides a whole new world of jobs, applications, services, and platforms. We can see the future of Cloud computing as a combination of cloud-based software products and on-premises computing which will help to create hybrid IT solutions.
                    </p>
                    <a href="#future" className="btn btn-default btn-lg">Learn About its Future</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="future" className="section-content-left-icon">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="left-icon-wraper">
                  <div className="icon">
                    <i className="flaticon-plane" />
                  </div>
                  <div className="content">
                    <h2>Increase Storage Capacity</h2>
                    <p>Today, data is generated in a high volume and it’s difficult to store it with security.    So many businesses are adopting cloud computing and it has been predicted that the Cloud providers will provide more data centers at a lower price as there is a large competition between them.                   </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="left-icon-wraper">
                  <div className="icon"><i className="flaticon-ranking" /></div>
                  <div className="content">
                    <h2>Enhanced Performance of Internet</h2>
                    <p>With the help of the Internet of Things, the quality of the internet can be increased. With the help of the IoT and Cloud Computing, we can store data in the cloud, for further analysis &amp; provide enhanced performance. The users expect high-quality fast-loading services and applications.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="left-icon-wraper">
                  <div className="icon"><i className="flaticon-monitoring" /></div>
                  <div className="content">
                    <h2>Modular Software Will Be Priority</h2>
                    <p>The size of an individual program along with the complexity is increasing regularly.  This leads to the fact that Cloud technology will soon require advanced system thinking. We can see software development from many angles because in the future applications will store in places other than the cloud.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="left-icon-wraper">
                  <div className="icon">
                    <i className="flaticon-tags" />
                  </div>
                  <div className="content">
                    <h2>Internet of Things Along With Cloud Computing</h2>
                    <p>The internet of things is also one of the leading technologies as it comes with continuous innovation in real time Data Analytics and cloud computing. There are many machine-to-machine communication, data, and process occurring. We can do it easily with the help of cloud computing.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="left-icon-wraper">
                  <div className="icon"><i className="flaticon-ranking" /></div>
                  <div className="content">
                    <h2>Data Shows How Future Changes</h2>
                    <p>The cloud computing market is growing at 22.8 percent and will exceed $127.5 after 2018. By 2018, 62% of all CRM software will be cloud-based. Moreover, 30% of all application spending is for software as a service based applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="left-icon-wraper">
                  <div className="icon"><i className="flaticon-monitoring" /></div>
                  <div className="content">
                    <h2>Improvement in Cloud Services
                    </h2>
                    <p>With this service, we can achieve our desired goals. There are many researchers which have proved that Cloud Computing will be one of the leading technologies in the future as the software as a service solution will account for more than 60% of the workload.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="left-icon-wraper">
                  <div className="icon"><i className="flaticon-blogging" /></div>
                  <div className="content">
                    <h2>Security</h2>
                    <p>The data which are stored in the cloud is secure but not fully. The small companies which are providing cloud services may or may not provide proper security to the data. So in the future, we can prevent cyber attacks by providing better security.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="left-icon-wraper">
                  <div className="icon"><i className="flaticon-social-media" /></div>
                  <div className="content">
                    <h2>Modular Software</h2>
                    <p>Companies are using much software, which is yet to modify. This leads to the fact that cloud computing requires modified software, which will provide better security and facilities. This software will be more user-friendly and flexible to use. </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="left-icon-wraper">
                  <div className="icon"><i className="flaticon-viral-marketing" /></div>
                  <div className="content">
                    <h2>Economic</h2>
                    <p>If cloud computing continues to evolve the use of hardware will be less as most of the work will be done with the help of cloud computing and virtualization. We can save the setup cost of software by dividing it and this will lead to decreasing the use of hardware.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* .container */}
        </section>
        {/* /.client-logo */}
        <section className="case-studies">
          <div className="container">
            <div className="section-title text-center">
              <h1>Our Products</h1>
              <p>Z Stream is a subsidiary under Evoura Technologies which is an artificial intelligence company based in Kerala, India with a recognized background working in various fields of Artificial Intelligence including generative, optimization and computational models.</p>
            </div>
            <div className="row" style={{display: 'flex', justifyContent: 'space-around'}}>
              <div className="col-sm-4">
                <div className="case-studies-content">
                  <img className="img-responsive" src="img/img-case-sudies-1.png" alt="case sudies.png" />
                  <h2>ZVR One</h2>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="case-studies-content">
                  <img className="img-responsive" src="img/img-case-sudies-3.png" alt="case sudies.png" />
                  <h2>Z stream</h2>
                </div>
              </div>
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>
        {/* /.client-logo */}
        <footer className="footer">
          {/* Footer Widget Section */}
          <div className="footer-widget-section">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-logo">
                    <a href="#"><img className="img-responsive" src="img/logo.png" alt /></a>
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
                          iEDC, NSS College Of Engineering, Palakkad, Kerala,  
                          India, 678008
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
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>{/* .container */}
          </div>{/* .copyright-section */}
        </footer>
        {/* .footer */}
      </div>
      {/* .content-wrapper */}
    </div>
    {/* .uc-mobile-menu-pusher */}
    <div className="uc-mobile-menu uc-mobile-menu-effect">
      <button type="button" className="close" aria-hidden="true" data-toggle="offcanvas" id="uc-mobile-menu-close-btn">×</button>
      <div>
        <div>
          <ul id="menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    {/* .uc-mobile-menu */}
  </div>
     


  );
}

export default App;
