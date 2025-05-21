document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById("startScreen");
    const mainContent = document.getElementById("mainContent");
    const startBtn = document.getElementById("startBtn");

    // === Lógica para o botão "INICIAR" ===
    if (startBtn && startScreen && mainContent) {
        startBtn.addEventListener("click", () => {
            // Oculta a tela de início com uma transição de opacidade
            startScreen.style.opacity = '0';
            setTimeout(() => {
                startScreen.classList.add("content-hidden"); // Esconde definitivamente após a transição
            }, 500); // 500ms = 0.5s, igual à transição CSS

            // Exibe o conteúdo principal
            // Removendo a classe 'content-hidden' e adicionando 'content-visible'
            mainContent.classList.remove("content-hidden");
            // Para garantir que a transição de opacidade do mainContent ocorra,
            // pode ser necessário um pequeno delay ou defini-lo como 'block' antes de mudar a opacidade.
            // Para o caso de display: flex/block, remover a classe já deve funcionar.
            mainContent.style.opacity = '1'; // Garante que a opacidade esteja 1 para aparecer
            // Se mainContent for flex/block, o display já estará como tal ao remover a classe 'content-hidden'.

            // Opcional: Mostra o primeiro corte (Degradê) por padrão na seção "Cortes"
            openTab('degrade');
        });
    } else {
        console.error("Elementos iniciais (startBtn, startScreen ou mainContent) não encontrados. Verifique o HTML.");
    }


    // === Função para rolar suavemente para a seção clicada no menu ===
    // Esta função NÃO ESCONDE outras seções, apenas rola para a selecionada.
    window.showSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.warn(`Seção com ID '${id}' não encontrada.`);
        }
    };

    // === Função para controlar as sub-abas dentro da seção "Cortes" ===
    window.openTab = (tabId) => {
        const tabs = document.querySelectorAll(".tabcontent");
        tabs.forEach(tab => {
            tab.classList.add("content-hidden"); // Esconde todas as abas de corte
        });

        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.classList.remove("content-hidden"); // Mostra a aba de corte selecionada
            selectedTab.style.opacity = '1'; // Garante que a opacidade esteja 1 ao mostrar
            // Pode ser necessário ajustar o display aqui também, dependendo da sua necessidade
            // Ex: selectedTab.style.display = 'flex'; // Se .tabcontent for display: flex
        } else {
            console.warn(`Aba de corte com ID '${tabId}' não encontrada.`);
        }
    };

    // Opcional: Ao carregar a página (e antes de clicar em INICIAR),
    // você pode querer garantir que o mainContent esteja inicialmente oculto.
    // Isso já é feito com 'class="content-hidden"' no HTML.
    // Se por algum motivo mainContent estiver visível no carregamento,
    // adicione: mainContent.classList.add("content-hidden"); aqui.
});