# bit-by-bit-jeopardy

## Bonus round

After all 30 board questions are completed, the game automatically shows a separate bonus question page. As on the regular board, awarding a correct answer or closing a question marks it complete; an incorrect answer leaves it open for another team.

The bonus defaults to **1,000 points (500 × 2)**. A correct answer awards that amount and finishes the round. An incorrect answer deducts that amount and lets another team try. The host can also finish the bonus without awarding points. The bonus timer starts paused, and the completed round shows the final standings. Reset Board clears both rounds and all scores.

Customize the sample bonus question, answer, base value, multiplier, and timer in `src/data/questions.js` (`bonusQuestion`). The separate page component is `src/pages/BonusQuestionPage.jsx`.

## Development

```sh
npm install
npm run dev
```

Run `npm run build` to check the production build.
