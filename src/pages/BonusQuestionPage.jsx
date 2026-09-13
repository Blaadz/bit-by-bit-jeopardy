import React from 'react';
import { CheckCircle2, Eye, EyeOff, Pause, Play, RotateCcw, Trophy, XCircle } from 'lucide-react';

export default function BonusQuestionPage({
  question,
  teams,
  completed,
  regularQuestionsCompleted,
  showAnswer,
  timer,
  isTimerRunning,
  selectedTeam,
  onSelectTeam,
  onToggleAnswer,
  onToggleTimer,
  onResetTimer,
  onCorrect,
  onIncorrect,
  onFinish,
}) {
  const standings = [...teams].sort((a, b) => b.score - a.score);
  const hasSelectedTeam = selectedTeam !== null && selectedTeam !== undefined;

  if (completed) {
    return (
      <main className="flex-1 w-full max-w-4xl mx-auto mb-6 font-mono">
        <section aria-labelledby="round-complete-title" className="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="bg-amber-950/50 border border-amber-500/30 text-amber-400 p-4 rounded-2xl mb-5">
              <Trophy className="w-10 h-10" aria-hidden="true" />
            </div>
            <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">Bonus round finished</p>
            <h2 id="round-complete-title" className="text-3xl md:text-4xl font-black text-slate-100">{regularQuestionsCompleted ? 'Round complete' : 'Bonus complete'}</h2>
            <p className="text-sm text-slate-400 mt-3">{regularQuestionsCompleted ? 'All questions are complete. Here are the final standings.' : 'The bonus round is complete. Here are the current standings.'}</p>
          </div>

          <ol aria-label={regularQuestionsCompleted ? 'Final standings' : 'Current standings'} className="space-y-3">
            {standings.map((team) => {
              const rank = standings.findIndex((entry) => entry.score === team.score) + 1;
              const isTied = standings.filter((entry) => entry.score === team.score).length > 1;

              return (
                <li key={team.id} className={`flex items-center gap-3 md:gap-5 p-4 md:p-5 rounded-2xl border ${rank === 1 ? 'bg-amber-950/20 border-amber-500/40' : 'bg-slate-950 border-slate-800'}`}>
                  <span className={`text-xl font-black shrink-0 ${rank === 1 ? 'text-amber-400' : 'text-slate-500'}`} aria-label={`${isTied ? 'Tied for ' : ''}rank ${rank}`}>
                    {isTied ? '=' : '#'}{rank}
                  </span>
                  <span className="font-bold text-slate-200 break-words min-w-0 flex-1">{team.name}</span>
                  <span className={`text-xl md:text-3xl font-black shrink-0 ${team.score >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>${team.score}</span>
                </li>
              );
            })}
          </ol>
          <p className="text-xs text-slate-500 text-center mt-6">{regularQuestionsCompleted ? 'Use Reset Board to start a new game.' : 'Return to the board to continue regular questions, or reset to start a new game.'}</p>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-1 w-full max-w-5xl mx-auto mb-6 font-mono">
      <section aria-labelledby="bonus-question-title" className="bg-slate-900 border border-amber-500/40 rounded-3xl p-5 md:p-8 shadow-2xl">
        <div className="flex flex-wrap items-start justify-between gap-5 border-b border-slate-800 pb-6">
          <div>
            <p className="flex items-center gap-2 text-xs text-cyan-400 uppercase tracking-widest font-bold mb-3">
              <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" /> {regularQuestionsCompleted ? 'All regular questions complete' : 'Bonus round · Double points'}
            </p>
            <h2 id="bonus-question-title" className="text-3xl md:text-4xl font-black text-amber-400">Bonus Question</h2>
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="bg-amber-950/60 border border-amber-500/40 text-amber-300 rounded-full px-4 py-1.5 text-sm uppercase tracking-wider font-black">
                {question.multiplier}x points
              </span>
              <span className="text-sm text-slate-400">${question.baseValue} × {question.multiplier} = <strong className="text-amber-300">${question.value}</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 px-4 py-3 rounded-2xl">
            <div className="min-w-16">
              <span className="block text-xs text-slate-500 mb-1">Time left</span>
              <span role="timer" aria-label={`${timer} seconds remaining`} className={`text-3xl font-black ${timer <= 5 ? 'text-rose-500' : 'text-amber-400'}`}>{timer}s</span>
            </div>
            <button
              type="button"
              onClick={onToggleTimer}
              disabled={timer === 0}
              aria-label={isTimerRunning ? 'Pause bonus timer' : 'Start bonus timer'}
              className="bg-cyan-950 hover:bg-cyan-900 border border-cyan-600 text-cyan-300 p-2.5 rounded-lg transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isTimerRunning ? <Pause className="w-5 h-5" aria-hidden="true" /> : <Play className="w-5 h-5" aria-hidden="true" />}
            </button>
            <button
              type="button"
              onClick={onResetTimer}
              aria-label="Reset bonus timer"
              className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 p-2.5 rounded-lg transition"
            >
              <RotateCcw className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="py-7 md:py-9">
          <p className="text-lg md:text-2xl font-bold leading-relaxed text-cyan-300 whitespace-pre-wrap break-words bg-slate-950 p-5 md:p-7 rounded-2xl border border-slate-800 shadow-inner">{question.question}</p>
          {showAnswer && (
            <div id="bonus-answer" className="mt-5 p-5 bg-emerald-950/40 border border-emerald-500/50 rounded-2xl">
              <h3 className="text-xs text-emerald-400 uppercase tracking-widest mb-2 font-bold">Official answer</h3>
              <p className="text-lg text-emerald-300 font-bold whitespace-pre-wrap break-words">{question.answer}</p>
            </div>
          )}
        </div>

        <div className="border-t border-slate-800 pt-6">
          <fieldset className="mb-5">
            <legend className="text-xs text-slate-400 uppercase tracking-wider mb-3">Select answering team</legend>
            <div className="flex flex-wrap gap-2">
              {teams.map((team) => (
                <button
                  key={team.id}
                  type="button"
                  onClick={() => onSelectTeam(team.id)}
                  aria-pressed={selectedTeam === team.id}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition border ${selectedTeam === team.id ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-lg shadow-cyan-500/20' : 'bg-slate-950 hover:bg-slate-800 text-slate-300 border-slate-700'}`}
                >
                  {team.name}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={onToggleAnswer} aria-expanded={showAnswer} className="flex-1 min-w-44 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 px-4 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition">
              {showAnswer ? <EyeOff className="w-5 h-5 shrink-0" aria-hidden="true" /> : <Eye className="w-5 h-5 shrink-0" aria-hidden="true" />}
              {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
            </button>
            <button type="button" onClick={onCorrect} disabled={!hasSelectedTeam} className="flex-1 min-w-44 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition disabled:opacity-40 disabled:cursor-not-allowed">
              <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" /> Correct (+${question.value})
            </button>
            <button type="button" onClick={onIncorrect} disabled={!hasSelectedTeam} className="flex-1 min-w-44 bg-rose-600 hover:bg-rose-500 text-white px-4 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition disabled:opacity-40 disabled:cursor-not-allowed">
              <XCircle className="w-5 h-5 shrink-0" aria-hidden="true" /> Incorrect (-${question.value})
            </button>
            <button type="button" onClick={onFinish} className="bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-300 px-5 py-3.5 rounded-xl transition">Finish Bonus</button>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mt-4">Correct adds ${question.value} and finishes the round. Incorrect deducts ${question.value}; another team can try. Finish Bonus ends without awarding points.</p>
          <p className="text-xs text-slate-500 mt-3">[SPACE] Timer · [A] Answer · [ESC] Finish bonus</p>
        </div>
      </section>
    </main>
  );
}
