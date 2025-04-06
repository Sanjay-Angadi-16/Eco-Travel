function googleTranslateElementInit() {
    document.getElementById("google_translate_element").innerText =
      "[Google Translate would load here]";
  }
  
  function sendToChatbot() {
    const input = document.getElementById("userInput");
    const message = input.value;
    input.value = "";
    const chatlog = document.getElementById("chatlog");
    chatlog.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    setTimeout(() => {
      const mockReply =
        "Thanks for your question! We're passionate about sustainable tourism. 🌱";
      chatlog.innerHTML += `<p><strong>Bot:</strong> ${mockReply}</p>`;
      chatlog.scrollTop = chatlog.scrollHeight;
    }, 500);
  }
  
  function showPage(pageId) {
    const pages = document.querySelectorAll(".page-section");
    pages.forEach((p) => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
  }
  