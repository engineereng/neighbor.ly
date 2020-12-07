import SignUp from "../components/SignUp"

export default function Register() {
    return (
      <div className="container">
       
  
      <div id="signUp">
         <SignUp />
      </div>
  
      <style jsx>{`
          #signUp {
              width: 50%;
              margin: auto;
              margin-top: 25%;
              transform: scale(1.5);
            
          }
  
  
      `}</style>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            background-color: #CDBAFF;
          }
        `}</style>
      </div>
    )
  }