import express from 'express';
import Router from './Router';
const app = express();
const port = 3005;
app.use(express.static(__dirname + '/assets/resized'));

app.use('/api', Router);

app.listen(port, () => {
  try {
    console.log(`server runnig on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});

export default app;
