import express from 'express';
import 'dotenv/config';
import path from 'path';
import rootDir from './util/path.js';

import productRoutes from './routes/productRoutes.js';
const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.get('/*', function (req, res) {
	res.sendFile(
		path.resolve(rootDir, 'client', 'public', 'index.html'),
		function (err) {
			if (err) {
				res.status(500).send(err);
			}
		}
	);
});

const port = process.env.PORT || 5000;

// heroku
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(`${rootDir}/client/build`));
}

app.listen(port, () => console.log(`server is running on port ${port}`));
