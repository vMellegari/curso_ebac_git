function Jogos(nome, generoGame, desenvolvedora) {
    this.nome = nome;
    this.generoGame = generoGame;
    this.desenvolvedora = desenvolvedora;
}

function SinglePlayerGame(nome, generoGame, desenvolvedora, horasGameplay) {
    Jogos.call(this, nome, generoGame, desenvolvedora);
    this.horasGameplay = horasGameplay;
}

function MultiPlayerGame(nome, generoGame, desenvolvedora, quantJogadores, crossPlay) {
    Jogos.call(this, nome, generoGame, desenvolvedora);
    this.quantJogadores = quantJogadores;
    this.crossPlay = crossPlay;
}

const AC = new SinglePlayerGame("Assassin's Creed", "Ação e Aventura", "Ubisoft", 50);
const RE = new SinglePlayerGame("Resident Evil", "Survival horror", "Capcom", 30);
const AWO = new MultiPlayerGame("A Way Out", "Aventura", "Hazelight Studios", 2, "Sim");
const RL = new MultiPlayerGame("Rocket League", "Esporte", "Psyonix", "MultiJogadores", "Sim");
const BDO = new MultiPlayerGame("Black Desert Online", "MMORPG", "Pearl Abyss","MultiJogadores", "Nao");

console.log(AC);
console.log(RE);
console.log(AWO);
console.log(RL);
console.log(BDO);