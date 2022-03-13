import PropTypes from "prop-types";
import { LineChart, Line, XAxis, Tooltip, ReferenceArea, ResponsiveContainer } from 'recharts';
import '../css/components/SessionsGraph.css'


/**
 * Create a graph wich represent user's length-sessions data
 * @param {Object} props
 * @param {Array.<Object>} props.data - User's sessions
 * @returns {React.ReactElement}
 */
export default function SessionsGraph({ data }) {


    return <div id="sessions-graph">
        <h3>Durée moyenne des sessions</h3>
        <ResponsiveContainer height="60%" >
            <LineChart
                width={200}
                height={205}
                data={data}
                margin={{
                    top: 5,
                    right: 15,
                    left: 15,
                    bottom: 15
                }}
            >
                <XAxis dataKey="dayL" axisLine={false} tickLine={false} stroke="white" opacity={0.5} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="natural" dataKey="sessionLength" dot={false} stroke="rgba(255, 255, 255, 0.815)" strokeWidth={2.5} />
                <ReferenceArea shape={<Bloc />} />
            </LineChart>
        </ResponsiveContainer>
        <div className="shadow-block1"></div>
        <div className="shadow-block2"></div>
    </div>
}

/**
 * Create a bloc
 * @param {Object} props - Bloc's informations (fill, height, width, x, y...)
 * @returns {React.ReactElement}
 */
function Bloc(props) {

    return <rect x={props.width - 42} y={0} fill='#00000033' height={280} width={80}></rect>
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
        <div className="bg-tooltip">
            <div className="custom-tooltip">
                <p>{payload[0].payload.sessionLength}min</p>
            </div>
        </div>
        : null
}

SessionsGraph.propTypes = {
    data: PropTypes.array.isRequired,
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
}

Bloc.propTypes = {
    props: PropTypes.object
}