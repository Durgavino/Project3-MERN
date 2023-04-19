import React from "react";

function Home() {
  return (
    <div>
      <div className="homebackground">
        <h1 className="h1"> Welcome to sleepyhead</h1>
        <p className="text">
          The app is basically designed to monitor, guide, track and checkmate
          any one that is workaholic or someone that has sleeping disorder. It
          is technically used by creating an account (login). Thereafter, the
          user will be directed to a page to input bed time and wake up time.
          The app will then calculate and displays value for the user. Equally,
          the app can output up to 5 days parameters for the same user if it is
          used within the last 5 days.
        </p>
        <div className="video-link">
          <h3 className="h3">
            Here you can select different videos to make you relax
          </h3>
          <br />
          <br />
          <div className="videos">
            <div className="video1">
              <iframe
                // width="100%"
                // height="100%"
                src="https://www.youtube.com/embed/h287bt6jSjA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video2">
              <iframe
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/lMgqiA3zKdw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video3">
              <iframe
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/xzfpEqRQ-lY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video4">
              <iframe
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/IAJQPI-Uvpg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
