const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/connection');
const routes = require('./controller');
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
}).catch(err => console.log(err));
