import PropTypes from "prop-types";
import {
    PolarAngleAxis, PolarGrid,
    Radar, RadarChart
} from "recharts";
import '../css/components/PerformanceGraph.css'


/**
 * Create a graph wich represent user's performance data
 * @param {Object} props
 * @param {Array.<Object>} props.data - User's performance stats
 * @returns {React.ReactElement}
 */
export default function PerformanceGraph({ data }) {


    return <div id="performance-graph">
        <RadarChart outerRadius={85} width={272} height={273} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <Radar dataKey="value" fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
        </RadarChart>
    </div>
}

PerformanceGraph.propTypes = {
    data: PropTypes.array.isRequired
}