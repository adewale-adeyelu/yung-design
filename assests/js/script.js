// navbar
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuBtn.textContent = mobileMenu.classList.contains("hidden") ? "☰" : "✕";
  });
});


// img
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeBtn = document.getElementById("close-modal");

    const previewImages = document.querySelectorAll(".preview-image");
    const previewButtons = document.querySelectorAll(".preview-btn");

    function openModal(src) {
        modalImage.src = src;
        modal.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
    }

    function closeModal() {
        modal.classList.add("hidden");
        modalImage.src = "";
        document.body.classList.remove("overflow-hidden");
    }


    previewImages.forEach(img => {
        img.addEventListener("click", () => openModal(img.dataset.image));
    });

    previewButtons.forEach(btn => {
        btn.addEventListener("click", () => openModal(btn.dataset.image));
    });

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
});

