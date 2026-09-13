import 'package:flutter/material.dart';
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
