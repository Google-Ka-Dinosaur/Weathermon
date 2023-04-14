import express from "express";
import path from "path";
import hbs from "hbs";
import { fileURLToPath } from "url";
const __filename=fileURLToPath(import.meta.url);
const staticPath=path.join(__filename,"../../public");
const view_path=path.join(__filename,"../../templates/views");
const partials_path=path.join(__filename,"../../templates/partials");
const app = express();
const port=process.env.PORT||3000;//agar hum kahi pe host karrahe hain toh udhar chalega warna localhost3000 pe
app.use(express.static(staticPath));
app.get("/", (req, res) => {
  res.render('index');
});
app.set('view engine', 'hbs');
app.set('views',view_path);
hbs.registerPartials(partials_path);
app.get("/about", (req, res) => {
    res.render('about');
  });

  app.get("/weather", (req, res) => {
    res.render('weather');
  });

  app.get("*", (req, res) => {
    res.render('404error');
  });

app.listen(port, () => {
  console.log(`listening to localhost${port}`);
});
