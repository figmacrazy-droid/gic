import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, User, Laptop, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

interface LoginScreenProps {
  onBackToWelcome?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onBackToWelcome }) => {
  const [academicId, setAcademicId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginState, setLoginState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginState('loading');
    setTimeout(() => {
      setLoginState('success');
      setTimeout(() => {
        setLoginState('idle');
      }, 3000);
    }, 800);
  };

  return (
    <div
      className="relative w-full h-full flex flex-col justify-between overflow-hidden select-none"
      style={{
        background: 'linear-gradient(180deg, #0A131D 0%, #091527 50%, #002060 100%)',
      }}
    >
      {/* Top Header Section with College Title & Slogan raised to the top of screen */}
      <div className="w-full h-[48%] flex-[0_0_48%] px-7 pt-6 pb-4 relative z-10 flex flex-col justify-start">
        {onBackToWelcome && (
          <div className="w-full flex items-center justify-start mb-2">
            <button
              type="button"
              onClick={onBackToWelcome}
              aria-label="العودة"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-[#FFFFFF] transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 transform rotate-180" />
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-right pr-1 mt-1"
        >
          {/* Main Title in White */}
          <h1 className="text-[#FFFFFF] text-2xl sm:text-3xl font-extrabold tracking-tight font-['Tajawal'] leading-tight">
            كلية الغد الدولية
          </h1>

          {/* Slogan in Orange #D39706 */}
          <h2 className="text-[#D39706] text-base sm:text-lg font-bold mt-1.5 font-['Tajawal']">
            التأهيل الطبي والإداري الأفضل
          </h2>
        </motion.div>
      </div>

      {/* White Curved Bottom Sheet (#FFFFFF) - starting from the middle of the screen (~52%) */}
      <motion.div
        initial={{ y: '20%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[52%] flex-[0_0_52%] bg-[#FFFFFF] rounded-t-[44px] shadow-2xl flex flex-col justify-between pt-7 px-7 pb-7 relative z-10 overflow-y-auto"
      >
        <form onSubmit={handleSubmit} className="w-full flex flex-col">
          {/* 1. Academic ID Field */}
          <div className="w-full mb-5">
            {/* Field Header: Icon before label */}
            <div className="w-full flex items-center justify-start gap-2 mb-1.5 text-right" dir="rtl">
              {/* User / Student Icon (Before text) */}
              <div className="text-[#002060] flex items-center justify-center shrink-0">
                <User className="w-5 h-5 stroke-[2.2]" />
              </div>
              <label
                htmlFor="academic-id-input"
                className="text-[#002060] font-bold text-base font-['Tajawal'] cursor-pointer text-right"
              >
                الرقم الأكاديمي للطالب
              </label>
            </div>

            {/* Input Row with Gray text (#C9C9C9) */}
            <div className="relative border-b border-[#C9C9C9] focus-within:border-[#D39706] transition-colors pb-1.5">
              <input
                id="academic-id-input"
                type="text"
                dir="rtl"
                value={academicId}
                onChange={(e) => setAcademicId(e.target.value)}
                placeholder="00000000000"
                className="w-full text-right text-[#0A131D] placeholder:text-[#C9C9C9] placeholder:tracking-wider text-base font-sans tracking-wide bg-transparent outline-none py-1 selection:bg-amber-100"
              />
            </div>
          </div>

          {/* 2. Password Field */}
          <div className="w-full mb-6">
            {/* Field Header: Icon before label */}
            <div className="w-full flex items-center justify-start gap-2 mb-1.5 text-right" dir="rtl">
              {/* Security Icon (Before text) */}
              <div className="text-[#002060] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="9" y1="6" x2="9.01" y2="6" strokeWidth="3" />
                  <line x1="12" y1="6" x2="12.01" y2="6" strokeWidth="3" />
                  <line x1="15" y1="6" x2="15.01" y2="6" strokeWidth="3" />
                  <line x1="9" y1="10" x2="9.01" y2="10" strokeWidth="3" />
                  <line x1="12" y1="10" x2="12.01" y2="10" strokeWidth="3" />
                  <line x1="15" y1="10" x2="15.01" y2="10" strokeWidth="3" />
                  <line x1="9" y1="14" x2="9.01" y2="14" strokeWidth="3" />
                  <line x1="12" y1="14" x2="12.01" y2="14" strokeWidth="3" />
                  <line x1="15" y1="14" x2="15.01" y2="14" strokeWidth="3" />
                  <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
                </svg>
              </div>
              <label
                htmlFor="password-input"
                className="text-[#002060] font-bold text-base font-['Tajawal'] cursor-pointer text-right"
              >
                كلمة المرور
              </label>
            </div>

            {/* Input Row */}
            <div className="relative border-b border-[#C9C9C9] focus-within:border-[#D39706] transition-colors pb-1.5 flex items-center">
              {/* Toggle visibility */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[#C9C9C9] hover:text-[#002060] pl-1 pr-2 transition-colors cursor-pointer"
                title={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>

              <input
                id="password-input"
                type={showPassword ? "text" : "password"}
                dir="rtl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="00000000000"
                className="w-full text-right text-[#0A131D] placeholder:text-[#C9C9C9] placeholder:tracking-wider text-base font-sans tracking-wide bg-transparent outline-none py-1 selection:bg-amber-100"
              />
            </div>
          </div>

          {/* 3. Submit Button "دخول" with #002060 Background & #D39706 Border */}
          <div className="w-full flex flex-col items-center mt-2">
            <button
              type="submit"
              disabled={loginState === 'loading'}
              className="w-full max-w-[340px] h-[52px] rounded-full flex items-center justify-center text-[#FFFFFF] text-xl font-bold transition-all duration-200 active:scale-[0.98] shadow-lg cursor-pointer"
              style={{
                backgroundColor: '#002060',
                border: '2px solid #D39706',
                boxShadow: '0 4px 18px rgba(0, 32, 96, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              {loginState === 'loading' ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : loginState === 'success' ? (
                <div className="flex items-center space-x-2 space-x-reverse text-emerald-400">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <span>تم الدخول بنجاح</span>
                </div>
              ) : (
                <span>دخول</span>
              )}
            </button>
          </div>
        </form>

        {/* 4. Bottom Trust / Security Footnote */}
        <div className="mt-5 flex items-center justify-center space-x-2 space-x-reverse text-[#002060] select-none">
          <span className="text-sm font-semibold font-['Tajawal'] tracking-normal text-[#002060]">
            بيانات آمنة، مستقبل مضمون
          </span>
          {/* Secured laptop/device icon in #D39706 */}
          <div className="flex items-center text-[#D39706]">
            <Laptop className="w-5 h-5 stroke-[2.2]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
