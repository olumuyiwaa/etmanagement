/**
 * Placeholder image helpers.
 *
 * These use Picsum's deterministic seed URLs so the same placeholder
 * renders consistently across builds. Swap `src` in each component for
 * real photography before launch — search "placeholder" in this project
 * to find every spot that still needs a real asset.
 */
export function placeholderPhoto(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
