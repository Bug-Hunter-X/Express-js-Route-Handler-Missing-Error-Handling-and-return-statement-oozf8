const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  const user = users.find(user => user.id === userId);
  if (!user) {
    //Missing return statement here. The response is not sent
    //This will cause a hang
  }
  res.json(user);
});

const users = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Doe' },
];