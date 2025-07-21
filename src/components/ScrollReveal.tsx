'use client';

import { useAutoSlideUp } from './AnimatedText';

export default function SlideObserverWrapper() {
  useAutoSlideUp();
  return null; // doesn't render anything visible
}