import 'package:flutter/material.dart';
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

