import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import ImgCard from "./components/ImgCard";
import imglist from "./components/img.json";

class App extends Component {
  state = {
    imglist: imglist,
    guessed: [],
    score: 0
  };

  /**
   * Removes all points and clicked boxes, resetting the game back to its original state
   * imglist: the list of images to click from
   * guessed: the array of clicked IDs
   * score: the number of boxes clicked without repeats
   */
  resetGame = () => {
    this.setState({
      imglist: imglist,
      guessed: [],
      score: 0
    });
  };

  /**
   * When a box is clicked, check the ID against the array of clicked
   * IDs (this.state.guessed). If the box has not been clicked, log
   * it and update the score.
   *
   * If the box has been clicked, alert the player and reset the game.
   */
  clickBox = id => {
    let currguessed = this.state.guessed;
    let score = this.state.score;

    if (currguessed.indexOf(id) === -1) {
      currguessed.push(id);
      score++;

      this.setState({
        guessed: currguessed,
        score: score
      });
    } else {
      alert("Too bad! You lose!");
      this.resetGame();
    }
  };

  /**
   * Render the page to be shown. Include:
   *  the header, with the current score
   *  the instructions for how to play
   *  a loop through the image list, mapping each image onto the page
   */
  render() {
    return (
      <div className="App">
        <Header score={this.state.score} />
        <Instructions />
        <div className="imgwrap">
          {this.state.imglist.map(img => (
            <ImgCard
              id={img.id}
              key={img.id}
              name={img.name}
              image={img.image}
              clickBox={this.clickBox}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
