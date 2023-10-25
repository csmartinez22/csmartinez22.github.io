import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import JSON from "../assets/puertorico.json";
import "./Projects.css";

const width = 800;
const height = 600;

const notAtRisk = [
  "Bayamón",
  "Caguas",
  "Canóvanas",
  "Carolina",
  "Guaynabo",
  "Gurabo",
  "Juncos",
  "Santa Isabel",
  "Toa Alta",
  "Toa Baja",
  "Trujillo Alto",
];

const Projects = () => {
  return (
    <div className="projects bg-dark">
      <h1 className="title">Projects</h1>
      <h1 className="title">Puerto Rico</h1>
      <div className="body">
        Below is an informal write up where I used machine learning to identify
        which municipalities in Puerto Rico are at risk of gentrification.
      </div>
      <h2 className="header">Preface</h2>
      <div className="body">
        I chose Puerto Rico as my focus for my project because mainland
        Americans often forget it. In a 2017 study, a poll conducted by Morning
        Consult found that 46% of Americans did not know that Puerto Ricans are
        considered U.S. citizens. I knew I wanted to work on gentrification as
        someone who has lived in public housing for most of my life and saw the
        city of Somerville destroy the public housing complex for mixed-income
        housing. I searched for existing projects that focused on identifying
        gentrification in the U.S., and every project I found concentrated on
        mainland U.S. major cities, excluding Puerto Rico. By combining both
        topics, I aim to raise awareness of displaced Puerto Ricans, create a
        tool that lawmakers can use to see which communities are most vulnerable
        to being displaced, and encourage the artificial intelligence community
        to look at tackling more diverse issues and datasets. In addition to
        identifying the problem, I think it’s crucial to understand how Puerto
        Rico became at risk of gentrification to address it. Under former Puerto
        Rican governor Luis Fortuño, two controversial acts, Act 22 and Act 60,
        were passed that encouraged wealthy foreigners to move to Puerto Rico
        through tax incentives. The government has been unsuccessful in ensuring
        new residents meet the requirements in exchange for tax incentives,
        allowing foreigners to take advantage of the two acts.
      </div>
      <h2 className="header">Methodology</h2>
      <div className="body">
        I went through the available tables on the United States Census Bureau’s
        website to look for data tables under Puerto Rico that I thought would
        be relevant to finding which municipalities are at risk of or already
        gentrified. In total, I compiled nine tables from the census website
        with data from 2021, including demographic and housing estimates, age
        and sex, geographic mobility by selected characteristics, households and
        families, educational attainment, mean income, demographic
        characteristics of occupied housing units, financial characteristics,
        physical housing characteristics, and race. After compiling and cleaning
        the data, I considered the best approach to the problem. I initially
        viewed unsupervised learning as the best way to approach the problem
        since I didn’t have access to any labeled data. I chose the K Means
        Clustering model and attempted to train it but found that the clusters
        the model created seemed arbitrary and didn’t indicate any pattern.
        After researching K Means Clustering, I discovered that the algorithm
        struggles with high-dimensional data, making it unideal for my dataset.
      </div>
      <div className="body">
        To make K Means Clustering work, I reduced the number of tables used to
        two and found the model was picking up on a pattern. I looked into the
        categories the model created and noticed it was grouping the
        municipalities with major cities together. It grouped San Juan, Ponce,
        Caguas, and Bayamon. To verify these results, I looked at articles to
        find some municipalities that are currently dealing with gentrification
        and found that my model misclassified many municipalities dealing with
        gentrification as not at risk. After experimenting with the parameters
        and getting the same results back, I decided to experiment with the
        algorithm. I went with the Spectral Clustering algorithm, which often
        outperforms K Means Clustering. After training the model on both the
        complete and subsets of the dataset, I found similar results to K Means
        Clusters, where it would group all the municipalities with major cities.
      </div>
      <div className="body">
        After being unsuccessful with two unsupervised learning algorithms, I
        assumed my only other option would be to use a supervised learning
        algorithm. I researched which algorithm would work best if given a small
        amount of labeled data. I came across the idea of semi-supervised
        learning, a middle ground between unsupervised and supervised.
        Semi-supervised learning, also known as weak supervision, can learn
        using large amounts of unlabeled data paired with labeled data.
        Semi-supervised learning circumvents some common issues associated with
        getting a dataset for supervised learning, such as being expensive and
        time-consuming. The approach requires less human oversight while still
        benefiting from a higher accuracy.
      </div>
      <div className="body">
        To create a small amount of labeled data, I searched for articles and
        personal posts about gentrifying parts of Puerto Rico. I found posts on
        Reddit of users describing the gentrification they’re witnessing while
        also categorizing the municipalities people moved to after being
        displaced as less likely to be gentrified. After labeling a small subset
        of data, I looked at the available unsupervised learning algorithms. I
        decided to use the SelfTrainingClassifier from Scikit Learn, which is
        based on Yarowsky’s algorithm and allows for a supervised classifier to
        work like a semi-supervised classifier. According to Scikit Learn, “It
        does this by iteratively predicting pseudo-labels for the unlabeled data
        and adding them to the training set.” For my base supervised learning
        algorithm to pair with the SelfTrainingClassifer, I used the Support
        Vector Classification (SVC) algorithm.
      </div>
      <h2 className="header">Results</h2>
      <div className="body">
        After training the algorithm and creating a model to predict all
        municipalities in Puerto Rico, it found that out of the 77
        municipalities in Puerto Rico, all but 11 are classified as gentrifying
        or at risk of gentrification. The following municipalities are
        considered low risk for gentrification:
      </div>
      <ul>
        <li>Bayamón </li>
        <li>Caguas </li>
        <li>Canóvanas </li>
        <li>Carolina </li>
        <li>Guaynabo </li>
        <li>Gurabo </li>
        <li>Juncos </li>
        <li>Santa Isabel</li>
        <li>Toa Alta</li>
        <li>Toa Baja</li>
        <li>Trujillo Alto</li>
      </ul>
      <div className="body">
        Below is a map of the results of the model’s prediction for every
        municipality.
      </div>
      <div className="map">
        <ComposableMap
          width={width}
          height={height}
          projectionConfig={{
            scale: 16000,
            center: [-66.25, 18],
          }}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <Geographies geography={JSON}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    notAtRisk.includes(geo.properties.NAME) ? "green" : "red"
                  }
                  strokeWidth="1"
                  stroke="white"
                />
              ))
            }
          </Geographies>
        </ComposableMap>
        <div className="legend">
          <div className="row">
            <div className="warning"></div>
            At risk of gentrification
          </div>
          <div className="row">
            <div className="safe"></div>
            Not at risk of gentrification
          </div>
        </div>
      </div>

      <h2 className="header">Future Research</h2>
      <div className="body">
        To improve my project, I’d like to ensure the initial labels I used for
        the SelfTrainingClassifier are as accurate as possible. For my initial
        labels, I researched personal stories of individuals facing
        gentrification in their neighborhoods. Although these stories are
        helpful, there are plenty of other Puerto Ricans whose stories may not
        have appeared in my research or had the opportunity to share their
        story. To ensure my labeled data is more accurate, I’d like to work with
        a sociologist or nonprofit that focuses on gentrification in Puerto Rico
        to verify my initial labels and results. I’d also be interested in
        conducting interviews with residents of affected municipalities or
        conducting a survey to see how accurate my model is.
      </div>
      <div className="body">
        Another way I could improve my project would be by combining the data I
        collected from the U.S. Census with housing data from Zillow or AirBnB.
        One of the limitations of using census data is that it isn’t up to date
        with current events. The data I collected is from 2021, so the status of
        gentrification in Puerto Rico could look different now compared to back
        then. Using current housing data could circumvent that issue.
      </div>
    </div>
  );
};

export default Projects;
