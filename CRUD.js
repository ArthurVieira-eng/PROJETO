const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log("Bem Vindo ao Menu");
  console.log("1. Criar usuário.");
  console.log("2. Logar com o usuário.");
  console.log("3. Atualizar o usuário.");
  console.log("4. Deletar o usuário.");
  console.log("5. Sair.");

  rl.question("Digite a opção desejada: ", (opcao) => {
    switch (opcao) {
      case "1":
        criarUsuario();
        break;

      case "2":
        logarUsuario();
        break;

      case "3":
        atualizarUsuario();
        break;

      case "4":
        deletarUsuario();
        break;

      case "5":
        console.log("Saindo. Obrigado por acessar.");
        rl.close();
        break;

      default:
        console.log("Opção inexistente");
        menu();
    }
  });
}
function criarUsuario() {
  console.log("Vamos criar seu perfil");
  rl.question("Digite seu nome: ", (nome) => {
    rl.question("Digite seu email: ", (email) => {
      rl.question("Digite seu cpf: ", (cpf) => {
        rl.question("Crie uma senha:", (senha) => {
          console.log("Usuário criado com sucesso!");
          menu();
        });
      });
    });
  });
}

function logarUsuario() {
  console.log(
    "Se vc ja tem uma conta, faça login. Preencha as perguntas abaixo para logar em seu perfil.",
  );
  rl.question("Digite seu nome de usuário: ", (nome) => {
    rl.question("Digite seu email: ", (email) => {
      rl.question("Digite seu cpf: ", (cpf) => {
        console.log("Login realizado com sucesso.");
        menu();
      });
    });
  });
}

function atualizarUsuario() {
  console.log("Vamos atualizar seu perfil");
  rl.question("Digite um novo nome: ", (nome) => {
    rl.question("Digite seu novo email: ", (email) => {
      rl.question("Qual o novo cpf: ", (cpf) => {
        console.log("Usuário atualizado com sucesso!");
        menu();
      });
    });
  });
}

function deletarUsuario() {
  console.log(
    "Delete seu perfil. Preencha as perguntas abaixo para deletar seu perfil",
  );
  rl.question("Nome de usuário: ", (nome) => {
    rl.question("Email do usuário: ", (email) => {
      rl.question("Cpf do usuário: ", (cpf) => {
        console.log("Usuário deletado com sucesso!");
        console.log("Obrigado por acessar.");
        menu();
      });
    });
  });
}
menu();