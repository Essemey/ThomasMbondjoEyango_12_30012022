import {
    BarChart,
    CartesianGrid,
    XAxis, YAxis, Tooltip,
    Legend, Bar
} from 'recharts'
import '../css/components/ActivityGraph.css'
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Create a graph wich represent user's activity-sessions data
 * @param {Object} props
 * @param {Array.<Object>} props.data - User's sessions
 * @returns {React.ReactElement}
 */
export default function ActivityGraph({ data }) {


    return <div id="activity-graph">
        <h2>Activité Quotidienne</h2>
        <BarChart width={800} height={260} data={data} barSize={12} >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis />
            <YAxis orientation="right" axisLine={false} tickLine={false} tickMargin={20} />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" align="right" wrapperStyle={{ top: '-35px' }} iconType="circle" iconSize={7} formatter={renderLegend} />
            <Bar dataKey="kilogram" fill="#282D30" unit="kg" radius={[5, 5, 0, 0]} />
            <Bar dataKey="calories" fill="#E60000" unit="kCal" radius={[5, 5, 0, 0]} />
        </BarChart>
    </div>
}

/**
 * Create a custom tooltip
 * @param {Object} props
 * @param {Boolean} props.active - Tooltip visibility indicator
 * @param {Array} props.payload - Array wich contains one object with graph's informations
 * @returns {React.ReactElement}
 */
function CustomTooltip({ active, payload }) {

    return active && payload && payload.length ?
        <div className="custom-tooltip">
            <p>{payload[0]['value'] + payload[0]['unit']}</p>
            <p>{payload[1]['value'] + payload[1]['unit']}</p>
        </div>
        : null
}

/**
 * Create a custom Legend
 * @param {String} value - Legend's name
 * @param {Object} entry - Legend's informations
 * @param {Number} index - Legend's index
 * @returns {React.ReactElement}
 */
function renderLegend(value, entry, index) {

    console.log(value, entry, index)

    index === 0 ? value = 'Poids (kg)' : value = 'Calories brûlées (kCal)'

    return <span style={{ color: '#74798C', fontSize: '14px' }}>{value}</span>;
}

ActivityGraph.propTypes = {
    data: PropTypes.array.isRequired,
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
}