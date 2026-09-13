import React, { useState } from 'react';
import { flutterProjectFiles } from '../data/flutterCode';
import { Copy, Check, FileCode, X, Code2, Download } from 'lucide-react';

interface FlutterCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApkModal?: () => void;
}

export const FlutterCodeModal: React.FC<FlutterCodeModalProps> = ({
  isOpen,
  onClose,
  onOpenApkModal,
}) => {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentFile = flutterProjectFiles[activeFileIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm" dir="rtl">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl max-h-[90vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-['Tajawal']">
                أكواد تطبيق فلاتر الجاهزة (Flutter Source Code)
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                كود نظيف وجاهز للتشغيل مباشرة في مشروع Flutter مع شاشتي الترحيب والدخول وبناء APK
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 space-x-reverse">
            {onOpenApkModal && (
              <button
                id="modal-quick-apk-btn"
                onClick={() => {
                  onClose();
                  onOpenApkModal();
                }}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center space-x-1.5 space-x-reverse transition-all cursor-pointer shadow"
              >
                <Download className="w-3.5 h-3.5" />
                <span>تثبيت على الهاتف (APK)</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* File Tabs */}
        <div className="px-5 pt-3 bg-[#081019] border-b border-slate-800 flex items-center space-x-2 space-x-reverse overflow-x-auto no-scrollbar">
          {flutterProjectFiles.map((file, idx) => (
            <button
              key={file.name}
              onClick={() => {
                setActiveFileIndex(idx);
                setCopied(false);
              }}
              className={`px-3.5 py-2 text-xs font-mono rounded-t-lg transition-colors flex items-center space-x-2 space-x-reverse cursor-pointer ${
                activeFileIndex === idx
                  ? 'bg-slate-900 text-[#D39706] border-t-2 border-[#D39706] font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{file.name}</span>
            </button>
          ))}
        </div>

        {/* File Description & Copy button bar */}
        <div className="px-5 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 space-x-reverse text-slate-300">
            <span className="font-mono text-[#D39706] dir-ltr">{currentFile.path}</span>
            <span className="text-slate-500">•</span>
            <span className="text-[#C9C9C9]">{currentFile.description}</span>
          </div>

          <button
            onClick={handleCopy}
            className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 space-x-reverse text-xs font-semibold transition-all cursor-pointer ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-[#D39706] hover:bg-[#b88204] text-slate-950 shadow-md active:scale-95'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>تم النسخ بنجاح!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>نسخ الكود</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content Viewport */}
        <div className="flex-1 p-4 bg-[#080d16] overflow-auto font-mono text-xs sm:text-sm text-slate-200 leading-relaxed text-left selection:bg-sky-900" dir="ltr">
          <pre className="whitespace-pre">
            <code>{currentFile.code}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>التطبيق مبني وفقاً لمواصفات المدير بأحدث إصدار Flutter 3.x مع دعم كامل للغة العربية (RTL).</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
