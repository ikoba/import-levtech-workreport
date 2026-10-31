import Papa from 'papaparse'

type ReportColumn =
  | 'date'
  | 'start_time'
  | 'end_time'
  | 'relax_time'
  | 'work_content'
type Report = Record<ReportColumn, string>

// CSVの列と、作業報告ページの入力欄（name="rows.{行番号}.{field}"）の対応
const fieldNames: Record<Exclude<ReportColumn, 'date'>, string> = {
  start_time: 'startTime',
  end_time: 'endTime',
  relax_time: 'breakTime',
  work_content: 'comment',
}

// 「作業時間出力」ボタンの並びにインポートボタンを追加する
const anchorSelector = 'button[data-click-label="作業報告_詳細_作業時間出力"]'
const termSelector = 'dl[data-field="workReportTerm"] dd'

const button = document.createElement('button')
button.type = 'button'
button.textContent = 'CSVインポート'
button.setAttribute('style', 'padding: 5px; background-color: yellow')
button.onclick = () => {
  input.click()
}

const input = document.createElement('input')
input.type = 'file'
input.accept = '.csv,text/plain'
input.onchange = () => {
  if (input.files == null || input.files.length === 0) {
    return
  }
  const file = input.files[0]
  // 同じファイルを続けて選択しても onchange が発火するようにする
  input.value = ''
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      const reports = results.data.map((row) => {
        const fields = Object.values(row as object)
        const report: Report = {
          date: fields[0],
          start_time: fields[1],
          end_time: fields[2],
          relax_time: fields[3],
          work_content: fields[4],
        }
        return report
      })
      inputReports(reports)
    },
  })
}

// ページはReactで描画され、クライアント側の画面遷移や再描画でボタンが消えることがあるため、
// DOMの変化を監視してボタンが無ければ追加し直す
function ensureButton() {
  if (button.isConnected) {
    return
  }
  const anchor = document.querySelector(anchorSelector)
  anchor?.parentElement?.prepend(button)
}

ensureButton()
new MutationObserver(ensureButton).observe(document.body, {
  childList: true,
  subtree: true,
})

function inputReports(reports: Report[]) {
  const rowIndexes = getRowIndexes()
  if (rowIndexes.size === 0) {
    alert('作業報告の対象期間を取得できませんでした。')
    return
  }

  for (const report of reports) {
    if (report.date == null) {
      continue
    }
    const index = rowIndexes.get(report.date.replaceAll('/', ''))
    if (index == null) {
      continue
    }

    for (const [column, value] of Object.entries(report)) {
      if (column === 'date') {
        continue
      }
      const field = fieldNames[column as keyof typeof fieldNames]
      const selector = `input[name="rows.${index}.${field}"]`
      const input = document.querySelector<HTMLInputElement>(selector)
      if (input != null && value != null) {
        setInputValue(input, value)
      }
    }
  }
}

// 対象期間（例：「2026/10/01 ～ 2026/10/31」）の開始日を rows.0 として、
// YYYYMMDD → 行番号 の対応を作る
function getRowIndexes(): Map<string, number> {
  const indexes = new Map<string, number>()
  const term = document.querySelector(termSelector)?.textContent ?? ''
  const match = term.match(/(\d{4})\/(\d{2})\/(\d{2})/)
  if (match == null) {
    return indexes
  }

  const [, year, month, day] = match.map(Number)
  for (let index = 0; ; index++) {
    if (document.querySelector(`input[name^="rows.${index}."]`) == null) {
      break
    }
    const date = new Date(year, month - 1, day + index)
    const key = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0'),
    ].join('')
    indexes.set(key, index)
  }
  return indexes
}

// Reactの制御コンポーネントに値を反映させるため、ネイティブのsetterで値を設定してイベントを発火する
function setInputValue(input: HTMLInputElement, value: string) {
  const setter = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    'value',
  )?.set
  setter?.call(input, value)
  input.dispatchEvent(new Event('input', { bubbles: true }))
  input.dispatchEvent(new Event('change', { bubbles: true }))
  input.dispatchEvent(new FocusEvent('focusout', { bubbles: true }))
  input.dispatchEvent(new FocusEvent('blur'))
}
