import React, { useState } from 'react';
import {
  Download,
  Check,
  Smartphone,
  FileCode,
  FolderArchive,
  Terminal,
  Copy,
  QrCode,
  ExternalLink,
  AlertTriangle,
  HelpCircle,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface ApkDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFlutterCode: () => void;
}

export const ApkDownloadModal: React.FC<ApkDownloadModalProps> = ({
  isOpen,
  onClose,
  onOpenFlutterCode,
}) => {
  const [activeTab, setActiveTab] = useState<'install' | 'parsing_fix' | 'flutter_build'>('install');
  const [downloadedZip, setDownloadedZip] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const { isInstallable, isInstalled, isAndroid, install } = usePWAInstall();

  if (!isOpen) return null;

  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const appLiveUrl = currentOrigin || 'https://ais-dev-uw63o2smt3pbvkzj2shzij-969778999501.europe-west2.run.app';
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    appLiveUrl
  )}&bgcolor=0f172a&color=38bdf8`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(appLiveUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleDownloadZip = () => {
    setDownloadedZip(true);
    setTimeout(() => setDownloadedZip(false), 3000);
  };

  return (
    <div
      id="apk-download-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      dir="rtl"
    >
      <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shadow-inner">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-['Tajawal'] flex items-center space-x-2 space-x-reverse">
                <span>تثبيت وتجربة التطبيق على هاتفك</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-mono px-2 py-0.5 rounded-full border border-emerald-500/30">
                  حل مباشر
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                طريقة التثبيت الفوري على هاتفك وحل رسالة "مشكلة في تحليل الحزمة"
              </p>
            </div>
          </div>

          <button
            id="close-apk-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 px-6 pt-2 gap-2 text-xs font-semibold">
          <button
            id="tab-install-direct"
            onClick={() => setActiveTab('install')}
            className={`pb-3 px-3 border-b-2 flex items-center space-x-1.5 space-x-reverse transition-colors cursor-pointer ${
              activeTab === 'install'
                ? 'border-emerald-500 text-emerald-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>التثبيت الفوري على الهاتف (مضمون 100%)</span>
          </button>

          <button
            id="tab-parsing-fix"
            onClick={() => setActiveTab('parsing_fix')}
            className={`pb-3 px-3 border-b-2 flex items-center space-x-1.5 space-x-reverse transition-colors cursor-pointer ${
              activeTab === 'parsing_fix'
                ? 'border-amber-500 text-amber-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>سبب وحل "مشكلة تحليل الحزمة"</span>
          </button>

          <button
            id="tab-flutter-build"
            onClick={() => setActiveTab('flutter_build')}
            className={`pb-3 px-3 border-b-2 flex items-center space-x-1.5 space-x-reverse transition-colors cursor-pointer ${
              activeTab === 'flutter_build'
                ? 'border-sky-500 text-sky-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FolderArchive className="w-4 h-4" />
            <span>مشروع فلاتر وبناء APK كامل</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 space-y-5 overflow-y-auto">
          {/* TAB 1: Direct phone installation via PWA */}
          {activeTab === 'install' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Highlight Hero Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/40 shadow-lg space-y-3">
                <div className="flex items-center space-x-2 space-x-reverse text-emerald-400 font-bold text-sm">
                  <Check className="w-5 h-5 bg-emerald-500/20 rounded-full p-0.5" />
                  <span>طريقة التثبيت المباشرة على هاتفك (تطبيق أندرويد حقيقي)</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  تمت تهيئة التطبيق بنظام <strong>Progressive Web App (PWA)</strong> المدعوم رسمياً من نظام أندرويد ومتصفح كروم / سامسونج. عند تثبيته يظهر كأيقونة تطبيق رسمية على شاشة هاتفك الرئيسية، ويفتح بملء الشاشة مع شعار كلية الغد وبدون أي شريط متصفح وبدون أي خطأ في تحليل الحزمة!
                </p>

                {/* If on mobile browser & prompt is available */}
                {isInstallable && (
                  <button
                    onClick={install}
                    className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center space-x-2 space-x-reverse shadow-lg shadow-emerald-500/20 cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>تثبيت التطبيق على هذا الهاتف الآن</span>
                  </button>
                )}
              </div>

              {/* Step by step for phone */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center gap-5">
                {/* QR Code */}
                <div className="p-3 bg-slate-900 border border-sky-500/30 rounded-xl flex flex-col items-center justify-center shadow-lg shrink-0">
                  <img
                    src={qrApiUrl}
                    alt="امسح بكاميرا الجوال لتثبيت التطبيق"
                    className="w-40 h-40 rounded-lg object-contain"
                  />
                  <span className="text-[11px] text-sky-300 mt-2 font-medium flex items-center space-x-1 space-x-reverse">
                    <QrCode className="w-3.5 h-3.5" />
                    <span>امسح بكاميرا هاتفك</span>
                  </span>
                </div>

                {/* Steps */}
                <div className="flex-1 space-y-3 text-xs">
                  <div className="font-bold text-white text-sm flex items-center space-x-1.5 space-x-reverse text-amber-400">
                    <Smartphone className="w-4 h-4" />
                    <span>خطوات التثبيت على جوالك في 10 ثوانٍ:</span>
                  </div>

                  <ol className="space-y-2.5 text-slate-300 pr-4 list-decimal marker:text-emerald-400 marker:font-bold leading-relaxed">
                    <li>
                      <strong>افتح الرابط في هاتفك:</strong> امسح الرمز بكاميرا هاتفك أو افتح متصفح <strong>Google Chrome</strong> أو <strong>Samsung Internet</strong> وافتح رابط التطبيق.
                    </li>
                    <li>
                      <strong>اضغط على القائمة (ثلاث نقاط ⋮):</strong> في أعلى أو أسفل المتصفح بهاتفك، اضغط على زر الخيارات <span className="font-mono text-amber-300">⋮</span>.
                    </li>
                    <li>
                      <strong>اختر التثبيت:</strong> اضغط على خيار <span className="text-emerald-300 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">"تثبيت التطبيق" (Install App)</span> أو <span className="text-sky-300 font-bold">"إضافة إلى الشاشة الرئيسية"</span>.
                    </li>
                    <li>
                      <strong>النتيجة:</strong> سيقوم نظام أندرويد بتثبيت التطبيق فوراً، وسيظهر شعار درع كلية الغد كأيقونة تطبيق على شاشة هاتفك الرئيسية، وتستطيع فتحه كتطبيق منفصل تماماً!
                    </li>
                  </ol>

                  {/* Copy Link */}
                  <div className="pt-1 flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={appLiveUrl}
                      className="flex-1 bg-slate-900 border border-slate-700 text-[11px] text-slate-300 px-3 py-2 rounded-lg font-mono select-all"
                      dir="ltr"
                    />
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-sky-300 rounded-lg text-xs font-semibold flex items-center space-x-1.5 space-x-reverse transition-colors cursor-pointer"
                    >
                      {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedLink ? 'تم النسخ!' : 'نسخ الرابط'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Explanation of parsing error */}
          {activeTab === 'parsing_fix' && (
            <div className="space-y-4 animate-in fade-in duration-150 text-xs">
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 space-y-2">
                <div className="flex items-center space-x-2 space-x-reverse text-amber-400 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5" />
                  <span>لماذا ظهرت رسالة: "There was a problem parsing the package"؟</span>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  كما ظهر في صورة هاتفك (حجم الملف 10.08 KB)، نظام تشغيل أندرويد يرفض تثبيت الملفات ذات الامتداد <code className="text-amber-300 font-mono">.apk</code> إلا إذا كانت <strong>مترجمة ثنائياً بالكامل</strong> عبر محرك تجميع رسمي (تتضمن ملفات Dalvik Bytecode <code className="text-slate-300 font-mono">classes.dex</code> ثنائية، وملف <code className="text-slate-300 font-mono">AndroidManifest.xml</code> محول إلى Binary AXML وموقع بشهادة Keystore أصلية).
                </p>
                <p className="text-slate-300 leading-relaxed">
                  حجم أي ملف APK حقيقي مكتمل لنظام أندرويد يتراوح بين <strong>15MB إلى 35MB</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-white font-bold text-sm flex items-center space-x-2 space-x-reverse text-sky-400">
                  <Info className="w-4 h-4" />
                  <span>الحلول العملية المتوفرة لديك الآن:</span>
                </div>
                <div className="space-y-2.5 text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start space-x-2 space-x-reverse">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-emerald-400">الحل الأسرع (بدون كمبيوتر):</strong>
                      <p className="text-slate-400 mt-0.5">
                        استخدم تبويب <strong>"التثبيت الفوري على الهاتف"</strong>، وافتحه من متصفح كروم في هاتفك واضغط "تثبيت التطبيق". سيعمل فوراً بدون أي مشكلة تحليل حزمة.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start space-x-2 space-x-reverse">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-sky-400">الحل للمطورين (توليد APK كامل رسمي):</strong>
                      <p className="text-slate-400 mt-0.5">
                        قم بتحميل حزمة المشروع <code className="text-slate-300 font-mono">alghad-flutter-project.zip</code> المرفقة بالتبويب التالي، وافتحها في Android Studio أو نفذ أمر فلاتر وسيقوم بإخراج ملف APK إنتاجي بحجم ~20MB يعمل على كل الأجهزة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Full Flutter Source and compilation */}
          {activeTab === 'flutter_build' && (
            <div className="space-y-4 animate-in fade-in duration-150 text-xs">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <FolderArchive className="w-5 h-5 text-amber-400" />
                      <span className="text-sm font-bold text-white">
                        حزمة مشروع فلاتر الجاهزة للبناء (ZIP)
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      تتضمن هيكل المشروع الكامل (شاشة الترحيب، شاشة الدخول، شعار الدرع، ملف pubspec.yaml، وAndroidManifest).
                    </p>
                  </div>

                  <a
                    id="download-zip-tab-btn"
                    href="/downloads/alghad-flutter-project.zip"
                    download="alghad-flutter-project.zip"
                    onClick={handleDownloadZip}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 space-x-reverse transition-all border cursor-pointer whitespace-nowrap active:scale-95 ${
                      downloadedZip
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'bg-amber-500 hover:bg-amber-400 text-slate-950 border-amber-500'
                    }`}
                  >
                    {downloadedZip ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>تم التحميل!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>تحميل المشروع (.zip)</span>
                      </>
                    )}
                  </a>
                </div>
              </div>

              {/* Build Commands */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 space-x-reverse text-sky-400 font-bold">
                  <Terminal className="w-4 h-4" />
                  <span>أوامر بناء الـ APK الرسمي في جهاز الكمبيوتر:</span>
                </div>
                <div
                  className="p-3 rounded-lg bg-black/80 border border-slate-800 font-mono text-[11px] text-emerald-400 select-all space-y-1"
                  dir="ltr"
                >
                  <p className="text-slate-500"># 1. استخراج الحزمة وتثبيت الحزم</p>
                  <p>flutter pub get</p>
                  <p className="text-slate-500 mt-2"># 2. بناء ملف APK جاهز للتثبيت على جميع أجهزة أندرويد</p>
                  <p>flutter build apk --release</p>
                </div>
                <p className="text-[11px] text-slate-400">
                  الملف الناتج: <code className="text-amber-300 font-mono">build/app/outputs/flutter-apk/app-release.apk</code> (بحجم 20MB تقريباً، جاهز للتثبيت المباشر على هاتفك فوراً).
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
          <button
            id="view-flutter-code-btn-modal"
            onClick={() => {
              onClose();
              onOpenFlutterCode();
            }}
            className="text-sky-400 hover:text-sky-300 flex items-center space-x-1.5 space-x-reverse font-semibold cursor-pointer"
          >
            <FileCode className="w-4 h-4" />
            <span>عرض ومراجعة أكواد فلاتر المصدرية</span>
          </button>

          <button
            id="modal-close-confirm-btn"
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
