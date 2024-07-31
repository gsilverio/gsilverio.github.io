document.addEventListener("DOMContentLoaded", function () {
  const isInit = !localStorage.getItem("isInitialized");
  if (isInit) {
    localStorage.clear();
    const db = new Database();
    db.init();
    localStorage.setItem("isInitialized", true);
  }
  fetch("pages/home.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("pages-content").innerHTML = data;
    });
  const user = localStorage.getItem("user");

  const iconLoggin = document.getElementById("icon-container");

  if (user) {
    iconLoggin.classList.add("logout-icon");
    iconLoggin.classList.remove("login-icon");
  } else {
    iconLoggin.classList.add("login-icon");
    iconLoggin.classList.remove("logout-icon");
  }
});

const user = {
  name: "admin",
  email: "admin@gmail.com",
  password: "admin",
  authenticated: false,
};

function loadPages(page) {
  let ajax = new XMLHttpRequest();
  ajax.open("GET", page);

  ajax.onreadystatechange = () => {
    if (ajax.readyState == 4 && ajax.status == 200) {
      document.getElementById("pages-content").innerHTML = ajax.responseText;

      const user = localStorage.getItem("user");

      if (ajax.responseText.match("sobre-container")) {
        const localUser = JSON.parse(localStorage.getItem("user"));
        if (localUser) {
        } else {
        }
      } else if (ajax.responseText.match("items-container")) {
        const hid = document.getElementById("item-menu-container");
        const hid1 = document.getElementById("catalog-section");

        if (user) {
          hid.classList.add("visible");
          hid.classList.remove("hidden");
          hid1.classList.remove("notVisible");
          hid1.classList.add("isVisible");
        } else {
          hid.classList.add("hidden");
          hid.classList.remove("visible");
          hid1.classList.add("notVisible");
          hid1.classList.remove("isVisible");
        }

        const items = JSON.parse(localStorage.getItem("itemList"));

        document.getElementById("items-container").innerHTML =
          renderItems(items);
      }
    }
  };
  ajax.send();
}

function handleFormClick(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  window.alert(`Entraremos em contato Sr(a) ${nome} por seu email: ${email}`);
  window.location.href = "index.html";
}

function handleLogin() {
  let loginEmail = document.getElementById("login-email").value;
  let loginPassword = document.getElementById("password-email").value;
  if (loginEmail === user.email && loginPassword === user.password) {
    user.authenticated = true;
    localStorage.setItem("user", JSON.stringify(user));
  }
  location.href("home.html");
  location.reload();
}

function logout() {
  localStorage.removeItem("user");
  location.reload();
}

class Item {
  static classId = 1;
  constructor(name, description, url, type, value) {
    this.id = Item.classId++;
    this.name = name;
    this.description = description;
    this.url = url;
    this.type = type;
    this.value = value;
  }

  validateItem() {
    for (let i in this) {
      if (this[i] === undefined || this[i] === "") {
        return false;
      }
    }
    return true;
  }
}

class Database {
  constructor() {
    const id = localStorage.getItem("id");
    if (id === null) {
      localStorage.setItem("id", 0);
    }
  }

  init() {
    const items = [
      new Item(
        "Blusa Casual",
        "Blusa casual preta",
        "../assets/T-shirt.png",
        "blusa",
        "80.0"
      ),
      new Item(
        "Blusa Esportiva",
        "Blusa esportiva preta",
        "../assets/Esportiva.png",
        "blusa",
        "80.0"
      ),
      new Item(
        "Blusa Inverno",
        "Blusa Inverno preta",
        "../assets/Corta.png",
        "blusa",
        "80.0"
      ),
      new Item(
        "Blusa Esportiva",
        "Blusa esportiva preta",
        "../assets/Esportiva.png",
        "blusa",
        "80.0"
      ),
      new Item(
        "Blusa Casual",
        "Blusa casual preta",
        "../assets/T-shirt.png",
        "blusa",
        "80.0"
      ),
      new Item(
        "Blusa Inverno",
        "Blusa Inverno preta",
        "../assets/Corta.png",
        "blusa",
        "80.0"
      ),
      new Item(
        "Blusa Inverno",
        "Blusa Inverno preta",
        "../assets/Corta.png",
        "blusa",
        "80.0"
      ),
    ];
    Database.createItem(items);
  }

  static createItem(items) {
    if (!localStorage.getItem("itemList")) {
      localStorage.setItem("itemList", JSON.stringify(items));
    }
  }
  static addItem(item) {
    const items = JSON.parse(localStorage.getItem("itemList"));
    items.push(item);
    localStorage.removeItem("itemList");
    localStorage.setItem("itemList", JSON.stringify(items));
    console.log(items);
  }

  static handleRemove(id) {
    const items = JSON.parse(localStorage.getItem("itemList"));
    const filterItems = items.filter((val) => id !== val.id);
    localStorage.setItem("itemList", JSON.stringify(filterItems));
    window.location.reload();
  }

  static showEditItem(index) {
    console.log(index);
    const itemList = JSON.parse(localStorage.getItem("itemList"));
    const item = itemList.find((x) => index === x.id);
    document.getElementById("itemName").value = item.name;
    document.getElementById("itemDescricao").value = item.description;
    document.getElementById("itemValue").value = item.value;
    document.getElementById("itemTipo").value = item.type;
    document.getElementById("itemUrl").value = item.url;
    document.getElementById("itemId").value = item.id;
  }
}

function renderItems(items) {
  console.log(items);
  return items
    .map(
      (x) => `
    
    <div class="col base-card-catalog mt-3" id="base-card-catalog">
      <div class="card-crud" id="card-crud"> 
        <div id="menu-icon">
          <a href="#" data-bs-toggle="modal" data-bs-target="#editModal" onclick="Database.showEditItem(${x.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" class="bi bi-pen" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
            </svg>
          </a>

          <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="editModalLabel">Edit Item</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form id="editForm" class="form-insert-container">
                    <input type="hidden" id="itemId">
                    <div class="mb-3">
                      <label for="itemName" class="form-label">Name</label>
                      <input type="text" class="form-control" id="itemName" name="nome">
                    </div>
                    <div class="mb-3">
                      <label for="itemDescricao" class="form-label">Descricao</label>
                      <input class="form-control" id="itemDescricao" name="descricao"></input>
                    </div>
                    <div class="mb-3">
                      <label for="itemValue" class="form-label">Value</label>
                      <input type="text" class="form-control" id="itemValue" name="valor">
                    </div>
                    <div class="mb-3">
                      <label for="itemUrl" class="form-label">Url</label>
                      <input type="text" class="form-control" id="itemUrl" name="url">
                    </div>
                    <div class="mb-3">
                      <label for="itemTipo" class="form-label">Tipo</label>
                      <input type="text" class="form-control" id="itemTipo" name="tipo">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                  <button type="button" class="btn btn-primary" onclick="handleSubmitEditItem(event)">Salvar</button>
                </div>
              </div>
            </div>
          </div>

          <a href="#" onclick="Database.handleRemove(${x.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </a>
        </div>
        
      </div>
      <div class="image-container">
          <img src="${x.url}" alt="">
      </div>
      <div>
        <h3>${x.name}</h3>
        </br>
        <h3>R$ ${x.value}</h3>
      </div>
    </div>
    `
    )
    .join("");
}
function handleSubmitEditItem(event) {
  event.preventDefault();
  const id = document.getElementById("itemId").value;
  const nome = document.getElementById("itemName").value;
  const descricao = document.getElementById("itemDescricao").value;
  const tipo = document.getElementById("itemTipo").value;
  const url = document.getElementById("itemUrl").value;
  const valor = document.getElementById("itemValue").value;

  console.log("id: " + id);

  const items = JSON.parse(localStorage.getItem("itemList"));
  const editedItems = items.map((i) => {
    if (i.id === parseInt(id)) {
      return {
        id: parseInt(id),
        name: nome,
        description: descricao,
        value: valor,
        type: tipo,
        url: url,
      };
    }
    return i;
  });

  localStorage.setItem("itemList", JSON.stringify(editedItems));
  window.location.reload();
  console.log(window.location.href);
}

function handleSubmit(event) {
  event.preventDefault();
  const nome = document.getElementsByName("nome");
  const descricao = document.getElementsByName("descricao");
  const tipo = document.getElementsByName("tipo");
  const url = document.getElementsByName("url");
  const valor = document.getElementsByName("valor");

  const item = new Item();
  item.name = nome[0].value;
  item.description = descricao[0].value;
  item.value = valor[0].value;
  item.type = tipo[0].value;
  item.url = url[0].value;

  Database.addItem(item);
}
