# 實驗室營運工具箱 (Lab Operations Toolbox)

**輕量級學術策略與管理畫布 (Academic Canvas Web App)**

> A lightweight Web App for Academic Strategy, Experiment Design, and Lab Management using Google Sheets & GAS.

這是一個利用 **Google Sheets** 作為資料庫、透過 **Google Apps Script (GAS)** 部署的輕量級網頁應用程式。
專為需要頻繁調整專案策略、設計實驗架構、管理核心設施或實驗室營運的研究人員所設計。

### 🌟 系統包含四大核心管理模組：

1. **策略面 (Strategic)：** 商業模式畫布 (BMC) 與 SWOT 分析
2. **實驗面 (Experiment)：** 實驗設計畫布 (Experiment Design Canvas, EDC)
3. **執行面 (Execution)：** OKR 目標管理與艾森豪任務排程 (Eisenhower Matrix)
4. **管理面 (Management)：** 決策日誌 (Decision Log)、風險矩陣 (Risk Matrix) 與專案回顧 (Retrospective)

---

## 💡 核心優勢 (Key Features)

✅ **極致安全 (免架設伺服器)**：採用你自己的 Google Sheets 當作隱形資料庫，所有策略與機密 100% 存在你個人的 Google Drive 中。
✅ **AI 擴充友善**：網頁原生內容區塊 (`contenteditable`) 能完美銜接瀏覽器上的 AI Extension，直接喚出 AI 幫忙潤飾計畫，一起腦力激盪 (做夢畫大餅)。
✅ **直覺編輯與自動存檔**：像貼便利貼一樣，點擊網頁區塊直接打字，系統背景自動極速回傳存檔，不怕資料遺失。
✅ **完全自訂標題**：支援從試算表直接更改所有九宮格與矩陣的中英文字段，打造你專屬的畫布。
✅ **學術友善匯出**：一鍵產生 Quarto (`.qmd`) 原始碼、PDF 或 PNG 圖檔，無縫貼進簡報或計畫書草稿！

---

## 🚀 部署教學 (1 分鐘完成，保證成功)

### 步驟一：建立資料庫與程式碼 (一鍵複製)

1. 點擊下方連結，會自動將內建程式碼的資料庫範本複製到你的 Google 雲端硬碟 (全程免費)：
   👉 [一鍵複製 Google Sheet 專屬範本](https://docs.google.com/spreadsheets/d/1ZLwbtcXO2Koy5OcWiN7oZbaF0rReSUskVKp73Zv-StE/copy)
3. 複製完成後，你可以隨意修改下方四個分頁 (`Strategic`, `Experiment`, `Execution`, `Management`) 中 **C 欄 (Title)** 的標題文字。
4. ⚠️ **請勿直接在試算表的 B 欄 (Content) 打字**，我們等步驟二發佈後，直接透過精美的網頁介面來填寫！

### 步驟二：發布網頁應用程式 (Web App)

1. 在複製好的試算表上方選單，點擊 **「擴充功能」 > 「Apps Script」**。
2. 進入編輯器後，你會看到程式碼已經由範本為你準備好了！請直接點擊右上角藍色的 **「部署」 > 「新增部署作業」**。
3. 點擊左上角的齒輪圖示，選取 **「網頁應用程式」**。
4. **執行身分** 選「我」，**誰可以存取** 選「只有我自己」(這樣才能保護你的實驗室機密)。
5. 點擊 **「部署」**。
6. **【首次授權】** 系統會要求授權，請點擊「授予存取權」。若出現紅色安全警告，請點擊左下角的「Advanced (進階)」 ➡️ 「Go to [專案名稱] (unsafe)」 ➡️ 勾選允許權限。
7. 🎉 部署完成！系統會產生一段專屬網址，點擊該網址即可開始規劃你的科研策略！

---

## 🛠️ 進階技巧：一鍵為資料庫瘦身加速

為了讓網頁載入與存檔達到「秒開」等級，建議清除試算表中多餘的空白列：

1. 回到 Apps Script 編輯器。
2. 在上方工具列找到下拉式選單，選擇 **`trimEmptyRows`**。
3. 點擊旁邊的 **「執行 (▶)」**。
4. 程式會自動幫你把所有分頁底部用不到的數百行空白列刪除，讓系統運作飛快！

---

## ❤️ 支持這個專案 (How to Support This Project)

如果這個畫布工具幫助你釐清了實驗室的營運方向，或節省了你整理計畫書的時間，歡迎透過以下方式支持我的持續開發與研究：

### ☕ 1. 贊助支持 (Sponsor This Project)

開發與維護開源工具需要投入許多業餘時間。如果你覺得工具好用，歡迎給我一點鼓勵！
[![Sponsor Me](https://img.shields.io/badge/Sponsor-Support_My_Work-FFDD00?style=for-the-badge&logo=kofi&logoColor=black)](https://ko-fi.com/jingyuanchen)

### 📄 2. 學術交流 (Academic Connection)

身為生醫研究人員，若你在研究或設施管理中使用了本工具，或對單細胞轉錄體 (scRNA-seq)、Nanopore 定序有興趣，歡迎參考或與我討論。

---

## ⚠️ 免責聲明 (Disclaimer)

* 本專案為開發者基於個人興趣於非工作時間所開發之開源輔助工具，與所屬之研究機構或任職單位無關。
* 專案採「現狀 (as-is)」提供，開發者與所屬機構不承擔系統維護、資料保管或任何直接/間接損害之背書與賠償責任。
* 使用者應自行妥善保管機密策略與資料。
