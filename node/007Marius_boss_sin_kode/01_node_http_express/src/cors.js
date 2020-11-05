const fetchAsyncNoCors = async () => {
  const response = await fetch('http://localhost:3000/route-no-cors');
  // const response = await fetch('http://localhost:5000/route-no-cors');
  const data = await response.json();
  console.log(data);
};

const fetchAsyncCors = async () => {
  const response = await fetch('http://localhost:5000/route-cors');
  const data = await response.json();
  console.log(data);
};

fetchAsyncNoCors();
fetchAsyncCors();
