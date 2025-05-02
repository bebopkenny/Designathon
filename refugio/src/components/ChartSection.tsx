"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const ChartSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4">
      <div className="bg-white shadow-lg rounded-xl p-4">
        <h3 className="text-xl font-bold mb-2">GDP Growth Rate (2019–2023)</h3>
        <Bar
          data={{
            labels: [
              "US Latinos",
              "China",
              "India",
              "US Total",
              "Brazil",
              "Canada",
              "Italy",
              "UK",
              "France",
              "Germany",
              "Japan",
            ],
            datasets: [
              {
                label: "Average Growth Rate (%)",
                data: [5.6, 4.6, 4.3, 2.4, 2.3, 1.3, 0.9, 0.7, 0.5, 0.2, 0.1],
                backgroundColor: "#1e3a8a",
              },
            ],
          }}
          options={{ responsive: true, plugins: { legend: { display: false } } }}
        />
        <p className="mt-2 text-sm text-blue-600">
          Source: <a href="https://latinodonorcollaborative.org/reports/the-2024-official-ldc-u-s-latino-gdp/" target="_blank" rel="noopener noreferrer">Latino Donor Collaborative 2024 Report</a>
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-4">
        <h3 className="text-xl font-bold mb-2">Latino GDP vs Nations (2022)</h3>
        <Bar
          data={{
            labels: [
              "United States",
              "China",
              "Japan",
              "Germany",
              "US Latinos",
              "India",
              "UK",
              "France",
              "Canada",
              "Italy",
            ],
            datasets: [
              {
                label: "GDP in Trillions ($)",
                data: [25.4, 18.0, 4.2, 4.1, 3.6, 3.4, 3.1, 2.8, 2.1, 2.1],
                backgroundColor: "#2563eb",
              },
            ],
          }}
          options={{ responsive: true, plugins: { legend: { display: false } } }}
        />
        <p className="mt-2 text-sm text-blue-600">
          Source: <a href="https://www.axios.com/2024/09/12/latino-gdp-united-states-latino-donor-collaborative" target="_blank" rel="noopener noreferrer">Axios News / LDC Report</a>
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-4">
        <h3 className="text-xl font-bold mb-2">Bachelor's Degree Growth (2010–2023)</h3>
        <Bar
          data={{
            labels: ["Latino", "Non-Latino"],
            datasets: [
              {
                label: "Percent Growth",
                data: [125.3, 40.3],
                backgroundColor: ["#0ea5e9", "#d1d5db"],
              },
            ],
          }}
          options={{ responsive: true, plugins: { legend: { display: false } } }}
        />
        <p className="mt-2 text-sm text-blue-600">
          Source: <a href="https://latinodonorcollaborative.org/reports/the-2024-official-ldc-u-s-latino-gdp/" target="_blank" rel="noopener noreferrer">Latino GDP Report 2025</a>
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-4">
        <h3 className="text-xl font-bold mb-2">Immigrant Share of Key Industries (2018)</h3>
        <Pie
          data={{
            labels: [
              "Farming/Fishing/Forestry",
              "Cleaning & Maintenance",
              "Textile/Apparel Manufacturing",
              "Food Manufacturing",
              "Accommodation",
              "Construction",
              "Admin & Support Services",
            ],
            datasets: [
              {
                data: [36, 36, 29, 27, 27, 24, 24],
                backgroundColor: [
                  "#1e40af",
                  "#1d4ed8",
                  "#3b82f6",
                  "#60a5fa",
                  "#93c5fd",
                  "#bfdbfe",
                  "#e0f2fe",
                ],
              },
            ],
          }}
          options={{ responsive: true }}
        />
        <p className="mt-2 text-sm text-blue-600">
          Source: <a href="https://www.cbpp.org/research/immigrants-contribute-greatly-to-us-economy-despite-administrations-public-charge-rule" target="_blank" rel="noopener noreferrer">CBPP: Immigrants & U.S. Economy</a>
        </p>
      </div>
    </section>
  );
};

export default ChartSection;
