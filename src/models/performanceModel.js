

export default class PerformanceData {

    constructor({ userId, kind, data }) {
        this.id = userId
        this.kind = kind
        this.data = data
        this.graphData = this.formatData()
    }

    formatData() {

        const kind = { 1: 'Cardio', 2: 'Energie', 3: 'Endurance', 4: 'Force', 5: 'Vitesse', 6: 'Intensité' }

        const graphData = this.data.map(obj => {
            const key = Object.keys(kind).find(key => +key === obj.kind)
            return { ...obj, kind: kind[key] }
        })

        return graphData
    }

}