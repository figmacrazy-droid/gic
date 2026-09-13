import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'constants/app_colors.dart';
import 'screens/welcome_screen.dart';
import 'screens/login_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  
  // إخفاء رموز شريط الحالة بالكامل لشاشة نقية تماماً
  SystemChrome.setEnabledSystemUIMode(
    SystemUiMode.manual,
    overlays: [],
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
