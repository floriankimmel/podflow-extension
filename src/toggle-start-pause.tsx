import { runInRecordingSession } from "./terminal/open";
import { setDefaults } from "./terminal/config";
import { showHUD } from "@raycast/api";

export default async () => {
    await setDefaults();

    await runInRecordingSession({ command: 'toggle-pause', openTerminal: false })
    await showHUD(`Podcast toggled! 🎙️`)
}
