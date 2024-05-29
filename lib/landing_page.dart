import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';
import 'package:rishabnayak/colors.dart';
import 'package:url_launcher/url_launcher.dart';

class LandingPage extends StatefulWidget {
  const LandingPage({super.key});

  @override
  State<LandingPage> createState() => _LandingPageState();
}

class _LandingPageState extends State<LandingPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.darkGrey,
      body: Container(
        padding: const EdgeInsets.all(16.0),
        child: LayoutBuilder(
          builder: (BuildContext context, BoxConstraints constraints) {
            if (constraints.maxWidth > 600) {
              return buildWideLayout();
            } else {
              return buildNarrowLayout();
            }
          },
        ),
      ),
    );
  }
}

buildProfilePhoto() {
  return ClipRRect(
    borderRadius: BorderRadius.circular(8.0),
    child: Image.asset(
      'assets/images/profilePhoto.jpeg',
      width: 200,
      height: 200,
      fit: BoxFit.cover,
    ),
  );
}

buildProfileInfo() {
  return Column(
    children: <Widget>[
      const Text(
        'Rishab Nayak',
        style: TextStyle(
          fontSize: 24.0,
          fontWeight: FontWeight.w600,
          color: AppColors.yellow,
        ),
      ),
      const Text(
        '2x Founder | MLH Top 50 | GCP Professional Cloud Architect',
        textAlign: TextAlign.center,
        style: TextStyle(
          fontSize: 20.0,
          fontWeight: FontWeight.w400,
          color: AppColors.mediumGrey,
        ),
      ),
      const SizedBox(height: 16.0),
      Text.rich(
        TextSpan(
          children: [
            const TextSpan(
              text: 'As a ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            const TextSpan(
              text: 'seasoned founder ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.green,
              ),
            ),
            const TextSpan(
              text: 'and ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            const TextSpan(
              text: 'engineer, ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.green,
              ),
            ),
            const TextSpan(
              text: 'I bring a track record of ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            const TextSpan(
              text: 'driving innovation and efficiency ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.green,
              ),
            ),
            const TextSpan(
              text: 'across multiple tech ventures. With a ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            const TextSpan(
              text: 'Master of Science ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.green,
              ),
            ),
            const TextSpan(
              text: 'in ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            const TextSpan(
              text: 'Computer Science ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.green,
              ),
            ),
            const TextSpan(
              text: 'from ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            const TextSpan(
              text: 'Boston University ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.green,
              ),
            ),
            const TextSpan(
              text: 'and expertise in domains spanning ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            const TextSpan(
              text: 'Data Science, AI, ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.green,
              ),
            ),
            const TextSpan(
              text: 'and ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            const TextSpan(
              text: 'Cloud Computing. ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.green,
              ),
            ),
            const TextSpan(
              text: 'I have ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            const TextSpan(
              text: 'co-founded ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.green,
              ),
            ),
            const TextSpan(
              text: 'successful startups including ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            TextSpan(
              text: 'Mount',
              recognizer: TapGestureRecognizer()
                ..onTap = () => _launchURL('https://rentmount.com'),
              style: const TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.orange,
              ),
            ),
            const TextSpan(
              text: ' and ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            TextSpan(
              text: 'Joyn',
              recognizer: TapGestureRecognizer()
                ..onTap = () => _launchURL('https://joynchat.com'),
              style: const TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.orange,
              ),
            ),
            const TextSpan(
              text: ', raising a total of ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            const TextSpan(
              text: 'over \$3M in funding.',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.green,
              ),
            ),
            const TextSpan(
              text: '\n\nI\'m passionate about ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            const TextSpan(
              text: 'solving complex problems, leading high-performing teams, ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.green,
              ),
            ),
            const TextSpan(
              text: 'and continuously ',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.mediumGrey,
              ),
            ),
            const TextSpan(
              text: 'pushing the boundaries of technology.',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.w300,
                color: AppColors.green,
              ),
            ),
          ],
        ),
      ),
      const SizedBox(height: 16.0),
      buildSocialRow(),
    ],
  );
}

buildSocialRow() {
  return Row(
    mainAxisAlignment: MainAxisAlignment.center,
    children: <Widget>[
      const Text(
        'Get in touch: ',
        style: TextStyle(
          fontSize: 16.0,
          fontWeight: FontWeight.w300,
          color: AppColors.yellow,
        ),
      ),
      GestureDetector(
        onTap: () => _launchURL('https://github.com/rishabnayak'),
        child: Image.asset(
          'assets/images/github.png',
          width: 24.0,
          height: 24.0,
        ),
      ),
      const SizedBox(width: 16.0),
      GestureDetector(
        onTap: () => _launchURL('https://linkedin.com/in/rishabnayak'),
        child: Image.asset(
          'assets/images/linkedin.png',
          width: 24.0,
          height: 24.0,
        ),
      ),
      const SizedBox(width: 16.0),
      GestureDetector(
        onTap: () => _launchURL('mailto:rishab@rishabnayak.com'),
        child: Image.asset(
          'assets/images/email.png',
          width: 24.0,
          height: 24.0,
        ),
      ),
      const SizedBox(width: 16.0),
      GestureDetector(
        onTap: () => _launchURL('https://instagram.com/rishabnayak'),
        child: Image.asset(
          'assets/images/instagram.png',
          width: 24.0,
          height: 24.0,
        ),
      ),
      const SizedBox(width: 16.0),
      GestureDetector(
        onTap: () => _launchURL('https://x.com/rishabnayak'),
        child: Image.asset(
          'assets/images/x.png',
          width: 20.0,
          height: 20.0,
        ),
      ),
    ],
  );
}

buildNarrowLayout() {
  return Column(
    children: <Widget>[
      buildProfilePhoto(),
      buildProfileInfo(),
    ],
  );
}

buildWideLayout() {
  return Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: <Widget>[
      Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          buildProfilePhoto(),
          const SizedBox(width: 16.0),
          Expanded(
            child: buildProfileInfo(),
          ),
        ],
      ),
    ],
  );
}

Future<void> _launchURL(String urlString) async {
  final Uri url = Uri.parse(urlString);

  if (await canLaunchUrl(url)) {
    await launchUrl(url);
  } else {
    throw 'Could not launch $url';
  }
}
