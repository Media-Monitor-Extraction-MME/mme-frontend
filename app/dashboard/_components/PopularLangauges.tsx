import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../_styles/components/_popularLangauges.scss';

const langauges = [
  { langauge: 'English', posts: 500 },
  { langauge: 'Spanish', posts: 1000 }
];

const PopularLanguages: React.FC = () => {
  return (
    <div className="popular-langauges">
      <Doughnut
        className="popular-langauges__chart"
        options={{
          maintainAspectRatio: false,
          responsive: true,

          plugins: {
            legend: {
              display: false,
              position: 'right'
            }
          }
        }}
        data={{
          labels: ['JavaScript', 'Python', 'Java', 'Ruby', 'C#'],
          datasets: [
            {
              label: 'Languages',
              data: [50, 20, 10, 5, 15],
              backgroundColor: [
                '#61DDE5',
                '#FDDE72',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
              ]
            }
          ]
        }}
      />
      <ul className="popular-langauges__labels">
        <li className="popular-langauges__label">
          <div className="popular-langauges__label__color-line border-[#61DDE5]"></div>
          <div>
            <b className="popular-langauges__label__langauge">English</b>
            <div className="popular-langauges__label__content">
              <span>1000 posts</span>
              <span>50%</span>
            </div>
          </div>
        </li>
        <li className="popular-langauges__label">
          <div className="popular-langauges__label__color-line border-[#FDDE72]"></div>
          <div>
            <b className="popular-langauges__label__langauge">Spanish</b>
            <div className="popular-langauges__label__content">
              <span>1000 posts</span>
              <span>50%</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PopularLanguages;
