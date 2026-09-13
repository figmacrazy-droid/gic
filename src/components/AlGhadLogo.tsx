import React from 'react';

interface AlGhadLogoProps {
  size?: number;
  showCircleWrapper?: boolean;
  className?: string;
}

export const AlGhadLogo: React.FC<AlGhadLogoProps> = ({
  size = 205,
  showCircleWrapper = true,
  className = '',
}) => {
  // Exact reproduction of the official Al Ghad International College Emblem
  // inside the circular medallion (شعار كلية الغد الدولية داخل الوسام الدائري):
  // 1. Outer Rich Gold Ring (#D49B23 / #EDB73B)
  // 2. Concentric Dark Navy Spacer Band (#07182D)
  // 3. Crisp White Circular Disc (#FFFFFF)
  // 4. Centered College Shield with its golden frame, navy upper section with 4 white text lines,
  //    and arched ivory lower section with the calligraphic "gic" logo and diamond dot.

  const ShieldDefs = (
    <defs>
      {/* Outer Golden Amber Gradient (#D49B23 / #EDB73B) */}
      <linearGradient id="shieldGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EDB73B" />
        <stop offset="25%" stopColor="#D9A122" />
        <stop offset="65%" stopColor="#BE8914" />
        <stop offset="90%" stopColor="#DDA727" />
        <stop offset="100%" stopColor="#F5C34D" />
      </linearGradient>

      {/* Circular Medallion Outer Gold Gradient */}
      <linearGradient id="medallionGoldRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5C752" />
        <stop offset="20%" stopColor="#D9A122" />
        <stop offset="55%" stopColor="#B88212" />
        <stop offset="85%" stopColor="#E2AC2B" />
        <stop offset="100%" stopColor="#F7CE65" />
      </linearGradient>

      {/* Clip path defining the interior of the shield */}
      <clipPath id="innerShieldClip">
        <path d="M 43 59 Q 130 37 217 59 C 221 63 223 68 223 74 L 223 152 C 223 202 166 244 130 262 C 94 244 37 202 37 152 L 37 74 C 37 68 39 63 43 59 Z" />
      </clipPath>

      {/* Parchment/Cream Gradient for Lower Section */}
      <linearGradient id="creamArchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F0EBDD" />
        <stop offset="100%" stopColor="#E6DFCC" />
      </linearGradient>
    </defs>
  );

  // Group containing the standalone College Shield
  const ShieldContent = (
    <g id="college-shield-content">
      {/* 1. Outermost Rich Gold Shield Frame */}
      <path
        d="M 28 44 Q 130 18 232 44 C 239 48 243 56 243 66 L 243 158 C 243 218 178 266 130 286 C 82 266 17 218 17 158 L 17 66 C 17 56 21 48 28 44 Z"
        fill="url(#shieldGoldGradient)"
        stroke="#A5730C"
        strokeWidth="1.2"
      />

      {/* 2. Middle Dark Navy Buffer Band */}
      <path
        d="M 33 49 Q 130 25 227 49 C 233 53 236 60 236 68 L 236 156 C 236 213 174 259 130 278 C 86 259 24 213 24 156 L 24 68 C 24 60 27 53 33 49 Z"
        fill="#08203E"
      />

      {/* 3. Inner White Shield Contour Line */}
      <path
        d="M 38 54 Q 130 31 222 54 C 227 58 229 64 229 71 L 229 154 C 229 207 170 251 130 270 C 90 251 31 207 31 154 L 31 71 C 31 64 33 58 38 54 Z"
        fill="#FFFFFF"
      />

      {/* 4. Shield Interior (Navy Top + Arched Cream Bottom) */}
      <g clipPath="url(#innerShieldClip)">
        {/* Navy Upper Section Background */}
        <rect x="0" y="0" width="260" height="300" fill="#08203E" />

        {/* Lower Arched Cream/Ivory Section (#ECE7D8) */}
        <path
          d="M 30 152 Q 130 130 230 152 L 230 275 L 30 275 Z"
          fill="url(#creamArchGradient)"
        />

        {/* --- UPPER SECTION TEXTS (ALL PURE WHITE #FFFFFF) --- */}

        {/* Line 1: Arabic College Title (كلية الغد الدولية) */}
        <text
          x="130"
          y="80"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="'Cairo', 'Tajawal', sans-serif"
          fontWeight="900"
          fontSize="19"
          letterSpacing="0.2"
        >
          كلية الغد الدولية
        </text>

        {/* Line 2: English College Title (ALGHAD INTERNATIONAL COLLEGE) */}
        <text
          x="130"
          y="97"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="8.2"
          letterSpacing="0.9"
        >
          ALGHAD INTERNATIONAL COLLEGE
        </text>

        {/* Line 3: Arabic College Subtitle (للعلوم الصحية والتقنية) */}
        <text
          x="130"
          y="122"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="'Cairo', 'Tajawal', sans-serif"
          fontWeight="900"
          fontSize="15.8"
          letterSpacing="0.1"
        >
          للعلوم الصحية والتقنية
        </text>

        {/* Line 4: English College Subtitle (FOR HEALTH & TECHNICAL SCIENCES) */}
        <text
          x="130"
          y="136"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="7.5"
          letterSpacing="0.7"
        >
          FOR HEALTH &amp; TECHNICAL SCIENCES
        </text>

        {/* --- LOWER SECTION: CALLIGRAPHIC "gic" LOGO IN DEEP NAVY #071F48 --- */}
        <g transform="translate(130, 206)">
          {/* Cursive "gic" script */}
          <text
            x="-4"
            y="0"
            textAnchor="middle"
            fill="#071F48"
            fontFamily="'Brush Script MT', 'Snell Roundhand', 'URW Chancery L', cursive, serif"
            fontStyle="italic"
            fontWeight="900"
            fontSize="62"
            letterSpacing="-1.5"
          >
            gic
          </text>

          {/* Signature Diamond Dot (◆) on the letter 'i' */}
          <polygon
            points="7,-46 12,-41 7,-36 2,-41"
            fill="#071F48"
          />
        </g>
      </g>

      {/* Subtle Inner Accent Hairline for Premium Crisp Finish */}
      <path
        d="M 45 61 Q 130 39 215 61 C 219 65 221 70 221 75 L 221 150 C 221 198 165 240 130 258 C 95 240 39 198 39 150 L 39 75 C 39 70 41 65 45 61 Z"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="0.8"
        strokeOpacity="0.45"
      />
    </g>
  );

  // If showCircleWrapper is true (الافتراضي: الشعار داخل الدائرة طبق الأصل للصورة المرفقة)
  if (showCircleWrapper) {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 280 280"
          width={size}
          height={size}
          className="select-none transition-transform duration-200"
          style={{
            filter: 'drop-shadow(0 16px 36px rgba(0,0,0,0.6)) drop-shadow(0 0 16px rgba(212,155,35,0.22))',
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {ShieldDefs}

          {/* 1. Outermost Sleek Gold Ring (#D49B23 / #EDB73B) */}
          <circle
            cx="140"
            cy="140"
            r="133"
            fill="none"
            stroke="url(#medallionGoldRing)"
            strokeWidth="4.8"
          />

          {/* 2. Concentric Dark Navy Spacer Band (#07192F) */}
          <circle
            cx="140"
            cy="140"
            r="126"
            fill="none"
            stroke="#07192F"
            strokeWidth="5.2"
          />

          {/* 3. Pure Crisp White Circular Disc (#FFFFFF) */}
          <circle
            cx="140"
            cy="140"
            r="121"
            fill="#FFFFFF"
          />

          {/* 4. College Shield Centered Inside the White Disc */}
          <g transform="translate(140, 140) scale(0.70) translate(-130, -156)">
            {ShieldContent}
          </g>
        </svg>
      </div>
    );
  }

  // Standalone Shield Logo (بدون الدائرة الخارجية)
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 260 300"
        width={size}
        height={size * 1.15}
        className={`select-none ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.65)) drop-shadow(0 0 16px rgba(212,155,35,0.25))' }}
      >
        {ShieldDefs}
        {ShieldContent}
      </svg>
    </div>
  );
};

