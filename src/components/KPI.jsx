import '../css/components/KPI.css'
import PropTypes from 'prop-types'


/**
 * Create a graph wich represent the progression of the user in this objective
 * @param {Object} props
 * @param {String} props.color - Graph color
 * @param {Number} props.score - Progression's number
 * @returns {React.ReactElement}
 */
export default function KPI({ color, score }) {

    const percent = score * 100

    return (
        <div className="kpi">
            <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path className="circle-bg"
                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle" stroke={color}
                    strokeDasharray={`${percent}, 100`}
                    d="M18 2.0845
          a 15.9155 15.9155 0 0 0 0 31.831
          a 15.9155 15.9155 0 0 0 0 -31.831"
                />
                <text x="18" y="18.35" className="percentage main">{percent}%</text>
                <text x="18" y="22.35" className="percentage">de votre objectif</text>
            </svg>
        </div>
    )
}

KPI.propTypes = {
    color: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
}