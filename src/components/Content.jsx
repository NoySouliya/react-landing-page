import React from "react";
import "../styles/Content.css";
function Content() {
  return (
    <div className="container">
      <section className="content-con">
        <div className="content-l">
          <img
            src="https://cdn.pixabay.com/photo/2020/02/25/09/57/road-4878453__480.jpg"
            alt=""
          />
        </div>
        <div className="content-r">
          <h2>Some title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            atque, quae, provident, vitae eaque unde temporibus amet incidunt
            voluptate dolore pariatur accusantium molestiae est voluptas tenetur
            consequatur! Necessitatibus eos quidem fugit et
          </p>
        </div>
      </section>
      <section className="content-con">
        <div className="content-r">
          <h2>Some title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            atque, quae, provident, vitae eaque unde temporibus amet incidunt
            voluptate dolore pariatur accusantium molestiae est voluptas tenetur
            consequatur! Necessitatibus eos quidem fugit et
          </p>
        </div>
        <div className="content-l">
          <img
            src="https://cdn.pixabay.com/photo/2015/09/17/17/25/code-944499__340.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="content-con">
        <div className="content-l">
          <img
            src="https://cdn.pixabay.com/photo/2020/01/16/12/02/digitization-4770296__340.jpg"
            alt=""
          />
        </div>
        <div className="content-r">
          <h2>Some title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            atque, quae, provident, vitae eaque unde temporibus amet incidunt
            voluptate dolore pariatur accusantium molestiae est voluptas tenetur
            consequatur! Necessitatibus eos quidem fugit et
          </p>
        </div>
      </section>
    </div>
  );
}

export default Content;
