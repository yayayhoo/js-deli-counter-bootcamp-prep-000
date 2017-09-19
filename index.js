function takeANumber(katzDeli, name){
  katzDeli.push(name);
  var i = katzDeli.indexOf(name) + 1;
  var senten = "Welcome, "+name+". You are number "+i+" in line.";
  return senten;
}

function nowServing(array) {
  var messa;
  if (array[0] == undefined) {
    messa = "There is nobody waiting to be served!";
  }
  else {
    messa = "Currently serving " + array[0] +'.';
    array.shift();
  }
  return messa;
}

function currentLine(line) {
  var messa;
  if (line[0] == undefined){
    messa = "The line is currently empty.";
    return messa;
  }
  messa = "The line is currently: ";
  for (var i = 0; i < line.length; ) {
    if (i == line.length-1) {
      messa += ++i +". "+ line[i] +"";

    }
    messa += ++i +". "+ line[i] +", ";
  }
  return messa;
}
