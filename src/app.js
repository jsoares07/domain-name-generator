/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "internet", "sergio"];
let com = [".com", ".net", ".us", ".es", ".io", ".pt"];

// const dmgenerator = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < com.length; l++) {
        let extWithoutTheDot = com[l].slice(1);

        if (noun[k].slice(-extWithoutTheDot.length) == extWithoutTheDot) {
          console.log(
            pronoun[i] +
              adj[j] +
              noun[k].slice(0, noun[k].length - extWithoutTheDot.length) +
              com[l]
          );
        } else {
          console.log(pronoun[i] + adj[j] + noun[k] + com[l]);
        }
      }
    }
  }
}
