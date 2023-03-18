import React from "react";

function People() {
  return (
    <div>
      <div style={{ marginTop: "15rem", width: "100%", height: "10px" }} className="about-scroll"></div>
      <div className="container people">
      <h2 className="main-title about-h2">工房経営者</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="person-card">
              <div className="person-avatar">
                <img src="https://pbs.twimg.com/profile_images/1592133630553620481/C4Q2kKcd_400x400.jpg" alt="CEO" />
              </div>
              <h3 className="person-name">Mao Cha</h3>
              <p className="person-desc">社長 - コンビニ店長も自称している</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="person-card">
              <div className="person-avatar">
                <img src="https://pbs.twimg.com/profile_images/770409076241031168/7GYpzC26_400x400.jpg" alt="CTO" />
              </div>
              <h3 className="person-name">Ban Chang</h3>
              <p className="person-desc">技術部 - AI疑惑がある</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="person-card">
              <div className="person-avatar">
                <img src="https://pbs.twimg.com/profile_images/1635654352705818624/S9bzsR_e_400x400.jpg" alt="CFO" />
              </div>
              <h3 className="person-name">Kaku Maniyama</h3>
              <p className="person-desc">営業部 - 毎週末全国各地で営業</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="person-card">
              <div className="person-avatar">
                <img src="https://pbs.twimg.com/profile_images/1409342499231920129/uI7Od1XU_400x400.jpg" alt="Board Member 1" />
              </div>
              <h3 className="person-name">Bayo Chahan</h3>
              <p className="person-desc">広報部 - 画像を使った広報が得意</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="person-card">
              <div className="person-avatar">
                <img src="https://pbs.twimg.com/profile_images/1635244309862813696/IRlYFo7S_400x400.jpg" alt="Board Member 2" />
              </div>
              <h3 className="person-name">Shiko Apple</h3>
              <p className="person-desc">取締役 - 陰湿なサービスを提供</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="person-card">
              <div className="person-avatar">
                <img src="https://pbs.twimg.com/profile_images/1632708521337958400/Zu0TvVD1_400x400.jpg" alt="Board Member 3" />
              </div>
              <h3 className="person-name">Sato Chang</h3>
              <p className="person-desc">監査役 - 最近はAI疑惑を一体検証している</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default People;
