const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

// Replacements for Dark -> Light (White & Blue) Theme
const replacements = [
  // Backgrounds
  { regex: /bg-slate-950/g, replacement: 'bg-slate-50' },
  { regex: /bg-slate-900/g, replacement: 'bg-white' },
  { regex: /bg-slate-800/g, replacement: 'bg-slate-100' },
  { regex: /bg-slate-700/g, replacement: 'bg-slate-200' },
  
  // Text
  { regex: /text-slate-100/g, replacement: 'text-slate-900' },
  { regex: /text-slate-200/g, replacement: 'text-slate-800' },
  { regex: /text-slate-300/g, replacement: 'text-slate-700' },
  { regex: /text-slate-400/g, replacement: 'text-slate-600' },
  { regex: /text-white/g, replacement: 'text-slate-900' }, // some white text should be dark now
  
  // Borders
  { regex: /border-slate-800/g, replacement: 'border-slate-200' },
  { regex: /border-slate-700/g, replacement: 'border-slate-300' },
  
  // Accents (Make other colors blue or more legible)
  { regex: /bg-rose-950/g, replacement: 'bg-blue-100' },
  { regex: /text-rose-400/g, replacement: 'text-blue-700' },
  { regex: /border-rose-500/g, replacement: 'border-blue-500' },
  { regex: /border-rose-900/g, replacement: 'border-blue-300' },

  { regex: /bg-amber-950/g, replacement: 'bg-blue-100' },
  { regex: /text-amber-400/g, replacement: 'text-blue-700' },
  { regex: /border-amber-500/g, replacement: 'border-blue-500' },

  { regex: /bg-purple-950/g, replacement: 'bg-blue-100' },
  { regex: /text-purple-400/g, replacement: 'text-blue-700' },
  { regex: /border-purple-500/g, replacement: 'border-blue-500' },

  { regex: /bg-indigo-950/g, replacement: 'bg-blue-100' },
  { regex: /text-indigo-400/g, replacement: 'text-blue-700' },
  { regex: /border-indigo-500/g, replacement: 'border-blue-500' },

  { regex: /bg-emerald-950/g, replacement: 'bg-blue-100' },
  { regex: /text-emerald-400/g, replacement: 'text-blue-700' },
  { regex: /border-emerald-500/g, replacement: 'border-blue-500' },

  { regex: /bg-cyan-950/g, replacement: 'bg-blue-100' },
  { regex: /text-cyan-400/g, replacement: 'text-blue-700' },
  { regex: /border-cyan-500/g, replacement: 'border-blue-500' },
  
  // Highlight blue elements further
  { regex: /text-blue-400/g, replacement: 'text-blue-700' },
  { regex: /bg-blue-900\/10/g, replacement: 'bg-blue-50' },
  { regex: /border-blue-900\/30/g, replacement: 'border-blue-200' },
];

replacements.forEach(r => {
  content = content.replace(r.regex, r.replacement);
});

// Since we replaced `text-white` with `text-slate-900`, some primary buttons which had bg-blue-600 might now have dark text.
// Let's ensure bg-blue-600 buttons have text-white
content = content.replace(/bg-blue-600([^"']*)text-slate-900/g, 'bg-blue-600$1text-white');
content = content.replace(/bg-blue-500([^"']*)text-slate-900/g, 'bg-blue-500$1text-white');
content = content.replace(/bg-emerald-600([^"']*)text-slate-900/g, 'bg-emerald-600$1text-white');
content = content.replace(/bg-indigo-600([^"']*)text-slate-900/g, 'bg-indigo-600$1text-white');

fs.writeFileSync(appPath, content, 'utf8');
console.log('Theme updated to light (white and blue) successfully.');
