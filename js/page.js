
function firstPick() {
  var init = "svg/mystery.svg";
  document.getElementById('o-img').src = init;
}
function pickRock() {
  function cPick() {
    var pick = "svg/mystery.svg";
    if (Math.floor(Math.random() * 3) == 2) {
      var pick = "svg/rock.svg";
    } else if (Math.floor(Math.random() * 3) == 1) {
      var pick = "svg/paper.svg";
    } else {
      var pick = "svg/scissors.svg";
    }
    document.getElementById('o-img').src = pick;
    document.getElementById('totgames').innerHTML++;
    if (pick == "svg/rock.svg") {
      document.getElementById('result').innerHTML = "It's a Tie";
    } else if (pick == "svg/paper.svg") {
      document.getElementById('result').innerHTML = "You Lose";
      document.getElementById('oscore').innerHTML++;
    } else {
      document.getElementById('result').innerHTML = "You Win!";
      document.getElementById('pscore').innerHTML++;

    }
}
  cPick();
}

function pickPaper() {
  function cPick() {
    var pick = "svg/mystery.svg";
    if (Math.floor(Math.random() * 3) == 2) {
      var pick = "svg/rock.svg";
    } else if (Math.floor(Math.random() * 3) == 1) {
      var pick = "svg/paper.svg";
    } else {
      var pick = "svg/scissors.svg";
    }
    document.getElementById('o-img').src = pick;
    document.getElementById('totgames').innerHTML++;
    if (pick == "svg/paper.svg") {
      document.getElementById('result').innerHTML = "It's a Tie";
    } else if (pick == "svg/scissors.svg") {
      document.getElementById('result').innerHTML = "You Lose";
      document.getElementById('oscore').innerHTML++;
    } else {
      document.getElementById('result').innerHTML = "You Win!";
      document.getElementById('pscore').innerHTML++;
    }
  }
  cPick();
}

function pickScissors() {
  function cPick() {
    var pick = "svg/mystery.svg";
    if (Math.floor(Math.random() * 3) == 2) {
      var pick = "svg/rock.svg";
    } else if (Math.floor(Math.random() * 3) == 1) {
      var pick = "svg/paper.svg";
    } else {
      var pick = "svg/scissors.svg";
    }
    document.getElementById('o-img').src = pick;
    document.getElementById('totgames').innerHTML++;
    if (pick == "svg/scissors.svg") {
      document.getElementById('result').innerHTML = "It's a Tie";
    } else if (pick == "svg/rock.svg") {
      document.getElementById('result').innerHTML = "You Lose";
      document.getElementById('oscore').innerHTML++;
    } else {
      document.getElementById('result').innerHTML = "You Win!";
      document.getElementById('pscore').innerHTML++;
    }
  }
  cPick();
}
