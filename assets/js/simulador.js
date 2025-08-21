function enviarWhatsApp() {
    const form = document.getElementById("loanForm");

    // validação nativa HTML5
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // capturar dados
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const tipo = document.getElementById("tipo").value;
    const valor = document.getElementById("valor").value;
    const parcelas = document.getElementById("parcelas").value;

    // montar mensagem
    const mensagem = `Olá, gostaria de simular um empréstimo:%0A
    • *Nome:* ${nome}%0A
    • *Telefone:* ${telefone}%0A
    • *E-mail:* ${email}%0A
    • *Tipo:* ${tipo}%0A
    • *Valor desejado*: R$${valor}%0A
    • *Parcelas:* ${parcelas}`;

    // número do admin (exemplo)
    const numeroAdmin = "5562982147845"; 

    // link personalizado
    const url = `https://wa.me/${numeroAdmin}?text=${mensagem}`;

    window.open(url, "_blank");
  }