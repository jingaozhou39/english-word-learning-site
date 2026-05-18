# Daily Vocab — 每日英语单词学习

一个简洁的英语单词学习网页应用，适合大学生每天花 10 分钟背单词。支持间隔重复复习与弹性学习量。

## 功能

- **每日任务** — 自动根据学习历史安排今日复习 + 新词
- **间隔重复** — 基于 1/3/7/15/30 天复习间隔，自动安排复习计划
- **今日继续学** — 完成默认任务后可继续追加新词，学习量灵活
- **复习答题** — 先回忆再查看释义，强化记忆效果
- **学习统计** — 今日新学、今日复习、额外新学、累计学习、已掌握、待复习、连续天数
- **错词复习** — 不记得的单词次日重新安排复习
- **掌握词不再出现** — 完成 5 次复习后标记 mastered，清出复习队列
- **localStorage 持久化** — 刷新不丢数据，跨天自动生成新任务
- **响应式设计** — 适配手机，按钮大，流程清晰

## 快速开始

1. 在浏览器中打开 `index.html`
2. 无需安装任何依赖

## 技术栈

- HTML5
- CSS3（响应式，移动优先）
- Vanilla JavaScript（ES5 兼容）
- localStorage API
- 间隔重复算法（类 SM-2）

## 项目结构

```
Daily-Vocab/
├── index.html    # 主页面
├── style.css     # 样式
├── script.js     # 核心逻辑 + 词库 + 复习算法
└── README.md     # 项目说明
```

## 数据结构

```js
{
  wordProgress: {
    "0": { firstLearnedDate, reviewCount, nextReviewDate, status }
  },
  today: {
    reviewQueue, reviewIndex, reviewDone,
    newQueue, newIndex, newDone,
    extraBatches, phase
  },
  streak: 3,
  lastActiveDate: "2026-05-18"
}
```

## localStorage Key

`dailyvocab_app_data`

## 词库

内置 30 个大学生高频英语单词（四六级/考研核心词汇），可在 `script.js` 的 `WORD_BANK` 数组中扩展。

### 添加单词

编辑 `script.js` 中的 `WORD_BANK` 数组，格式如下：

```javascript
{ 
  word: "example", 
  phonetic: "/ɪɡˈzɑːmp(ə)l/", 
  meaning: "n. 例子", 
  sentence: "This is a good example.", 
  sentenceTranslation: "这是一个好例子。", 
  collocation: "a good example" 
}
```

## License

MIT
