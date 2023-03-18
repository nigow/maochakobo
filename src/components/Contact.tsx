import React from "react";


function Contact() {
    const inputLink = "https://www.youtube.com/watch?v=F-LH1A3bwlA&ab_channel=AimerOfficialYouTubeChannel"
    return (
      <div className="container contact">
        <h2 className="main-title text-center">お問い合わせ</h2>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-1">
              <input name="name" placeholder="お名前" className="contact-input" />
            </div>
  
            <div className="col-md-4 mb-1">
              <input name="email" placeholder="メールアドレス" className="contact-input" />
            </div>
            <div className="col-md-4 mb-1">
              <input
                name="subject"
                placeholder="件名"
                className="contact-input"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-12">
        <textarea
              name="message"
              placeholder="内容"
              className="contact-textarea"
            />
        </div>
  
        <br></br>
        <div className="row">
          <div className="col-md-12">
            <a href={inputLink} target="_blank">
                <input className="form-btn" type="submit" value="Send Message" />
            </a>
          </div>
        </div>
      </div>
    );
  }
  export default Contact;