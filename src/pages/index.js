 import React from 'react';
 import style from '../styles/Home.module.css';
 import styles from '../styles/section3.module.css';
 import change from '../styles/section7.module.css';
 
 import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import ImgDiv from './imgDiv';
import Cards from './card';


export default function Home() {

  return (
    <>
      <section className={style.container}>
        <div className={style.wraper}>
          <div className={style.logo}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{fill:"#ffffff",display:"block",height:"36px",width:"36px"}}  aria-label="Home" role="img" focusable="false"><path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path></svg>
          </div>
          <div className={style.heading}>
            <h4>BECOME A HOST</h4>
            <h1>Host your space, share your world</h1>
            <p>The art of hosting is rooted in thoughtful design. Share your unique aesthetic with guests and earn extra income on a schedule that works for you.</p>
            <button>Try hosting</button>
          </div>
        </div>
       
      </section>
      <section className={style.nextChapter}>
        <div className={style.section2_main}>
          <div className={style.div1}>
            <h1>Your next chapter, made possible by Host<i>ing</i></h1>
          </div>
          <div className={style.componentDiv}>
            <div className={style.div2}>
              <h5>Share what you love</h5>
              <p>Indulge your love for design when you host Airbnb guests, who are drawn to authentic travel in creatively curated spaces.</p>
            </div>
            <div className={style.div3}>
              <h5>Host how you want to</h5>
              <p>Airbnb gives you the tools and support to earn extra income, be your own boss and invest in your passions.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.carouselSection}>
        <div className={styles.carouselWrapper}>  
        <Carousel className={styles.car}  
          infiniteLoop={true} 
          stopOnHover 
          autoPlay 
          showStatus={false}
          interval={2300} 
          showThumbs={false}>
                  <ImgDiv image="https://a0.muscache.com/pictures/4fef9b8a-64b5-418d-9cb1-a85a8570a277.jpg" 
                    discript="Hosting has been so rewarding and life-changing. It’s allowed us to pursue 
                our passion for interior design and helped us realise our niche – that we really
                 love renovating spaces for others to enjoy."
                 head = "Catherine" head2="interior designer and Host in Columbus, Ohio"
                  />
                   <ImgDiv image="https://a0.muscache.com/pictures/ca994156-41c9-47f2-93ac-de109e4beda0.jpg" 
                    discript="Give yourself permission to play. I’ve poured so much love into 
                    [restoring this space] – and I think guests come back for that very reason."
                 head = "Tiffany" head2="former creative director and Host in Hollywood Beach, California"
                  />
                  <ImgDiv image="https://a0.muscache.com/pictures/05d6b7f6-3b2c-4e06-94b3-a9c5b17bc177.jpg" 
                    discript="The part that I love most about hosting is the design and curating the spaces for the guests
                     – cool details and making things they can interact with. You're helping them create memories."
                 head = "Jordan" head2="architect and Host in Denver, Colorado"
                  />
                  <ImgDiv image="https://a0.muscache.com/pictures/0a6dc67a-fd8e-4786-9b6b-ed5eaead10e0.jpg" 
                    discript="Doing the interior designing for our Airbnb by using vintage finds and contemporary 
                    touches was a really fun challenge. It was a labour of love and something we are really proud of."
                 head = "Wyatt and Brett" head2="designers and makers in Chemainus, Canada"
                  />
                  <ImgDiv image="https://a0.muscache.com/pictures/659408f0-6af0-4734-9dd3-1d2879ed51ee.jpg" 
                    discript="People really appreciate being in a different place. It's a stage; I set it 
                    up for the visual experience. Everything has a purpose to make the experience even more enjoyable."
                 head = "Sarah" head2="graphic designer and Host in Rhinebeck, New York"
                  />
            </Carousel>
        </div>
      
      </section>
      <section className={styles.section4}>
        <div className={styles.sec4Wrapper}>
          <div className={styles.insideWrap}>
            <h3>CHECK IT OUT FOR YOURSELF</h3>
            <h1>Host your entire place</h1><h1>for 4 guests</h1><h1> in Jaipur</h1><h1> and earn up to <span>₹30,894</span> a month* </h1>
            <button>Get started</button>
          </div>
        </div>
      </section>
      <section className={styles.section5}>
        <div className={styles.sec5Wrapper}>
          <div className={styles.sec5heading}>
            <h1>How hosting works</h1>
          </div>
          <div className={styles.sec5card}>
              <Cards image = "https://a0.muscache.com/pictures/b6005f78-45e6-403a-bc1d-3351ae83d149.jpg"
              heading = "Why host on Airbnb?"
              para = "Hosts revel what they love about sharing their space on airbnb" />
              <Cards image = "https://a0.muscache.com/pictures/9ac19f4a-a59c-47f9-8223-09120b52cd2d.jpg"
              heading = "How to get started on Airbnb"
              para = "From creating your listing to prepping your space, learn how to start hosting" />
              <Cards image = "https://a0.muscache.com/pictures/4d0cc0ed-ad85-4efd-b98e-386d22ab195a.jpg"
              heading = "How to earn money on Airbnb"
              para = "Here's what every Host needs to know about pricing and payouts." />
              <Cards image = "https://a0.muscache.com/pictures/4efaca33-ca90-4d94-a79b-381cf0179355.jpg"
              heading = "Designing your space"
              para = "Designing your space for guests can be a quick way to boost your bookings." />
              <Cards image = "https://a0.muscache.com/pictures/3cea79b0-79c3-4604-8fd9-7ef5cee4aa42.jpg"
              heading = "Secrets from a seasoned Superhost"
              para = "Superhost Nikki shares her tips, from setting up to standing out." />
              
          </div>

          
        </div>
      </section>
      <section className={styles.section6}> 
        <div className={styles.sec6Wrapper}>
          <div className={styles.flexone}>
            <div className={styles.wholediv}>
              <p>HAVE QUESTIONS ?</p>
              <h1>Get free one-on-one help from Airbnb’s best Hosts</h1>
              <button>Ask a Superhost</button>
            </div>
          </div>
          <div className={styles.flextwo}>
            <div className={styles.sec6img}>
              <img loading='lazy' src='https://a0.muscache.com/im/pictures/cc4172b7-fb46-4903-bf62-b55ad41bc3e0.jpg?im_q=highq'></img>
            </div>
          </div>
        </div>
      </section>
      <section className={change.section7}>
        <div className={change.sec7Wrapper}>
          <div className={change.sec7heading}>
            <h1>How we support you</h1>
          </div>
          <div className={change.gridDisplay}>
            <div className={change.div1}>
              <h3>Host protection and insurance</h3>
              <p>To support you in the rare event of an incident, most Airbnb bookings include property damage protection and liability insurance of up to $1m USD.</p>
            </div>
            <div className={change.div2}>
              <h3>COVID-19 safety guidelines</h3>
              <p>To help protect the health of our community, weve partnered with experts to create safety practices for everyone, plus a cleaning process for hosts.</p>
            </div>
            <div className={change.div3}>
              <h3>High guest standards</h3>
              <p>To give Hosts peace of mind, we offer guest identification and let you check out reviews of guests before they book. Our new Guest Standards Policy sets higher expectations for behaviour.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={change.section8}>
        <div className={change.sec8Wrapper}>
          <div className={change.sec8div}>
            <h1>Start your hosting journey</h1>
            <p>Let’s get your listing set up, together.</p>
            <button>Get started</button>
          </div>
        </div>
      </section>
    </>
  )
}

