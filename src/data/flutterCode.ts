export interface FlutterFile {
  name: string;
  path: string;
  code: string;
  description: string;
}

export const flutterProjectFiles: FlutterFile[] = [
  {
    name: 'app_colors.dart',
    path: 'lib/constants/app_colors.dart',
    description: 'ألوان هوية كلية الغد الدولية المعتمدة والتدرج الكحلي الثلاثي',
    code: `import 'package:flutter/material.dart';

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
`,
  },
  {
    name: 'main.dart',
    path: 'lib/main.dart',
    description: 'نقطة الانطلاق لتطبيق فلاتر مع إخفاء شريط الحالة بالكامل وإعداد الثيم والمسارات',
    code: `import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'constants/app_colors.dart';
import 'screens/welcome_screen.dart';
import 'screens/login_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  
  // إخفاء رموز شريط الحالة بالكامل (البطارية، التغطية، الساعة، الشبكة)
  SystemChrome.setEnabledSystemUIMode(
    SystemUiMode.manual,
    overlays: [], // إزالة جميع الأشرطة العلوية والسفلية لشاشة نقية تماماً
  );
  
  runApp(const AlGhadCollegeApp());
}

class AlGhadCollegeApp extends StatelessWidget {
  const AlGhadCollegeApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'كلية الغد الدولية',
      debugShowCheckedModeBanner: false,
      locale: const Locale('ar', 'SA'),
      theme: ThemeData(
        fontFamily: 'Tajawal',
        scaffoldBackgroundColor: AppColors.navyDark,
        colorScheme: ColorScheme.fromSeed(
          seedColor: AppColors.navyRoyal,
          primary: AppColors.navyRoyal,
          secondary: AppColors.orange,
        ),
        useMaterial3: true,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const WelcomeScreen(),
        '/login': (context) => const LoginScreen(),
      },
    );
  }
}
`,
  },
  {
    name: 'welcome_screen.dart',
    path: 'lib/screens/welcome_screen.dart',
    description: 'شاشة الترحيب مع التدرج الكحلي الثلاثي وشعار الدرع والألوان المعتمدة',
    code: `import 'package:flutter/material.dart';
import '../constants/app_colors.dart';
import '../widgets/logo_badge.dart';

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        height: double.infinity,
        decoration: const BoxDecoration(
          gradient: AppColors.navyBackgroundGradient,
        ),
        child: SafeArea(
          top: false, // بدون شريط حالة
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              // الشعار ونصوص الترحيب
              Expanded(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: const [
                    AlGhadLogoBadge(size: 185),
                    SizedBox(height: 28),
                    Text(
                      'مرحباً بك',
                      style: TextStyle(
                        fontSize: 34,
                        fontWeight: FontWeight.w900,
                        color: AppColors.white,
                        letterSpacing: -0.5,
                      ),
                    ),
                    SizedBox(height: 8),
                    Text(
                      'كلية الغد الدولية',
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.w700,
                        color: AppColors.white,
                      ),
                    ),
                    SizedBox(height: 6),
                    Text(
                      'للعلوم الصحية والتقنية',
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w500,
                        color: AppColors.grayText,
                      ),
                    ),
                  ],
                ),
              ),

              // الأزرار السفلية
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 28.0, vertical: 36.0),
                child: Column(
                  children: [
                    // زر تسجيل الدخول
                    SizedBox(
                      width: double.infinity,
                      height: 54,
                      child: OutlinedButton(
                        onPressed: () {
                          Navigator.pushNamed(context, '/login');
                        },
                        style: OutlinedButton.styleFrom(
                          backgroundColor: AppColors.navyMid,
                          foregroundColor: AppColors.white,
                          side: const BorderSide(
                            color: AppColors.orange,
                            width: 2.0,
                          ),
                          shape: const RoundedRectangleBorder(
                            borderRadius: BorderRadius.all(Radius.circular(50)),
                          ),
                          elevation: 6,
                          shadowColor: Colors.black54,
                        ),
                        child: const Text(
                          'تسجيل الدخول',
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                            color: AppColors.white,
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(height: 14),
                    // رابط الدخول كزائر
                    TextButton(
                      onPressed: () {
                        Navigator.pushNamed(context, '/login');
                      },
                      child: const Text(
                        'ليس لديك حساب؟ سجل الدخول كزائر',
                        style: TextStyle(
                          color: AppColors.orange,
                          fontSize: 15,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
`,
  },
  {
    name: 'login_screen.dart',
    path: 'lib/screens/login_screen.dart',
    description: 'شاشة تسجيل الدخول مع البطاقة البيضاء #FFFFFF والحقول والزر المعتمد',
    code: `import 'package:flutter/material.dart';
import '../constants/app_colors.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _academicIdController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool _obscurePassword = true;

  @override
  void dispose() {
    _academicIdController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        height: double.infinity,
        decoration: const BoxDecoration(
          gradient: AppColors.navyBackgroundGradient,
        ),
        child: SafeArea(
          bottom: false,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              // زر الرجوع وعنوان الكلية بالقسم العلوي مرفوعان لأعلى الشاشة
              Expanded(
                flex: 48,
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      IconButton(
                        icon: const Icon(Icons.arrow_back_ios, color: AppColors.white, size: 20),
                        onPressed: () => Navigator.pop(context),
                      ),
                      const SizedBox(height: 10),
                      Align(
                        alignment: Alignment.centerRight,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: const [
                            Text(
                              'كلية الغد الدولية',
                              style: TextStyle(
                                color: AppColors.white,
                                fontSize: 28,
                                fontWeight: FontWeight.w800,
                              ),
                            ),
                            SizedBox(height: 6),
                            Text(
                              'التأهيل الطبي والإداري الأفضل',
                              style: TextStyle(
                                color: AppColors.orange, // #D39706
                                fontSize: 17,
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              // البطاقة البيضاء المنحنية للأسفل تبدأ من منتصف الشاشة (~52%)
              Expanded(
                flex: 52,
                child: Container(
                  width: double.infinity,
                  decoration: const BoxDecoration(
                    color: AppColors.white,
                    borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(44.0),
                      topRight: Radius.circular(44.0),
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black26,
                        blurRadius: 20,
                        offset: Offset(0, -4),
                      ),
                    ],
                  ),
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.symmetric(horizontal: 28.0, vertical: 28.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        // 1. حقل الرقم الأكاديمي للطالب
                        _buildFieldHeader(
                          title: 'الرقم الأكاديمي للطالب',
                          icon: Icons.person_outline,
                        ),
                        const SizedBox(height: 8),
                        TextFormField(
                          controller: _academicIdController,
                          textAlign: TextAlign.right,
                          keyboardType: TextInputType.number,
                          style: const TextStyle(color: AppColors.navyDark, fontSize: 16),
                          decoration: const InputDecoration(
                            hintText: '00000000000',
                            hintStyle: TextStyle(
                              color: AppColors.grayText,
                              letterSpacing: 2.0,
                            ),
                            enabledBorder: UnderlineInputBorder(
                              borderSide: BorderSide(color: AppColors.grayText),
                            ),
                            focusedBorder: UnderlineInputBorder(
                              borderSide: BorderSide(color: AppColors.orange, width: 1.5),
                            ),
                            contentPadding: EdgeInsets.symmetric(vertical: 8),
                          ),
                        ),

                        const SizedBox(height: 32),

                        // 2. حقل كلمة المرور
                        _buildFieldHeader(
                          title: 'كلمة المرور',
                          icon: Icons.dialpad_outlined,
                        ),
                        const SizedBox(height: 8),
                        TextFormField(
                          controller: _passwordController,
                          obscureText: _obscurePassword,
                          textAlign: TextAlign.right,
                          style: const TextStyle(color: AppColors.navyDark, fontSize: 16),
                          decoration: InputDecoration(
                            hintText: '00000000000',
                            hintStyle: const TextStyle(
                              color: AppColors.grayText,
                              letterSpacing: 2.0,
                            ),
                            prefixIcon: IconButton(
                              icon: Icon(
                                _obscurePassword ? Icons.visibility_off : Icons.visibility,
                                color: AppColors.grayText,
                                size: 20,
                              ),
                              onPressed: () {
                                setState(() {
                                  _obscurePassword = !_obscurePassword;
                                });
                              },
                            ),
                            enabledBorder: const UnderlineInputBorder(
                              borderSide: BorderSide(color: AppColors.grayText),
                            ),
                            focusedBorder: const UnderlineInputBorder(
                              borderSide: BorderSide(color: AppColors.orange, width: 1.5),
                            ),
                            contentPadding: const EdgeInsets.symmetric(vertical: 8),
                          ),
                        ),

                        const SizedBox(height: 48),

                        // 3. زر الدخول (#002060 مع إطار #D39706)
                        SizedBox(
                          height: 54,
                          child: OutlinedButton(
                            onPressed: () {
                              ScaffoldMessenger.of(context).showSnackBar(
                                const SnackBar(
                                  content: Text('جاري التحقق من البيانات...', textAlign: TextAlign.center),
                                  backgroundColor: AppColors.navyRoyal,
                                ),
                              );
                            },
                            style: OutlinedButton.styleFrom(
                              backgroundColor: AppColors.navyRoyal,
                              foregroundColor: AppColors.white,
                              side: const BorderSide(
                                color: AppColors.orange,
                                width: 2.0,
                              ),
                              shape: const RoundedRectangleBorder(
                                borderRadius: BorderRadius.all(Radius.circular(50)),
                              ),
                              elevation: 4,
                            ),
                            child: const Text(
                              'دخول',
                              style: TextStyle(
                                fontSize: 20,
                                fontWeight: FontWeight.bold,
                                color: AppColors.white,
                              ),
                            ),
                          ),
                        ),

                        const SizedBox(height: 48),

                        // 4. تذييل الأمان
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: const [
                            Text(
                              'بيانات آمنة، مستقبل مضمون',
                              style: TextStyle(
                                color: AppColors.navyRoyal,
                                fontSize: 14,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                            SizedBox(width: 8),
                            Icon(
                              Icons.laptop_chromebook,
                              color: AppColors.orange,
                              size: 20,
                            ),
                          ],
                        ),
                        const SizedBox(height: 16),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildFieldHeader({required String title, required IconData icon}) {
    return Directionality(
      textDirection: TextDirection.rtl,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Icon(icon, color: AppColors.navyRoyal, size: 20),
          const SizedBox(width: 8),
          Text(
            title,
            style: const TextStyle(
              color: AppColors.navyRoyal,
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
          ),
        ],
      ),
    );
  }
}
`,
  },
  {
    name: 'logo_badge.dart',
    path: 'lib/widgets/logo_badge.dart',
    description: 'الوسام الدائري لشعار كلية الغد الدولية مع الإطار الذهبي والقرص الأبيض والدرع في المنتصف',
    code: `import 'package:flutter/material.dart';
import '../constants/app_colors.dart';

class AlGhadLogoBadge extends StatelessWidget {
  final double size;
  const AlGhadLogoBadge({super.key, this.size = 205});

  @override
  Widget build(BuildContext context) {
    // شعار كلية الغد الدولية داخل الدائرة المعتمدة
    return Container(
      width: size,
      height: size,
      decoration: const BoxDecoration(
        shape: BoxShape.circle,
        boxShadow: [
          BoxShadow(
            color: Color(0x33D49B23),
            blurRadius: 24,
            spreadRadius: 2,
          ),
          BoxShadow(
            color: Colors.black54,
            blurRadius: 20,
            offset: Offset(0, 10),
          ),
        ],
      ),
      child: Center(
        child: Image.asset(
          'assets/images/logo.png',
          fit: BoxFit.contain,
          errorBuilder: (context, error, stackTrace) => const _FallbackMedallionLogo(),
        ),
      ),
    );
  }
}

class _FallbackMedallionLogo extends StatelessWidget {
  const _FallbackMedallionLogo();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 200,
      height: 200,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        border: Border.all(color: AppColors.orange, width: 3.5),
      ),
      padding: const EdgeInsets.all(4),
      child: Container(
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: AppColors.white,
          border: Border.all(color: AppColors.navyDark, width: 3),
        ),
        padding: const EdgeInsets.all(16),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Text(
              'كلية الغد الدولية',
              style: TextStyle(
                color: AppColors.navyDark,
                fontWeight: FontWeight.bold,
                fontSize: 13,
              ),
              textAlign: TextAlign.center,
            ),
            SizedBox(height: 3),
            Text(
              'ALGHAD INTERNATIONAL COLLEGE',
              style: TextStyle(
                color: AppColors.navyDark,
                fontWeight: FontWeight.bold,
                fontSize: 6,
                letterSpacing: 0.5,
              ),
              textAlign: TextAlign.center,
            ),
            SizedBox(height: 6),
            Text(
              'gic',
              style: TextStyle(
                color: AppColors.orange,
                fontWeight: FontWeight.w900,
                fontSize: 22,
                fontStyle: FontStyle.italic,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
`,
  },
  {
    name: 'pubspec.yaml',
    path: 'pubspec.yaml',
    description: 'ملف الاعتماديات والخطوط وصور الأصول لتطبيق فلاتر',
    code: `name: alghad_college_app
description: "AlGhad International College Mobile App - Authentic UI"
publish_to: 'none'
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.6

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true

  assets:
    - assets/images/

  fonts:
    - family: Tajawal
      fonts:
        - asset: fonts/Tajawal-Regular.ttf
        - asset: fonts/Tajawal-Medium.ttf
          weight: 500
        - asset: fonts/Tajawal-Bold.ttf
          weight: 700
        - asset: fonts/Tajawal-ExtraBold.ttf
          weight: 800
`,
  },
];
