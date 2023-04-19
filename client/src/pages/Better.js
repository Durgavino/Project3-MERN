// // import React from 'react'

// // function new() {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default new


// // const New = () => {
// //    return (
// //    <div>
// //    <p>Welcome to your Dashboard</p>
// //    </div>
// //    );
// //     };
// //     export default New;


// // import { useEffect, useState } from "react";

// // const  Better = () => {
// //     const [authenticated, setauthenticated] = useState(null);
// //     useEffect(() => {
// //         const loggedInUser = localStorage.getItem("authenticated");
// //         if (loggedInUser) {
// //             setauthenticated(loggedInUser);
// //         }
// //     }, []);
// //     if (!authenticated) {
// //       // Redirect
// // } else {
// //     return (
// //     <div>
// //     <p>Welcome to your Dashboard</p>
// //     </div>
// //     );
// // }
// //     };

// //     export default Better;


// import React from 'react';

// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// // import SkillsList from '../components/SkillsList';
// // import SkillForm from '../components/SkillForm';

// // import {  QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

// const Better = () => {
//   const { Id } = useParams();

//   // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
//   const { loading, data } = useQuery(
   
//   );

//   // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
//   const profile = data?.me || data?.profile || {};

//   // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data._id === Id) {
//     return <Navigate to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!profile?.name) {
//     return (
//       <h4>
//         You need to be logged in to see your profile page. Use the navigation
//         links above to sign up or log in!
//       </h4>
//     );
//   }

//   return (
//     // <div>
//     //   <h2 className="card-header">
//     //     {Id ? `${profile.name}'s` : 'Your'} friends have endorsed these
//     //     skills...
//     //   </h2>

//     //   {id.skills?.length > 0 && (
//     //     <SkillsList
//     //       skills={profile.skills}
//     //       isLoggedInUser={!Id && true}
//     //     />
//     //   )}

//     //   <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
//     //     <SkillForm Id={_id} />
//     //   </div>
//     // </div>
//     <div>
//         This is good for us!
//     </div>
//   );
// };

// export default Better;
