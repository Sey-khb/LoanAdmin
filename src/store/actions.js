const displayLoader = (context, display) => {
  context.commit("DISPLAY_LOADER", display);
};

const loggedUser = (context, user) => {
  context.commit("LOGGED_USER", user);
};

const logOut = (context) => {
  context.commit("REMOVE_LOGGED_USER");
};

// const sweetalertConfig = function (alertText) {
//   return {
//       title: "Confirmation",
//       text: alertText,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       cancelButtonText: Cancel,
//       confirmButtonText: confirmButtonText,
//       reverseButtons: true
//   };
// };

export default {
  displayLoader,
  loggedUser,
  logOut,
  // sweetalertConfig,
};
