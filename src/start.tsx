import { closeMainWindow } from "@raycast/api";
import { runInRecordingSession } from "./terminal/open";
import { setDefaults } from "./terminal/config";

export default async () => {
    await closeMainWindow();
    await setDefaults();

    await runInRecordingSession('start');
}
