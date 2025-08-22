async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = input.value;
  chatBox.appendChild(userMessage);

  // API’ye gönder
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input.value }),
  });

  const data = await response.json();

  const botMessage = document.createElement("div");
  botMessage.className = "message bot";
  botMessage.textContent = data.reply || "Bir hata oluştu 😅";
  chatBox.appendChild(botMessage);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
