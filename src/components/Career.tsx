import React from "react";

function Career() {
  const imageUrl = `${process.env.PUBLIC_URL}/career.jpg`;

  return (
    <div>
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>
      <div className="container career">
        <div className="row">
          <div className="col-md-6">
            <h2 className="main-title about-h2">採用情報</h2>
            <p className="main-p">
              私たち株式会社Maocha工房は、新しい仲間を募集しています。私たちと一緒に、クリエイティブな活動を通じて多くのお客様に喜びと感動を提供しましょう。
            </p>
            <p className="main-p">
              月給：5~8万円（経験・能力に応じて変動あり）
            </p>
            <p className="main-p">福利厚生：なし</p>
            <p className="main-p">勤務地：会津若松本社</p>
            <p className="main-p">求める人物像：</p>
            <p className="main-p">
              <li>社長に逆らわない人</li>
              <li>365日いつでも出れる人</li>
              <li>休み無しでも働ける人</li>
              <li>辞めない人</li>
              <li>給料面に文句を言わない人</li>
            </p>
            <p className="main-p">
              私たちと一緒に働く方は、やる気と責任感があり、常に成長し続ける姿勢を持ち合わせている方を求めています。社長の考えに共感し、お客様に対する責任感を持って行動できる方を歓迎いたします。
            </p>
            <p className="main-p">
              勤務時間はフレキシブルに対応しますが、繁忙期には残業が発生することがあります。また、週休二日制や年次有給休暇はありませんが、給与は実績や成果に応じて査定いたします。
            </p>
          </div>
          <div className="img-fluid" style={{ margin: "3rem" }}>
            <img
              alt="career"
              src={imageUrl}
              className="img-fluid career-img"
              style={{ maxHeight: "80vh" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Career;
