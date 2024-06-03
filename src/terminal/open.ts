import { LocalStorage } from "@raycast/api";
import { execSync, exec } from "child_process";
import { env } from "./config";

export async function runInRecordingSession(command: string){
    const localRecordingTmuxSessionId = await LocalStorage.getItem<string>("tmuxRecordingSession") ?? '';
    await openSession(localRecordingTmuxSessionId);
    exec(`tmux select-window -t 4`, { env })
    exec(`tmux send-keys -t 4 'podflow chapter ${command}' Enter`, { env })
}

async function openTerminal() {
    const localTerminalAppBundleId = await LocalStorage.getItem<string>("terminalAppBundleId");
    execSync(`open -b ${localTerminalAppBundleId}`);
}
async function openSession(session: string) {
    await openTerminal();
    exec(`tmux switch -t ${session}`, { env });
}
