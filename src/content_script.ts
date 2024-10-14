import Papa from "papaparse";

type Report = {
  startTime: string;
  endTime: string;
  relaxTime: string;
  workContent: string;
};

type MonthlyReport = { [key: string]: Report };

const monthlyReport: MonthlyReport = {};

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
};

const button = document.createElement("button");
button.type = "button";
button.textContent = "CSVインポート";
button.onclick = () => {
  input.click();
};

const input = document.createElement("input");
input.type = "file";
input.accept = ".csv,text/plain";
input.onchange = () => {
  if (input.files == null) {
    return
  }
  const file = input.files[0];
  Papa.parse(file, {
    header: true,
    complete: (results) => {
      for (const row of results.data) {
        const fields = Object.values(row as Object);
        const dateString = fields[0].replaceAll("/", "");
        monthlyReport[dateString] = {
          startTime: fields[1],
          endTime: fields[2],
          relaxTime: fields[3],
          workContent: fields[4]
        };
      }
      inputReport();
    }
  });
};

function inputReport() {
  console.log(monthlyReport);
}
