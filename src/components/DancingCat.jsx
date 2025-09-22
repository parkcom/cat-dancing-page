import { useEffect } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

const DancingCat = () => {
  const { isAnimating, animationCount, toggleAnimation } = useAnimation();

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        toggleAnimation();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [toggleAnimation]);

  return (
    <div className="dancing-cat-container">
      <div className="dancing-cat-wrapper">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`dancing-cat ${isAnimating ? 'dancing' : ''}`}
          onClick={toggleAnimation}
        />
      </div>
      <div className="controls">
        <button
          className="dance-button"
          onClick={toggleAnimation}
          aria-label={isAnimating ? '춤 정지하기' : '춤 시작하기'}
        >
          {isAnimating ? '정지 ⏸️' : '춤추기 🕺'}
        </button>
        <div className="stats">
          <p className="instruction">
            고양이를 클릭하거나 버튼을 눌러 춤을 시작하세요! 🐱
          </p>
          <p className="instruction">
            스페이스바를 눌러서도 제어할 수 있어요! ⌨️
          </p>
          <p className="dance-count">
            춤춘 횟수: {animationCount}회 💃
          </p>
        </div>
      </div>
    </div>
  );
};

export default DancingCat;