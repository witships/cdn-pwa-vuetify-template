let deferredPrompt
const addBtn = document.getElementById("install-pwa")

// pwaのインストールボタンを表示
window.addEventListener("beforeinstallprompt", (e) => {
  console.log(e)
  e.preventDefault()
  deferredPrompt = e
  // ブラウザを判断し、インストールボタンを表示
  addBtn.style.display = "flex"

  addBtn.addEventListener("click", () => {
    // インストール済みの場合は、インストールボタンを非表示
    addBtn.style.display = "none"
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
