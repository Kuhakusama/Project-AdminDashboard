import {LineChart, Line, XAxis, YAxis   , Tooltip, ResponsiveContainer, CartesianGrid} from "recharts"
import {motion} from "framer-motion"

const salesData = [
    {name: "jul", sales: 4200},
    {name: "aug", sales: 3900},
    {name: "sep", sales: 4800},
    {name: "oct", sales: 4500},
    {name: "nov", sales: 3800},
    {name: "dec", sales: 5000},
    {name: "jan", sales: 6100},
    {name: "feb", sales: 6100},
    {name: "mar", sales: 6100},
    {name: "apr", sales: 6100},
    {name: "may", sales: 6100},
    {name: "jun", sales: 6100},
];

const SalesHomeChart = () => {
  return (
    <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ delay: 0.2 }}
    >
        <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Overview</h2>
        <div className="h-80">
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#4B5563'/> 
                    <XAxis dataKey={'name'} stroke='#9ca3af' /> {/* {} = usado para componetes reacts(var, components, etc) */}
                    <YAxis stroke='#9ca3af' />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
							borderColor: "#4B5563",
                        }}
                        itemStyle={{color:'#E5E7EB'}} 
                    /> {/*novamente {} usado para componetes reacts */}
                    <Line
                        type='monotone'
                        dataKey='sales'
                        stroke='#6366F1'
                        strokeWidth={3}
                        dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, strokeWidth: 2 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesHomeChart