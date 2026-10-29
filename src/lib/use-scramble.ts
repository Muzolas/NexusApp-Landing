"use client";

import { useEffect, useState } from "react";

const CHARS = "0123456789ABCDEFabcdef!@#$%^&*";

export function useScramble(plainText: string, cipherText: string, intervalMs: number = 3200) {
  const [displayText, setDisplayText] = useState(plainText);
  const [isCipher, setIsCipher] = useState(false);

  useEffect(() => {
    let frameId: number;
    let iteration = 0;

    const interval = setInterval(() => {
      const targetText = isCipher ? plainText : cipherText;
      iteration = 0;

      const scrambleStep = () => {
        iteration += 1;
        const currentScramble = targetText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        setDisplayText(currentScramble);

        if (iteration < targetText.length) {
          frameId = requestAnimationFrame(scrambleStep);
        } else {
          setIsCipher(!isCipher);
        }
      };

      frameId = requestAnimationFrame(scrambleStep);
    }, intervalMs);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(frameId);
    };
  }, [isCipher, plainText, cipherText, intervalMs]);

  return { displayText, isCipher };
}
