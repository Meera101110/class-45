class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/bg.png", "game title");
    this.greeting = createElement("h2");
    this.instructions = createElement("h4");
  }

  setElementsPosition() {
    this.titleImg.position(120, 100);
    this.input.position(width / 2 - 210, height / 2 + 100);
    this.playButton.position(width / 2 - 200, height / 2 + 200);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    this.instructions.position(width/2+50, height/2);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    this.instructions.class("instruction");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
    });
  }

  display() {
    var inst = `1.Enter your name .</br>
2.press on play</br>
3.Press Up Arrow key to start`;
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    this.instructions.html(inst);
  }
}
