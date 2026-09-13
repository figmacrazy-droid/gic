import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { FlutterCodeModal } from './components/FlutterCodeModal';
import { ApkDownloadModal } from './components/ApkDownloadModal';
import { Smartphone, Code2, Layers, Maximize2, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'login'>('welcome');
  const [viewMode, setViewMode] = useState<'single' | 'both'>('single');
  const [showFrame, setShowFrame] = useState(true);
  const [showFlutterCode, setShowFlutterCode] = useState(false);
  const [showApkModal, setShowApkModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A131D] text-slate-100 flex flex-col font-['Tajawal']" dir="rtl">
      {/* Top Toolbar for Navigation & Options */}
      <header className="w-full bg-[#081019]/90 backdrop-blur border-b border-slate-800/80 px-4 py-2.5 flex items-center justify-between z-30 sticky top-0">
        <div className="flex items-center space-x-3 space-x-reverse">
          {/* Logo / Badge */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D39706] animate-pulse"></span>
            <span className="font-bold text-sm sm:text-base text-white">
              تطبيق كلية الغد الدولية
            </span>
          </div>

          <span className="hidden md:inline-block text-xs px-2.5 py-0.5 rounded-full bg-[#D39706]/10 border border-[#D39706]/30 text-[#D39706]">
            ألوان الهوية المعتمدة
          </span>
        </div>

        {/* View Switchers */}
        <div className="flex items-center space-x-2 space-x-reverse">
          {/* Screen Tabs (when in single mode) */}
          <div className="hidden sm:flex items-center bg-[#091527] border border-slate-800 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => {
                setViewMode('single');
                setCurrentScreen('welcome');
              }}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium ${
                viewMode === 'single' && currentScreen === 'welcome'
                  ? 'bg-[#D39706] text-slate-950 font-bold shadow'
                  : 'text-[#C9C9C9] hover:text-white'
              }`}
            >
              شاشة الترحيب
            </button>
            <button
              onClick={() => {
                setViewMode('single');
                setCurrentScreen('login');
              }}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium ${
                viewMode === 'single' && currentScreen === 'login'
                  ? 'bg-[#D39706] text-slate-950 font-bold shadow'
                  : 'text-[#C9C9C9] hover:text-white'
              }`}
            >
              شاشة تسجيل الدخول
            </button>
            <button
              onClick={() => setViewMode('both')}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer font-medium flex items-center space-x-1 space-x-reverse ${
                viewMode === 'both'
                  ? 'bg-[#D39706] text-slate-950 font-bold shadow'
                  : 'text-[#C9C9C9] hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>الشاشتان معاً</span>
            </button>
          </div>

          {/* Toggle Device Frame */}
          <button
            onClick={() => setShowFrame(!showFrame)}
            title={showFrame ? 'إلغاء إطار الهاتف' : 'تفعيل إطار الهاتف'}
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs flex items-center space-x-1.5 space-x-reverse cursor-pointer transition-colors"
          >
            {showFrame ? <Maximize2 className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{showFrame ? 'شاشة كاملة' : 'إطار هاتف'}</span>
          </button>

          {/* Flutter Source Code Modal Trigger */}
          <button
            id="open-flutter-code-btn"
            onClick={() => setShowFlutterCode(true)}
            className="px-3 py-1 rounded-lg bg-sky-600/90 hover:bg-sky-500 text-white font-bold text-xs flex items-center space-x-1.5 space-x-reverse shadow-md transition-all cursor-pointer active:scale-95"
          >
            <Code2 className="w-4 h-4" />
            <span className="hidden sm:inline">كود فلاتر</span>
            <span className="sm:hidden">الكود</span>
          </button>

          {/* Download APK / Project Trigger */}
          <button
            id="open-apk-download-btn"
            onClick={() => setShowApkModal(true)}
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center space-x-1.5 space-x-reverse shadow-md shadow-emerald-950/40 transition-all cursor-pointer active:scale-95 border border-emerald-400/30"
          >
            <Smartphone className="w-4 h-4 text-emerald-200 animate-pulse" />
            <span>تثبيت على هاتفي (APK)</span>
          </button>
        </div>
      </header>

      {/* Main Canvas Area */}
      <main className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-x-auto">
        {viewMode === 'both' ? (
          /* Side-by-Side Mode */
          <div className="flex flex-wrap items-center justify-center gap-8 py-4">
            {/* 1. Welcome Screen Container */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-[#D39706] mb-2 bg-[#091527] px-3 py-1 rounded-full border border-slate-800">
                1. شاشة الترحيب (Welcome Screen)
              </span>
              <div
                className={`w-[360px] h-[740px] ${
                  showFrame
                    ? 'rounded-[46px] border-[10px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-slate-700/50'
                    : 'rounded-2xl border border-slate-800'
                } overflow-hidden relative`}
              >
                <WelcomeScreen
                  onNavigateToLogin={() => {
                    setViewMode('single');
                    setCurrentScreen('login');
                  }}
                />
              </div>
            </div>

            {/* 2. Login Screen Container */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-[#D39706] mb-2 bg-[#091527] px-3 py-1 rounded-full border border-slate-800">
                2. شاشة تسجيل الدخول (Login Screen)
              </span>
              <div
                className={`w-[360px] h-[740px] ${
                  showFrame
                    ? 'rounded-[46px] border-[10px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-slate-700/50'
                    : 'rounded-2xl border border-slate-800'
                } overflow-hidden relative`}
              >
                <LoginScreen
                  onBackToWelcome={() => {
                    setViewMode('single');
                    setCurrentScreen('welcome');
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          /* Single Interactive Mobile View */
          <div className="flex flex-col items-center justify-center w-full my-auto">
            {/* Mobile Device Frame */}
            <div
              className={`w-full max-w-[390px] h-[780px] max-h-[92vh] ${
                showFrame
                  ? 'rounded-[48px] border-[11px] border-slate-850 shadow-[0_25px_60px_rgba(0,0,0,0.85)] ring-1 ring-slate-700/60'
                  : 'rounded-xl sm:rounded-2xl border border-slate-800'
              } overflow-hidden relative bg-[#020b18] flex flex-col`}
            >
              {/* Screen Content with animated transition */}
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  {currentScreen === 'welcome' ? (
                    <motion.div
                      key="welcome"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <WelcomeScreen
                        onNavigateToLogin={() => setCurrentScreen('login')}
                        onVisitorLogin={() => setCurrentScreen('login')}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <LoginScreen onBackToWelcome={() => setCurrentScreen('welcome')} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Bottom Screen Selector Indicator */}
            <div className="flex items-center space-x-2 space-x-reverse mt-3 sm:hidden">
              <button
                onClick={() => setCurrentScreen('welcome')}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentScreen === 'welcome' ? 'bg-amber-400 w-6' : 'bg-slate-700'
                }`}
              />
              <button
                onClick={() => setCurrentScreen('login')}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentScreen === 'login' ? 'bg-amber-400 w-6' : 'bg-slate-700'
                }`}
              />
            </div>
          </div>
        )}
      </main>

      {/* Flutter Source Code Modal */}
      <FlutterCodeModal
        isOpen={showFlutterCode}
        onClose={() => setShowFlutterCode(false)}
        onOpenApkModal={() => setShowApkModal(true)}
      />

      {/* APK & Project Package Download Modal */}
      <ApkDownloadModal
        isOpen={showApkModal}
        onClose={() => setShowApkModal(false)}
        onOpenFlutterCode={() => setShowFlutterCode(true)}
      />
    </div>
  );
}
