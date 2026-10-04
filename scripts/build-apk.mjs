import { spawnSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const androidDir = resolve(__dirname, '../android');
const isWindows = process.platform === 'win32';
const gradlewCmd = isWindows ? resolve(androidDir, 'gradlew.bat') : './gradlew';

console.log('[build-apk] Running Gradle assembleDebug...');
const result = spawnSync(gradlewCmd, ['assembleDebug'], {
  cwd: androidDir,
  stdio: 'inherit',
  shell: isWindows,
});

if (result.status !== 0) {
  console.error('[build-apk] Gradle build failed with status', result.status);
  process.exit(result.status || 1);
} else {
  console.log('[build-apk] Successfully built APK: android/app/build/outputs/apk/debug/app-debug.apk');
}
