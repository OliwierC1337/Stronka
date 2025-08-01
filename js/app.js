function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const burgerIcon = document.getElementById("burger-icon");
  const closeIcon = document.getElementById("close-icon");

  const isOpen = menu.style.display === "flex";

  menu.style.display = isOpen ? "none" : "flex";
  burgerIcon.style.display = isOpen ? "inline" : "none";
  closeIcon.style.display = isOpen ? "none" : "inline";
}

window.addEventListener("resize", () => {
  const menu = document.getElementById("mobileMenu");
  const burgerIcon = document.getElementById("burger-icon");
  const closeIcon = document.getElementById("close-icon");

  if (window.innerWidth > 768) {
    menu.style.display = "none";
    burgerIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }
});
function toggleDetails(clickedBox) {
  const allSubSections = document.querySelectorAll('.sub-scroll');

  allSubSections.forEach(sub => {
    if (sub !== clickedBox.querySelector('.sub-scroll')) {
      sub.classList.add('hidden');
    }
  });

  const clickedSub = clickedBox.querySelector('.sub-scroll');
  clickedSub.classList.toggle('hidden');
}
document.addEventListener("DOMContentLoaded", function () {
  const subSection = document.getElementById("sub-upgrade-section");

  const subContent = {
    ceramic: [
      { icon: '🕐', text: 'Powłoka roczna',desc :'cos tam cos tam', price: 'od 1 200,00 zł' },
      { icon: '📅', text: 'Powłoka 2-letnia',desc: 'cos tam cos tam eluwina raz dwa trzy chuje muje dzikie weze hwdp jp2gmd kurwa siur chuj', price: 'od 1 600,00 zł' },
      { icon: '📆', text: 'Powłoka 3-letnia',desc: 'cos tam cos tam', price: 'od 1 900,00 zł' },
      { icon: '🛡️', text: 'Powłoka 5-letnia',desc: 'cos tam cos tam', price: 'od 2 200,00 zł' },
      { icon: '🏆', text: 'Powłoka 9-letnia',desc: 'cos tam cos tam', price: 'od 2 500,00 zł' }
    ],
    interior: [
      'Odkurzanie',
      'Pranie tapicerki',
      'Detailing plastików'
    ],
    paint: [
      '1-etapowa korekta',
      '2-etapowa korekta',
      '3-etapowa korekta'
    ],
    full: [
      'Pakiet Silver',
      'Pakiet Gold',
      'Pakiet Premium'
    ]
  };

  let currentlyOpened = null;

  window.showSubUpgrades = function (type) {
    if (!subSection) return;

    // Jeśli kliknięto ten sam kafelek → ukryj
    if (currentlyOpened === type) {
      subSection.classList.add("slide-out");
      subSection.classList.remove("slide-in");

      setTimeout(() => {
        subSection.classList.add("hidden");
        subSection.innerHTML = "";
      }, 300);

      currentlyOpened = null;
      return;
    }

    const items = subContent[type];
    if (!items) return;

    subSection.innerHTML = items.map(item => `
  <div class="sub-upgrade-box">
    <div class="sub-icon">${item.icon}</div>
    <div class="sub-text">${item.text}</div>
    <div class="sub-desc">${item.desc}</div>
    <div class="sub-price">${item.price || ''}</div>
  </div>
`).join('');

    subSection.classList.remove("hidden");
    subSection.classList.remove("slide-out");
    void subSection.offsetWidth; // restart animacji
    subSection.classList.add("slide-in");

    currentlyOpened = type;
    subSection.scrollIntoView({ behavior: "smooth", block: "center" });
  };
});


