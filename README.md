<h1 align="center">🍽️ Recipe Finder Mobile App 🍽️</h1>



## Features

- 🔐 Secure Authentication with Email Verification
- 🍳 Discover and Browse Featured Recipes
- 🔍 Smart Recipe Search with Category Filters
- 🎥 Step-by-Step Video Cooking Instructions
- ❤️ Personalized Favorites Collection
- ⚡ Modern Tech Stack: React Native + Express + PostgreSQL + Expo
- 🌈 Beautiful UI with Multiple Color Themes
- 🆓 Open Source and Free to Use

---

## 📱 Screenshots & Demo

The app features a completely redesigned UI with:
- Modern card-based design
- Smooth animations and transitions
- Beautiful color themes
- Intuitive navigation
- Enhanced user experience

---

## 🛠️ Tech Stack

- **Frontend**: React Native with Expo Router
- **Backend**: Express.js with Node.js
- **Database**: PostgreSQL (Neon)
- **Authentication**: Clerk
- **Styling**: Modern React Native StyleSheet with custom themes
- **State Management**: React hooks
- **Navigation**: Expo Router

---

## 🧪 Environment Setup

### Backend (`/backend`)

Create a `.env` file in the backend directory:

```bash
PORT=5001
DATABASE_URL=your_neon_database_url_here
NODE_ENV=development
```

### Mobile App (`/mobile`)

Create a `.env` file in the mobile directory:

```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
EXPO_PUBLIC_API_URL=http://localhost:5001
EXPO_PUBLIC_APP_NAME=Recipe Finder
EXPO_PUBLIC_APP_VERSION=1.0.0
NODE_ENV=development
```

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Clone and Install

```bash
# Clone the repository
git clone <your-repository-url>
cd RecipeFinderMobileApp

# Install backend dependencies
cd backend
npm install

# Install mobile dependencies
cd ../mobile
npm install
```

### Database Setup

1. Create a PostgreSQL database on [Neon](https://neon.tech/)
2. Copy the connection URL to your backend `.env` file
3. Run database migrations (if any)

### Authentication Setup

1. Create a Clerk account at [clerk.com](https://clerk.com/)
2. Create a new application
3. Copy the publishable key to your mobile `.env` file

---

## 🔧 Running the Application

### Start the Backend Server

```bash
cd backend
npm run dev
```

The server will run on `http://localhost:5001`

### Start the Mobile App

```bash
cd mobile
npx expo start
```

This will open the Expo development tools. You can:
- Press `i` to run on iOS Simulator
- Press `a` to run on Android Emulator
- Scan the QR code with Expo Go app on your device

---

## 📱 Deployment

### Mobile App Deployment

#### Using EAS Build (Recommended)

1. Install EAS CLI:
```bash
npm install -g @expo/eas-cli
```

2. Configure EAS:
```bash
cd mobile
eas configure
```

3. Build for app stores:
```bash
# For Android
eas build --platform android

# For iOS
eas build --platform ios

# For both
eas build --platform all
```

#### Using Expo Build

```bash
cd mobile
expo build:android
expo build:ios
```

### Backend Deployment

#### Using Heroku

1. Install Heroku CLI
2. Create a new Heroku app:
```bash
cd backend
heroku create your-app-name
```

3. Set environment variables:
```bash
heroku config:set DATABASE_URL=your_neon_db_url
heroku config:set NODE_ENV=production
```

4. Deploy:
```bash
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

#### Using Railway

1. Connect your GitHub repository to Railway
2. Set environment variables in the Railway dashboard
3. Deploy automatically on git push

#### Using Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd backend
vercel
```

---

## 🎨 UI Customization

The app includes multiple modern themes. To change the theme, edit `/mobile/constants/Colors.js`:

```javascript
// Available themes:
- modernMinimal (default)
- darkElegant
- vibrant
- coffee
- forest
- purple
- ocean
- sunset
- mint
- midnight
- roseGold

// Change the default theme
export const COLORS = THEMES.modernMinimal; // Change to your preferred theme
```

---

## 📁 Project Structure

```
RecipeFinderMobileApp/
├── backend/                 # Express.js backend
│   ├── src/
│   │   ├── server.js       # Main server file
│   │   └── ...
│   ├── package.json
│   └── .env
├── mobile/                 # React Native app
│   ├── app/               # Expo Router pages
│   │   ├── (auth)/        # Authentication pages
│   │   ├── (tabs)/        # Main app tabs
│   │   └── recipe/        # Recipe details
│   ├── components/        # Reusable components
│   ├── constants/         # Colors and themes
│   ├── assets/           # Images and fonts
│   ├── package.json
│   └── .env
└── README.md
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit: `git commit -m 'Add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Thanks to the React Native and Expo teams for the amazing tools
- Icons by Expo Vector Icons
- UI inspiration from modern design trends

---

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub.
