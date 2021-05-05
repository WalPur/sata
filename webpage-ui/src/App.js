import axios from 'axios';


function App(params) {
    axios.get('api/user', {
        headers: {
            'Authorization': `Bearer .eyJpZCI6MiwiZXhwIjoxNjI1MzY2MTY3fQ.IZAaF4qJCIeLNKmm0H2q-pnqqorPI9oxJi6qAL6PnoA`
        }
    }).then((res) => {
        // на случай успеха
        console.log(res.data.user) 
    }).catch((error) => {
        // на случай ошибки(отсуствия токена)
        console.error(error)
    })
    return (
        <div className="App">
        </div>
      );
}

export default App;
