import axios from 'axios';
// axios

const options = {
  url: 'http://localhost:5000/feedbacks',
  method: 'POST',
  timeout: 3000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  data: {
    'title': "My title"
  }
};

axios(options)
  .then(response => {
    console.log(response.status);
  })
  .catch(err => console.error(err))
  ;

// fetch()

const url = 'http://localhost:5000/feedbacks';
const options = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  body: JSON.stringify({
    'title': "My title"
  })
};

fetch(url, options)
  .then(response => {
    console.log(response.status);
  });


// axios (GET)
axios.get('https://localhost:5000/feedbacks')
  .then(response => {
    console.log(response.data);
  }, error => {
    console.log(error);
  });

// fetch (GET)
fetch('https://localhost:5000/feedbacks')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error));
