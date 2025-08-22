function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  // Kullanıcı mesajı
  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = input.value;
  chatBox.appendChild(userMessage);

  // Bot cevabı (şimdilik sabit)
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.textContent = "Merhaba! Ben deneme botuyum 😊";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
