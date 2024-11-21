import React from "react";
import "./styles.css";
import Header from "../../components/Header/Header";
// import greenBG from "../../assets/images/greenBG.jpg";
import heroImg from "../../assets/illustrationsIcons/heroImg.svg";
import featureImg1 from "../../assets/illustrationsIcons/featureImg1.svg";
import featureImg2 from "../../assets/illustrationsIcons/featureImg2.svg";
import featureImg3 from "../../assets/illustrationsIcons/featureImg3.svg";
import controlImg from "../../assets/images/controlImg.svg";
import coins from "../../assets/illustrationsIcons/coins.svg";
import FAQaccordion from "../../components/FAQaccordion/FAQaccordion";
import Footer from "../../components/Footer/Footer";

export default function LandingPage() {
  return (
    <div>
      <div className="heroSection">
        <Header />
        <div className="heroBody">
          <div className="heroLeft">
            <p className="heroStatement">Make Every Dollar Count.</p>
            <p className="heroSubtxt">
              Track your money and let it work for you! Simplify saving for what
              counts by building savings daily, while keeping your expenses in
              check.
            </p>

            <div className="btnDiv">
              <button className="startBtn">Get Started</button>
              <button className="joinBtn">Join Community</button>
            </div>
          </div>
          <div className="heroRight">
            <img src={heroImg} alt="heroImg" className="heroImg" />
          </div>
        </div>
      </div>

      <div className="features">
        <div className="featureTop">
          <div className="featureTxt">
            <p className="subHeading">Take Control of Your Finances</p>
            <p className="subHeadTxt">
              Manage your everyday expenses with a few clicks. Track your
              spending, cut out the waste, and stay on top of your budget.
            </p>
          </div>

          <div className="coreFeatures">
            <div className="singleFeature">
              <img src={featureImg1} alt="" className="featureIcon" />
              <p className="featureSubHead">Track Your Spending with Ease</p>
              <p className="featureBody">
                Get clear visibility on where your money goes. Split bills,
                manage subscriptions, organize receipts, and budget better—all
                in one place.
              </p>
            </div>

            <div className="singleFeature">
              <img src={featureImg2} alt="" className="featureIcon" />
              <p className="featureSubHead">Round-Up Your Expenses:</p>
              <p className="featureBody">
                Turn everyday purchases into savings. Round up your spare change
                and put it towards your goals. Small amounts add up quickly,
                making saving effortless.
              </p>
            </div>

            <div className="singleFeature">
              <img src={featureImg3} alt="" className="featureIcon" />
              <p className="featureSubHead">Lock In and Earn with Safelock</p>
              <p className="featureBody">
                Secure your savings by locking them away for a fixed duration.
                Earn interest every day, stay disciplined, and grow your
                money—no fees attached.
              </p>
            </div>
          </div>
        </div>

        <div className="featureBottom">
          <div className="featureTxt">
            <p className="subHeading">
              Manage Your Savings
              <br /> and Spending at a GO!
            </p>

            <div className="numbersDiv">
              <div className="numbers">
                <p className="number1">1</p>
                <p className="number">2</p>
                <p className="number">3</p>
                <p className="number">4</p>
                <p className="number">5</p>
              </div>

              <div className="subNumStatement">
                <p className="subNumHead">Sign Up and Set Your Goals</p>
                <p className="subNumTxt">
                  Download the Peniwyse app and create an account. Set your
                  savings goals, whether it's for a vacation, emergency fund, or
                  a big purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="control">
        <img src={controlImg} alt="" className="controlMainImg" />
        <div className="controlTxt">
          <div className="controlUp">
            <p className="subHeading">
              Take Control of Your
              <br /> Finances
            </p>
            <p className="controlBody">
              In 2022, over 35% of Canadians reported struggling to meet their
              financial needs due to everyday expenses, and 26% said they would
              be unable to cover an unexpected expense of $500. Rising costs
              have made saving harder than ever, but Peniwyse is here to help
              you take control of your finances. Peniwyse is here to make saving
              a habit—combining discipline with flexibility so you can grow your
              money, stress-free. Save for your dreams, protect your future, and
              make every penny count.
            </p>
          </div>

          <div className="controlBtnDiv">
            <button className="controlStart">Get Started</button>
            <button className="controlJoin">Join Community</button>
          </div>
        </div>
      </div>

      <div className="">
        <p className="subHeading">Frequently Asked Questions</p>
        <FAQaccordion />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="latestNews">
          <p className="subHeading">
            Get the latest news and updates about our app
          </p>
          <p className="subNumTxt">
            Save Smarter, Spend Better, and Grow Your Future
          </p>

          <div className="waitDiv">
            <div className="waitlist-container">
              <input placeholder="Enter email address" className="waitlist" />
              <button className="joinWaitlist">Join Waitlist</button>
            </div>
          </div>
          <img src={coins} alt="" className="coins" />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
