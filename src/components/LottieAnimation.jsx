import { Player } from '@lottiefiles/react-lottie-player';
import newAnimationData from '../assets/AnimationCharacter.json';

export default function LottieAnimation() {
  return (
    <Player
      autoplay
      loop
      src={newAnimationData}
      style={{ height: '400px', width: '400px' }}
    />
  );
}
