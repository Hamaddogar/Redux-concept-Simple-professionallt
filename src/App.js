import React from 'react';
import logo from './logo.svg';
import './App.css';
import {store} from '../src/store/store'


   import {Provider} from 'react-redux'
    import Other from '../src/other'
  



class App extends React.Component {


  render() {
  

     console.log(this.props)

    return (

      <Provider store={store}>
      
      <Other/>

      </Provider>
    )


  }




}

// class App extends React.Component {





//   myfunction = (event) => {


//     event.preventDefault();

//     let uname = document.getElementById("uname").value
//     let upassword = document.getElementById("upassword").value
//     let getgender = document.querySelector('input[name="gender"]:checked').value;

//     const localobjet = {
//       uname,
//       upassword,
//       getgender


//     }
//     localStorage.setItem("MyData", JSON.stringify(localobjet))



//   }






//   render() {


//     return (

//       <div>
//         <form onSubmit={this.myfunction}>
//           <input type="text" id="uname" placeholder="Enter youn NAME" />
//           <input type="password" id="upassword" placeholder="Enter youn  password" />
//           <input type="radio" id="male" name="gender" value="male" />
//           <label for="male">Male</label><br />
//           <input type="radio" id="female" name="gender" value="female" />
//           <label for="female">Female</label><br />

//           <button type="submit">submitdata</button>


//         </form>


//       </div>

//     )


//   }




// }





// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }


export default App;