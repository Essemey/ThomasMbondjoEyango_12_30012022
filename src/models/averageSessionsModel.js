

export default class AverageSessions {

    constructor({ userId, sessions }) {
        this.id = userId
        this.sessions = sessions
        this.graphData = this.formatSessionsData()
    }

    formatSessionsData() {

        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        const graphData = this.sessions.map(obj => ({ ...obj, dayL: days[obj.day - 1] }))

        return graphData
    }

}