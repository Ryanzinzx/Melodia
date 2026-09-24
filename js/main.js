const menu = document.getElementById('menu');

window.addEventListener('scroll', () => {
  menu.classList.toggle('nav-rolagem', window.scrollY > 24);
});

const btnOuvir = document.getElementById('btn-ouvir');

const melodia = [440, 523.25, 659.25, 523.25, 440, 392, 440, 523.25];

let audio = null;     
let intervalo = null; 
let passo = 0;        
let tocando = false;

function tocarSom(tipo, frequencia, duracao, volume) {
  const oscilador = audio.createOscillator();
  const ganho = audio.createGain();

  oscilador.type = tipo;
  oscilador.frequency.value = frequencia;
  ganho.gain.setValueAtTime(volume, audio.currentTime);
  ganho.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + duracao); // volume cai até sumir

  oscilador.connect(ganho);
  ganho.connect(audio.destination);
  oscilador.start();
  oscilador.stop(audio.currentTime + duracao);
}

function tocarPasso() {
  tocarSom('triangle', melodia[passo % melodia.length], 0.4, 0.2);

  if (passo % 2 === 0) {
    tocarSom('sine', 60, 0.25, 0.8);      
  } else {
    tocarSom('square', 6000, 0.05, 0.03); 
  }

  passo++;
}

btnOuvir.addEventListener('click', () => {
  if (audio === null) {
    audio = new AudioContext();
  }

  tocando = !tocando;

  if (tocando) {
    tocarPasso();
    intervalo = setInterval(tocarPasso, 300);
  } else {
    clearInterval(intervalo);
  }

  document.body.classList.toggle('tocando', tocando);
  btnOuvir.innerHTML = tocando
    ? '<i class="fa-solid fa-pause"></i> Pausar'
    : '<i class="fa-solid fa-play"></i> Ouvir Agora';
});

const form = document.getElementById('form-contato');
const msgForm = document.getElementById('msg-form');

form.addEventListener('submit', (evento) => {
  evento.preventDefault(); 

  const nome = document.getElementById('nome').value;
  msgForm.textContent = `Cadastro feito, ${nome}! Você vai receber as novidades.`;
  form.reset();
});
