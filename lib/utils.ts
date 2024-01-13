import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for combining and merging multiple class values using Tailwind CSS utilities.
 * It takes an array of class values and applies them using the `clsx` and `twMerge` functions.
 *
 * @param {...ClassValue[]} inputs - An array of class values to be combined and merged.
 * @returns {string} - A string representing the combined and merged class values.
 */
export function cn(...inputs: ClassValue[]) {
  // Using clsx to combine class values and twMerge to merge them with Tailwind CSS utilities.
  return twMerge(clsx(inputs));
}
