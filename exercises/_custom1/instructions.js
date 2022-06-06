// 1) Convert the code below using any lib of your choice to be more readable

// I added this to the problem
const db = {};

db.getData((err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  data.a = 'test';
  data.b = 1111;

  db.processData(data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    db.saveData((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('finished');
    });
  });
});
