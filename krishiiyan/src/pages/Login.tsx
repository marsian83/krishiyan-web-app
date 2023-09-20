import React from "react";

function Login() {
  // Replace 'YOUR_EXTERNAL_URL' with the actual URL you want to display
  const externalUrl = "krishiiyansrcpagesAuthenticationLoginPage.tsx";

  return (
    <div>
      {/* Use an iframe to display the external URL */}
      <iframe
        title="External Content"
        src={externalUrl}
        width="100%"
        height="1000px"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Login;
