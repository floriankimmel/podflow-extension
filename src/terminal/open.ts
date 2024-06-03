import { LocalStorage } from "@raycast/api";
import { execSync, exec } from "child_process";
import { env } from "./config";

export async function runInRecordingSession({ command, openTerminal = true } : { command: string; openTerminal: boolean}) {
    const localRecordingTmuxSessionId = await LocalStorage.getItem<string>("tmuxRecordingSession") ?? '';
    await openSession(localRecordingTmuxSessionId, openTerminal);
    exec(`tmux select-window -t 4`, { env })
    exec(`tmux send-keys -t 4 'podflow chapter ${command}' Enter`, { env })
}

async function openTerminal() {
    const localTerminalAppBundleId = await LocalStorage.getItem<string>("terminalAppBundleId");
    execSync(`open -b ${localTerminalAppBundleId}`);
}
async function openSession(session: string, shouldOpenTerminal: boolean = true) {
    if (shouldOpenTerminal) {
        await openTerminal();
    }
    exec(`tmux switch -t ${session}`, { env });
}
