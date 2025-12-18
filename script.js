const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const title = document.getElementById('modal-title');
const text = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

const procedimentos = {
  toxina: {
    title: "Toxina Botulínica",
    text: "Reduz linhas de expressão e rugas, proporcionando um aspecto mais jovem e descansado."
  },
  labial: {
    title: "Preenchimento Labial",
    text: "Realça o volume e o contorno dos lábios com naturalidade."
  },
  limpeza: {
    title: "Limpeza de Pele",
    text: "Remove impurezas, controla a oleosidade e melhora a textura da pele."
  },
  acne: {
    title: "Tratamento para Acne",
    text: "Protocolos personalizados para controle da acne e prevenção de marcas."
  },
  estrias: {
    title: "Tratamento para Estrias",
    text: "Estimula a regeneração da pele e melhora a aparência das estrias."
  },
  peeling: {
    title: "Peeling Químico",
    text: "Renovação celular que melhora manchas, textura e viço da pele."
  },
  microagulhamento: {
    title: "Microagulhamento",
    text: "Estimula colágeno, melhora cicatrizes, manchas e linhas finas."
  },
  skinbooster: {
    title: "Skinbooster",
    text: "Hidratação profunda para uma pele mais luminosa e saudável."
  },
  massagem: {
    title: "Massagem Modeladora",
    text: "Auxilia na redução de medidas e melhora da circulação."
  },
  microvasos: {
    title: "PEIM secagem de microvasos",
    text: "Tratamento para eliminar pequenos vasos sanguíneos."
  },
  gorduralocalizada: {
    title: "Intradermoterapia para gordura localizada",
    text: "Aplicação de enzimas para reduzir a gordura localizada."
  },
  clareamento: {
    title: "Clareamento de áreas íntimas",
    text: "Remover excesso de melanina e uniformizar a tonalidade da pele."
  }
};

cards.forEach(card => {
  card.addEventListener('click', () => {
    const tipo = card.dataset.procedimento;

    if (!procedimentos[tipo]) return;

    title.textContent = procedimentos[tipo].title;
    text.textContent = procedimentos[tipo].text;
    modal.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
