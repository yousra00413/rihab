/* =====================================================
   ✏️ EDIT HERE — names, texts (EN + AR), questions, reactions
   {name} = birthday girl, {NAME} = uppercase, {maker} = who made the site
   ===================================================== */
const CONFIG = {
  name: { en: "Rihab", ar: "ريحاب" },
  maker: "Yousra"
};

// 🎵 Audio paths
const BIRTHDAY_MUSIC = "birthday.mp3";
const sounds  = { correct: "correct.mp3",  wrong: "wrong.mp3" };    // Game 1
const sounds2 = { correct: "correct2.mp3", wrong: "wrong2.mp3" };   // Game 2

// 🖼️ Reaction images — NOT random. Question n always uses image n (all files are in the SAME root folder):
//   Game 1:  Q1..Q10 → true1..true10.png  / false1..false10.png
//   Game 2:  Q1..Q10 → true11..true20.png / false11..false20.png
function reactionImage(game, kind, qIndex) {
  const n = game === 1 ? qIndex + 1 : qIndex + 11;
  return `${kind === "correct" ? "true" : "false"}${n}.png`;
}

const translations = {
  en: {
    docTitle: "A little surprise for {name} 🎂",
    lines: ["Dear {name}... 💗", "Today is your special day...", "So I wanted to make something a little different for you. 🎀",
            "I made this little surprise just for you.", "Happy Birthday, {name}! 🎂💗", "With love, {maker} ❤️"],
    letsPlay: "LET'S PLAY 🎁",
    before: "Before we begin... 👀",
    whatsName: "What's your name?",
    namePh: "Enter your name",
    nameErr: "Please enter your name first 💗",
    startGame: "START THE GAME ✨",
    question: "Question {n} / {t}",
    next: "NEXT ➜",
    seeScore: "SEE MY SCORE 🏆",
    seeResult: "SEE MY RESULT 🎀",
    complete: "CHALLENGE COMPLETE! 🎉",
    yourScore: "Your Score",
    continueBtn: "CONTINUE 🎁",
    surpriseTitle: "🎁 ONE LITTLE SURPRISE BEFORE THE NEXT GAME 🎁",
    skip: "SKIP → START THE NEXT GAME",
    unmute: "🔊 TAP FOR SOUND",
    g2Title: "🎀 HOW WELL DO YOU KNOW {NAME}?",
    g2Sub: "Let's see who really knows {name}! 👀",
    yes: "YES 💗",
    no: "NO 😂",
    youGot: "You got {s}/20!",
    yourRihabScore: "🎀 YOUR {NAME} SCORE: {s}/20",
    shotTitle: "📸 SCREENSHOT THIS RESULT",
    shotSub: "Send your score to {name} and see if she agrees! 😂💗"
  },
  ar: {
    docTitle: "مفاجأة صغيرة لـ {name} 🎂",
    lines: ["عزيزتي {name}... 💗", "اليوم هو يومك الخاص...", "وحبيت نعمل لك حاجة مختلفة شوية. 🎀",
            "صنعتلك هذا السوربريز الصغير خصيصاً ليك.", "عيد ميلاد سعيد يا {name}! 🎂💗", "بكل حب، {maker} ❤️"],
    letsPlay: "يلا نلعبو 🎁",
    before: "قبل ما نبدأ... 👀",
    whatsName: "شنو هو اسمك؟",
    namePh: "اكتب اسمك",
    nameErr: "اكتب اسمك الأول 💗",
    startGame: "ابدأ اللعبة ✨",
    question: "السؤال {n} / {t}",
    next: "التالي ➜",
    seeScore: "شوف نتيجتي 🏆",
    seeResult: "شوف نتيجتي 🎀",
    complete: "انتهى التحدي! 🎉",
    yourScore: "نتيجتك",
    continueBtn: "كمل 🎁",
    surpriseTitle: "🎁 سوربريز صغير قبل اللعبة الجاية 🎁",
    skip: "تخطي ← ابدأ اللعبة الجاية",
    unmute: "🔊 اضغط للصوت",
    g2Title: "🎀 قداش تعرف {name}؟",
    g2Sub: "نشوفو شكون يعرف {name} بصح! 👀",
    yes: "نعم 💗",
    no: "لا 😂",
    youGot: "جبت {s}/20!",
    yourRihabScore: "🎀 نتيجتك مع {name}: {s}/20",
    shotTitle: "📸 خذ سكرين شوت لهاذ النتيجة",
    shotSub: "ابعت نتيجتك لـ {name} وشوف واش توافق! 😂💗"
  }
};

// ❓ GAME 1 questions. correct = index of the right answer (0 = first ... 3 = fourth).
const questions = [
  { question: { en: "What is {name}'s favorite food?", ar: "شنو هو الأكل المفضل عند {name}؟" },
    answers: { en: ["Gratin", "Pizza", "Sushi", "Pasta"], ar: ["غراتان", "بيتزا", "سوشي", "معكرونة"] }, correct: 0 },
  { question: { en: "What is {name}'s favorite color?", ar: "شنو هو اللون المفضل عند {name}؟" },
    answers: { en: ["Purple", "Pink", "Black", "Blue"], ar: ["بنفسجي", "وردي", "أسود", "أزرق"] }, correct: 0 },
  { question: { en: "What makes {name}'s day perfect?", ar: "شنو اللي يخلي نهار {name} مثالي؟" },
    answers: { en: ["Meeting her favorite friends", "Staying in bed all day", "Shopping alone", "Watching series"], ar: ["تلاقي صحاباتها المفضلين", "تبقى في السرير طول النهار", "التسوق وحدها", "مشاهدة المسلسلات"] }, correct: 0 },
  { question: { en: "What annoys {name} the most during her day?", ar: "شنو أكثر حاجة تزعج {name} في نهارها؟" },
    answers: { en: ["Arguments / fights", "Being late", "Loud noise", "Cold weather"], ar: ["المشاكل / الخصومات", "التأخر", "الضجيج", "البرد"] }, correct: 0 },
  { question: { en: "What word does {name} repeat a lot?", ar: "شنو الكلمة اللي تعاود {name} تقولها بزاف؟" },
    answers: { en: ["“Ah!”", "“Seriously?”", "“Wow!”", "“Okay!”"], ar: ["«آه!»", "«بصح؟»", "«واو!»", "«أوكي!»"] }, correct: 0 },
  { question: { en: "What does {name} like to do in her free time?", ar: "شنو تحب {name} دير في وقت فراغها؟" },
    answers: { en: ["Go out", "Sleep", "Cook", "Read"], ar: ["تخرج", "تنعس", "تطيب", "تقرا"] }, correct: 0 },
  { question: { en: "What country does {name} love?", ar: "أي بلاد تحب {name}؟" },
    answers: { en: ["Switzerland", "Turkey", "Japan", "Italy"], ar: ["سويسرا", "تركيا", "اليابان", "إيطاليا"] }, correct: 0 },
  { question: { en: "Who knows {name} the most?", ar: "شكون أكثر واحد يعرف {name}؟" },
    answers: { en: ["Yasou & Yousra", "Her mom", "Her cousin", "Her teacher"], ar: ["ياسو و يسرى", "أمها", "بنت عمها", "أستاذتها"] }, correct: 0 },
  { question: { en: "What does {name} enjoy more?", ar: "شنو تحب {name} أكثر؟" },
    answers: { en: ["Staying home", "Going out"], ar: ["البقاء في البيت", "الخروج"] }, correct: 1 },
  { question: { en: "What kind of gifts does {name} like the most?", ar: "أي نوع من الهدايا تحب {name} أكثر؟" },
    answers: { en: ["Makeup 💄", "Books", "Perfume", "Bags"], ar: ["مكياج 💄", "كتب", "عطر", "حقائب"] }, correct: 0 }
];

// 🎀 GAME 2 — YES / NO questions about Rihab.
//   answer: true = YES is correct, false = NO is correct
//   special (optional): custom reaction text depending on what the player pressed
const yesNoQuestions = [
  { question: { en: "Does {name} like chocolate? 🍫",             ar: "{name} تحب الشوكولا؟ 🍫" },                 answer: true  },
  { question: { en: "Is {name} always late? ⏰",                   ar: "{name} دايماً متأخرة؟ ⏰" },                 answer: true  },
  { question: { en: "Does {name} like onions? 🧅",                 ar: "{name} تحب البصل؟ 🧅" },                    answer: false },
  { question: { en: "Does {name} love you more than Yousra? 😏",   ar: "{name} تحبك أكثر من يسرى؟ 😏" },            answer: false,
    special: {
      yes: { en: "You’re crazy! 😂💀", ar: "راك مجنون! 😂💀" },
      no:  { en: "Of courseee! 💜",    ar: "طبعااااا! 💜" }
    } },
  { question: { en: "Does {name} like taking pictures? 📸",        ar: "{name} تحب تتصور؟ 📸" },                    answer: true  },
  { question: { en: "Does {name} know how to cook? 🍳",            ar: "{name} تعرف تطيب؟ 🍳" },                    answer: false },
  { question: { en: "Does {name} like music? 🎶",                  ar: "{name} تحب الموسيقى؟ 🎶" },                 answer: true  },
  { question: { en: "Does {name} like the blue Maruti? 🚗",        ar: "{name} تحب الماروتي الزرقاء؟ 🚗" },         answer: true  },
  { question: { en: "Does {name} like surprises? 🎁",              ar: "{name} تحب المفاجآت؟ 🎁" },                 answer: true  },
  { question: { en: "Does {name} like makeup? 💄",                 ar: "{name} تحب المكياج؟ 💄" },                  answer: true  }
];

// 😂 Game 1 reaction texts (randomized, never the same twice in a row)
const reactions = {
  correct: [
    { en: "BRAVOOO! 🎉", ar: "برافوووو! 🎉" },
    { en: "YESSS! You got it! 💗", ar: "ييييه! جبتها! 💗" },
    { en: "Look at you! 😭👏", ar: "شوف روحك! 😭👏" },
    { en: "PERFECT! 🎀", ar: "بيرفيكت! 🎀" },
    { en: "{NAME} KNOWS EVERYTHING! 😂", ar: "{name} تعرف كلش! 😂" }
  ],
  wrong: [
    { en: "NOOOO 😭", ar: "لااااا 😭" },
    { en: "Girl... WHAT WAS THAT? 😂", ar: "يا بنت... هاذي شنو كانت؟ 😂" },
    { en: "TRY AGAIN 😭", ar: "عاود حاول 😭" },
    { en: "YOU REALLY CHOSE THAT?! 💀", ar: "بصح اخترتي هاذي؟! 💀" },
    { en: "{name} please 😭😂", ar: "{name} عافاك 😭😂" }
  ]
};

// 😂 Game 2 reaction texts
const reactions2 = {
  correct: [
    { en: "BRAVOOO! 😂", ar: "برافوووو! 😂" },
    { en: "You really know her! 💗", ar: "راك تعرفها بصح! 💗" },
    { en: "OMG YES! 🎀", ar: "يا ربي أيوااا! 🎀" },
    { en: "Best friend energy! 😭👏", ar: "طاقة صديق حقيقي! 😭👏" },
    { en: "{NAME} would be proud! 🥹", ar: "{name} تفتخر بيك! 🥹" }
  ],
  wrong: [
    { en: "NOOO 😭💀", ar: "لااااا 😭💀" },
    { en: "Do you even know her?! 😂", ar: "واش تعرفها أصلاً؟! 😂" },
    { en: "{name} is judging you 👀", ar: "{name} راهي تحكم عليك 👀" },
    { en: "Friendship: questioned 😭", ar: "الصداقة: في خطر 😭" },
    { en: "Wrong! But we love you 💗😂", ar: "غلط! بصح نحبوك 💗😂" }
  ]
};

// 🏆 Game 1 score messages: the first row where score <= max is used
const resultMessages = [
  { max: 3,  en: "💀 Do you even know {name}?",                 ar: "💀 واش تعرف {name} أصلاً؟" },
  { max: 6,  en: "😭 You need to spend more time with her!",    ar: "😭 لازم تقضي وقت أكثر معاها!" },
  { max: 8,  en: "💗 Not bad! You actually know {name}!",       ar: "💗 ماشي بالزاف! راك تعرفها فعلاً!" },
  { max: 9,  en: "👀 Okayyy, you know {name} VERY well!",       ar: "👀 أوووه، راك تعرف {name} مليح بزاف!" },
  { max: 10, en: "👑 {NAME} EXPERT!\nNobody knows her better!", ar: "👑 خبير {name}!\nحتى واحد ما يعرفها كيما أنت!" }
];

// 🎀 Game 2 final result (score out of 20): first row where score >= min is used
const finalResults = [
  { min: 18, title: { en: "🎀 {NAME} EXPERT 🎀",      ar: "🎀 خبير {name} 🎀" },
             msg:   { en: "OMG 😭💗 You REALLY know {name}!",                       ar: "يا ربي 😭💗 راك تعرف {name} بصح!" } },
  { min: 14, title: { en: "✨ ALMOST AN EXPERT ✨",    ar: "✨ تقريباً خبير ✨" },
             msg:   { en: "Okayyy, you know her pretty well! 😂🎀",                 ar: "أوووه، راك تعرفها مليح! 😂🎀" } },
  { min: 10, title: { en: "😅 NOT BAD 😅",            ar: "😅 ماشي بالزاف 😅" },
             msg:   { en: "Not bad... but {name} might disagree 😂",                ar: "ماشي بالزاف... بصح {name} ممكن ما توافقش 😂" } },
  { min: 0,  title: { en: "💀 WHO ARE YOU? 💀",       ar: "💀 شكون نتا؟ 💀" },
             msg:   { en: "{name} is probably questioning your friendship right now 😭💀", ar: "{name} راهي تراجع صداقتكم دوكا 😭💀" } }
];
/* ================= END OF EDITABLE SECTION ================= */

const $ = (id) => document.getElementById(id);
let lang = "en";
const fill = (s) => s
  .replaceAll("{name}", CONFIG.name[lang]).replaceAll("{NAME}", CONFIG.name[lang].toUpperCase())
  .replaceAll("{maker}", CONFIG.maker);
const t = (key) => fill(translations[lang][key]);
const loc = (v) => (typeof v === "string" ? v : v[lang] || v.en);   // plain string OR {en, ar}
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const rand = (a, b) => a + Math.random() * (b - a);
const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pickNew = (n, last) => { let i; do { i = Math.floor(Math.random() * n); } while (n > 1 && i === last); return i; };

// ---- State ----
let screen = "s-intro", game = 1, current = 0, score = 0, locked = false;
let react = null, order = [0, 1, 2, 3];
const newOrder = () => { order = shuffle(questions[current].answers.en.map((_, i) => i)); };   // Game 1: the correct answer lands in a random position
const lastTxt = { correct: -1, wrong: -1 };
let lastPos = -1;

/* ---------- Language ---------- */
function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  document.title = t("docTitle");
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => (el.placeholder = t(el.dataset.i18nPh)));
  $("lang-en").classList.toggle("on", l === "en");
  $("lang-ar").classList.toggle("on", l === "ar");
  $("unmute-btn").textContent = t("unmute");
  renderMsg(false);
  if (screen === "s-quiz") renderQuestion(true);
  if (screen === "s-quiz2") renderQuestion2(true);
  if (react) renderReactionText();
  if (screen === "s-result") renderResult();
  if (screen === "s-final") renderFinal();
}
$("lang-en").addEventListener("click", () => applyLang("en"));
$("lang-ar").addEventListener("click", () => applyLang("ar"));

function show(id) {
  screen = id;
  document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("active", s.id === id));
  document.body.classList.toggle("intro", id === "s-intro");
  window.scrollTo(0, 0);
}

/* ---------- Birthday music: plays from the very start, stops for good when Game 1 starts ----------
   Browsers may block sound before any interaction. So we (1) try to play right away, (2) if blocked, start it
   MUTED (allowed everywhere) and (3) unmute / start it on the visitor's very first tap, click or key press. */
const music = $("music");
let musicAllowed = true;                                   // becomes false once Game 1 starts
const GESTURES = ["pointerdown", "pointerup", "mousedown", "touchend", "click", "keydown"];
function removeGestureListeners() { GESTURES.forEach((g) => document.removeEventListener(g, onFirstGesture, true)); }
function onFirstGesture() {
  if (!musicAllowed) return removeGestureListeners();
  music.muted = false; music.volume = 1;
  music.play().then(removeGestureListeners).catch(() => {});
}
function tryAutoplay() {
  music.volume = 1; music.muted = false;
  music.play().catch(() => {                                // blocked → run muted, unmute on first gesture
    music.muted = true;
    music.play().catch(() => {});
  });
  GESTURES.forEach((g) => document.addEventListener(g, onFirstGesture, true));
}
music.addEventListener("playing", () => { if (!music.muted) removeGestureListeners(); });
function stopMusic() {
  musicAllowed = false; removeGestureListeners();
  music.pause(); music.muted = true; music.currentTime = 0;
}
tryAutoplay();
document.addEventListener("visibilitychange", () => { if (!document.hidden && musicAllowed && music.paused) music.play().catch(() => {}); });

/* ---------- Reaction sounds: only ONE at a time ---------- */
let reactionSound = null;
function stopReactionSound() {
  if (!reactionSound) return;
  reactionSound.pause();
  try { reactionSound.currentTime = 0; } catch {}
  reactionSound.onended = null;
  reactionSound = null;
}
function playReactionSound(src) {
  stopReactionSound();
  const a = new Audio(src);
  reactionSound = a;
  a.onended = () => { if (reactionSound === a) reactionSound = null; };
  a.play().catch(() => {});
}

/* ---------- 1. Birthday scene: message revealed line by line (slow) ---------- */
let revealed = 0;
const LINE_GAP = 3200, LINE_FADE = 2000;
const lineCount = () => translations[lang].lines.length;
function renderMsg(animateLast) {
  const box = $("msg"); box.innerHTML = "";
  translations[lang].lines.slice(0, revealed).forEach((txt, i) => {
    const p = document.createElement("p");
    p.className = "line " + (animateLast && i === revealed - 1 ? "show" : "old");
    p.textContent = fill(txt);
    box.appendChild(p);
  });
}
function revealNext() {
  if (revealed < lineCount()) {
    revealed++; renderMsg(true);
    if (revealed < lineCount()) setTimeout(revealNext, LINE_GAP);
    else setTimeout(() => { $("play-btn").hidden = false; }, LINE_FADE + 300);   // ONLY after the whole message is shown
  }
}
setTimeout(revealNext, 1000);
$("play-btn").addEventListener("click", () => {
  if (musicAllowed) { music.muted = false; if (music.paused) music.play().catch(() => {}); }   // never restarts it; just makes sure it is audible
  confetti(0); show("s-name");
});

/* ---------- 2. Name ---------- */
$("start-btn").addEventListener("click", startGame1);
$("player-name").addEventListener("keydown", (e) => e.key === "Enter" && startGame1());
function startGame1() {
  const name = $("player-name").value.trim();
  $("name-error").hidden = !!name;
  if (!name) return $("player-name").focus();
  stopMusic();                                               // birthday music stops for good
  game = 1; current = 0; score = 0; locked = false; react = null;
  newOrder(); show("s-quiz"); renderQuestion();
}

/* ---------- 3. GAME 1 ---------- */
function renderQuestion(keepLock) {
  const q = questions[current];
  $("q-count").textContent = t("question").replace("{n}", current + 1).replace("{t}", questions.length);
  $("q-score").textContent = `💗 ${score}`;
  $("bar-fill").style.width = `${(current / questions.length) * 100}%`;
  $("q-text").textContent = fill(q.question[lang]);
  $("answers").innerHTML = "";
  order.forEach((i) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "answer"; b.dataset.idx = i; b.textContent = fill(q.answers[lang][i]);
    if (keepLock && locked) b.disabled = true;
    b.addEventListener("click", () => choose(i));
    $("answers").appendChild(b);
  });
}

function choose(i) {
  if (locked) return;
  locked = true;
  const q = questions[current], ok = i === q.correct;
  if (ok) score++;
  $("q-score").textContent = `💗 ${score}`;
  document.querySelectorAll("#answers .answer").forEach((b) => {
    const k = Number(b.dataset.idx);
    b.disabled = true;
    if (k === q.correct) b.classList.add("correct"); else if (k === i) b.classList.add("wrong");
  });
  showReaction(ok, "s-quiz");
}

/* ---------- Reaction popup (shared by both games) ---------- */
// Playful but SAFE position: small offsets that keep the image fully inside the viewport.
const POSITIONS = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, -1], [-1, 1], [1, 1]];
function randomizeStage() {
  let k; do { k = Math.floor(Math.random() * POSITIONS.length); } while (k === lastPos);
  lastPos = k;
  const [fx, fy] = POSITIONS[k];
  const imgW = Math.min(innerWidth * 0.8, 400);
  const maxX = Math.max(0, Math.min(70, (innerWidth - imgW) / 2 - 10));   // never leaves the screen sideways
  const st = $("react-stage");
  st.style.setProperty("--px", Math.round(fx * maxX) + "px");
  st.style.setProperty("--py", (fy < 0 ? -28 : fy > 0 ? 8 : 0) + "px");  // up a bit more than down → text/button never covered
}

const totalQuestions = () => (game === 1 ? questions.length : yesNoQuestions.length);

function renderReactionText() {
  if (!react) return;
  const set = game === 1 ? reactions : reactions2;
  $("react-text").textContent = react.custom
    ? fill(react.custom[lang])
    : fill(set[react.ok ? "correct" : "wrong"][react.txt][lang]);
  const last = current === totalQuestions() - 1;
  $("next-btn").textContent = t(last ? (game === 1 ? "seeScore" : "seeResult") : "next");
}

function showReaction(ok, screenId, custom) {
  const kind = ok ? "correct" : "wrong";
  const set = game === 1 ? reactions : reactions2;
  const j = pickNew(set[kind].length, lastTxt[kind]); lastTxt[kind] = j;
  react = { ok, txt: j, custom: custom || null };

  playReactionSound((game === 1 ? sounds : sounds2)[kind]);   // plays immediately on selection

  const ov = $("reaction"), img = $("react-img");
  ov.className = "reaction-overlay " + (ok ? "ok" : "bad");
  img.hidden = false;
  img.onerror = () => { img.hidden = true; };
  randomizeStage();
  img.src = reactionImage(game, kind, current);               // image number = question number
  renderReactionText();
  ov.hidden = false;
  $(screenId).classList.add("dim");
}

function resetReaction() {
  stopReactionSound();                                        // 1. stop sound
  const img = $("react-img");
  img.onerror = null; img.hidden = true; img.removeAttribute("src");   // 2. remove image
  $("react-stage").style.removeProperty("--px"); $("react-stage").style.removeProperty("--py");
  $("react-text").textContent = "";                           // 3. remove text
  $("reaction").hidden = true;                                // 4. hide overlay
  document.querySelectorAll(".screen.dim").forEach((s) => s.classList.remove("dim"));
  react = null; locked = false;                               // 5. reset completely
}

$("next-btn").addEventListener("click", () => {               // the ONLY way to move on (never automatic)
  resetReaction();
  current++;
  if (current < totalQuestions()) {
    if (game === 1) { newOrder(); renderQuestion(); } else renderQuestion2();
    window.scrollTo(0, 0);
  } else if (game === 1) finishGame1();
  else finishGame2();
});

/* ---------- 4. GAME 1 RESULT (no leaderboard) ---------- */
function renderResult() {
  $("final-score").textContent = `${score} / ${questions.length}`;
  const r = resultMessages.find((m) => score <= m.max) || resultMessages[resultMessages.length - 1];
  $("score-msg").textContent = fill(r[lang]);
  $("score-msg").style.whiteSpace = "pre-line";
}
function finishGame1() { show("s-result"); renderResult(); }
$("continue-btn").addEventListener("click", startSurprise);

/* ---------- 5. SURPRISE VIDEO (between the games) ---------- */
const video = $("video");
let surpriseOpen = false;

function startVideo() {
  video.currentTime = 0;
  video.muted = false;
  const p = video.play();
  if (p && p.catch) p.catch(() => {                          // autoplay with sound blocked → start muted at once
    video.muted = true;
    video.play().catch(() => {});
  });
}
function checkVideoTrack() {                                 // audio plays but no picture = unsupported codec (e.g. HEVC)
  $("video-warn").hidden = !(video.readyState >= 1 && video.videoWidth === 0);
}
video.addEventListener("loadedmetadata", checkVideoTrack);
video.addEventListener("error", () => { $("video-warn").hidden = false; });
const syncUnmute = () => { $("unmute-btn").hidden = !video.muted; };
video.addEventListener("volumechange", syncUnmute);
video.addEventListener("play", syncUnmute);
$("unmute-btn").addEventListener("click", () => { video.muted = false; video.volume = 1; video.play().catch(() => {}); syncUnmute(); });

function startSurprise() {
  stopReactionSound(); stopMusic();
  surpriseOpen = true;
  $("surprise").hidden = false; document.body.style.overflow = "hidden";
  video.load(); startVideo();                                // inside the click → sound is allowed
}
function endSurprise() {                                     // used by SKIP and by the video ending
  if (!surpriseOpen) return;
  surpriseOpen = false;
  video.pause();
  $("surprise").hidden = true; document.body.style.overflow = "";
  startGame2();
}
$("skip-btn").addEventListener("click", endSurprise);
video.addEventListener("ended", endSurprise);

/* ---------- 6. GAME 2 — YES / NO ---------- */
function startGame2() {
  game = 2; current = 0; score = 0; locked = false; react = null;
  show("s-quiz2"); renderQuestion2();
}
function renderQuestion2(keepLock) {
  const q = yesNoQuestions[current];
  if (!q) return;
  $("q2-count").textContent = t("question").replace("{n}", current + 1).replace("{t}", yesNoQuestions.length);
  $("q2-score").textContent = `💗 ${score}`;
  $("bar-fill2").style.width = `${(current / yesNoQuestions.length) * 100}%`;
  $("q2-text").textContent = fill(loc(q.question));
  $("yesno").innerHTML = "";
  [[true, "yes"], [false, "no"]].forEach(([val, key]) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "answer"; b.dataset.val = String(val); b.textContent = t(key);
    if (keepLock && locked) b.disabled = true;
    b.addEventListener("click", () => choose2(val));
    $("yesno").appendChild(b);
  });
}
function choose2(val) {
  if (locked) return;
  locked = true;
  const q = yesNoQuestions[current], ok = val === q.answer;
  if (ok) score++;
  $("q2-score").textContent = `💗 ${score}`;
  document.querySelectorAll("#yesno .answer").forEach((b) => {
    b.disabled = true;
    if (b.dataset.val === String(q.answer)) b.classList.add("correct");
    else if (b.dataset.val === String(val)) b.classList.add("wrong");
  });
  showReaction(ok, "s-quiz2", q.special ? q.special[val ? "yes" : "no"] : null);
}

/* ---------- 7. FINAL RESULT (score shown out of 20) ---------- */
const score20 = () => Math.round((score / yesNoQuestions.length) * 20);
function renderFinal() {
  const s = score20();
  const r = finalResults.find((x) => s >= x.min);
  $("f-title").textContent = fill(loc(r.title));
  $("f-got").textContent = t("youGot").replace("{s}", s);
  $("f-score").textContent = t("yourRihabScore").replace("{s}", s);
  $("f-msg").textContent = fill(loc(r.msg));
}
function finishGame2() {
  show("s-final"); renderFinal();
  if (!calm) confetti(score20() >= 14 ? 90 : 30);
}

/* ---------- Floating decorations ---------- */
const balloonColors = ["#ff8fbb", "#ff6fa5", "#ffd6e7", "#d6336c", "#ffb3d1", "#ffffff"];
function floater(container, kind, preRoll) {
  kind = kind || pick(["heart", "heart", "balloon", "balloon", "sparkle", "star"]);
  const el = document.createElement("span"); el.className = "float";
  if (kind === "balloon") {
    el.classList.add("bl"); el.style.background = pick(balloonColors);
    const s = rand(26, 46); el.style.width = s + "px"; el.style.height = s * 1.25 + "px";
  } else {
    el.textContent = { heart: pick(["💗", "💖", "💕"]), sparkle: "✨", star: "⭐" }[kind];
    el.style.fontSize = rand(14, 30) + "px";
  }
  const d = rand(8, 15);
  el.style.left = rand(2, 94) + "%";
  el.style.animationDuration = d + "s";
  el.style.animationDelay = preRoll ? -rand(0, d * .8) + "s" : "0s";
  el.style.setProperty("--dx", rand(-70, 70) + "px");
  el.style.setProperty("--rot", rand(-35, 35) + "deg");
  container.appendChild(el);
  setTimeout(() => el.remove(), d * 1000 + 300);
}
function ambient() {
  const box = $("floaters");
  if (!document.hidden && box.children.length < 24 && (screen === "s-intro" || Math.random() < .3)) floater(box);
  setTimeout(ambient, rand(500, 1100));
}
if (!calm) { for (let i = 0; i < 8; i++) floater($("floaters"), null, true); ambient(); }

/* ---------- Cake ---------- */
const CAKE = `<svg viewBox="0 0 200 190" role="img" aria-label="Birthday cake">
<ellipse cx="100" cy="176" rx="88" ry="10" fill="#f3b6cf"/>
<rect x="22" y="126" width="156" height="48" rx="14" fill="#ff8fbb"/>
<path d="M22 140q13 16 26 0t26 0 26 0 26 0 26 0 26 0v-4H22z" fill="#fff"/>
<rect x="48" y="84" width="104" height="44" rx="12" fill="#ffb3d1"/>
<path d="M48 98q13 14 26 0t26 0 26 0 26 0v-4H48z" fill="#fff"/>
<g fill="#d6336c"><circle cx="40" cy="160" r="3"/><circle cx="90" cy="156" r="3"/><circle cx="140" cy="162" r="3"/><circle cx="165" cy="152" r="3"/><circle cx="70" cy="116" r="3"/><circle cx="125" cy="118" r="3"/></g>
<g><rect x="78" y="58" width="8" height="28" rx="3" fill="#fff"/><rect x="96" y="58" width="8" height="28" rx="3" fill="#ffd6e7"/><rect x="114" y="58" width="8" height="28" rx="3" fill="#fff"/></g>
<g fill="#ffc94d"><ellipse class="flame" cx="82" cy="50" rx="5" ry="9"/><ellipse class="flame" cx="100" cy="50" rx="5" ry="9" style="animation-delay:.2s"/><ellipse class="flame" cx="118" cy="50" rx="5" ry="9" style="animation-delay:.4s"/></g>
</svg>`;
$("cake").innerHTML = CAKE;

/* ---------- Confetti ---------- */
const cv = $("confetti"), ctx = cv.getContext("2d");
const colors = ["#ff6fa5", "#ffb3d1", "#ffd6e7", "#ffffff", "#d6336c", "#ffd166"];
let bits = [], raf = 0;
const sizeCv = () => { cv.width = innerWidth; cv.height = innerHeight; };
addEventListener("resize", sizeCv); sizeCv();
const newBit = (scatter) => ({
  x: Math.random() * cv.width, y: scatter ? -Math.random() * cv.height : -10,
  w: 6 + Math.random() * 7, h: 4 + Math.random() * 5, c: pick(colors),
  vy: 1.5 + Math.random() * 2.5, vx: -1 + Math.random() * 2, r: Math.random() * 6, vr: -.1 + Math.random() * .2
});
function confetti(n) {
  cancelAnimationFrame(raf);
  bits = Array.from({ length: n }, () => newBit(true));
  ctx.clearRect(0, 0, cv.width, cv.height);
  if (!n) return;
  (function frame() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    bits.forEach((b, i) => {
      b.x += b.vx; b.y += b.vy; b.r += b.vr;
      if (b.y > cv.height) bits[i] = newBit(false);
      ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.r);
      ctx.fillStyle = b.c; ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h); ctx.restore();
    });
    raf = requestAnimationFrame(frame);
  })();
}
if (!calm) confetti(30);

applyLang("en");