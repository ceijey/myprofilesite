export default function About() {
  return (
    <div className="page-content">
      <h2 className="page-header">About Me</h2>
      <div className="content">
        <div className="main-info">
          <div className="info-section">
            <h2>Personal Information</h2>
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-user-graduate"></i></div>
              <div><strong>Course/Block:</strong> BS Information Technology / IT-3B</div>
            </div>
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-home"></i></div>
              <div><strong>Address:</strong> Lincon Heights Subdivision, Brgy. San Pablo, Dinalupihan, Bataan</div>
            </div>
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-phone"></i></div>
              <div><strong>Telephone:</strong> (63+) 9186079858</div>
            </div>
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-envelope"></i></div>
              <div><strong>Email:</strong> 202310192@gordoncollege.edu.ph</div>
            </div>
          </div>
          
          <div className="info-section">
            <h2>About Me</h2>
            <p>Information Technology Student with experience in making web applications and other tech-related projects. I have a basic knowledge about HTML, CSS, and JAVASCRIPT and other basic programming languages, with real-world adaptability gained from experience as a bike marshal. I thrive on challenges and am committed to building a solid foundation in IT.</p>
          </div>
        </div>
      </div>
    </div>
  );
}