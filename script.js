// ===== Word Bank: 30 CET-4/6 words =====
var WORD_BANK = [
  { word: "abandon", phonetic: "/əˈbændən/", meaning: "v. 放弃；抛弃", sentence: "We cannot abandon our responsibilities.", sentenceTranslation: "我们不能放弃自己的责任。", collocation: "abandon hope" },
  { word: "abolish", phonetic: "/əˈbɒlɪʃ/", meaning: "v. 废除；取消", sentence: "Many countries have abolished the death penalty.", sentenceTranslation: "许多国家已经废除了死刑。", collocation: "abolish slavery" },
  { word: "absorb", phonetic: "/əbˈzɔːb/", meaning: "v. 吸收；吸引注意力", sentence: "Plants absorb nutrients from the soil.", sentenceTranslation: "植物从土壤中吸收养分。", collocation: "absorb knowledge" },
  { word: "abstract", phonetic: "/ˈæbstrækt/", meaning: "adj. 抽象的 n. 摘要", sentence: "Abstract art can be difficult to understand.", sentenceTranslation: "抽象艺术可能难以理解。", collocation: "abstract concept" },
  { word: "abundant", phonetic: "/əˈbʌndənt/", meaning: "adj. 丰富的；充裕的", sentence: "The region has abundant natural resources.", sentenceTranslation: "该地区有丰富的自然资源。", collocation: "abundant supply" },
  { word: "accelerate", phonetic: "/əkˈseləreɪt/", meaning: "v. 加速；促进", sentence: "We need to accelerate the pace of reform.", sentenceTranslation: "我们需要加快改革步伐。", collocation: "accelerate growth" },
  { word: "accommodate", phonetic: "/əˈkɒmədeɪt/", meaning: "v. 容纳；提供住宿；适应", sentence: "The hotel can accommodate up to 300 guests.", sentenceTranslation: "这家酒店最多可容纳300位客人。", collocation: "accommodate needs" },
  { word: "achieve", phonetic: "/əˈtʃiːv/", meaning: "v. 实现；达到", sentence: "Hard work helps you achieve your goals.", sentenceTranslation: "努力工作能帮你实现目标。", collocation: "achieve success" },
  { word: "acknowledge", phonetic: "/əkˈnɒlɪdʒ/", meaning: "v. 承认；感谢", sentence: "She acknowledged her mistake publicly.", sentenceTranslation: "她公开承认了自己的错误。", collocation: "acknowledge receipt" },
  { word: "acquire", phonetic: "/əˈkwaɪər/", meaning: "v. 获得；习得", sentence: "Reading helps you acquire new vocabulary.", sentenceTranslation: "阅读能帮你获得新词汇。", collocation: "acquire skills" },
  { word: "adapt", phonetic: "/əˈdæpt/", meaning: "v. 适应；改编", sentence: "It takes time to adapt to a new environment.", sentenceTranslation: "适应新环境需要时间。", collocation: "adapt to change" },
  { word: "adequate", phonetic: "/ˈædɪkwət/", meaning: "adj. 足够的；适当的", sentence: "We need adequate preparation before the exam.", sentenceTranslation: "考试前我们需要充分准备。", collocation: "adequate supply" },
  { word: "administer", phonetic: "/ədˈmɪnɪstər/", meaning: "v. 管理；执行", sentence: "The system is administered by a central authority.", sentenceTranslation: "该系统由一个中央机构管理。", collocation: "administer justice" },
  { word: "adverse", phonetic: "/ˈædvɜːs/", meaning: "adj. 不利的；有害的", sentence: "Adverse weather conditions delayed the flight.", sentenceTranslation: "恶劣的天气条件延误了航班。", collocation: "adverse effect" },
  { word: "advocate", phonetic: "/ˈædvəkeɪt/", meaning: "v. 提倡；拥护 n. 支持者", sentence: "Many experts advocate a balanced diet.", sentenceTranslation: "许多专家提倡均衡饮食。", collocation: "advocate for change" },
  { word: "aggregate", phonetic: "/ˈæɡrɪɡət/", meaning: "v. 聚集；合计 n. 总计", sentence: "The data is aggregated from multiple sources.", sentenceTranslation: "这些数据来自多个来源的汇总。", collocation: "aggregate demand" },
  { word: "allocate", phonetic: "/ˈæləkeɪt/", meaning: "v. 分配；拨出", sentence: "The government allocated funds for education.", sentenceTranslation: "政府为教育拨出了资金。", collocation: "allocate resources" },
  { word: "analogy", phonetic: "/əˈnælədʒi/", meaning: "n. 类比；比喻", sentence: "The teacher used an analogy to explain the concept.", sentenceTranslation: "老师用了类比来解释这个概念。", collocation: "draw an analogy" },
  { word: "anticipate", phonetic: "/ænˈtɪsɪpeɪt/", meaning: "v. 预期；预见", sentence: "We anticipate a rise in demand next year.", sentenceTranslation: "我们预期明年需求会上升。", collocation: "anticipate problems" },
  { word: "appropriate", phonetic: "/əˈprəʊpriət/", meaning: "adj. 适当的；恰当的", sentence: "Is this appropriate for a formal occasion?", sentenceTranslation: "这在正式场合合适吗？", collocation: "appropriate behavior" },
  { word: "attribute", phonetic: "/əˈtrɪbjuːt/", meaning: "v. 归因于 n. 属性", sentence: "She attributed her success to hard work.", sentenceTranslation: "她把自己的成功归因于努力工作。", collocation: "attribute to" },
  { word: "authority", phonetic: "/ɔːˈθɒrəti/", meaning: "n. 权威；当局", sentence: "You should cite an academic authority in your essay.", sentenceTranslation: "你应在论文中引用学术权威。", collocation: "authority figure" },
  { word: "beneficial", phonetic: "/ˌbenɪˈfɪʃl/", meaning: "adj. 有益的；有利的", sentence: "Exercise is beneficial to both body and mind.", sentenceTranslation: "锻炼对身体和心灵都有益。", collocation: "beneficial effect" },
  { word: "coherent", phonetic: "/kəʊˈhɪərənt/", meaning: "adj. 连贯的；有条理的", sentence: "The essay lacks a coherent argument.", sentenceTranslation: "这篇论文缺乏连贯的论点。", collocation: "coherent strategy" },
  { word: "compatible", phonetic: "/kəmˈpætəbl/", meaning: "adj. 兼容的；相容的", sentence: "Is this software compatible with Windows?", sentenceTranslation: "这款软件与 Windows 兼容吗？", collocation: "compatible with" },
  { word: "comprehensive", phonetic: "/ˌkɒmprɪˈhensɪv/", meaning: "adj. 全面的；综合的", sentence: "We need a comprehensive solution to this problem.", sentenceTranslation: "我们需要一个全面的解决方案。", collocation: "comprehensive review" },
  { word: "controversy", phonetic: "/ˈkɒntrəvɜːsi/", meaning: "n. 争议；争论", sentence: "The proposal sparked a heated controversy.", sentenceTranslation: "该提案引发了激烈的争议。", collocation: "spark controversy" },
  { word: "decline", phonetic: "/dɪˈklaɪn/", meaning: "v/n. 下降；衰退；婉拒", sentence: "The population of the village continues to decline.", sentenceTranslation: "该村庄的人口持续下降。", collocation: "decline an offer" },
  { word: "domestic", phonetic: "/dəˈmestɪk/", meaning: "adj. 国内的；家庭的", sentence: "The domestic economy is growing steadily.", sentenceTranslation: "国内经济正稳步增长。", collocation: "domestic policy" },
  { word: "elaborate", phonetic: "/ɪˈlæbərət/", meaning: "v. 详细阐述 adj. 精巧的", sentence: "Could you elaborate on your proposal?", sentenceTranslation: "你能详细阐述一下你的提议吗？", collocation: "elaborate on" }
];

// ===== Constants =====
var STORAGE_KEY = "dailyvocab_app_data";
var DEFAULT_NEW = 10;
var REVIEW_LIMIT = 15;
var EXTRA_NEW = 5;
var REVIEW_INTERVALS = [1, 3, 7, 15, 30];
var MAX_REVIEWS = 5;

// ===== Helpers =====
function getToday() {
  var d = new Date();
  return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
}
function pad(n) { return n < 10 ? "0" + n : "" + n; }

function addDays(dateStr, days) {
  var parts = dateStr.split("-");
  var d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  d.setDate(d.getDate() + days);
  return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
}

function mulberry32(a) {
  return function() {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    var t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function shuffleSeeded(arr, seed) {
  var rng = mulberry32(seed);
  var result = arr.slice();
  for (var i = result.length - 1; i > 0; i--) {
    var j = Math.floor(rng() * (i + 1));
    var tmp = result[i]; result[i] = result[j]; result[j] = tmp;
  }
  return result;
}

// ===== Data Defaults =====
function getDefaultData() {
  return {
    wordProgress: {},
    streak: 0,
    lastActiveDate: "",
    today: null
  };
}

// ===== Storage =====
function loadData() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultData();
    var d = JSON.parse(raw);
    if (!d.wordProgress) d.wordProgress = {};
    if (!d.streak) d.streak = 0;
    if (!d.lastActiveDate) d.lastActiveDate = "";
    if (!d.today) d.today = null;
    return d;
  } catch(e) {
    return getDefaultData();
  }
}

function saveData() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(appData)); } catch(e) {}
}

// ===== Streak =====
function updateStreak() {
  var today = getToday();
  var yesterday = addDays(today, -1);
  if (appData.lastActiveDate === today) return;
  if (appData.lastActiveDate === yesterday) {
    appData.streak += 1;
  } else if (appData.lastActiveDate !== today) {
    appData.streak = 1;
  }
  appData.lastActiveDate = today;
}

// ===== Unlearned Pool =====
function getUnlearnedIndices() {
  var result = [];
  for (var i = 0; i < WORD_BANK.length; i++) {
    if (!appData.wordProgress[i]) result.push(i);
  }
  return result;
}

// ===== Review Due =====
function getReviewDue() {
  var today = getToday();
  var result = [];
  var prog = appData.wordProgress;
  for (var i = 0; i < WORD_BANK.length; i++) {
    var p = prog[i];
    if (!p) continue;
    if (p.status !== "learning") continue;
    if (p.nextReviewDate <= today) result.push(i);
  }
  // Sort by nextReviewDate asc
  result.sort(function(a, b) {
    var da = prog[a].nextReviewDate;
    var db = prog[b].nextReviewDate;
    if (da < db) return -1;
    if (da > db) return 1;
    return a - b;
  });
  return result;
}

// ===== Generate Today's Tasks =====
function generateToday() {
  var today = getToday();
  updateStreak();

  var reviewDue = getReviewDue();
  var reviewQueue = reviewDue.slice(0, REVIEW_LIMIT);
  var reviewRemaining = reviewDue.length > REVIEW_LIMIT ? reviewDue.length - REVIEW_LIMIT : 0;

  var unlearned = getUnlearnedIndices();
  var dateNum = parseInt(today.replace(/-/g, ""), 10);
  var shuffled = shuffleSeeded(unlearned, dateNum);
  var newQueue = shuffled.slice(0, DEFAULT_NEW);

  var phase = reviewQueue.length > 0 ? "review" : (newQueue.length > 0 ? "new" : "completion");

  appData.today = {
    date: today,
    reviewQueue: reviewQueue,
    reviewIndex: 0,
    reviewDone: 0,
    reviewRemaining: reviewRemaining,
    newQueue: newQueue,
    newIndex: 0,
    newDone: 0,
    extraBatches: 0,
    unlearnedShuffled: shuffled,
    newAssigned: DEFAULT_NEW,
    phase: phase
  };

  saveData();
}

// ===== App State =====
var appData = loadData();
var todayStr = getToday();

// Init or migrate
if (!appData.today || appData.today.date !== todayStr) {
  generateToday();
} else {
  updateStreak();
  saveData();
}

// ===== UI References =====
function $(id) { return document.getElementById(id); }

// ===== Dashboard =====
function renderDashboard() {
  var t = appData.today;
  var prog = appData.wordProgress;

  var totalLearned = Object.keys(prog).length;
  var mastered = 0;
  var pending = 0;
  var keys = Object.keys(prog);
  for (var i = 0; i < keys.length; i++) {
    if (prog[keys[i]].status === "mastered") mastered++;
    else pending++;
  }

  var newDone = t ? t.newDone : 0;
  var reviewDone = t ? t.reviewDone : 0;
  var extra = t ? Math.max(0, newDone - DEFAULT_NEW) : 0;

  setText("stat-new-today", newDone);
  setText("stat-review-today", reviewDone);
  setText("stat-extra", extra);
  setText("stat-total", totalLearned);
  setText("stat-mastered", mastered);
  setText("stat-pending", pending);
  setText("stat-streak", appData.streak);

  // Hint
  var hint = $("dashboard-hint");
  if (hint) {
    if (t && t.phase === "review" && reviewDone === 0) {
      hint.textContent = "\u4eca\u5929\u5148\u590d\u4e60\uff0c\u518d\u5b66\u65b0\u8bcd\uff0c\u8fdb\u6b65\u4f1a\u66f4\u7a33\u3002";
    } else {
      hint.textContent = "";
    }
  }

  // Progress bar
  var totalTasks = 0;
  var doneTasks = 0;
  if (t) {
    totalTasks = t.reviewQueue.length + t.newQueue.length;
    doneTasks = t.reviewDone + t.newDone;
  }
  var pct = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;
  var pb = $("progress-fill");
  if (pb) pb.style.width = pct + "%";
}

function setText(id, val) {
  var el = $(id);
  if (el) el.textContent = val;
}

// ===== Render Review Card =====
function renderReview() {
  var t = appData.today;
  var idx = t.reviewQueue[t.reviewIndex];
  var w = WORD_BANK[idx];

  setText("review-progress", "(" + (t.reviewDone + 1) + "/" + t.reviewQueue.length + ")");
  setText("review-word", w.word);
  setText("review-phonetic", w.phonetic);
  setText("review-collocation", "\ud83d\udd17 " + w.collocation);
  setText("review-meaning", "\ud83d\udcd6 " + w.meaning);
  setText("review-sentence", w.sentence);
  setText("review-sentence-trans", w.sentenceTranslation);

  var hidden = $("review-hidden");
  if (hidden) hidden.className = "card-hidden";

  $("review-mode").style.display = "block";
  $("new-mode").style.display = "none";
  $("completion-mode").style.display = "none";
  $("done-mode").style.display = "none";
  $("extra-review-area").style.display = "none";
}

// ===== Render New Card =====
function renderNew() {
  var t = appData.today;
  var idx = t.newQueue[t.newIndex];
  var w = WORD_BANK[idx];

  setText("new-progress", "(" + (t.newDone + 1) + "/" + t.newQueue.length + ")");
  setText("new-word", w.word);
  setText("new-phonetic", w.phonetic);
  setText("new-collocation", "\ud83d\udd17 " + w.collocation);
  setText("new-meaning", "\ud83d\udcd6 " + w.meaning);
  setText("new-sentence", w.sentence);
  setText("new-sentence-trans", w.sentenceTranslation);

  $("review-mode").style.display = "none";
  $("new-mode").style.display = "block";
  $("completion-mode").style.display = "none";
  $("done-mode").style.display = "none";
  $("extra-review-area").style.display = "none";
}

// ===== Render Completion =====
function renderCompletion() {
  var t = appData.today;
  var newDone = t.newDone;
  var reviewDone = t.reviewDone;
  var totalLearned = Object.keys(appData.wordProgress).length;

  setText("comp-new", newDone);
  setText("comp-review", reviewDone);
  setText("comp-total", totalLearned);

  $("review-mode").style.display = "none";
  $("new-mode").style.display = "none";
  $("completion-mode").style.display = "block";
  $("done-mode").style.display = "none";
  $("extra-review-area").style.display = "none";

  // Show reminder if extras done
  var extra = Math.max(0, newDone - DEFAULT_NEW);
  var rem = $("reminder");
  if (rem) {
    if (extra > 0) {
      rem.style.display = "block";
      rem.textContent = "\u4eca\u5929\u4f60\u5df2\u7ecf\u5b66\u4e60\u4e86 " + newDone + " \u4e2a\u65b0\u5355\u8bcd\uff0c\u6ce8\u610f\u9002\u5ea6\u4f11\u606f\u3002";
    } else {
      rem.style.display = "none";
    }
  }
}

// ===== Render Done =====
function renderDone() {
  $("review-mode").style.display = "none";
  $("new-mode").style.display = "none";
  $("completion-mode").style.display = "none";
  $("done-mode").style.display = "block";
  $("extra-review-area").style.display = "none";
}

// ===== Actions =====
function reviewShowMeaning() {
  var hidden = $("review-hidden");
  if (hidden) hidden.className = "card-hidden show";
}

function reviewRemember() {
  var t = appData.today;
  var idx = t.reviewQueue[t.reviewIndex];
  var p = appData.wordProgress[idx];
  p.reviewCount += 1;
  if (p.reviewCount >= MAX_REVIEWS) {
    p.status = "mastered";
    p.nextReviewDate = "";
  } else {
    var interval = REVIEW_INTERVALS[Math.min(p.reviewCount, REVIEW_INTERVALS.length) - 1];
    p.nextReviewDate = addDays(getToday(), interval);
  }
  t.reviewDone += 1;
  t.reviewIndex += 1;
  saveData();
  nextWord();
}

function reviewForget() {
  var t = appData.today;
  var idx = t.reviewQueue[t.reviewIndex];
  var p = appData.wordProgress[idx];
  p.nextReviewDate = addDays(getToday(), 1);
  p.reviewCount = Math.max(0, p.reviewCount - 1);
  t.reviewDone += 1;
  t.reviewIndex += 1;
  saveData();
  nextWord();
}

function newLearned() {
  var t = appData.today;
  var idx = t.newQueue[t.newIndex];
  var today = getToday();

  appData.wordProgress[idx] = {
    firstLearnedDate: today,
    reviewCount: 0,
    nextReviewDate: addDays(today, 1),
    status: "learning"
  };

  t.newDone += 1;
  t.newIndex += 1;
  saveData();
  nextWord();
}

function continueLearning() {
  var t = appData.today;
  var shuffled = t.unlearnedShuffled;
  var start = t.newAssigned;
  var count = EXTRA_NEW;
  var added = [];
  for (var i = start; i < start + count && i < shuffled.length; i++) {
    added.push(shuffled[i]);
  }
  if (added.length > 0) {
    t.newQueue = t.newQueue.concat(added);
    t.newAssigned += added.length;
    t.extraBatches += 1;
    t.phase = "new";
    saveData();
    renderNew();
    renderDashboard();
  } else {
    // No more unlearned words
    t.phase = "completion";
    saveData();
    renderCompletion();
    renderDashboard();
  }
}

function doneToday() {
  appData.today.phase = "done";
  saveData();
  renderDone();
  renderDashboard();
}

function addMoreReviews() {
  var t = appData.today;
  var allDue = getReviewDue();
  var alreadyDone = t.reviewQueue.slice(0, t.reviewIndex);
  var remaining = [];
  for (var i = 0; i < allDue.length; i++) {
    if (alreadyDone.indexOf(allDue[i]) < 0) remaining.push(allDue[i]);
  }
  var toAdd = remaining.slice(0, REVIEW_LIMIT);
  t.reviewQueue = t.reviewQueue.concat(toAdd);
  t.reviewRemaining = Math.max(0, remaining.length - toAdd.length);
  t.phase = "review";
  saveData();
  renderReview();
}

function resetAll() {
  try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
  appData = getDefaultData();
  generateToday();
  appData.streak = 0;
  appData.lastActiveDate = "";
  saveData();
  refresh();
}

// ===== Next Word =====
function nextWord() {
  var t = appData.today;

  if (t.phase === "review") {
    if (t.reviewIndex < t.reviewQueue.length) {
      renderReview();
    } else {
      // Review done, show extra review button if remaining
      if (t.reviewRemaining > 0) {
        $("review-mode").style.display = "none";
        $("extra-review-area").style.display = "block";
        setText("remaining-review-count", t.reviewRemaining);
      } else {
        t.phase = "new";
        if (t.newQueue.length > 0 && t.newIndex < t.newQueue.length) {
          renderNew();
        } else {
          t.phase = "completion";
          saveData();
          renderCompletion();
        }
      }
    }
  } else if (t.phase === "new") {
    if (t.newIndex < t.newQueue.length) {
      renderNew();
    } else {
      t.phase = "completion";
      renderCompletion();
    }
  } else {
    renderCompletion();
  }
  renderDashboard();
}

// ===== Refresh =====
function refresh() {
  renderDashboard();
  var t = appData.today;
  if (!t) { renderDone(); return; }
  var phase = t.phase;
  if (phase === "done") { renderDone(); }
  else if (phase === "completion") { renderCompletion(); }
  else if (phase === "review") { renderReview(); }
  else if (phase === "new") { renderNew(); }
  else { renderDone(); }
}

// ===== Event Delegation =====
document.addEventListener("DOMContentLoaded", function() {
  var main = document.querySelector("main");
  if (!main) return;
  main.addEventListener("click", function(e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    var action = btn.getAttribute("data-action");
    if (!action) return;
    switch (action) {
      case "review-show-meaning": reviewShowMeaning(); break;
      case "review-remember": reviewRemember(); break;
      case "review-forget": reviewForget(); break;
      case "new-learned": newLearned(); break;
      case "continue-learning": continueLearning(); break;
      case "done-today": doneToday(); break;
      case "add-more-reviews": addMoreReviews(); break;
      case "reset": resetAll(); break;
    }
  });
  refresh();
});
