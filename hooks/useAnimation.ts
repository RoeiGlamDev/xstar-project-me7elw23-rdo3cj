import { useEffect, useState } from 'react';

/
 * Custom hook for animations specific to CleanSSR.
 * This hook provides reusable animation logic to enhance user experience on the CleanSSR website.
 * 
 * @returns {object} An object containing the animation state and methods to control animations.
 */
export interface AnimationState {
  isAnimating: boolean;
  startAnimation: () => void;
  stopAnimation: () => void;
}

export const useAnimation = (): AnimationState => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  /
   * Starts the animation.
   * This function sets the animation state to true.
   */
  const startAnimation = (): void => {
    setIsAnimating(true);
  };

  /
   * Stops the animation.
   * This function sets the animation state to false.
   */
  const stopAnimation = (): void => {
    setIsAnimating(false);
  };

  useEffect(() => {
    // This is where you can add more complex animation logic if required.
    // For example, you could trigger CSS animations or transitions.
    if (isAnimating) {
      // Implement animation start logic here, e.g., adding a class to an element
    } else {
      // Implement animation stop logic here, e.g., removing a class from an element
    }
  }, [isAnimating]);

  return {
    isAnimating,
    startAnimation,
    stopAnimation,
  };
};