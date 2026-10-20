require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Web Service aktif' });
});

app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = req.body;
  res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id, ...req.body });
});

app.delete('/users/:id', (req, res) => {
  res.status(204).send();
});

require('dotenv').config();
const port = process.env.PORT;
const appName = process.env.APP_NAME;

app.post('/biodata', (req, res)=>{
    const {id, nama, nim, kelas} = req.body;

    pool.query(
        'INSERT INTO biodata (id, nama, nim, kelas) VALUES ($1, $2, $3, $4) RETURNING *',
        [id, nama, nim, kelas]
    )
        .then(resurt => res.json(Result.rows[0]))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: err.message });
        });
});



