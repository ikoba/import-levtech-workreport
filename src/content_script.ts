import Papa from 'papaparse'

type ReportColumn =
  | 'date'
  | 'start_time'
  | 'end_time'
  | 'relax_time'
  | 'work_content'
type Report = Record<ReportColumn, string>

waitQuerySelector('.tabContainer')?.then((elem) => {
  elem.prepend(button)
})

async function waitQuerySelector(selector: string): Promise<Element> {
  let elem: Element | null = null

  while (!elem) {
    elem = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(document.querySelector(selector))
      }, 100)
    })
  }
  return elem
}

const button = document.createElement('button')
button.type = 'button'
button.textContent = 'CSVインポート'
button.setAttribute(
  'style',
  'margin-bottom: 10px; padding: 5px; background-color: yellow',
)
button.onclick = () => {
  input.click()
}

const input = document.createElement('input')
input.type = 'file'
input.accept = '.csv,text/plain'
input.onchange = () => {
  if (input.files == null) {
    return
  }
  const file = input.files[0]
  Papa.parse(file, {
    header: true,
    complete: (results) => {
      const reports: Report[] = results.data.map((row) => {
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

function inputReports(reports: Report[]) {
  for (const report of reports) {
    const date = report.date.replaceAll('/', '')

    for (const [column, value] of Object.entries(report)) {
      if (column === 'date') continue

      const selector = `input[name="data[DailyReport][${date}][${column}]"]`
      const input = document.querySelector<HTMLInputElement>(selector)
      if (input != null && value != null) {
        input.value = value
      }
    }
  }
}
