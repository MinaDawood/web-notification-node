const express = require('express');
const webpush = require('web-push');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());

const public =
  'BE-SiakRENElEsxe7VKC5kAnoT5-UzE9cQRvlRBplrKuP82cLoI18_Gy86Es_J1akCa5o4EdoTjR_gECBFoGRvc';

const private = 'danOMEyWCew9Hdwa2bW_QmkUqLGeWuitPgLC3qsbLTs';

webpush.setVapidDetails('mailto:test@test.com', public, private);

app.post('/subscribe', (req, res) => {
  const subscription = req.body;

  res.status(201).json({});

  const payload = JSON.stringify({ title: 'Push test' });

  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.log(err));
});

const port = 4001;
app.listen(port, () => {
  console.log(`express server started on port ${port}`);
});
