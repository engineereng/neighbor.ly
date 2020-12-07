import Head from 'next/head'
import SignIn from '../components/SignIn.js'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Neighbor.ly</title>
      </Head>

    <div id="signIn">
       <SignIn />
    </div>

    <style jsx>{`
        #signIn {
            width: 15%;
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

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}