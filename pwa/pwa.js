let deferredPrompt
// const addBtn = document.querySelector(".add-button");
const addBtn = document.getElementById("install-pwa")

window.addEventListener("beforeinstallprompt", (e) => {
  console.log(e)
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault()
  // Stash the event so it can be triggered later.
  deferredPrompt = e
  // Update UI to notify the user they can add to home screen
  // ブラウザを判断し、インストールボタンを表示
  addBtn.style.display = "flex"

  addBtn.addEventListener("click", () => {
    // hide our user interface that shows our A2HS button
    // インストール済みの場合は、インストールボタンを非表示
    addBtn.style.display = "none"
    // Show the prompt
    // インストール確認ダイアログ
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("A2HS promptでPWAをインストールしました")
      } else {
        console.log("PWAインストールをキャンセルしました")
      }
      deferredPrompt = null
    })
  })
})
