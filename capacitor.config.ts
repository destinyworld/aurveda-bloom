import type { CapacitorConfig } from "@capacitor/cli";

// Only enable live-reload server URL if CAPACITOR_LIVE_RELOAD is explicitly set to "true"
const isLiveReload = process.env.CAPACITOR_LIVE_RELOAD === "true";
const serverUrl = isLiveReload ? process.env.CAPACITOR_SERVER_URL : undefined;

const config: CapacitorConfig = {
  appId: "com.sattva.wellness",
  appName: "Sattva",
  webDir: "mobile-web",
  server: {
    ...(serverUrl
      ? {
          url: serverUrl,
          cleartext: serverUrl.startsWith("http://"),
        }
      : {
          androidScheme: "https",
        }),
    errorPath: "index.html",
  },
};

export default config;