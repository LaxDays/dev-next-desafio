import Link from "next/link";
import Buttons from "@/src/components/Buttons";
import BasicCard from "@/src/components/postsBasicCard";
import { leftMainOptions } from "@/src/constants/leftMainOptions";
import { leftOtherOptions } from "@/src/constants/leftOtherOptions";
import { popularTags } from "@/src/constants/popularTags";
import { rightDiscuss } from "@/src/constants/rightDiscuss";
import { rightWatercooler } from "@/src/constants/rightWatercooler";
import { rightTrending } from "@/src/constants/rightTrending";
import { rightRecentrlyQueried } from "@/src/constants/rightRecentrlyQueried";
import NavBar from "@/src/components/PageNavBar";
import Center from "@/src/components/PageCenter";

export default function Home(props) {
  return (
    <main>
      <NavBar />

      <div className="mainflexCenterContainer">
        <div className="mainFlexContainer">
          <aside className="leftSideContainer">
            <div className="introductionToDev">
              <p className="introductionComunity">
                DEV Community is a community of 1,382,651 amazing developers
              </p>
              <p>
                We´re a place where coders share, stay up-to-date and grow their
                careers.
              </p>
              <Link href="/signup">
                <button className="btnIntroductionCreateAccount">
                  Create Account
                </button>
              </Link>
              <Link href="/signin">
                <button className="btnIntroductionLogIn">Log in</button>
              </Link>
            </div>
            <div className="mainOptionsContainer">
              {leftMainOptions.map((leftMainOptions, index) => {
                return (
                  <Buttons
                    key={`leftMainOptions-${index}`}
                    icon={leftMainOptions.icon}
                    name={leftMainOptions.name}
                  />
                );
              })}
            </div>
            <p className="leftOtherP">Other</p>
            <div className="otherOptionsContainer">
              {leftOtherOptions.map((leftOtherOptions, index) => {
                return (
                  <Buttons
                    key={`leftOtherOptions-${index}`}
                    icon={leftOtherOptions.icon}
                    name={leftOtherOptions.name}
                  />
                );
              })}
            </div>
            <div className="socialMediaIconsContainer">
              <p>Iconos de redes sociales</p>
            </div>
            <p className="leftOtherP">Popular Tags</p>
            <div className="popularTagsContainer">
              {popularTags.map((popularTags, index) => {
                return (
                  <Buttons
                    key={`popularTags-${index}`}
                    icon={popularTags.icon}
                    name={popularTags.name}
                  />
                );
              })}
            </div>
            <div className="leftFooter">
              <p>
                <span className="devComunityFooter">DEV Community</span> A
                constructive and inclusive social network for software
                developers. With you every step of your journey.
              </p>
              <p>
                Built on <span>Forem</span> — the <span>open source</span>{" "}
                software that powers <span>DEV</span> and other inclusive
                communities.
              </p>
              <p>
                Made with love and <span>Ruby on Rails.</span> DEV Community ©
                2016 - 2024.
              </p>
            </div>
          </aside>

          <Center />

          <aside className="rightSideContainer">
            <div className="rigthDiscutionsContainer">
              <p className="discussTitle">#discuss</p>
              <p className="discussDescription">
                Discussion threads targeting the whole community
              </p>
              <div className="rightDiscussPosts">
                {rightDiscuss.map((rightDiscuss, index) => {
                  return (
                    <BasicCard
                      key={`rightDiscuss-${index}`}
                      title={rightDiscuss.title}
                      comments={rightDiscuss.comments}
                    />
                  );
                })}
              </div>
            </div>
            <div className="rigthWatercoolerContainer">
              <p className="discussTitle">#Watercooler</p>
              <p className="discussDescription">
                Light, and off-topic conversation.
              </p>
              <div className="rightDiscussPosts">
                {rightWatercooler.map((rightWatercooler, index) => {
                  return (
                    <BasicCard
                      key={`rightWatercooler-${index}`}
                      title={rightWatercooler.title}
                      comments={rightWatercooler.comments}
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <p className="rightTrendingTitle">trending guides/resources</p>
              <div className="trendingPosts">
                {rightTrending.map((rightTrending, index) => {
                  return (
                    <BasicCard
                      key={`rightTrending-${index}`}
                      title={rightTrending.title}
                    />
                  );
                })}
              </div>
            </div>
            <hr />
            <div className="recentlyQueriedContainer">
              <p className="queriedTitle">recently queried</p>
              <div className="queriedPosts">
                {rightRecentrlyQueried.map((rightRecentrlyQueried, index) => {
                  return (
                    <BasicCard
                      key={`rightRecentrlyQueried-${index}`}
                      title={rightRecentrlyQueried.title}
                    />
                  );
                })}
              </div>
            </div>
            <hr />
          </aside>
        </div>
      </div>
    </main>
  );
}
