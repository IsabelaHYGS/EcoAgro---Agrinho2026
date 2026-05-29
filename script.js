document.getElementById('agroForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const area = parseFloat(document.getElementById('area').value);
    const producao = parseFloat(document.getElementById('producao').value);
    const manejo = document.getElementById('manejo').value;

    const produtividade = (producao / area).toFixed(2);

    let scoreSustentabilidade = 0;
    let pegadaCarbono = '';
    let mensagemFeedback = '';

    if (manejo === 'convencional') {
        scoreSustentabilidade = Math.min(40 + (produtividade * 2), 60); 
        pegadaCarbono = 'Alta (Uso intenso de combustíveis e sintéticos)';
        mensagemFeedback = '⚠️ Seu agro é produtivo, mas o ecossistema está sobrecarregado. Tente adotar o plantio direto ou bioinsumos para equilibrar a balança!';
    } else if (manejo === 'intermediario') {
        scoreSustentabilidade = Math.min(65 + (produtividade * 2), 85);
        pegadaCarbono = 'Moderada/equilibrada';
        mensagemFeedback = '🌱 Bom trabalho! Suas práticas de rotação já ajudam a reter nutrientes. Pequenos ajustes em tecnologia de precisão te levarão ao topo.';
    } else if (manejo === 'sustentavel') {
        scoreSustentabilidade = Math.min(80 + (produtividade * 2), 100);
        pegadaCarbono = 'Baixa (Sequestro ativo de carbono no solo)';
        mensagemFeedback = '🏆 Excelente! Você prova que o agro é forte e sustentável. Sua propriedade é um modelo de equilíbrio entre produção e meio ambiente.';
    }

    scoreSustentabilidade = Math.round(scoreSustentabilidade);

    document.getElementById('resProdutividade').innerText = produtividade;
    document.getElementById('resCarbono').innerText = pegadaCarbono;
    document.getElementById('resScore').innerText = scoreSustentabilidade + '%';
    
    document.getElementById('FeedbackMensagem').innerText = mensagemFeedback;

    const feedbackBox = document.getElementById('FeedbackMensagem');
    if (scoreSustentabilidade < 60) {
        feedbackBox.style.color = '#b71c1c'; 
    } else if (scoreSustentabilidade < 85) {
        feedbackBox.style.color = '#e65100';
    } else {
        feedbackBox.style.color = '#1b5e20'; 
    }

    document.getElementById('resultado').classList.remove('hidden');
    
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
});
