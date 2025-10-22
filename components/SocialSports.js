export default function SocialSports() {
  return (
    <div className="page-content">
      <h2 className="page-header">Social Media & Sports</h2>
      <div className="content">
        <div className="social-info">
          <h2>Connect With Me</h2>
          <p>Feel free to reach out through any of these platforms:</p>
          
          <div className="social-cards">
            <a href="https://www.facebook.com/share/16vW9HKaoX/" className="social-card facebook-card" target="_blank" rel="noopener noreferrer" aria-label="Visit my Facebook profile">
              <div className="social-icon"><i className="fab fa-facebook-f"></i></div>
              <div className="social-text">
                <div className="social-username">Facebook</div>
                <div className="social-desc">Connect with me</div>
              </div>
            </a>
            <a href="https://www.instagram.com/cjjohnm?igsh=ZnI4eWVlem41OHV1" className="social-card instagram-card" target="_blank" rel="noopener noreferrer" aria-label="Visit my Instagram profile">
              <div className="social-icon"><i className="fab fa-instagram"></i></div>
              <div className="social-text">
                <div className="social-username">Instagram</div>
                <div className="social-desc">Follow me</div>
              </div>
            </a>
            <a href="https://www.tiktok.com/@cee_joy01?_t=ZS-8zR5vYqTbhh&_r=1" className="social-card tiktok-card" target="_blank" rel="noopener noreferrer" aria-label="Visit my TikTok profile">
              <div className="social-icon"><i className="fab fa-tiktok"></i></div>
              <div className="social-text">
                <div className="social-username">TikTok</div>
                <div className="social-desc">Check my videos</div>
              </div>
            </a>
          </div>
          
          <div className="sports-section">
            <h2>My Favorite Sports</h2>
            <div className="sports-container">
              <div className="sport-item">
                <div className="sport-icon basketball"><i className="fas fa-basketball-ball"></i></div>
                <p>Basketball</p>
              </div>
              <div className="sport-item">
                <div className="sport-icon running"><i className="fas fa-running"></i></div>
                <p>Running</p>
              </div>
              <div className="sport-item">
                <div className="sport-icon cycling"><i className="fas fa-bicycle"></i></div>
                <p>Cycling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}