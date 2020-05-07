const pupp = require("puppeteer");
const fs = require("fs-extra");
const hbs = require("handlebars");
const path = require("path");
const moment = require("moment");
const data = require("./data.json");

var completeData = {
  doctor: {
    name: "Dr. Mahesh Shukla  M.B.B.S(in )",
    id: "KN-1549896",
    hosname: "governmant hospital nagpur",
    address:
      "Ward No: 4, Nagpur Government Hospital, koradi road, Nagpur-440048.",
    number: "0712 - 2647814",
  },
  info: {
    firstname: "Aamod",
    lastname: "Shukla",
    age: "null",
    gender: "NA",
  },
  diagnosis: {
    diagnosis: "Cerebrovascualr",
    symptoms: "Abdominal bloating",
  },

  medicine: [
    { name: "Accutane", duration: " day ", dosage: " twice a day" },
    { name: "Accutane", duration: " day ", dosage: " twice a day" },
  ],

  advice: "Aaaaaaaaaaaaaa",

  meta: { date: "aaaaa", time: "qqqqqqqq" },
};

const compile = async function (templateName, data) {
  const filePath = path.join(process.cwd(), "template", `${templateName}.hbs`);
  const html = await fs.readFile(filePath, "utf-8");
  console.log(html);
  return hbs.compile(html)(data);
};

hbs.registerHelper("dataFormat", function (value, format) {
  console.log("formatting", value, format);
  return moment(value).format(format);
});

(async function () {
  try {
    const browser = await pupp.launch();
    const page = await browser.newPage();
    // console.log(data);
    const content = await compile("page", data);

    console.log(content);

    await page.setContent(content);
    await page.emulateMedia("screen");
    await page.pdf({
      path: "pdfFinal.pdf",
      format: "A4",
      printBackground: true,
    });

    console.log("done");
    await browser.close();
    process.exit();
  } catch (e) {
    console.log(e);
  }
})();
