const logar = document.getElementById("logar");
const cadastrar = document.getElementById("cadastrar");
const container = document.querySelector(".container");
const title = document.querySelector(".form-group h2");
const paragraph = document.querySelector(".form-group p");
const form = document.querySelector(".form-group form");

// Estados de conteúdo
const loginHTML = `
  <input type="text" name="nome" id="nome" placeholder="Nome de usuário" required />
  <input type="password" name="senha" id="senha" placeholder="Senha" required />
  <button type="submit">Entrar</button>
`;

const cadastroHTML = `
  <input type="text" name="nome" id="cad-nome" placeholder="Nome completo" required />
  <input type="email" name="email" id="cad-email" placeholder="Email" required />
  <input type="password" name="senha" id="cad-senha" placeholder="Senha" required />
  <button type="submit">Cadastrar</button>
`;

logar.addEventListener("click", () => {
  container.classList.remove("cadastrar-active");
  title.textContent = "Login do Sistema";
  paragraph.textContent = "Entre com o seu usuário e senha";
  form.innerHTML = loginHTML;

  logar.classList.add("active");
  cadastrar.classList.remove("active");
});

cadastrar.addEventListener("click", () => {
  container.classList.add("cadastrar-active");
  title.textContent = "Cadastrar Usuário";
  paragraph.textContent = "Preencha os campos para criar sua conta";
  form.innerHTML = cadastroHTML;

  cadastrar.classList.add("active");
  logar.classList.remove("active");
});
