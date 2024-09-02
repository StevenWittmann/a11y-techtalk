if (typeof window !== 'undefined') {
  
  // Dialog 
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector("dialog + button");
  const closeButton = document.querySelector("dialog button");
  
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });
  
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
  
  
  // Fake span link
  const fakeLinks = document.querySelectorAll('[role="link"]');
  
  for (let i = 0; i < fakeLinks.length; i++) {
    fakeLinks[i].addEventListener("click", navigateLink);
    fakeLinks[i].addEventListener("keydown", navigateLink);
  }
  
  //handles clicks and keydowns on the link
  function navigateLink(e) {
    if (e.type === "click" || e.key === "Enter") {
      const ref = e.target ?? e.srcElement;
      if (ref) {
        window.open(ref.getAttribute("data-href"), "_blank");
      }
    }
  }
}
