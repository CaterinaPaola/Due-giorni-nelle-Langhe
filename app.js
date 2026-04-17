const itinerary = {
  mapCenter: [44.662, 7.995],
  mapZoom: 11,
  days: {
    day1: {
      title: "Giorno 1",
      subtitle: "Sabato 18 aprile 2026",
      themeColor: "#7e214b",
      summary:
        "Ingresso dolce nelle Langhe dal lato Neive-Barbaresco, picnic con vista, degustazione a Verduno alle 15:30 e tramonto a La Morra prima di chiudervi tranquille in airbnb.",
      routeInfo: "Più panoramico e fotografico, con tempi distesi e pochissimo stress.",
      stops: [
        {
          name: "Partenza dalla Brianza",
          coords: [45.5845, 9.2744],
          mapVisible: false,
          time: "09:00",
          kind: "Start",
          duration: "circa 2h 15 in auto",
          note: "Partendo alle 9:00 arrivate con calma nel cuore delle Langhe intorno alle 11:10-11:20.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Langhe%201.jpg",
          imageAlt: "Panorama delle Langhe",
          link: "https://www.visitlmr.it/"
        },
        {
          name: "Neive",
          coords: [44.7167, 8.1167],
          time: "11:15",
          kind: "Borgo",
          duration: "1h circa",
          note:
            "Prima tappa ideale: raccolta, elegante e molto coerente con il vostro gusto. Vale il centro storico, la Torre dell'Orologio e il giro lento verso San Rocco.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Primavera%20a%20Neive.jpg",
          imageAlt: "Veduta di Neive",
          link: "https://www.visitlmr.it/en"
        },
        {
          name: "Barbaresco",
          coords: [44.7275, 8.0804],
          time: "12:25",
          kind: "Torre panoramica",
          duration: "50 min",
          note:
            "La tappa più scenografica della tarda mattinata: la torre offre davvero il colpo d'occhio a 360° che cercavate.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Barbaresco%20Tower%2029-11-21.jpg",
          imageAlt: "Torre di Barbaresco",
          link: "https://langhe.net/en/sight/the-tower-of-barbaresco/"
        },
        {
          name: "Picnic panoramico",
          coords: [44.6895, 8.0354],
          time: "13:20",
          kind: "Pranzo al sacco",
          duration: "45 min",
          note:
            "Qui il piano migliore e piu realistico e fermarsi tra vigne e belvederi lungo il trasferimento verso Grinzane: atmosfera Langhe piena, senza perdere troppo tempo.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Langhe%20View%20of%20vineyards.jpg",
          imageAlt: "Vigne nelle Langhe",
          link: "https://www.visitlmr.it/"
        },
        {
          name: "Grinzane Cavour",
          coords: [44.6532, 7.9949],
          time: "14:20",
          kind: "Castello e belvedere",
          duration: "40 min",
          note:
            "Perfetta come tappa ponte: il castello UNESCO aggiunge la parte storica senza farvi uscire dal giro.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Grinzane%20Cavour%20-%20Castello%20di%20Grinzane%20Cavour.jpg",
          imageAlt: "Castello di Grinzane Cavour",
          link: "https://www.visitlmr.it/en"
        },
        {
          name: "Verduno",
          coords: [44.6667, 7.9333],
          time: "15:30",
          kind: "Degustazione",
          duration: "1h 30 circa",
          note:
            "Perno del sabato. Arrivate senza ansia e vi tenete il resto del pomeriggio per un ultimo scorcio prima dell'airbnb.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Belvedere%20di%20Verduno1.jpg",
          imageAlt: "Belvedere di Verduno",
          link: "https://www.cantine.wine/en/cantina-langhe-bel-colle/visite"
        },
        {
          name: "La Morra",
          coords: [44.6333, 7.9333],
          time: "17:30",
          kind: "Golden hour",
          duration: "45 min",
          note:
            "La terrazza panoramica qui e il finale giusto per il sabato: iconica, ampia e molto emozionale nelle luci del tardo pomeriggio.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Belvedere%20di%20La%20Morra.jpg",
          imageAlt: "Belvedere di La Morra",
          link: "https://www.uvelanghe.it/en/langhe/"
        },
        {
          name: "Airbnb a Castellinaldo d'Alba",
          coords: [44.789, 8.034],
          time: "19:00",
          kind: "Relax",
          duration: "sera tranquilla",
          note:
            "Rientro morbido, cena in airbnb e basta. Dopo degustazione e giretti, questa chiusura e molto sensata.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Castellinaldo%20panorama.jpg",
          imageAlt: "Panorama di Castellinaldo",
          link: "https://en.wikipedia.org/wiki/Castellinaldo_d%27Alba"
        }
      ]
    },
    day2: {
      title: "Giorno 2",
      subtitle: "Domenica 19 aprile 2026",
      themeColor: "#4f6e56",
      summary:
        "Secondo giorno piu classico e centrato sul Barolo: borgo in salita a Monforte, tappa a Barolo, pranzo a La Morra da Osteria Vinbar, camminata digestiva breve e rientro nel tardo pomeriggio.",
      routeInfo: "Meno trasferimenti lunghi, piu soste simboliche e molto paesaggio.",
      stops: [
        {
          name: "Castellinaldo d'Alba",
          coords: [44.789, 8.034],
          time: "09:45",
          kind: "Partenza morbida",
          duration: "verso le Langhe del Barolo",
          note:
            "Partenza comoda, senza impostare una giornata troppo fitta.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Panorama%20di%20Castellinaldo%2C%20Piemonte.jpg",
          imageAlt: "Castellinaldo d'Alba",
          link: "https://en.wikipedia.org/wiki/Castellinaldo_d%27Alba"
        },
        {
          name: "Monforte d'Alba",
          coords: [44.5833, 7.9667],
          time: "10:30",
          kind: "Borgo scenografico",
          duration: "1h 10",
          note:
            "Molto bello da percorrere a piedi, con la salita verso l'Auditorium Horszowski che lo rende diverso dagli altri paesi.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Monforte%20panorama.jpg",
          imageAlt: "Panorama di Monforte d'Alba",
          link: "https://commons.wikimedia.org/wiki/Category:Monforte_d%27Alba"
        },
        {
          name: "Barolo",
          coords: [44.6167, 7.9333],
          time: "11:55",
          kind: "Borgo iconico",
          duration: "1h 15",
          note:
            "Qui il borgo e piu che sufficiente anche senza fare il museo completo: passeggiata, castello, enoteche e atmosfera.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Barolo%20-%20veduta%20panoramica%20con%20la%20chiesa.jpg",
          imageAlt: "Veduta di Barolo",
          link: "https://commons.wikimedia.org/wiki/Category:Barolo_%28comune%2C_Italy%29"
        },
        {
          name: "La Morra",
          coords: [44.6333, 7.9333],
          time: "13:20",
          kind: "Pranzo",
          duration: "Osteria Vinbar",
          note:
            "Pranzo nel posto che avete segnato voi, in una delle piazze piu belle e panoramiche da vivere con calma.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Morra%20paese.jpg",
          imageAlt: "Centro di La Morra",
          link: "https://www.thefork.com/restaurant/vinbar-r857422/menu"
        },
        {
          name: "Passeggiata digestiva tra belvedere e filari",
          coords: [44.6362, 7.9382],
          time: "15:10",
          kind: "Camminata leggera",
          duration: "40-50 min",
          note:
            "Meglio una camminata semplice nei dintorni di La Morra, senza vincoli tecnici: vista aperta, aria buona e recupero post pranzo.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Langhe%20from%20La%20Morra.JPG",
          imageAlt: "Vista sulle Langhe da La Morra",
          link: "https://www.uvelanghe.it/en/langhe/"
        },
        {
          name: "Rientro in Brianza",
          coords: [45.5845, 9.2744],
          mapVisible: false,
          time: "17:00",
          kind: "Return",
          duration: "tardo pomeriggio",
          note:
            "Ripartenza sensata dopo aver visto il cuore del Barolo senza comprimerlo troppo.",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Langhe%202.jpg",
          imageAlt: "Colline delle Langhe",
          link: "https://www.visitlmr.it/"
        }
      ]
    }
  }
};

const routePanelsEl = document.getElementById("route-panels");
const dayGridsEl = document.getElementById("day-grids");
const filterButtons = [...document.querySelectorAll(".filter-btn")];
let activeFilter = "all";

const map = L.map("map", {
  zoomControl: false,
  scrollWheelZoom: false
}).setView(itinerary.mapCenter, itinerary.mapZoom);

L.control.zoom({ position: "bottomright" }).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const routeLayers = {};
const markerLayers = {};

function createMarkerIcon(color) {
  return L.divIcon({
    className: "custom-marker-wrapper",
    html: `<span style="display:grid;place-items:center;width:18px;height:18px;border-radius:50%;background:${color};box-shadow:0 0 0 5px rgba(255,249,241,0.88),0 8px 18px rgba(0,0,0,0.18);"></span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });
}

function stopPopup(stop, day) {
  return `
    <div style="min-width:220px;">
      <strong style="display:block;font-size:1rem;margin-bottom:4px;">${stop.name}</strong>
      <span style="display:inline-block;margin-bottom:8px;color:${day.themeColor};font-weight:700;">${day.title} · ${stop.time}</span>
      <div style="font-size:0.93rem;line-height:1.55;color:#514a44;">${stop.note}</div>
    </div>
  `;
}

function renderRoutePanels() {
  routePanelsEl.innerHTML = Object.entries(itinerary.days)
    .map(([dayKey, day]) => {
      const stopsMarkup = day.stops
        .map(
          (stop, index) => `
            <li>
              <span class="route-index" style="background:${day.themeColor};">${index + 1}</span>
              <div>
                <div class="route-stop-title">
                  <span>${stop.name}</span>
                  <span class="timing-chip">${stop.time}</span>
                </div>
                <p>${stop.kind} · ${stop.duration}</p>
              </div>
            </li>
          `
        )
        .join("");

      return `
        <article class="route-panel" data-day="${dayKey}" data-day-theme="${dayKey}">
          <div class="route-panel-header">
            <div>
              <p class="card-label">${day.subtitle}</p>
              <h3>${day.title}</h3>
            </div>
            <span class="route-chip">${day.routeInfo}</span>
          </div>
          <p>${day.summary}</p>
          <ul>${stopsMarkup}</ul>
        </article>
      `;
    })
    .join("");
}

function renderStopCards() {
  dayGridsEl.innerHTML = Object.entries(itinerary.days)
    .map(([dayKey, day]) => {
      const cards = day.stops
        .filter((stop) => stop.kind !== "Start" && stop.kind !== "Return")
        .map(
          (stop) => `
            <article class="stop-card">
              <img src="${stop.image}" alt="${stop.imageAlt}" loading="lazy" />
              <div class="stop-copy">
                <div class="stop-meta">
                  <span>${stop.time}</span>
                  <span>${stop.kind}</span>
                </div>
                <h3>${stop.name}</h3>
                <p>${stop.note}</p>
                <a class="stop-link" href="${stop.link}" target="_blank" rel="noreferrer">
                  Apri riferimento
                </a>
              </div>
            </article>
          `
        )
        .join("");

      return `
        <section class="day-block" data-day="${dayKey}" data-day-theme="${dayKey}">
          <div class="day-block-header">
            <div>
              <p class="card-label">${day.subtitle}</p>
              <h3>${day.title}</h3>
            </div>
            <span class="route-chip">${day.routeInfo}</span>
          </div>
          <div class="stop-grid">${cards}</div>
        </section>
      `;
    })
    .join("");
}

function renderMarkers() {
  Object.entries(itinerary.days).forEach(([dayKey, day]) => {
    const layer = L.layerGroup();

    day.stops.filter((stop) => stop.mapVisible !== false).forEach((stop) => {
      const marker = L.marker(stop.coords, {
        icon: createMarkerIcon(day.themeColor)
      }).bindPopup(stopPopup(stop, day));
      marker.addTo(layer);
    });

    markerLayers[dayKey] = layer.addTo(map);
  });
}

function fallbackLatLngs(stops) {
  return stops.map((stop) => stop.coords);
}

function buildRoute(dayKey, day) {
  const mappedStops = day.stops.filter((stop) => stop.mapVisible !== false);
  routeLayers[dayKey] = L.polyline(fallbackLatLngs(mappedStops), {
    color: day.themeColor,
    weight: 5,
    opacity: 0.82,
    dashArray: "10 10"
  }).addTo(map);
}

function setFilter(nextFilter) {
  activeFilter = nextFilter;

  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === nextFilter);
  });

  Object.keys(itinerary.days).forEach((dayKey) => {
    const isVisible = nextFilter === "all" || nextFilter === dayKey;
    const routePanel = document.querySelector(`.route-panel[data-day="${dayKey}"]`);
    const dayBlock = document.querySelector(`.day-block[data-day="${dayKey}"]`);
    const routeLayer = routeLayers[dayKey];
    const markerLayer = markerLayers[dayKey];

    if (routePanel) {
      routePanel.classList.toggle("is-hidden", !isVisible);
    }
    if (dayBlock) {
      dayBlock.classList.toggle("is-hidden", !isVisible);
    }
    if (routeLayer) {
      if (isVisible) {
        routeLayer.addTo(map);
      } else {
        map.removeLayer(routeLayer);
      }
    }
    if (markerLayer) {
      if (isVisible) {
        markerLayer.addTo(map);
      } else {
        map.removeLayer(markerLayer);
      }
    }
  });

  fitVisibleBounds();
}

function fitVisibleBounds() {
  const points = [];

  Object.entries(itinerary.days).forEach(([dayKey, day]) => {
    if (activeFilter !== "all" && activeFilter !== dayKey) {
      return;
    }
    day.stops
      .filter((stop) => stop.mapVisible !== false)
      .forEach((stop) => points.push(stop.coords));
  });

  if (!points.length) {
    return;
  }

  map.fitBounds(points, { padding: [40, 40] });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

renderRoutePanels();
renderStopCards();
renderMarkers();
Object.entries(itinerary.days).forEach(([dayKey, day]) => buildRoute(dayKey, day));
setFilter("all");
