import { showHUD } from "@raycast/api";
import { runInRecordingSession } from "./terminal/open";
import { setDefaults } from "./terminal/config";

export default async () => {
    await setDefaults();

    await runInRecordingSession({ command: 'start', openTerminal: false });
    await showHUD(`Podcast started! 🎙️`)
}
