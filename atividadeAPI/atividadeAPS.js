function buscarISBN() {
    const isbn = document.getElementById("isbn").value;

    // URL da API ViaCEP
    const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`;

    // Faz a requisição à API
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.erro) {
                alert("ISBN não encontrado.");
                document.getElementById("isbn").value = "";
                document.getElementById("autor").value = "";
                document.getElementById("titulo").value = "";
                document.getElementById("ano").value = "";
                return;
            }

            // Preenche os campos com os dados da API
            document.getElementById("isbn").value = data.isbn;
            document.getElementById("autor").value = data.authors;
            document.getElementById("titulo").value = data.title;
            document.getElementById("ano").value = data.year;
        })
        .catch((error) => {
            console.error(error);
            alert("Erro ao buscar o ISBN. Tente novamente mais tarde.");
        });

    }