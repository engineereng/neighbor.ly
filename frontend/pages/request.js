import TitleForm from "../components/TitleForm"
import Category from "../components/Category"
import Description from "../components/Description"

export default function Request() {
    return (
        <div>

            <div id="formContainer">
                <h1>New Task Form</h1>
                <div id="title">
                    <TitleForm />
                </div>

                <div id="dropdown">
                    <Category />
                </div> 

                <div id="description">
                    <Description />
                </div> 
        </div>
        
        <style jsx>{`
        
            #formContainer {
                width: 70%;
                margin: auto;
                margin-top 10%;
                background-color: white;
                box-shadow: 5px 10px;
                height: 30vh;
            }


        `}</style>
        <style jsx global>{`
        html {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: rgba(0, 0, 0, 0.8);
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
        
    )
}