import  { useEffect, useState } from 'react';
import {useTracker} from '../Context/tracker';
import { getCoinChart } from '../Services/cryptocurrencyService';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,  
  
  Tooltip,
  Legend,  
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,  
  Tooltip,
  Legend,         
);



const Chart = ({id}) => {
  const {currency,} = useTracker();
  const [historicalData, setHistoricalData] = useState([])  
  const [days, setDays] = useState(1);  

  useEffect(() => {
    coinChartData();
  }, [currency, days]); 


  const coinChartData = async () => {
    const res = await getCoinChart(id, currency, days);
      setHistoricalData(res.prices);
  }

  
  return (
    <div>
      <div className="buttons">
        <button onClick={() => setDays(1)} className={days === 1 ? 'active' : ""}>24h</button>
        <button onClick={() => setDays(7)} className={days === 7 ? 'active' : ""}>7d</button>
        <button onClick={() => setDays(30)} className={days === 30 ? 'active' : ""}>30d</button>
        <button onClick={() => setDays(365)} className={days === 365 ? 'active' : ""}>1y</button>
      </div>
      <Line
              data={{
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicalData.map((coin) => coin[1]),
                    label: `Price:  ${currency}`,
                    borderColor: "#3fb6b0",
                    
                  },
                ],
              }}

              options={{
                elements: {
                  point: {
                    radius: 1.5,
                  },
                },
              }}
          />
    </div>
  )
}

export default Chart