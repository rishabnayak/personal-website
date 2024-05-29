{{flutter_js}}
{{flutter_build_config}}

const progressBarFill = document.getElementById("progressBarFill");
function loopProgress() {
  progressBarFill.style.width = "0%";
  let progress = 0;
  const interval = setInterval(() => {
    progress += 20;
    progressBarFill.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      loopProgress();
    }
  }, 300);
}
loopProgress();
_flutter.loader.load({
  onEntrypointLoaded: async function (engineInitializer) {
    const appRunner = await engineInitializer.initializeEngine();
    await appRunner.runApp();
  },
});
