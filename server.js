import express from 'express';
import path from 'path';

const app = express();

const port = process.env.PORT || 9090;
const publicPath = path.resolve(__dirname, 'app');

app.use(express.static(publicPath));

// Always serve index.html, let React handle routes
app.use((req, res) => res.sendFile(`${publicPath}/index.html`));

// And run the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
