import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.derbayerischeclub.app',
  appName: 'der-bayerische-club',
  webDir: 'dist',
  server: {
    allowNavigation: ['xemusk.com']
  }
};

export default config;
