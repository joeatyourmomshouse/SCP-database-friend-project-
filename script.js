function typingEffect(text, callback) {
  let i = 0;
  output.textContent = '';
  const typeSound = document.getElementById("typeSound");

  const totalDuration = 5000; // 5 seconds
  const intervalTime = Math.floor(totalDuration / text.length); // time per character

  const interval = setInterval(() => {
    output.textContent += text[i];
    if (!text[i].match(/\s/)) {
      typeSound.currentTime = 0;
      typeSound.play();
    }
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, intervalTime);
}
