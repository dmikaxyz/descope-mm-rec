const API = "http://localhost:4000/auth";

async function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  alert(JSON.stringify(data));
}

async function login() {
  const email = document.getElementById("logEmail").value;
  const password = document.getElementById("logPassword").value;

  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (res.ok && data.token) {
    localStorage.setItem("token", data.token);
    alert("Login successful!");
  } else {
    alert("Login failed: " + JSON.stringify(data));
  }
}

async function showMe() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  const data = await res.json();
  document.getElementById("meOutput").textContent = JSON.stringify(data, null, 2);
}
