import React, {Component} from 'react';
import FrontHero from '../../components/FrontHero/FrontHero';
import NewsBox from '../../components/NewsBox/NewsBox';
import Footer from '../../components/Footer/Footer';
import picture from './title.png';


const style = {
  margin: 'auto',
  maxWidth: '72em'
}

const home = class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [{
        title: "Introducing Poly API",
        summary: "The Poly API enables your application to find and import 3D assets easily and directly from the Poly library. The REST API is available for any platform. If you're building on top of Unity or Unreal Engine make sure to check out the Poly Toolkit, which will make your workflow even more efficient.",
        button: "Learn more",
        picture: picture
      },
      {
        title: "Introducing Poly API",
        summary: "The Poly API enables your application to find and import 3D assets easily and directly from the Poly library. The REST API is available for any platform. If you're building on top of Unity or Unreal Engine make sure to check out the Poly Toolkit, which will make your workflow even more efficient.",
        button: "Learn more",
        picture: picture
      },
      {
        title: "Introducing Poly API",
        summary: "The Poly API enables your application to find and import 3D assets easily and directly from the Poly library. The REST API is available for any platform. If you're building on top of Unity or Unreal Engine make sure to check out the Poly Toolkit, which will make your workflow even more efficient.",
        button: "Learn more",
        picture: picture
      },
      {
        title: "Introducing Poly API",
        summary: "The Poly API enables your application to find and import 3D assets easily and directly from the Poly library. The REST API is available for any platform. If you're building on top of Unity or Unreal Engine make sure to check out the Poly Toolkit, which will make your workflow even more efficient.",
        button: "Learn more",
        picture: picture
      }]}
  }


  render() {
    let { news } = this.state;
    return (
      <div className="Home">
          <FrontHero />
          <section class="section">
            <h1 class="subtitle is-2">
              News
            </h1>
              <div class="tile is-ancestor">
                {news.map((entry) => (
                    <NewsBox picture={entry.picture} title={entry.title} summary={entry.summary} button={entry.button} />
                ))}
              </div>
          </section>
          <Footer />
      </div>
    );
  }
}

export default home;