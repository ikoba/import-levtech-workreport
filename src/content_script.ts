import Papa from "papaparse";

type Report = {
  start_time: string;
  end_time: string;
  relax_time: string;
  work_content: string;
};

type MonthlyReport = { [key: string]: Report };

waitQuerySelector(".tabContainer")?.then((elem) => {
  elem.prepend(button);
});

async function waitQuerySelector(selector: string): Promise<Element> {
  let elem: Element | null = null;

  while (!elem) {
    elem = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(document.querySelector(selector));
      }, 100);
    });
  }
  return elem;
}

const button = document.createElement("button");
button.type = "button";
button.textContent = "CSVインポート";
button.setAttribute(
  "style",
  "margin-bottom: 10px; padding: 5px; background-color: yellow",
);
button.onclick = () => {
  input.click();
};

const input = document.createElement("input");
input.type = "file";
input.accept = ".csv,text/plain";
input.onchange = () => {
  if (input.files == null) {
    return;
  }
  const file = input.files[0];
  Papa.parse(file, {
    header: true,
    complete: (results) => {
      const monthlyReport: MonthlyReport = {};

      for (const row of results.data) {
        const fields = Object.values(row as object);
        const dateString = fields[0].replaceAll("/", "");
        monthlyReport[dateString] = {
          start_time: fields[1],
          end_time: fields[2],
          relax_time: fields[3],
          work_content: fields[4],
        };
      }
      inputReport(monthlyReport);
    },
  });
};

function inputReport(monthlyReport: MonthlyReport) {
  for (const date of Object.keys(monthlyReport)) {
    const report = monthlyReport[date];
    for (const [prop, value] of Object.entries(report)) {
      const selector = `input[name="data[DailyReport][${date}][${prop}]"]`;
      const input = document.querySelector<HTMLInputElement>(selector);
      if (input != null && value != null) {
        input.value = value;
      }
    }
  }
}
