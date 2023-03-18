import React from "react";


function About() {
    const imageUrl = `${process.env.PUBLIC_URL}/about.jpg`;

    return (
      <div>
        <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>
        <div className="container about">
            <div className="row">
                <div className="about-image-container">
                    <img alt="about" src={imageUrl} className="about-image"/>
                </div>
                <div className="col-md-6">
                    <h2 className="main-title about-h2">Maocha工房とは</h2>
                    <p className="main-p">
                    Maocha工房は、創業以来40年以上にわたって、地元会津若松で工業製品を販売してきた信頼と実績のある企業です。
                    私たちは、お客様の健康と幸福を第一に考え、良質な商品と親切なサービスを提供することを使命としています。
                    また、社員一同、会津若松の地域社会に貢献するための活動にも力を注いでいます。
                    これからも、お客様に喜ばれる商品やサービスを提供し、社会に貢献していくことを目指してまいります。
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
}
export default About;