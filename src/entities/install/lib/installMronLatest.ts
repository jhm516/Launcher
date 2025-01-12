import { setInstalled } from "@/entities/main/model/launcherSlice";
import { getLatestVersion } from "@/shared/utils/latestVersion";
import { removeOldInstall } from "@/shared/utils/removeOldInstall";
import { error, info } from "@tauri-apps/plugin-log";
import { Dispatch } from "redux";

// There was a function for handling extracting

export async function handleInstall(dispatch: Dispatch) {
  if (localStorage.getItem("game-path")) {
    info("Prerepairing for MRON Update...");

    try {
      await removeOldInstall("mron");
      await removeOldInstall("discord_game_sdk.dll");
      await removeOldInstall("script.gscbin");
    } catch (err) {
      error(`Error while deleting old install ${err}`);
    }

    localStorage.setItem("mron-version", await getLatestVersion());
  }

  // Set Installing or Updating state
  console.log("set install state");

  // Open file dialog
  console.log("open file dialog");

  // Install logic

  // Download mron archives to cache folder
  console.log("Download mron");

  console.log("extracting mron to the correct folders");

  dispatch(setInstalled());
}
