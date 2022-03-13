

export default class MainData {

    constructor({ id, userInfos, keyData, todayScore, score }) {
        this.id = id
        this.infos = userInfos
        this.keyData = keyData
        this.formatedKeyData = this.formatKeyData()
        this.score = todayScore || score
    }

    formatKeyData() {

        let unity = 'g'
        let formatedData = []

        for (const key in this.keyData) {

            switch (key) {
                case 'calorieCount':
                    formatedData.push({ name: "Calories", image: 'calories-icon.svg', unity: 'kCal', quantity: this.keyData[key] })
                    break
                case 'proteinCount':
                    formatedData.push({ name: "Protéines", image: 'protein-icon.svg', unity, quantity: this.keyData[key] })
                    break
                case 'carbohydrateCount':
                    formatedData.push({ name: "Glucides", image: 'carbs-icon.svg', unity, quantity: this.keyData[key] })
                    break
                case 'lipidCount':
                    formatedData.push({ name: "Lipides", image: 'fat-icon.svg', unity, quantity: this.keyData[key] })
                    break
            }

        }

        return formatedData
    }

}