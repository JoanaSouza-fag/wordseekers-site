import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface City { name: string; tag: string; image: string; description: string; }
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  menuOpen = signal(false);
  activeFaq = signal<number | null>(null);
  selectedCity = signal(0);
  quizIndex = signal(0);
  quizAnswer = signal<number | null>(null);
  quizScore = signal(0);
  quizDone = signal(false);
  quizQuestions = [{"q": "Como se diz “livro” em inglês?", "options": ["Book", "Chair", "Door", "Table"], "correct": 0, "explain": "Book significa livro."}, {"q": "Qual é a tradução de “Good morning”?", "options": ["Boa noite", "Bom dia", "Até logo", "Obrigado"], "correct": 1, "explain": "Good morning significa bom dia."}, {"q": "Qual pronome significa “ela”?", "options": ["He", "They", "She", "We"], "correct": 2, "explain": "She significa ela."}, {"q": "Qual é o oposto de “hot”?", "options": ["Big", "Cold", "Happy", "Fast"], "correct": 1, "explain": "Cold significa frio."}];
  selectCity(i: number) { this.selectedCity.set(i); }
  chooseAnswer(i: number) {
    if (this.quizAnswer() !== null || this.quizDone()) return;
    this.quizAnswer.set(i);
    if (i === this.quizQuestions[this.quizIndex()].correct) this.quizScore.update(s => s + 1);
  }
  nextQuiz() {
    if (this.quizIndex() + 1 >= this.quizQuestions.length) this.quizDone.set(true);
    else { this.quizIndex.update(i => i + 1); this.quizAnswer.set(null); }
  }
  resetQuiz() { this.quizIndex.set(0); this.quizAnswer.set(null); this.quizScore.set(0); this.quizDone.set(false); }
  email = '';
  submitted = signal(false);
  cities: City[] = [
  {
    "name": "Colchester",
    "tag": "Descobertas",
    "image": "colchester_atual.webp",
    "description": "Explore Colchester e encontre novos caminhos para aprender."
  },
  {
    "name": "Cambridge",
    "tag": "Conhecimento",
    "image": "cambridge_atual.webp",
    "description": "Visite Cambridge e sua universidade para aprender inglês."
  },
  {
    "name": "Birmingham",
    "tag": "No mapa",
    "image": "world.webp",
    "description": "Ponto de viagem presente no mapa-múndi; utiliza atualmente um cenário compartilhado."
  },
  {
    "name": "Nottingham",
    "tag": "Aventura",
    "image": "nottingham_atual.webp",
    "description": "Explore Nottingham e descubra seus cenários históricos."
  },
  {
    "name": "York",
    "tag": "História",
    "image": "york_atual.webp",
    "description": "Visite York e descubra sua cidade histórica."
  },
  {
    "name": "Newcastle",
    "tag": "Exploração",
    "image": "newcastle_atual.webp",
    "description": "Explore Newcastle e descubra sua região."
  },
  {
    "name": "Manchester",
    "tag": "Exploração",
    "image": "manchester_atual.webp",
    "description": "Explore Manchester em sua própria cena do jogo."
  },
  {
    "name": "Liverpool",
    "tag": "Porto histórico",
    "image": "liverpool_atual.webp",
    "description": "Conheça o Royal Albert Dock de Liverpool."
  },
  {
    "name": "Stratford-upon-Avon",
    "tag": "Literatura",
    "image": "stratford_atual.webp",
    "description": "Visite a cidade de Shakespeare e seus lugares históricos."
  },
  {
    "name": "Oxford",
    "tag": "No mapa",
    "image": "world.webp",
    "description": "Ponto de viagem presente no mapa-múndi; utiliza atualmente um cenário compartilhado."
  },
  {
    "name": "London",
    "tag": "No mapa",
    "image": "world.webp",
    "description": "Ponto de viagem presente no mapa-múndi; utiliza atualmente um cenário compartilhado."
  },
  {
    "name": "Canterbury",
    "tag": "História",
    "image": "canterbury_atual.webp",
    "description": "Explore a cidade histórica de Canterbury."
  },
  {
    "name": "Salisbury",
    "tag": "Exploração",
    "image": "salisbury_atual.webp",
    "description": "Descubra Salisbury, sua catedral e Stonehenge."
  },
  {
    "name": "Winchester",
    "tag": "História",
    "image": "winchester_atual.webp",
    "description": "Explore Winchester e o Grande Salão."
  },
  {
    "name": "Bath",
    "tag": "Patrimônio",
    "image": "bath_atual.webp",
    "description": "Explore Bath e seus cenários históricos."
  },
  {
    "name": "Plymouth",
    "tag": "No mapa",
    "image": "world.webp",
    "description": "Ponto de viagem presente no mapa-múndi; utiliza atualmente um cenário compartilhado."
  }
];
  faqs = [
    {q:'O que é WordSeekers?',a:'É um projeto de jogo educativo 2D em estilo RPG que combina exploração com atividades de aprendizagem da língua inglesa.'},
    {q:'Para quem o jogo foi pensado?',a:'A proposta é voltada principalmente a estudantes do 6º ao 8º ano do ensino fundamental.'},
    {q:'O jogo já está disponível para baixar?',a:'O WordSeekers está em desenvolvimento. Este site apresenta o universo e a proposta do projeto.'},
    {q:'Quais habilidades são trabalhadas?',a:'Vocabulário, interpretação, diálogos básicos e reconhecimento de expressões em inglês, por meio de desafios.'}
  ];
  toggleFaq(i:number){ this.activeFaq.set(this.activeFaq()===i?null:i); }
  closeMenu(){ this.menuOpen.set(false); }
  submitInterest(){ if(this.email.trim()) this.submitted.set(true); }
}
