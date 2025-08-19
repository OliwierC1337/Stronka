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
  document.querySelectorAll('.sub-upgrade-section').forEach(scroller => {
    scroller.addEventListener('wheel', (e) => {
      // przewijamy poziomo tylko gdy zawartość szersza od kontenera
      if (scroller.scrollWidth <= scroller.clientWidth) return;

      // jeżeli użytkownik kręci kółkiem „w pionie”, przejmij i przewijaj w poziomie
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault(); // blokuje pionowy scroll strony
        scroller.scrollBy({ left: e.deltaY, behavior: 'auto' });
      }
      // jeżeli urządzenie daje deltaX (np. gładzik), przeglądarka i tak przewinie nativnie
    }, { passive: false });
  });
  const subSection = document.getElementById("sub-upgrade-section");

  const subContent = {
    ceramic: [
      { icon: '🕐', text: 'Powłoka roczna',desc :'Wysoki połysk, lekkie przyciemnienie i pogłębienie koloru, superhydrofobowy efekt.', price: 'od 1 200,00 zł' },
      { icon: '📅', text: 'Powłoka 2-letnia',desc: 'Superśliska, superhydrofobowa warstwa ochronna. Delikatne przyciemnienie, wysoki połysk i wyraźna głębia koloru.', price: 'od 1 600,00 zł' },
      { icon: '📆', text: 'Powłoka 3-letnia',desc: 'Ekstremalny, lustrzany połysk typu „show car”. Jedwabiście gładka powierzchnia i silna hydrofobowość.', price: 'od 1 900,00 zł' },
      { icon: '🛡️', text: 'Hybrydowa powłoka 5-letnia',desc: 'Intensywna głębia koloru i efekt „wet look”. Ekstremalny połysk, niesamowita śliskość, hydrofobowość i właściwości samooczyszczania.', price: 'od 2 200,00 zł' },
      { icon: '🏆', text: 'Grafenowa powłoka 9-letnia',desc: 'Maksymalne nasycenie koloru i głęboki połysk. Wyjątkowa śliskość, świetna hydrofobowość i doskonałe właściwości samooczyszczania.', price: 'od 2 500,00 zł' }
    ],
    interior: [
      {icon: '💎',
    text: 'Prestige Inside',
    desc: 'Dokładne odkurzanie wnętrza, czyszczenie plastików oraz szyb wewnątrz, pranie tapicerki lub pielęgnacja skór oraz wykończenie dressingiem.',
    price: 'od 400 zł'
},
  {
    icon: '✨',
      text: 'Comfort Inside',
    desc: 'Odkurzanie wnętrza, czyszczenie plastików oraz szyb i wykończenie dressingiem.',
    price: 'od 200 zł'
  },
  {
    icon: '🧹',
      text: 'Quick Inside',
    desc: 'Odkurzanie wnętrza i czyszczenie plastików środkiem 2 w 1, który czyści i zabezpiecza.',
    price: 'od 100 zł'
  }
    ],
    paint: [
      {
        icon: '🏆',
        text: 'Komplet Mycie + Wnętrze',
        desc: 'Pakiet łączący mycie z pielęgnacją wnętrza samochodu.',
        price: 'od 150 zł'
      },
      {
        icon: '🚿',
        text: 'Mycie lakieru',
        desc: 'Bezpieczne, dokładne mycie karoserii z dbałością o każdy detal.',
        price: 'od 100 zł'
      },
      {
        icon: '✨',
        text: 'Korekta lakieru',
        desc: 'Usuwanie rys i zmatowień, przywrócenie blasku i głębi koloru.',
        price: 'Cena zależna od poziomu korekty'
      },
      {
        icon: '⚙️',
        text: 'Detailing felg',
        desc: 'Profesjonalne czyszczenie i ochrona powłoką ceramiczną felg, także w trudno dostępnych miejscach.',
        price: 'od 250 zł'
      },
      {
        icon: '🩹',
        text: 'Zaprawki lakiernicze',
        desc: 'Maskowanie drobnych ubytków i odprysków lakieru.',
        price: 'od 80 zł'
      },
      {
        icon: '💧',
        text: 'Niewidzialna wycieraczka',
        desc: 'Powłoka hydrofobowa na szyby poprawiająca widoczność podczas deszczu.',
        price: 'od 60 zł '
      },
      {
        icon: '🔦',
        text: 'Renowacja reflektorów',
        desc: 'Przywrócenie przejrzystości i pełnej jasności reflektorów.',
        price: 'od 150 zł'
      }
    ],

    full: [
      {
        icon: '🧼',
        text: 'Pakiet Wosk & Glinka',
        desc: 'Mycie, glinkowanie oraz zabezpieczenie woskiem – efekt gładkiej i błyszczącej powierzchni.',
        price: 'od 500,00 zł'
      },
      {
        icon: '🚗',
        text: 'Pakiet Sprzedażowy',
        desc: 'Kompleksowe przygotowanie auta do sprzedaży: mycie, dekontaminacja, glinkowanie, korekta lakieru 3w1, czyszczenie wnętrza oraz dressing plastików i opon.',
        price: 'od 700,00 zł'
      },
      {
        icon: '✨',
        text: 'Pakiet Peeling',
        desc: 'Mycie, dekontaminacja chemiczna, sealant, pielęgnacja plastików zewnętrznych, dressing opon, czyszczenie szyb wewnątrz i na zewnątrz oraz podstawowe czyszczenie wnętrza.',
        price: 'od 300,00 zł'
      },
      {
        icon: '🏁',
        text: 'Pakiet Odświeżający z Powłoką',
        desc: 'Mycie, dekontaminacja, glinka, polerka, roczna powłoka ceramiczna, powłoka na szyby, dressing opon i czyszczenie wnętrza.',
        price: 'od 1 000,00 zł'
      },
      {
        icon: '💎',
        text: 'Deluxe Outside',
        desc: 'Mycie, dekontaminacja, powłoka na szyby oraz fronty felg, aplikacja 5 letniej powłoki ceramicznej, dressing plastików i opon oraz podstawowe czyszczenie wnętrza.',
        price: 'od 3 000,00 zł'
      }
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
  <a class="sub-upgrade-box" href="offer.html#${item.text.replace(/\s+/g, '-').toLowerCase()}">

    <div class="sub-icon">${item.icon}</div>
    <div class="sub-text">${item.text}</div>
    <div class="sub-desc">${item.desc}</div>
    <div class="sub-price">${item.price || ''}</div>

  </a>
`).join('');

    subSection.classList.remove("hidden");
    subSection.classList.remove("slide-out");
    void subSection.offsetWidth; // restart animacji
    subSection.classList.add("slide-in");

    currentlyOpened = type;
    subSection.scrollIntoView({ behavior: "smooth", block: "center" });
  };
});


