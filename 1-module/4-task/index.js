function checkSpam(str) {
  let b = str.toLowerCase();

  if(-1 !== b.indexOf('1xBet'.toLowerCase()) || -1 !== b.indexOf('XXX'.toLowerCase())) {
      return true;
  } else {
      return false;
  }
}