import React from "react";

function People() {
  const people = [
    {
      name: "Mao Cha",
      role: "社長 - コンビニ店長も自称している",
      avatar:
        "https://pbs.twimg.com/profile_images/1592133630553620481/C4Q2kKcd_400x400.jpg",
      alt: "CEO",
    },
    {
      name: "Ban Chang",
      role: "技術部 - AI疑惑がある",
      avatar:
        "https://pbs.twimg.com/profile_images/770409076241031168/7GYpzC26_400x400.jpg",
      alt: "CTO",
    },
    {
      name: "Kaku Maniyama",
      role: "営業部 - 毎週末全国各地で営業",
      avatar:
        "https://pbs.twimg.com/profile_images/1635654352705818624/S9bzsR_e_400x400.jpg",
      alt: "sales",
    },
    {
      name: "Bayo Chahan",
      role: "広報部 - 画像を使った広報が得意",
      avatar:
        "https://pbs.twimg.com/profile_images/1409342499231920129/uI7Od1XU_400x400.jpg",
      alt: "marketing",
    },
    {
      name: "Shiko Apple",
      role: "取締役 - 陰湿なサービスを提供",
      avatar:
        "https://pbs.twimg.com/profile_images/1635244309862813696/IRlYFo7S_400x400.jpg",
      alt: "director",
    },
    {
      name: "Sato Chang",
      role: "監査役 - 最近はAI疑惑を一体検証している",
      avatar:
        "https://pbs.twimg.com/profile_images/1632708521337958400/Zu0TvVD1_400x400.jpg",
      alt: "audit",
    },
    {
      name: "Rose Ice",
      role: "清掃部 - 素手で汚物を掴める",
      avatar:
        "https://pbs.twimg.com/profile_images/609578526170189825/20nfQqm5_400x400.jpg",
      alt: "cleaning",
    },
    {
      name: "Uya Tanaka",
      role: "調理部 - 手を洗わずに寿司を握る",
      avatar:
        "https://pbs.twimg.com/profile_images/1612846084396830720/bGetsRdL_400x400.jpg",
      alt: "chef",
    },
    {
      name: "Umpoko Maru",
      role: "なわとび部 - いいね欄の監査役も兼任",
      avatar:
        "https://pbs.twimg.com/profile_images/1605738235652476928/dZCG-3VB_400x400.png",
      alt: "nawatobi",
    },
  ];

  return (
    <div>
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>
      <div className="container people">
        <h2 className="main-title about-h2">工房経営者</h2>
        <div className="people-row">
          {people.map((person, index) => {
            return (
              <div className="person-card" key={index}>
                <div className="person-avatar">
                  <img src={person.avatar} alt={person.alt} />
                </div>
                <h3 className="person-name">{person.name}</h3>
                <p className="person-desc">{person.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default People;
