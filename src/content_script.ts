import Papa from "papaparse";

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
      let obj;
      if (obj = results.data[0] as Object) {
        console.log(Object.values(obj));
      }
    }
  });
};

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