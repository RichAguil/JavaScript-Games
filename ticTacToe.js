var mark = "X";
var turn = 0;
var h3 = document.querySelector("h3");
var boxArray = [];
var s1, s2, s3, s4, s5, s6, s7, s8, s9;

function clicked(clickedBox) {
  var selectedBox = document.querySelector("#" + clickedBox);
  var h3 = document.querySelector("h3");
  if (turn%2 === 0) {
    mark = "X";
  } else {
    mark = "O";
  };
  h3.textContent = mark + "'s turn";
  if (selectedBox.textContent === "X") {
    selectedBox.textContent = "X";
  } else if (selectedBox.textContent === "O") {
    selectedBox.textContent = "O";
  } else {
    selectedBox.textContent = mark;
    turn++;
  };
  if (turn%2 === 0) {
    mark = "X";
  } else {
    mark = "O";
  };
  h3.textContent = mark + "'s turn";
  boxArray[turn - 1] = organizer("#" + selectedBox.getAttribute('id'));
  console.log(boxArray[turn-1]);
  if (turn >= 3) {
    checkVictory(boxArray);
  };
};

function organizer(elementID) {
  switch (elementID) {
    case "#topLeft":
        s1 = document.querySelector("#topLeft").textContent;
        return s1;
        break;
    case "#topCenter":
        s2 = document.querySelector("#topCenter").textContent;
        return s2;
    case "#topRight":
        s3 = document.querySelector("#topRight").textContent;
        return s3;

    case "#middleLeft":
        s4 = document.querySelector("#middleLeft").textContent;
        return s4;
    case "#middleCenter":
        s5 = document.querySelector("#middleCenter").textContent
        return s5;
    case "#middleRight":
        s6 = document.querySelector("#middleRight").textContent;
        return s6;

    case "#bottomLeft":
        s7 = document.querySelector("#bottomLeft").textContent;
        return s7;
    case "#bottomCenter":
        s8 = document.querySelector("#bottomCenter").textContent;
        return s8;
    case "#bottomRight":
        s9 = document.querySelector("#bottomRight").textContent;
        return s9;
  }
};

function checkVictory (boxArray) {
  for (var i = 0; i < boxArray.length; i++) {
    if (s1 === s2 & s2 === s3 && s1 != undefined) {
      h3.textContent = s1 + " has won!";
      $("td").prop('onclick', null).off('click');
    } else if (s4 === s5 && s5 == s6 && s4 != undefined) {
      h3.textContent = s4 + " has won!";
      $("td").prop('onclick', null).off('click');
    } else if (s7 === s8 && s8 === s9 && s7 != undefined) {
      h3.textContent = s7 + " has won!";
      $("td").prop('onclick', null).off('click');
    } else if (s1 === s4 && s4 === s7 && s1 != undefined) {
      h3.textContent = s1 + " has won!";
      $("td").prop('onclick', null).off('click');
    } else if (s2 === s5 && s5 === s8 && s2 != undefined) {
      h3.textContent = s2 + " has won!";
      $("td").prop('onclick', null).off('click');
    } else if (s3 === s6 && s6 === s9 && s3 != undefined) {
      h3.textContent = s3 + " has won!";
      $("td").prop('onclick', null).off('click');
    } else if (s1 === s5 & s5 === s9 && s1 != undefined) {
      h3.textContent = s1 + " has won!";
      $("td").prop('onclick', null).off('click');
    } else if (s3 === s5 && s5 === s7 && s3 != undefined) {
      h3.textContent = s3 + " has won!";
      $("td").prop('onclick', null).off('click');
    } else if (boxArray.length === 9) {
      h3.textContent = "It's a draw!";
    };
  };
};
