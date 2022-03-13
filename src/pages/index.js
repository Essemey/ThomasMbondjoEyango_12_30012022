import { useEffect, useState } from 'react'
import ActivityGraph from '../components/ActivityGraph'
import FoodInfo from '../components/FoodInfo'
import KPI from '../components/KPI'
import PerformanceGraph from '../components/PerformanceGraph'
import SessionsGraph from '../components/SessionsGraph'
import '../css/pages/index.css'
import Activity from '../models/activityModel'
import AverageSessions from '../models/averageSessionsModel'
import MainData from '../models/mainDataModel'
import PerformanceData from '../models/performanceModel'
import { query } from '../utils/query'


export default function Home() {

    const [user, setUser] = useState(null)
    const [error, setError] = useState(false)


    useEffect(() => {
        Promise.all([
            query('http://127.0.0.1:3000/user/12'),
            query('http://127.0.0.1:3000/user/12/activity'),
            query('http://127.0.0.1:3000/user/12/average-sessions'),
            query('http://127.0.0.1:3000/user/12/performance')
        ])
            .then(data => ({
                mainData: new MainData(data[0]),
                activity: new Activity(data[1]),
                average: new AverageSessions(data[2]),
                performance: new PerformanceData(data[3])
            }))
            .then(user => setUser(s => ({ ...s, ...user })))
            .catch(() => setError(s => true))
    }, [])



    if (!user && error) {
        return <h1 className="error-fetching">Une erreur est survenue lors de la récupération des données</h1>
    } else if (!user && !error) {
        return <h1 className="loading-fetching">Chargement...</h1>
    }

    return <div id="home">
        <h2 className="hello">Bonjour <span className="red">{user.mainData.infos.firstName}</span></h2>
        <p id="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div id="analytics">
            <div id="graphs">
                <ActivityGraph data={user.activity.sessions} />
                <div id="secondary-graphs">
                    <SessionsGraph data={user.average.graphData} />
                    <PerformanceGraph data={user.performance.graphData} />
                    <KPI color="#FF0000" score={user.mainData.score} />
                </div>
            </div>
            <div id="foodInfos">
                {user.mainData.formatedKeyData.map(
                    (data, index) =>
                        <FoodInfo name={data.name} image={data.image} quantity={data.quantity} unity={data.unity} key={index} />
                )}
            </div>
        </div>
    </div>
}