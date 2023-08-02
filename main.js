let Selecionou = [];

        function clicar(element) {
            const DataSelecionada = parseInt(element.textContent);

            if (Selecionou.length < 2) {
                Selecionou.push(DataSelecionada);
                element.classList.add("corSelecionada");
            }

            if (Selecionou.length === 2) {
                clicado();
            }
        }

        function clicado() {
            const resultado = document.getElementById("resultado");
            resultado.textContent = "📌 Você selecionou os dias: " + Selecionou.join(" e ") + " 📌";
        }

        function atualizarCalendario() {
            location.reload();
        }