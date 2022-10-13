var job = document.getElementById('job');

var typewriter = new Typewriter(job, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('I\'m Photographer')
  .pauseFor(300)
  .deleteChars(20)
  .typeString('<strong>I\'m designer</strong>  ')
  .typeString('<strong> <span style="color: #27ae60;">I\'m developer</span></strong>')
  .pauseFor(1000)
  .start(2);