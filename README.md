
# EdaVandi - Smart Bus Tracking App

## About EdaVandi

**EdaVandi** is a smart bus tracking application for Kerala, providing real-time GPS tracking, accurate ETAs, and smart alerts for KSRTC and other bus services across all 14 districts of Kerala.

### 🚌 Key Features
- **Live GPS Tracking** - Real-time bus locations updated every few seconds
- **Accurate ETAs** - Know exactly when your bus will arrive at your stop  
- **Smart Alerts** - Get notified about delays, breakdowns, and cancellations
- **750+ Live Buses** - Comprehensive coverage across Kerala
- **3000+ Bus Stops** - Extensive network coverage
- **97% Accuracy** - Reliable and precise tracking

### 📱 Platform Availability
- **Mobile App** - Native Android app (coming soon to Google Play Store)
- **Web App** - Responsive web application accessible from any browser
- **iOS App** - Coming soon to Apple App Store

## Project Details

**URL**: https://lovable.dev/projects/600e70ed-e782-46f7-ba64-1f7fa04a06b3

## Technologies Used

This project is built with modern web technologies:

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Mobile**: Capacitor (for native mobile app features)
- **State Management**: TanStack React Query
- **Icons**: Lucide React
- **Charts**: Recharts
- **UI Components**: Radix UI primitives

## Development Setup

### Prerequisites
- Node.js (recommended: install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or yarn package manager

### Getting Started

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Mobile Development (Android)

```sh
# Build the web app
npm run build

# Add Android platform
npx cap add android

# Sync changes to Android
npx cap sync android

# Open in Android Studio
npx cap open android
```

### Mobile Development (iOS)

```sh
# Build the web app  
npm run build

# Add iOS platform (macOS only)
npx cap add ios

# Sync changes to iOS
npx cap sync ios

# Open in Xcode (macOS only)
npx cap open ios
```

## Available Routes & Services

EdaVandi covers major routes across Kerala including:

### Popular Long Distance Routes
- **Thiruvananthapuram ↔ Kochi** - Capital to commercial hub
- **Kozhikode ↔ Thiruvananthapuram** - Overnight express services  
- **Kochi ↔ Munnar** - Hill station connectivity
- **Thrissur ↔ Guruvayur** - Temple town routes

### Special Services
- **Airport Connectivity** - Direct buses to Kochi and Thiruvananthapuram airports
- **Interstate Services** - Connections to Karnataka, Tamil Nadu
- **Hill Station Routes** - Munnar, Wayanad, Thekkady services
- **City Services** - Urban and suburban routes in major cities

## Contributing

We welcome contributions! Here are several ways you can contribute:

### Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Data Contributions
- Report missing bus routes
- Update bus stop information
- Verify schedule accuracy
- Submit new bus operator details

## Deployment

### Web Deployment
Simply open [Lovable](https://lovable.dev/projects/600e70ed-e782-46f7-ba64-1f7fa04a06b3) and click on Share → Publish.

### Mobile App Deployment
1. Build the app using Capacitor
2. Generate signed APK/AAB for Android
3. Submit to Google Play Store
4. For iOS: Submit to Apple App Store

## Custom Domain

You can connect a custom domain to your EdaVandi instance:
1. Navigate to Project > Settings > Domains in Lovable
2. Click "Connect Domain"
3. Follow the setup instructions

Read more: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Development Workflow

### Using Lovable (Recommended)
Visit the [Lovable Project](https://lovable.dev/projects/600e70ed-e782-46f7-ba64-1f7fa04a06b3) and start prompting. Changes are automatically committed to this repository.

### Using Local IDE
Clone this repo and push changes. All pushed changes will be reflected in Lovable automatically thanks to bidirectional sync.

### Using GitHub Codespaces
1. Click the "Code" button → "Codespaces" tab
2. Create a new Codespace
3. Edit files directly in the browser
4. Commit and push your changes

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Application pages
├── data/              # Static data (bus routes, stops, schedules)
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── lib/               # Third-party library configurations
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and feedback:
- 📧 Email: support@edavandi.com
- 💬 Join our community discussions
- 🐛 Report bugs via GitHub Issues
- 🚀 Feature requests welcome!

---

**EdaVandi** - Making bus travel in Kerala smarter, one route at a time! 🚌✨
