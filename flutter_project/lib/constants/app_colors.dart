import 'package:flutter/material.dart';

/// ألوان هوية كلية الغد الدولية المعتمدة:
/// - الأبيض: #FFFFFF
/// - تدرج الخلفية الكحلي الثلاثي: #0A131D, #091527, #002060
/// - اللون البرتقالي: #D39706
/// - لون الكتابة الرمادي: #C9C9C9
class AppColors {
  // الأبيض
  static const Color white = Color(0xFFFFFFFF);

  // الخلفية الكُحلي تدرج ثلاثة ألوان
  static const Color navyDark = Color(0xFF0A131D);
  static const Color navyMid = Color(0xFF091527);
  static const Color navyRoyal = Color(0xFF002060);

  // اللون البرتقالي
  static const Color orange = Color(0xFFD39706);

  // لون الكتابة الرمادي
  static const Color grayText = Color(0xFFC9C9C9);

  // تدرج الخلفية الكحلي الثلاثي المعتمد
  static const LinearGradient navyBackgroundGradient = LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: [
      navyDark,
      navyMid,
      navyRoyal,
    ],
  );
}
