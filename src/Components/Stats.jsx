import { useFriends } from "./FriendContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"; 

const Stats = () => {
  const { timeline } = useFriends();

  const data = [
    { name: "Text", value: timeline.filter((item) => item.type === "Text").length },
    { name: "Call", value: timeline.filter((item) => item.type === "Call").length },
    { name: "Video", value: timeline.filter((item) => item.type === "Video").length },
  ];

  const COLORS = ["#8B5CF6", "#1D3E31", "#34A853"];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-[#1D2939] mb-10 tracking-tight">
        Friendship Analytics
      </h1>

      <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-[#1D3E31] mb-6">By Interaction Type</h3>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              
              
              <Tooltip 
                contentStyle={{ 
                  borderRadius: "12px", 
                  border: "none", 
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)" 
                }} 
              />
              
              <Legend iconType="circle" layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;