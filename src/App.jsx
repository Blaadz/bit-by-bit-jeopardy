import React, { useState, useEffect } from 'react';
import { initialCategories, initialTeams } from './data/questions';
import { Terminal, RotateCcw, Play, Pause, CheckCircle2, XCircle, Eye, EyeOff, Plus, Minus, Lock, Key } from 'lucide-react';

// SET YOUR MASTER PASSCODE HERE
const MASTER_PASSCODE = "innoventions2026"; 

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcodeAttempt, setPasscodeAttempt] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [categories, setCategories] = useState(initialCategories);
  const [teams, setTeams] = useState(initialTeams);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const savedAuth = sessionStorage.getItem('bbb_authorized');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcodeAttempt === MASTER_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem('bbb_authorized', 'true');
      setLoginError(false);
    } else {
      setLoginError(true);
      setPasscodeAttempt('');
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    const handleKeyDown = (e) => {
      if (!activeQuestion) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsTimerRunning((prev) => !prev);
      } else if (e.code === 'KeyA') {
        setShowAnswer((prev) => !prev);
      } else if (e.code === 'Escape') {
        handleCloseQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeQuestion, isAuthenticated]);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const handleSelectQuestion = (catId, qId) => {
    const category = categories.find((c) => c.id === catId);
    const question = category.questions.find((q) => q.id === qId);

    if (question.completed) return;

    setActiveQuestion({ ...question, categoryId: catId });
    setShowAnswer(false);
    setSelectedTeam(null);
    setTimer(30);
    setIsTimerRunning(true);
  };

  const handleScoreChange = (teamId, amount) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId ? { ...team, score: team.score + amount } : team
      )
    );
  };

  const handleCloseQuestion = () => {
    if (activeQuestion) {
      setCategories((prevCategories) =>
        prevCategories.map((cat) => {
          if (cat.id === activeQuestion.categoryId) {
            return {
              ...cat,
              questions: cat.questions.map((q) =>
                q.id === activeQuestion.id ? { ...q, completed: true } : q
              ),
            };
          }
          return cat;
        })
      );
    }
    setActiveQuestion(null);
    setShowAnswer(false);
    setSelectedTeam(null);
    setIsTimerRunning(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl flex flex-col items-center text-center">
          <div className="bg-cyan-950/80 border border-cyan-500/30 p-4 rounded-2xl mb-4 text-cyan-400">
            <Lock className="w-10 h-10" />
          </div>
          
          <h1 className="text-2xl font-bold font-mono text-cyan-400 tracking-wider mb-1">
            BIT BY BIT ENGINE
          </h1>
          <p className="text-xs text-slate-400 font-mono mb-6">
            Authorized Game Master Access Only
          </p>

          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <div className="relative">
              <Key className="w-5 h-5 text-slate-500 absolute left-3 top-3.5" />
              <input
                type="password"
                placeholder="Enter Passcode..."
                value={passcodeAttempt}
                onChange={(e) => setPasscodeAttempt(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-500 text-slate-100 pl-10 pr-4 py-3 rounded-xl font-mono outline-none transition"
                autoFocus
              />
            </div>

            {loginError && (
              <p className="text-rose-500 text-xs font-mono animate-pulse">
                Access Denied: Invalid Passcode
              </p>
            )}

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold py-3 rounded-xl transition shadow-lg shadow-cyan-500/20"
            >
              Unlock Board
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      <header className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-wider text-cyan-400 flex items-center gap-2 font-mono">
            <Terminal className="w-8 h-8" /> BIT BY BIT
          </h1>
          <p className="text-xs text-slate-400 font-mono mt-1">LGS JT Innoventions — Jeopardy Game Master Engine</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              sessionStorage.removeItem('bbb_authorized');
              setIsAuthenticated(false);
            }}
            className="flex items-center gap-2 bg-slate-900 hover:bg-rose-950 border border-slate-700 hover:border-rose-700 text-slate-300 hover:text-rose-300 text-xs px-3 py-2 rounded-lg font-mono transition"
          >
            <Lock className="w-3.5 h-3.5" /> Lock Site
          </button>

          <button
            onClick={() => {
              if (window.confirm("Reset the board and all team scores?")) {
                setCategories(initialCategories);
                setTeams(initialTeams);
                setActiveQuestion(null);
              }
            }}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs px-4 py-2 rounded-lg font-mono transition"
          >
            <RotateCcw className="w-4 h-4 text-cyan-400" /> Reset Board
          </button>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-4 gap-4 mb-6">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col gap-3">
            <div className="bg-slate-900 border border-cyan-500/30 p-4 rounded-xl text-center font-bold text-lg text-cyan-300 shadow-lg uppercase tracking-wider font-mono">
              {category.title}
            </div>

            {category.questions.map((q) => (
              <button
                key={q.id}
                onClick={() => handleSelectQuestion(category.id, q.id)}
                disabled={q.completed}
                className={`h-24 rounded-xl text-3xl font-black font-mono transition-all duration-150 border ${
                  q.completed
                    ? 'bg-slate-950/60 text-slate-800 border-slate-900 cursor-not-allowed'
                    : 'bg-slate-900 hover:bg-cyan-950/50 text-amber-400 hover:text-amber-300 border-slate-800 hover:border-cyan-500 hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer'
                }`}
              >
                {q.completed ? '—' : `$${q.value}`}
              </button>
            ))}
          </div>
        ))}
      </main>

      <footer className="grid grid-cols-4 gap-4 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl backdrop-blur-md">
        {teams.map((team) => (
          <div key={team.id} className="bg-slate-950 border border-slate-800/80 p-3 rounded-xl flex flex-col items-center shadow-inner">
            <span className="text-xs text-slate-400 font-mono uppercase tracking-widest font-bold">{team.name}</span>
            <span className={`text-3xl font-black font-mono my-1 ${team.score >= 0 ? 'text-emerald-400' : 'text-rose-500'}`}>
              ${team.score}
            </span>
            <div className="flex gap-1 mt-1">
              <button
                onClick={() => handleScoreChange(team.id, 100)}
                className="bg-slate-900 hover:bg-emerald-950 border border-slate-700 hover:border-emerald-600 text-emerald-400 p-1.5 rounded transition"
                title="Add 100"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleScoreChange(team.id, -100)}
                className="bg-slate-900 hover:bg-rose-950 border border-slate-700 hover:border-rose-600 text-rose-400 p-1.5 rounded transition"
                title="Deduct 100"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </footer>

      {activeQuestion && (
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-6 z-50">
          <div className="bg-slate-900 border border-cyan-500/40 rounded-3xl max-w-4xl w-full p-8 shadow-2xl flex flex-col justify-between min-h-[580px]">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="bg-cyan-950 border border-cyan-700/50 text-cyan-300 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest font-bold">
                  ${activeQuestion.value}
                </span>
                <span className="text-xs text-slate-400 font-mono">Press [SPACE] Timer | [A] Answer | [ESC] Close</span>
              </div>

              <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl">
                <span className={`font-mono text-3xl font-black ${timer <= 5 ? 'text-rose-500 animate-pulse' : 'text-amber-400'}`}>
                  {timer}s
                </span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="bg-cyan-950 hover:bg-cyan-900 border border-cyan-600 text-cyan-300 p-2 rounded-lg transition"
                >
                  {isTimerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => {
                    setTimer(30);
                    setIsTimerRunning(false);
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-slate-400 p-2 rounded-lg transition"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="my-8 flex flex-col items-center justify-center text-center px-4">
              <p className="text-3xl md:text-4xl font-bold leading-relaxed text-slate-50 tracking-wide font-sans">
                {activeQuestion.question}
              </p>

              {showAnswer && (
                <div className="mt-8 p-5 bg-emerald-950/40 border border-emerald-500/50 rounded-2xl w-full max-w-2xl">
                  <span className="text-xs text-emerald-400 font-mono uppercase tracking-widest block mb-1 font-bold">Official Answer</span>
                  <p className="text-2xl font-mono text-emerald-300 font-extrabold">{activeQuestion.answer}</p>
                </div>
              )}
            </div>

            <div className="border-t border-slate-800 pt-6">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Select Answering Team:</span>
                <div className="flex gap-2">
                  {teams.map((team) => (
                    <button
                      key={team.id}
                      onClick={() => setSelectedTeam(team.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition border ${
                        selectedTeam === team.id
                          ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-lg shadow-cyan-500/20'
                          : 'bg-slate-950 hover:bg-slate-800 text-slate-300 border-slate-800'
                      }`}
                    >
                      {team.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 py-3.5 rounded-xl font-mono font-bold flex items-center justify-center gap-2 transition"
                >
                  {showAnswer ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
                </button>

                {selectedTeam && (
                  <>
                    <button
                      onClick={() => {
                        handleScoreChange(selectedTeam, activeQuestion.value);
                        handleCloseQuestion();
                      }}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition"
                    >
                      <CheckCircle2 className="w-5 h-5" /> Correct (+${activeQuestion.value})
                    </button>
                    <button
                      onClick={() => {
                        handleScoreChange(selectedTeam, -activeQuestion.value);
                        setSelectedTeam(null);
                      }}
                      className="flex-1 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20 transition"
                    >
                      <XCircle className="w-5 h-5" /> Incorrect (-${activeQuestion.value})
                    </button>
                  </>
                )}

                <button
                  onClick={handleCloseQuestion}
                  className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 px-6 py-3.5 rounded-xl font-mono transition"
                >
                  Close Box
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}