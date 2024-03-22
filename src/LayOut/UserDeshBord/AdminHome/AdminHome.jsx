import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/Auth/useAuth";
import useBaseUrl from "../../../Hook/BaseUrl/useBaseUrl";
import { FaHandHoldingUsd, FaOpencart, FaUsers, FaUtensils } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie,  ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const { user } = useAuth();
    const baseUrl = useBaseUrl();
    const { data: Analyics = [] } = useQuery({
        queryKey: ['admin-Analyics'],
        queryFn: async () => {
            const res = await baseUrl.get('/admin-Analyics')
            return res.data;
        }
    })
    const { data: chat = [] } = useQuery({
        queryKey: ['admin-chat'],
        queryFn: async () => {
            const res = await baseUrl.get('/order-stats')
            return res.data;
        }
    });
    // coustom BarChat ----------
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    // piChate ------
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    const piChateData = chat.map(i =>{
        return {name:i.category, value:i.revenue}
    })
    console.log({ chat })
    return (
        <div className="w-[90%] mx-auto mt-5 space-y-5">
            <h2 className="text-3xl font-bold">WellCome <span className="text-green-700">{user?.displayName ? user?.displayName : 'Back'} .....</span>  </h2>
            <hr />
            {/* ---------------------- */}
            <div className=" w-full shadow-xl grid grid-cols-2 md:grid-cols-4 rounded-xl">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaHandHoldingUsd className="text-2xl" />
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{Analyics.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-2xl" />
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{Analyics.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaOpencart className="text-2xl" />
                    </div>
                    <div className="stat-title">Total Order</div>
                    <div className="stat-value">{Analyics.oders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUtensils className="text-2xl"></FaUtensils>
                    </div>
                    <div className="stat-title">Total Menus Item</div>
                    <div className="stat-value">{Analyics.menus}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
            {/* ---------------------- */}
            <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chat}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chat.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={piChateData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {piChateData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;