// import React, { useState } from 'react';


// function Login(props) {
//     const [user, setUser] = useState({username: "", password: ""})

//     const handleChange = (e) => {
//         const {id, value} = e.target
//         setUser(prevUser => ({
//             ...prevUser,
//             [id] : value
//         }))
//     }

//     const handleSubmitClick = (e) => {
//         e.preventDefault();
//         if(user.password === user.confirmPassword) {
//             sendDetailsToServer()
//         } else 
//     }



//     return (
//         <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
//             <form>
//                 <div>
//                 <label htmlFor="exampleInputUsername1">Username</label>
//                 <input type="username"
//                 className="login-control"
//                 id='username'
//                 placeholder="enter username"
//                 />
//                 </div>
//                 <form>
//                     <div>
//                         <label htmlFor="exampleInputPassword">Password</label>
//                         <input type="password"
//                         className="login-control"
//                         id=
//                     </div>
//                 </form>
//             </form>
//             <input type="username"
//             className="login-control"
//             id='username'
//             placeholder="enter username"
//             value={user.username}
//             onChange={handleChange}
//             />
//             <input type="password"
//             className="password"
//             id="password"
//             placeholder="enter password"
//             value={user.password}
//             onChange={handleChange}
//             />
//         </div>
//     );
// }

// export default Login;