// add solution here


function theBeatlesPlay(musicians, instruments) {
  var MusiciansPlay = [];
  for (var i = 0; i < musicians.length; i++) {
    MusiciansPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return MusiciansPlay;
}

function johnLennonFacts(arr1) {
  var i = 0;
  var jLFacts = [];
  while (i < arr1.length) {
    jLFacts.push(arr1[i] + '!!!');
    i++;
  }
  return jLFacts;
}

function iLoveTheBeatles(n) {
  var arr2 = [];
  do {arr2.push('I love the Beatles!');
    n++;
  }
  while (n < 15);
  return arr2;
}
