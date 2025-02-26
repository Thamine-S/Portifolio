// Espera o documento HTML carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    function aplicarEfeitoHover(elementos) {
        elementos.forEach(elemento => {
            elemento.addEventListener('mouseover', () => {
                elemento.style.transform = 'scale(1.1)';
                elemento.style.transition = 'transform 0.2s ease';
            });
            elemento.addEventListener('mouseout', () => {
                elemento.style.transform = 'scale(1)';
            });
        });
    }

    // Aplica efeito hover aos botões principais
    const botoes = document.querySelectorAll('#botoes img');
    aplicarEfeitoHover(botoes);

    // Aplica efeito hover aos ícones de habilidades e contato
    const iconesHabilidades = document.querySelectorAll('#habilidades img');
    const iconesContato = document.querySelectorAll('footer img');
    aplicarEfeitoHover([...iconesHabilidades, ...iconesContato]);

    // Animação do cabeçalho (imagem e texto)
    const headerImagem = document.getElementById('header-imagem');
    const headerText = headerImagem.querySelector('div'); // Seleciona o div com o texto
    const profileImage = headerImagem.querySelector('img');

    headerText.style.opacity = 0; // Começa invisível
    profileImage.style.opacity = 0; // Começa invisível

    setTimeout(() => { // Espera um pouco antes de iniciar a animação
        headerText.style.opacity = 1;
        headerText.style.transform = 'translateY(0)'; // Começa na posição original
        headerText.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        profileImage.style.opacity = 1;
        profileImage.style.transform = 'translateY(0)'; // Começa na posição original
        profileImage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }, 500); // 500ms de delay


    // Animação das seções (fade in)
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0; // Começa invisível
        section.style.transform = 'translateY(20px)'; // Move um pouco para baixo

        window.addEventListener('scroll', () => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.8) { // Ajuste o valor (0.8) para controlar quando a animação ocorre
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)'; // Retorna à posição original
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }
        });
    });

    // Pop-ups
    const openPopupButtons = document.querySelectorAll('.open-popup');
    const closePopupButtons = document.querySelectorAll('.close-popup');
    const popups = document.querySelectorAll('.popup');

    openPopupButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.project;
            const popup = document.getElementById(`popup-${projectId}`);
            if (popup) {
                popup.style.display = 'block';
            }
        });
    });

    closePopupButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup'); // Encontra o pop-up pai
            if (popup) {
                popup.style.display = 'none';
            }
        });
    });

    // Fechar pop-up clicando fora do conteúdo
    popups.forEach(popup => {
        popup.addEventListener('click', (event) => {
            if (event.target === popup) { // Verifica se o clique foi no fundo do pop-up
                popup.style.display = 'none';
            }
            
        });

});
});

document.querySelectorAll(".box").forEach(box => {
    const color = box.getAttribute("data-color");
    box.style.setProperty("--box-gradient", color);
  }); 
