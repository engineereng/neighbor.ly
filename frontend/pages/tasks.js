import Head from 'next/head'
import Tasks from '../components/Tasks.js'
import CreateTasks from '../components/CreateTask.js'
import Logout from '../components/Logout.js'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Neighbor.ly</title>
      </Head>

    <div id="create task">
      <CreateTasks />
    </div>

    <div id="tasks">
       <Tasks />
    </div>

    <Logout />

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