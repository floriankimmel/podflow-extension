import { LocalStorage } from "@raycast/api";

export const env = Object.assign({}, process.env, { PATH: "/usr/local/bin:/usr/bin:/opt/homebrew/bin" });

export async function setDefaults() {
    await LocalStorage.setItem("terminalAppBundleId", "com.github.wez.wezterm");
    await LocalStorage.setItem("tmuxRecordingSession", "Aufnahmen");
}
