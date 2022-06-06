import { useEffect, useState } from 'react';
import logo from './logo.svg';
import skill1 from './assets/技能1.png';
import skill2 from './assets/技能2.png';
import skill3 from './assets/技能3.png';
import skill4 from './assets/技能4.png';
import skill5 from './assets/技能5.png';
import skill6 from './assets/技能6.png';
import './App.css';

function App() {
	const [count, setCount] = useState<number>(0);
	const [timer, setTimer] = useState<any>(null);
	const [start, setStart] = useState<boolean>(false);
	const [active, setActive] = useState<boolean>(false);
	const [currentKey, setCurrentKey] = useState<string>('');

	const handleAction = () => {
		setCount(0);
		setStart(true);
		setTimer(
			setInterval(() => {
				setCount((count) => count + 1);
			}, 10)
		);
	};

	useEffect(() => {
		if (count === 350) {
			setStart(false);
			clearInterval(timer);
			return;
		}
	}, [count]);

	useEffect(() => {
		document.addEventListener('keydown', (e) => {
			setCurrentKey(e.key);
			setActive(true);
			switch (e.key) {
				case '1':
					break;
			}
		});

		document.addEventListener('keyup', (e) => {
			if (e.key === '1') {
			}
			setActive(false);
		});

		return () => {
			document.removeEventListener('keydown', (e) => {});
			document.removeEventListener('keyup', (e) => {});
		};
	}, []);

	const handleSkillRelease = (event, params: number): void => {
		// console.log(event);
		// switch (params) {
		// 	case 1:
		// 		console.log('技能1');
		// }
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h2 className='title'>惩戒骑</h2>
			</header>
			<main>
				<section className='skill-section'>
					<button
						className={`skill-button ${
							currentKey === '1' && active ? 'active' : null
						}`}
						onKeyDown={(event) => handleSkillRelease(event, 1)}
					>
						<img src={skill1} alt='技能1' />
					</button>
					<button
						className={`skill-button ${
							currentKey === '2' && active ? 'active' : null
						}`}
					>
						<img src={skill2} alt='技能2' />
					</button>
					<button
						className={`skill-button ${
							currentKey === '3' && active ? 'active' : null
						}`}
					>
						<img src={skill3} alt='技能3' />
					</button>
					<button
						className={`skill-button ${
							currentKey === '4' && active ? 'active' : null
						}`}
					>
						<img src={skill4} alt='技能4' />
					</button>
					<button
						className={`skill-button ${
							currentKey === '5' && active ? 'active' : null
						}`}
					>
						<img src={skill5} alt='技能5' />
					</button>
					<button
						className={`skill-button ${
							currentKey === '6' && active ? 'active' : null
						}`}
					>
						<img src={skill6} alt='技能6' />
					</button>
				</section>
				<section>
					<div className='timer'>
						<div className='progress-bar-container'>
							<div
								className={`progress-bar ${start ? 'start' : 'finished'}`}
							></div>
						</div>
						<div>{count}</div>
					</div>
				</section>
			</main>
			<footer>
				<button onClick={handleAction}>开始</button>
			</footer>
		</div>
	);
}

export default App;
