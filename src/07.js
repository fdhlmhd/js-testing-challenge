function repeatLetter(text, times = 1) {
  const pecah = [...text];
  const result = [];
  pecah.forEach(e => {
    result.push(e.repeat(times));
  });
  return result.join("").replace(' ','');
}

module.exports= repeatLetter;