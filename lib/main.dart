import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:rishabnayak/colors.dart';
import 'package:rishabnayak/firebase_options.dart';
import 'package:flutter_web_plugins/url_strategy.dart';
import 'package:rishabnayak/landing_page.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  usePathUrlStrategy();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  CustomTransitionPage buildPageWithDefaultTransition<T>({
    required BuildContext context,
    required GoRouterState state,
    required Widget child,
  }) {
    return CustomTransitionPage<T>(
      key: state.pageKey,
      child: child,
      transitionsBuilder: (context, animation, secondaryAnimation, child) =>
          FadeTransition(opacity: animation, child: child),
    );
  }

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Rishab Nayak',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        fontFamily: 'Source Code Pro',
        colorScheme: ColorScheme.fromSeed(seedColor: AppColors.darkGrey),
        useMaterial3: true,
      ),
      routerConfig: GoRouter(
        initialLocation: '/',
        observers: [
          FirebaseAnalyticsObserver(analytics: FirebaseAnalytics.instance)
        ],
        routes: [
          GoRoute(
            path: '/',
            pageBuilder: (context, state) => buildPageWithDefaultTransition(
              context: context,
              state: state,
              child: const LandingPage(),
            ),
          ),
        ],
        errorBuilder: (_, __) => const LandingPage(),
      ),
    );
  }
}
