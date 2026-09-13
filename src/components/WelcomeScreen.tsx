import React from 'react';
import { AlGhadLogo } from './AlGhadLogo';
import { motion } from 'motion/react';

interface WelcomeScreenProps {
  onNavigateToLogin: () => void;
  onVisitorLogin?: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onNavigateToLogin,
  onVisitorLogin,
}) => {
  return (
    <div
      className="relative w-full h-full flex flex-col justify-between overflow-hidden select-none"
      style={{
        background: 'linear-gradient(180deg, #0A131D 0%, #091527 50%, #002060 100%)',
      }}
    >
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-6">
        {/* Official College Shield Logo inside Circular Medallion (شعار كلية الغد الدولية داخل الدائرة) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center justify-center mb-6"
        >
          <AlGhadLogo size={205} showCircleWrapper={true} />
        </motion.div>

        {/* Welcome Typography */}
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-center"
        >
          <h1 className="text-[#FFFFFF] text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-md font-['Tajawal']">
            مرحباً بك
          </h1>
          <h2 className="text-[#FFFFFF] text-xl sm:text-2xl font-bold mt-2.5 drop-shadow-sm font-['Tajawal']">
            كلية الغد الدولية
          </h2>
          <p className="text-[#C9C9C9] text-xs sm:text-sm mt-2 font-medium">
            للعلوم الصحية والتقنية
          </p>
        </motion.div>
      </div>

      {/* Bottom Actions Area */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="w-full px-7 pb-12 flex flex-col items-center"
      >
        {/* "تسجيل الدخول" Button */}
        <button
          type="button"
          onClick={onNavigateToLogin}
          className="w-full max-w-[340px] h-[54px] rounded-full flex items-center justify-center text-[#FFFFFF] text-lg font-bold transition-all duration-200 active:scale-[0.98] shadow-lg cursor-pointer"
          style={{
            backgroundColor: '#091527',
            border: '2px solid #D39706',
            boxShadow: '0 4px 20px rgba(0, 32, 96, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
        >
          <span>تسجيل الدخول</span>
        </button>

        {/* Guest / Visitor Login Link */}
        <button
          type="button"
          onClick={onVisitorLogin || onNavigateToLogin}
          className="mt-4 text-[#D39706] hover:brightness-110 text-sm sm:text-base font-semibold transition-colors duration-150 cursor-pointer active:opacity-80"
        >
          ليس لديك حساب؟ سجل الدخول كزائر
        </button>
      </motion.div>
    </div>
  );
};
