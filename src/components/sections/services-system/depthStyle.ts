import type { CSSProperties } from "react";

type Tone = {
  bg: string;
  fg: string;
  muted: string;
  subtle: string;
};

/** Section color is explicit so the light-to-dark narrative does not follow the theme toggle. */
export function depthStyle(tone: Tone): CSSProperties {
  const style: Record<string, string> = {
    backgroundColor: tone.bg,
    color: tone.fg,
    "--fg": tone.fg,
    "--fg-muted": tone.muted,
    "--fg-subtle": tone.subtle,
    "--text": tone.fg,
    "--text-3": tone.subtle,
  };
  return style as unknown as CSSProperties;
}
