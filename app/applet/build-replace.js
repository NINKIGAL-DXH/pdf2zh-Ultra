const fs = require('fs');
const content = fs.readFileSync('/app/applet/src/App.tsx', 'utf-8');
const startIndex = content.indexOf('{/* TAB 5: CLI Quick Install Guide */}');
const endKey = '</AnimatePresence>';
const endIndex = content.indexOf(endKey, startIndex);
if (startIndex !== -1 && endIndex !== -1) {
  const newGuideBlock = `{/* TAB 5: Introduction / About */}
              {activeTab === "guide" && (
                <motion.div
                  key="guide"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 pb-20"
                >
                  <div className="bg-[#1e2129]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
                    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"></div>
                    
                    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center relative shadow-xl ring-1 ring-white/20 p-0.5">
                          <img src="/icon.png" alt="PDF2ZH Ultra Avatar" className="w-full h-full object-cover rounded-[14px]" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'block'; }} />
                          <span className="text-white font-bold text-3xl leading-none tracking-tighter hidden">UI</span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#1e2129] rounded-full flex items-center justify-center border border-white/10 shadow-lg">
                          <Sparkles className="w-4 h-4 text-blue-400" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 tracking-tight flex items-center justify-center">
                          PDF2ZH Ultra
                        </h3>
                        <p className="text-sm tracking-wide text-slate-400 max-w-lg mx-auto leading-relaxed">
                          The Ultimate High-Fidelity & Fully Configurable GUI Translation Environment.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-8 text-left">
                        
                        <div className="bg-black/20 border border-white/5 p-5 rounded-xl space-y-3 relative group overflow-hidden">
                           <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                             <Languages className="w-12 h-12 text-blue-400" />
                           </div>
                           <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest flex items-center">
                             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                             Developer / Modifier
                           </h4>
                           <p className="text-lg font-bold text-white tracking-wide">
                             NINKIGALdxh
                           </p>
                           <p className="text-[10px] text-slate-400 leading-snug">
                             Architected and styled this standalone, premium translation platform interface.
                           </p>
                        </div>
                        
                        <div className="bg-black/20 border border-white/5 p-5 rounded-xl space-y-3 relative group overflow-hidden">
                           <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                             <Sparkles className="w-12 h-12 text-emerald-400" />
                           </div>
                           <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest flex items-center">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></div>
                             Copilot Engine
                           </h4>
                           <p className="text-lg font-bold text-white tracking-wide">
                             Google Gemini
                           </p>
                           <p className="text-[10px] text-slate-400 leading-snug">
                             Accelerated through AI Copilot capabilities.
                           </p>
                        </div>

                        <div className="bg-black/20 border border-white/5 p-5 rounded-xl space-y-3 relative group overflow-hidden lg:col-span-1 sm:col-span-2">
                           <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                             <Layers className="w-12 h-12 text-purple-400" />
                           </div>
                           <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest flex items-center">
                             <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></div>
                             Open Source DNA
                           </h4>
                           <a href="https://github.com/Byaidu/pdf2zh" target="_blank" rel="noreferrer" className="text-lg font-bold text-white tracking-wide hover:text-purple-300 transition-colors inline-block decoration-purple-500/30 underline underline-offset-4">
                             Byaidu / pdf2zh
                           </a>
                           <p className="text-[10px] text-slate-400 leading-snug">
                             Adapted and propelled by the extraordinary open-source layout-parser Python package. 
                             Full credits to the core engine contributors.
                           </p>
                        </div>

                      </div>

                      <div className="pt-8 w-full border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs gap-4">
                        <div className="text-slate-500 flex items-center space-x-2">
                           <span>Designed with precision</span>
                           <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                           <span>Powered by AI</span>
                        </div>
                        <a href="https://github.com/Byaidu/pdf2zh" target="_blank" rel="noreferrer" className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg flex items-center transition-colors">
                           <ExternalLink className="w-3.5 h-3.5 mr-2" />
                           View Original Source Code
                        </a>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}
`;

  const firstPart = content.substring(0, startIndex);
  const secondPart = content.substring(endIndex);
  fs.writeFileSync('/app/applet/src/App.tsx', firstPart + newGuideBlock + secondPart);
  console.log('Replaced successfully');
} else {
  console.log('Could not find boundaries');
}
