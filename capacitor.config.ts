
import { CapacitorConfig } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'app.lovable.600e70ede78246f7ba641f7fa04a06b3',
  appName: 'EdaVandi',
  webDir: 'dist',
  server: {
    url: 'https://600e70ed-e782-46f7-ba64-1f7fa04a06b3.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#10b981',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false
    }
  }
};

export default config;
