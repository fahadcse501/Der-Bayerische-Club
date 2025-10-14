import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.derbayerischeclub.app',
  appName: 'Der Bayerische Club',
  webDir: 'dist',
  
  server: {
    allowNavigation: ['content.derbayerischeclub.de']
  }
};

export default config;
