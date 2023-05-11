// import React, { useState } from "react";

// export default function Search(props) {
// const [formData, setFormData] = useState(' ');

// const handleSubmit = (event) => {
// event.preventDefault();
// props.onFormSubmit(formData);
// };

// const handleChange = (event) => {
//   setFormData(event.target.value);
// }

//   return (
//     <div className="card shadow-lg border-0 my-4 py-4 px-2">
//       <div className="card-body border-0">
//         <form id="form" className="d-flex w-100" onSubmit={handleSubmit}>
//           <input
//             id="city-input"
//             className="form-control"
//             type="search"
//             placeholder="Type a city..."
//             value={formData}
//             onChange={handleChange}
//           />
//           <button className="btn btn-dark mx-2" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
