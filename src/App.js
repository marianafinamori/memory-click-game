import React, { Component } from 'react';
import './App.css';
import Icons from "./components/Icons"
import Header from "./components/Header";


class App extends Component {
  state = {
    score: 0,
    topScore: 5,
    message: 'Click a style icon to get points. When you hit the Top Score you win, but if you click an image more than once you lose.',

    icons: [
      {
        id: 1,
        name: "kate moss",
        src: "https://vg-images.condecdn.net/image/q75qx29bYMM/crop/1620/f/003-kate-moss-vogue-int-credit-mario-sorrenti-phaidon.jpg",
        clicked: false
      },
      {
        id: 12,
        name: "alfie allen",
        src: "https://pmcdeadline2.files.wordpress.com/2018/06/alfie-allen.jpg?w=681&h=383&crop=1",
        clicked: false
      },
      {
        id: 9,
        name: "freja beha",
        src: "https://cdn.pursuitist.com/wp-content/uploads/2011/09/51856-800w.jpg",
        clicked: false
      },
      {
        id: 2,
        name: "alexa chung",
        src: "https://media.timeout.com/images/100660977/630/472/image.jpg",
        clicked: false
      },
      {
        id: 3,
        name: "jean michel basquiat",
        src: "https://cdn.theatlantic.com/assets/media/img/2018/06/04/BOB_Metcalf_Basquiat_lead/1920.jpg?1528416882",
        clicked: false
      },
      {
        id: 4,
        name: "david bowie",
        src: "https://media.pitchfork.com/photos/5cc32f2ffa43fd0cac066e3e/2:1/w_790/David-Bowie.jpg",
        clicked: false
      },
      {
        id: 5,
        name: "kurt cobain",
        src: "https://anotherimg-dazedgroup.netdna-ssl.com/933/azure/another-prod/290/8/298193.jpg",
        clicked: false
      },
      {
        id: 6,
        name: "dylan rieder",
        src: "http://www.thrashermagazine.com/imagesV2/Features/2014/SOTY_Contenders_WEB/DylanRieder.jpg",
        clicked: false
      },
      {
        id: 7,
        name: "camille rowe",
        src: "https://i.dailymail.co.uk/i/pix/2012/07/13/article-2173298-140D6818000005DC-274_634x501.jpg",
        clicked: false
      },
      {
        id: 8,
        name: "clemence poesy",
        src: "https://www.theplace2.ru/cache/archive/clemence_poesy/img/37-4-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg",
        clicked: false
      },
      {
        id: 10,
        name: "geraldine chaplin",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7lfYFPyA_g0Z4J2mkb5NpGcFfELPtETvwKK12lEMgA_OG8IvRw",
        clicked: false
      },
      {
        id: 11,
        name: "caroline de maigret",
        src: "https://i.ytimg.com/vi/WvCEYkNu1_I/maxresdefault.jpg",
        clicked: false
      }
    ]
  }

  start = (event) => {
    window.location.reload();
  }

  changeClickedStatus = (id) => {
    console.log(id)
    const { score } = this.state;
    if (score < 5) {
      // console.log("working?")
      const icons = this.state.icons.map(icon => {
        if (icon.id === id && icon.clicked === false) {
          icon.clicked = true
          // score = this.state.score + 1
          this.setState({ score: this.state.score + 1})
          this.setState({message: " "})
          // console.log(icon)
          // console.log(score)
        } else if (icon.id === id && icon.clicked === true) {
          // console.log("You lost. You clicked " + icon.name.toUpperCase() + " twice")
          this.setState({ message: "You lost. You clicked " + icon.name.toUpperCase() + " twice"})
          this.setState({ score: 0})
          const iconsReset = this.state.icons.map(icon => {
            icon.clicked = false;
          })
          
         
          console.log(score)
        }
        return icon
      });

      this.setState({ icons }, () => this.shuffle());

      // example:
      // this.setState({ score });
      // this.setState({ topScore: 100 });
      // this.setState({ score: 1, topScore: 100, message: 'New message' });
    } else if (score === 5) {
      this.setState({ message: "You won"})
      this.setState({ score: 0})
      const icons = this.state.icons.map(icon => {
        icon.clicked = false;
      })
    }

  }

 
//Function that will shuffle an array
  shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  //Function that will take the icons array, make a copy of it and shuffle the copy,
  //then the shuffled copy will be set as value of the icons array 
  shuffle = () => {
    const { icons } = this.state;
    const shuffledIcons = this.shuffleArray([...icons]);
    console.log('SHUFFLE: ', shuffledIcons);
    this.setState({ icons: shuffledIcons });
  }

  render() {
    console.log(this.state.icons)

    return (
      <div className="app">
        <Header score={this.state.score} topScore={this.state.topScore} message={this.state.message} start={this.start}/>
        <div className="container main-container">
          <div className="row justify-content-around"> 
          <Icons icons={this.state.icons} changeClickedStatus={this.changeClickedStatus} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
