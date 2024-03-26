import "./Home.css";

const Home = () => {
  const downloadResume = () => {
    const pdfUrl = "/files/JM_Resume_2023.pdf";
    window.open(pdfUrl, "_blank");
  };

  const downloadCV = () => {
    const pdfUrl = "/files/JM_CV.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="home bg-dark">
      <div className="main">
        <div className="flex">
          <div className="text info">
            <h1>Hello, I'm Joseph Martinez!</h1>
            <h2>
              I'm a software engineer and AI enthusiast based in the Boston
              area.
            </h2>
          </div>
          <div className="image float-right" />
        </div>
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
      <div className="home text">
        <div className="title">
          <h1>About Me</h1>
        </div>
        <div className="body">
          I'm Joseph Martinez, a full-stack software engineer currently at
          WillowTree. I went to Amherst College for my undergraduate and majored
          in Computer Science. I enjoy learning more about Machine Learning and
          AI in my free time. I reflect on my academic career at Amherst and
          remember my machine learning class being one of my most exciting
          classes. Since then, I've taken Harvard CS50's Introduction to
          Artificial Intelligence with Python on edX and worked on a personal
          project that uses semi-supervised learning to classify which
          municipalities in Puerto Rico are at risk of gentrification, which you
          can learn more about under the Projects tab. Below, you can find my
          resume and CV. If you'd like to reach out, please visit the Contact
          tab. Thanks for visiting!
        </div>
        <div className="flex">
          <button type="button" className="button" onClick={downloadResume}>
            Resume
          </button>
          <button type="button" className="button" onClick={downloadCV}>
            CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
