const ASSETS = { sprites: { kivvi: "assets/sprites/kivvi.png", pestolett: "assets/sprites/pestolett.png", pay: "assets/sprites/pay.png", PayKivvi: "assets/sprites/PayKivvi.png", invent: "assets/sprites/invent.png" }, backgrounds: { menu: "assets/backgrounds/menu.jpg", edu: { normal: "assets/backgrounds/menu.jpg", office2gis: "assets/backgrounds/2gis.jpg", merch: "assets/backgrounds/merch.jpg" }, certs: { kivvi: "assets/backgrounds/back_kivi.jpg", pestolett: "assets/backgrounds/back_pest.jpg" }, prod: { pest: "assets/backgrounds/back_pest.jpg", kivvi: "assets/backgrounds/back_kivi.jpg", vsrato: "assets/backgrounds/vsrato.jpg", pims: "assets/backgrounds/pims.jpg" } } };
const CERTS_DATA = { kivvi: [{ title: "Сертификат по Генеративному искусству от Сбербанка", src: "assets/certificates/kivvi/gen_art_kivvi.png" }, { title: "Сертификат по Контейнеризации с Docker От Yandex", src: "assets/certificates/kivvi/docker_kivvi.jpg" }, { title: "Сертификат по Работе с LLM GigaChat от Сбербанка", src: "assets/certificates/kivvi/giga_llm_kivvi.png" }, { title: "Сертификат Stepik по курсу по Git", src: "assets/certificates/kivvi/stepik_git_kivvi.jpg" }], pestolett: [{ title: "Сертификат по Работе с LLM GigaChat от Сбербанка", src: "assets/certificates/pestolett/giga_pest.png" }, { title: "Сертификат по Генеративному искусству от Сбербанка", src: "assets/certificates/pestolett/gen_art_pest.png" }, { title: "Сертификат по Контейнеризации с Docker От Yandex", src: "assets/certificates/pestolett/docker_pest.jpg" }, { title: "Сертификат по Cloud Computing От Yandex", src: "assets/certificates/pestolett/cloud_pest.jpg" }, { title: "Сертификат Stepik по курсу по Python", src: "assets/certificates/pestolett/python_pest.jpg" }, { title: "Сертификат Stepik по курсу по Git", src: "assets/certificates/pestolett/git_pest.jpg" }] };

const INFO_LINKS = {
  kivvi: {
    drive: "https://drive.google.com/drive/u/1/folders/1m42DsBRZL_APspDhyM_x3sjcUN4hMtWe",
    github: "https://github.com/Kivipups"
  },
  pestolett: {
    drive: "https://drive.google.com/drive/folders/1nITHWp53Fu3koJzYFWvjVHfJsKqK1sIU?usp=drive_link",
    github: "https://github.com/Meminttaa/-Practice"
  }
};


const EDU_SLIDES = [{ speaker: "pestolett", bg: ASSETS.backgrounds.edu.normal, text: "Итак! Наша учебная практика была очень похожей, поэтому..." }, { speaker: "kivvi", bg: ASSETS.backgrounds.edu.normal, text: "Поэтому мы решили рассказать о ней вместе." }, { speaker: "pestolett", bg: ASSETS.backgrounds.edu.normal, text: "Верно. На учебной практике мы в основном проходили курсы." }, { speaker: "kivvi", bg: ASSETS.backgrounds.edu.normal, text: "Например, курсы на Stepik и в Yandex Cloud." }, { speaker: "pestolett", bg: ASSETS.backgrounds.edu.normal, text: "Ещё было несколько курсов от Сбера! Все сертификаты, которые мы получили, можно найти в отдельной вкладке главного меню." }, { speaker: "kivvi", bg: ASSETS.backgrounds.edu.office2gis, text: "А ещё был день, когда мы со своей группой посетили офис 2ГИС!" }, { speaker: "pestolett", bg: ASSETS.backgrounds.edu.office2gis, text: "О да, там было очень красиво и интересно." }, { speaker: "kivvi", bg: ASSETS.backgrounds.edu.office2gis, text: "Настолько, что кроме этой фотографии больше ничего нет?" }, { speaker: "pestolett", bg: ASSETS.backgrounds.edu.office2gis, text: "..." }, { speaker: "pestolett", bg: ASSETS.backgrounds.edu.merch, text: "Зато мне дали мерч." }, { speaker: "kivvi", bg: ASSETS.backgrounds.edu.normal, text: "В любом случае, мы ещё занимались лабораторными по базам данных в PostgreSQL!" }, { speaker: "pestolett", bg: ASSETS.backgrounds.edu.normal, text: "А ещё под конец учебной практики нам повезло делать программу для заполнения шаблонов документов." }, { speaker: "kivvi", bg: ASSETS.backgrounds.edu.normal, text: "Вышла довольно удобная штука. Кажется." }, { speaker: "pestolett", bg: ASSETS.backgrounds.edu.normal, text: "...Надеюсь." }, { speaker: "pestolett", bg: ASSETS.backgrounds.edu.normal, text: "Стоит ещё упомянуть про нашу работу в группе!" }, { speaker: "kivvi", bg: ASSETS.backgrounds.edu.normal, text: "Помимо всего, мы разрабатывали приложение для производства." }, { speaker: "pestolett", bg: ASSETS.backgrounds.edu.normal, text: "На мою несчастную печальную долю выпало сделать Colab-таблицу, где будет видно, какой инструмент пропал на видео." }, { speaker: "kivvi", bg: ASSETS.backgrounds.edu.normal, text: "А в мои обязанности входило добавить код и видео в мобильное приложение." }, { speaker: "pestolett", bg: ASSETS.backgrounds.edu.normal, text: "Итак... на этом пока всё!" }, { speaker: "kivvi", bg: ASSETS.backgrounds.edu.normal, text: "Спасибо за внимание! И не забудьте посмотреть наши сертификаты." }, { speaker: "pestolett", bg: ASSETS.backgrounds.edu.normal, italic: true, text: "О да, наши очень крутые супер-ультра-мега сертификаты." }];
const PROD_PEST_SLIDES = [{ speaker: "pestolett", bg: ASSETS.backgrounds.prod.pest, text: 'Моя производственная практика прошла в ООО «Велес».' }, { speaker: "pestolett", bg: ASSETS.backgrounds.prod.pest, text: "Часто мне поручали распечатывать документы, а иногда — отправлять их на нужные адреса компаний." }, { speaker: "pestolett", bg: ASSETS.backgrounds.prod.pest, text: "Ещё я занимался документацией: составлял договоры, проверял заявки на перевозки, вовремя их сканировал и отправлял на утверждение." }, { speaker: "pestolett", bg: ASSETS.backgrounds.prod.pest, text: "Такую работу мне выдавали несколько раз за две недели — сразу по мере поступления." }, { speaker: "pestolett", bg: ASSETS.backgrounds.prod.pest, text: "При этом мне приходилось пользоваться новыми для меня сервисами, приложениями и сайтами — и это было достаточно здорово." }, { speaker: "pestolett", bg: ASSETS.backgrounds.prod.pest, overlayShow: ASSETS.sprites.pay, text: "За такой труд мне даже заплатили целую тысячу. Круто же, да?" }, { speaker: "pestolett", bg: ASSETS.backgrounds.prod.pest, overlayHide: true, text: "В свободное время, когда работы не находилось, я проходил курсы на Stepik по Python или изучал материалы по программированию, которые интересовали лично меня." }, { speaker: "pestolett", bg: ASSETS.backgrounds.prod.pest, text: "Ох, и да: тут не будет ни одной фотографии с моей практики на производстве. Потому что у меня нет ни одной нормальной фотографии с производства." }, { speaker: "pestolett", bg: ASSETS.backgrounds.prod.vsrato, text: "..." }, { speaker: "pestolett", bg: ASSETS.backgrounds.prod.vsrato, text: "Они правда очень... странные..." }, { speaker: "pestolett", bg: ASSETS.backgrounds.prod.pest, text: "Ну вот и всё!" }, { speaker: "pestolett", bg: ASSETS.backgrounds.prod.pest, text: "Теперь можно вернуться в главное меню и посмотреть, как обстоят дела у Kivvi. Ну или заглянуть в сертификаты — там тоже интересно." }];
const PROD_KIVVI_SLIDES = [
  { speaker: "kivvi", bg: ASSETS.backgrounds.prod.kivvi, text: "Добрый день, я Kivvi, и сейчас я расскажу о том, как проходила моя производственная практика." },
  { speaker: "kivvi", bg: ASSETS.backgrounds.prod.kivvi, text: "Проходил я её на предприятии: 1-й Покровский пр., д. 5, Котельники (ИП Иванушкин Константин Михайлович)." },
  { speaker: "kivvi", bg: ASSETS.backgrounds.prod.pims, text: "На самом производстве я помогал с настройкой различного оборудования и подключением периферии." },
  { speaker: "kivvi", bg: ASSETS.backgrounds.prod.kivvi, text: "За всё время работы на производстве мне также заплатили чуть больше 11 тысяч." },
  { speaker: "kivvi", bg: ASSETS.backgrounds.prod.kivvi, overlayShow: ASSETS.sprites.PayKivvi, text: "Думаю, на киндер кантри хватит." },
  { speaker: "kivvi", bg: ASSETS.backgrounds.prod.kivvi, overlayShow: ASSETS.sprites.invent, overlayBig: true, text: "На производстве помимо настройки оборудования я также заполнял документацию на поставку продукции и таблицы по инвентаризации имеющегося оборудования." },
  { speaker: "kivvi", bg: ASSETS.backgrounds.prod.kivvi, overlayHide: true, text: "На этом всё интересное касательно моей практики на производстве заканчивается." }
];

const MUSIC_PLAYLIST = [
  { title: "Shop", src: "assets/audio/Shop.mp3" },
  { title: "Snowy", src: "assets/audio/Snowy.mp3" },
  { title: "Dating", src: "assets/audio/Dating.mp3" },
  { title: "HisTheme", src: "assets/audio/HisTheme.mp3" },
  { title: "home", src: "assets/audio/home.mp3" },
  { title: "home2", src: "assets/audio/home2.mp3" },
  { title: "MEGALOVANIA", src: "assets/audio/MEGALOVANIA.mp3" },
  { title: "Menu", src: "assets/audio/Menu.mp3" },
  { title: "Reunited", src: "assets/audio/Reunited.mp3" }
];
let musicIndex = Math.floor(Math.random() * MUSIC_PLAYLIST.length);

function setTrackTitle() {
  if (!UI.trackTitle) return;
  UI.trackTitle.textContent = MUSIC_PLAYLIST[musicIndex]?.title || "—";
}

function loadTrack(idx, { autoplay = false } = {}) {
  if (!UI.bgm) return;
  const n = MUSIC_PLAYLIST.length;
  musicIndex = ((idx % n) + n) % n;
  const track = MUSIC_PLAYLIST[musicIndex];
  UI.bgm.src = track.src;
  setTrackTitle();
  UI.bgm.load();
  if (autoplay) UI.bgm.play().catch(() => {});
}

function nextTrack({ autoplay = true } = {}) { loadTrack(musicIndex + 1, { autoplay }); }
function prevTrack({ autoplay = true } = {}) { loadTrack(musicIndex - 1, { autoplay }); }

const $ = id => document.getElementById(id);
const UI = { screenMenu: $("screen-menu"), screenSelect: $("screen-select"), screenNovel: $("screen-novel"), screenCerts: $("screen-certs"),
  screenInfo: $("screen-info"), fadeLayer: $("fade-layer"), btnEdu: $("btn-edu"), btnProd: $("btn-prod"), btnCerts: $("btn-certs"),
  btnInfo: $("btn-info"), selectTitle: $("select-title"), btnMenuFromSelect: $("btn-menu-from-select"), vnBg: $("vn-bg"), vnLeft: $("vn-left"), vnRight: $("vn-right"), vnName: $("vn-name"), vnText: $("vn-text"), btnNext: $("btn-next"), btnBack: $("btn-back"), btnMenuFromNovel: $("btn-menu-from-novel"), btnHistory: $("btn-history"), btnAuto: $("btn-auto"), historyModal: $("history-modal"), historyList: $("history-list"), historyClose: $("history-close"), vnOverlay: $("vn-overlay"), certsTitle: $("certs-title"), certsSubtitle: $("certs-subtitle"), certsList: $("certs-list"),
  infoSubtitle: $("info-subtitle"),
  infoList: $("info-list"),
  btnMenuFromInfo: $("btn-menu-from-info"), btnMenuFromCerts: $("btn-menu-from-certs"), imgModal: $("img-modal"), imgModalImg: $("img-modal-img"), imgModalClose: $("img-modal-close"), imgModalCaption: $("img-modal-caption"), bgm: $("bgm"), musicBtn: $("music-btn"), musicPanel: $("music-panel"), volumeRange: $("volume-range"), musicToggle: $("music-toggle"), musicMute: $("music-mute"), trackTitle: $("track-title"), musicPrev: $("music-prev"), musicNext: $("music-next") };
let selectContext = null;
let storyKey = "edu";
let storyIndex = 0;
let storyHistory = [];
let autoTimer = null;
let typingTimer = null;
let isTyping = false;
let typingFullText = "";
let typingItalic = false;
const TRANSITION_MS = 900;
function setActiveScreenInstant(screenEl) { [UI.screenMenu, UI.screenSelect, UI.screenNovel, UI.screenCerts, UI.screenInfo].forEach(s => s.classList.remove("active")); screenEl.classList.add("active") }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }
async function goToScreen(screenEl) { UI.fadeLayer.classList.add("on"); await sleep(TRANSITION_MS); setActiveScreenInstant(screenEl); await sleep(40); UI.fadeLayer.classList.remove("on") }
function speakerLabel(speaker) { return speaker === "kivvi" ? "Kivvi" : "Pestolett" }
function getStorySlides() { if (storyKey === "edu") return EDU_SLIDES; if (storyKey === "prod_pest") return PROD_PEST_SLIDES; if (storyKey === "prod_kivvi") return PROD_KIVVI_SLIDES; return EDU_SLIDES }
function escapeHtml(s) { return String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;") }
function setSpriteVisibility(leftVisible, rightVisible) { UI.vnLeft.style.opacity = leftVisible ? "1" : "0"; UI.vnRight.style.opacity = rightVisible ? "1" : "0"; UI.vnLeft.style.pointerEvents = "none"; UI.vnRight.style.pointerEvents = "none" }
function applyFocus(activeSpeaker, mode) {
  const slides = getStorySlides(); const slide = slides[storyIndex]; const speaker = slide?.speaker ?? activeSpeaker; const resolvedMode = slide?.mode || mode;
  if (resolvedMode === "none") { setSpriteVisibility(false, false); UI.vnLeft.classList.remove("active", "inactive"); UI.vnRight.classList.remove("active", "inactive"); return }
  if (resolvedMode === "single-right") { setSpriteVisibility(false, true); UI.vnRight.classList.add("active"); UI.vnRight.classList.remove("inactive"); UI.vnLeft.classList.remove("active", "inactive"); return }
  if (resolvedMode === "single-left") { setSpriteVisibility(true, false); UI.vnLeft.classList.add("active"); UI.vnLeft.classList.remove("inactive"); UI.vnRight.classList.remove("active", "inactive"); return }
  setSpriteVisibility(true, true);
  const leftActive = speaker === "kivvi";
  const rightActive = speaker === "pestolett";
  UI.vnLeft.classList.toggle("active", leftActive); UI.vnLeft.classList.toggle("inactive", !leftActive);
  UI.vnRight.classList.toggle("active", rightActive); UI.vnRight.classList.toggle("inactive", !rightActive)
}
function overlayShow(src, { big = false } = {}) { UI.vnOverlay.classList.remove("hidden"); UI.vnOverlay.classList.remove("slide-out-down"); UI.vnOverlay.classList.toggle("big", !!big); UI.vnOverlay.src = src }
async function overlayHideWithSlideDown() { if (UI.vnOverlay.classList.contains("hidden")) return; UI.vnOverlay.classList.remove("slide-out-down"); void UI.vnOverlay.offsetWidth; UI.vnOverlay.classList.add("slide-out-down"); await sleep(470); UI.vnOverlay.classList.add("hidden"); UI.vnOverlay.classList.remove("slide-out-down"); UI.vnOverlay.src = "" }
function overlayInstantHide() { UI.vnOverlay.classList.add("hidden"); UI.vnOverlay.classList.remove("slide-out-down"); UI.vnOverlay.src = "" }
function stopTyping() { if (typingTimer) clearInterval(typingTimer); typingTimer = null; isTyping = false; typingFullText = ""; typingItalic = false; UI.btnNext.disabled = false }
function finishTypingNow() { if (!isTyping) return; if (typingItalic) { UI.vnText.innerHTML = `<em class="fast-italic">${escapeHtml(typingFullText)}</em>` } else { UI.vnText.textContent = typingFullText } stopTyping() }
function startTyping(text, { italic = false, speed = 22 } = {}) { stopTyping(); isTyping = true; typingFullText = text; typingItalic = italic; UI.btnNext.disabled = true; let i = 0; if (italic) UI.vnText.innerHTML = `<em class="fast-italic"></em>`; else UI.vnText.textContent = ""; const target = italic ? UI.vnText.querySelector("em") : UI.vnText; typingTimer = setInterval(() => { i += 1; target.textContent = text.slice(0, i); if (i >= text.length) { stopTyping() } }, speed) }
async function renderSlide() {
  UI.btnNext.classList.remove("hidden");
  const slides = getStorySlides(); const slide = slides[storyIndex]; if (!slide) return; UI.vnBg.style.backgroundImage = `url("${slide.bg}")`;
  if (storyKey === "edu") { UI.vnLeft.src = ASSETS.sprites.kivvi; UI.vnRight.src = ASSETS.sprites.pestolett; applyFocus(slide.speaker, "dual") } else if (storyKey === "prod_pest") { UI.vnRight.src = ASSETS.sprites.pestolett; applyFocus("pestolett", "single-right") } else if (storyKey === "prod_kivvi") { UI.vnLeft.src = ASSETS.sprites.kivvi; applyFocus("kivvi", "single-left") }
  UI.vnName.textContent = speakerLabel(slide.speaker);
  if (slide.overlayShow) overlayShow(slide.overlayShow, { big: !!slide.overlayBig });
  if (slide.overlayHide) await overlayHideWithSlideDown();
  startTyping(slide.text, { italic: !!slide.italic, speed: slide.italic ? 12 : 20 })
}
function storyDoneText() { if (storyKey === "edu") return "А другие разделы все еще очень ждут в главном меню."; if (storyKey === "prod_pest") return "У меня очень крутые сертификаты..."; if (storyKey === "prod_kivvi") return "Спасибо за внимание. Можно вернуться в меню."; return "Конец." }
function showStoryEnd() {
  stopAuto(); stopTyping(); overlayInstantHide();
  UI.btnNext.classList.add("hidden"); const slides = getStorySlides(); const last = slides[slides.length - 1]; const lastSpeaker = last?.speaker || (storyKey === "prod_pest" ? "pestolett" : "kivvi"); UI.vnName.textContent = speakerLabel(lastSpeaker); UI.vnText.textContent = storyDoneText();
  if (storyKey === "prod_pest") { applyFocus("pestolett", "single-right"); return }
  if (storyKey === "prod_kivvi") { applyFocus("kivvi", "single-left"); return }

}
function nextSlide() { if (isTyping) { finishTypingNow(); return } const slides = getStorySlides(); if (storyIndex >= slides.length) return; const current = slides[storyIndex]; if (current) { storyHistory.push({ who: speakerLabel(current.speaker), text: current.text, italic: !!current.italic }) } storyIndex += 1; if (storyIndex >= slides.length) { showStoryEnd(); return } renderSlide() }
function prevSlide() { stopAuto();
  UI.btnNext.classList.remove("hidden"); if (isTyping) { finishTypingNow(); return } if (storyIndex <= 0) return; storyIndex -= 1; storyHistory = storyHistory.slice(0, Math.max(0, storyIndex)); const slides = getStorySlides(); const cur = slides[storyIndex]; if (!cur?.overlayShow) overlayInstantHide(); renderSlide() }
function openHistory() {
  UI.historyList.innerHTML = ""; const slides = getStorySlides(); const items = storyHistory.slice(); if (slides[storyIndex]) { items.push({ who: speakerLabel(slides[storyIndex].speaker), text: slides[storyIndex].text, italic: !!slides[storyIndex].italic, isCurrent: true }) }
  items.forEach(h => { const div = document.createElement("div"); div.className = "history-item"; const who = document.createElement("div"); who.className = "who"; who.textContent = h.who + (h.isCurrent ? " (сейчас)" : ""); const txt = document.createElement("div"); txt.className = "txt"; if (h.italic) txt.innerHTML = `<em>${escapeHtml(h.text)}</em>`; else txt.textContent = h.text; div.appendChild(who); div.appendChild(txt); UI.historyList.appendChild(div) });
  UI.historyModal.classList.remove("hidden"); UI.historyList.scrollTop = UI.historyList.scrollHeight
}
function closeHistory() { UI.historyModal.classList.add("hidden") }
function startAuto() { if (autoTimer) return; UI.btnAuto.classList.remove("ghost"); UI.btnAuto.setAttribute("aria-pressed", "true"); autoTimer = setInterval(() => { if (isTyping) { finishTypingNow(); return } nextSlide() }, 2200) }
function stopAuto() { if (!autoTimer) return; clearInterval(autoTimer); autoTimer = null; UI.btnAuto.classList.add("ghost"); UI.btnAuto.setAttribute("aria-pressed", "false") }
function toggleAuto() { if (autoTimer) stopAuto(); else startAuto() }
async function openEduStory() { UI.btnNext.classList.remove("hidden");  stopAuto(); stopTyping(); overlayInstantHide(); storyKey = "edu"; storyIndex = 0; storyHistory = []; await goToScreen(UI.screenNovel); renderSlide() }
async function openProdStory(character) { UI.btnNext.classList.remove("hidden");  stopAuto(); stopTyping(); overlayInstantHide(); storyKey = character === "pestolett" ? "prod_pest" : "prod_kivvi"; storyIndex = 0; storyHistory = []; await goToScreen(UI.screenNovel); renderSlide() }
async function openCertificates(character) {
  await goToScreen(UI.screenCerts); UI.screenCerts.classList.toggle("theme-kivvi", character === "kivvi"); UI.screenCerts.classList.toggle("theme-pestolett", character === "pestolett");
  UI.certsSubtitle.textContent = character === "kivvi" ? "Сейчас вы просматриваете сертификаты Kivvi." : "Сейчас вы просматриваете сертификаты Pestolett.";
  UI.certsList.innerHTML = "";
  (CERTS_DATA[character] || []).forEach((item, idx) => {
    const row = document.createElement("div"); row.className = "certs-item";
    const title = document.createElement("div"); title.className = "cert-title"; title.textContent = item.title;
    const img = document.createElement("img"); img.src = item.src; img.alt = `certificate_${character}_${idx + 1}`; img.loading = "lazy"; img.addEventListener("click", () => openImageModal(item.src));
    row.appendChild(title); row.appendChild(img); UI.certsList.appendChild(row)
  })
}

async function openInfo(character) {
  await goToScreen(UI.screenInfo);

  UI.screenInfo.classList.toggle("theme-kivvi", character === "kivvi");
  UI.screenInfo.classList.toggle("theme-pestolett", character === "pestolett");

  UI.infoSubtitle.textContent = character === "kivvi"
    ? "Студент: Kivvi"
    : "Студент: Pestolett";

  const links = INFO_LINKS[character] || {};
  UI.infoList.innerHTML = "";

  const items = [
    { name: "Google Drive", desc: "Папка с материалами", url: links.drive },
    { name: "GitHub", desc: "Профиль / проекты", url: links.github }
  ];

  items.forEach(it => {
    const row = document.createElement("div");
    row.className = "info-item";

    const left = document.createElement("div");
    left.className = "left";
    const n = document.createElement("div");
    n.className = "name";
    n.textContent = it.name;
    const d = document.createElement("div");
    d.className = "desc";
    d.textContent = it.desc;
    left.appendChild(n);
    left.appendChild(d);

    const a = document.createElement("a");
    a.className = "btn";
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = "Открыть";
    a.href = it.url || "#";

    row.appendChild(left);
    row.appendChild(a);
    UI.infoList.appendChild(row);
  });
}

function openImageModal(src, caption = "") { UI.imgModalImg.src = src; if (UI.imgModalCaption) UI.imgModalCaption.textContent = caption || ""; UI.imgModal.classList.remove("hidden") }
function closeImageModal() { UI.imgModal.classList.add("hidden"); UI.imgModalImg.src = ""; if (UI.imgModalCaption) UI.imgModalCaption.textContent = "" }
async function openSelect(context) { selectContext = context; UI.selectTitle.textContent = "Выбор бедного студента"; await goToScreen(UI.screenSelect) }
function ensureAudioStarted() { if (!UI.bgm) return; if (UI.bgm.dataset.started === "1") return; UI.bgm.volume = Number(UI.volumeRange.value || 0.6); UI.bgm.play().then(() => { UI.bgm.dataset.started = "1"; UI.musicToggle.textContent = "Музыка играет" }).catch(() => { }) }
function setMusicOn() { ensureAudioStarted(); UI.bgm.muted = false; UI.bgm.volume = Number(UI.volumeRange.value || 0.6); UI.bgm.play().catch(() => { }); UI.musicToggle.textContent = "Музыка играет" }
function setMusicOff() { UI.bgm.muted = true; UI.musicToggle.textContent = "Включить звук" }
function toggleMusicPanel() { UI.musicPanel.classList.toggle("hidden") }
document.addEventListener("click", ensureAudioStarted, { once: true });
UI.bgm.addEventListener("ended", () => { nextTrack({ autoplay: true }); });
setTrackTitle();
UI.musicBtn.addEventListener("click", e => { e.stopPropagation(); toggleMusicPanel() });
document.addEventListener("click", () => { if (!UI.musicPanel.classList.contains("hidden")) UI.musicPanel.classList.add("hidden") });
UI.musicPanel.addEventListener("click", e => e.stopPropagation());
UI.volumeRange.addEventListener("input", () => { UI.bgm.volume = Number(UI.volumeRange.value); if (UI.bgm.muted && Number(UI.volumeRange.value) > 0) UI.bgm.muted = false });
UI.musicToggle.addEventListener("click", e => { e.stopPropagation(); setMusicOn() });
UI.musicMute.addEventListener("click", e => { e.stopPropagation(); setMusicOff() });
UI.musicPrev.addEventListener("click", e => { e.stopPropagation(); ensureAudioStarted(); prevTrack({ autoplay: true }); });
UI.musicNext.addEventListener("click", e => { e.stopPropagation(); ensureAudioStarted(); nextTrack({ autoplay: true }); });
UI.btnEdu.addEventListener("click", openEduStory);
UI.btnProd.addEventListener("click", () => openSelect("prod"));
UI.btnCerts.addEventListener("click", () => openSelect("certs"));
UI.btnInfo.addEventListener("click", () => {
  const pass = prompt("Введите пароль для доступа:");
  if (pass === "Student123") {
    openSelect("info");
  } else if (pass !== null) {
    openImageModal("assets/easter/PishPish.png", "Неверный пароль.");
  }
});
UI.btnMenuFromSelect.addEventListener("click", async () => { stopAuto(); stopTyping(); overlayInstantHide(); await goToScreen(UI.screenMenu) });
document.querySelectorAll("[data-pick]").forEach(btn => { btn.addEventListener("click", () => { const who = btn.dataset.pick; if (selectContext === "certs") openCertificates(who); else if (selectContext === "prod") openProdStory(who); else if (selectContext === "info") openInfo(who); else goToScreen(UI.screenMenu) }) });
UI.btnNext.addEventListener("click", nextSlide);
UI.vnText.addEventListener("click", nextSlide);
UI.btnBack.addEventListener("click", prevSlide);
UI.btnAuto.addEventListener("click", toggleAuto);
UI.btnHistory.addEventListener("click", openHistory);
UI.historyClose.addEventListener("click", closeHistory);
UI.historyModal.addEventListener("click", e => { if (e.target === UI.historyModal) closeHistory() });
UI.btnMenuFromNovel.addEventListener("click", async () => { stopAuto(); stopTyping(); overlayInstantHide(); await goToScreen(UI.screenMenu) });
UI.btnMenuFromCerts.addEventListener("click", async () => { await goToScreen(UI.screenMenu) });
UI.btnMenuFromInfo.addEventListener("click", async () => { await goToScreen(UI.screenMenu) });
UI.vnOverlay.addEventListener("click", () => { if (!UI.vnOverlay.classList.contains("hidden") && UI.vnOverlay.src) openImageModal(UI.vnOverlay.src) });
UI.imgModalClose.addEventListener("click", closeImageModal);
UI.imgModal.addEventListener("click", e => { if (e.target === UI.imgModal) closeImageModal() });

// === Easter egg ===
window.addEventListener("DOMContentLoaded", () => {
  const easterBtn = document.getElementById("easter-btn");
  if (!easterBtn) return;
  easterBtn.addEventListener("click", () => {
    // Используем уже существующий модал сертификатов
    openImageModal("assets/easter/PishPish.png", "куда ручки тянем");
  });
});
