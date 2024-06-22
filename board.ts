export type EnPassantSpec = "legal" | "fen" | "xfen";

export type Colors = { white: true; black: false };

export type ColorName = "white" | "black";

export const Piece = {
  1: {
    name: "pawn",
    symbol: "p",
  },
  2: {
    name: "knight",
    symbol: "n",
  },
  3: {
    name: "bishop",
    symbol: "b",
  },
  4: {
    name: "rook",
    symbol: "r",
  },
  5: {
    name: "queen",
    symbol: "q",
  },
  6: {
    name: "king",
    symbol: "k",
  },
};

export const UNICODE_PIECE_SYMBOLS = {
  R: "♖",
  r: "♜",
  N: "♘",
  n: "♞",
  B: "♗",
  b: "♝",
  Q: "♕",
  q: "♛",
  K: "♔",
  k: "♚",
  P: "♙",
  p: "♟",
};

export type FileName = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

export type RankName = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

const FILE_NAMES: FileName[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

const RANK_NAMES: RankName[] = ["1", "2", "3", "4", "5", "6", "7", "8"];

/**
 * Reasons for a game to be over.
 * */
export class Termination {
  CHECKMATE = 1;
  STALEMATE = 2;
  INSUFFICIENT_MATERIAL = 3;
  SEVENTYFIVE_MOVES = 4;
  FIVEFOLD_REPETITION = 5;
  FIFTY_MOVES = 6;
  THREEFOLD_REPETITION = 7;
  VARIANT_WIN = 8;
  VARIANT_LOSS = 9;
  VARIANT_DRAW = 10;
}

/**
 * Information about the outcome of an ended game
 */
export class OutCome {
  termination: Termination;
  winner: ColorName | null;

  constructor(termination: Termination, winner: ColorName) {
    this.termination = termination;
    this.winner = winner;
  }

  /**
   * Returns ``1-0``, ``0-1`` or ``1/2-1/2``.
   */
  get result(): "1/2-1/2" | "1-0" | "0-1" {
    return this.winner === null
      ? "1/2-1/2"
      : this.winner === "white"
      ? "1-0"
      : "0-1";
  }
}

/**
 * Raised when move notation is not syntactically valid
 */
export class InvalidMoveError extends Error {}

/**
 * Raised when the attempted move is illegal in the current position
 */
export class IllegalMoveError extends Error {}

/**
 * Raised when the attempted move is ambiguous in the current position
 */
export class AmbiguousMoveError extends Error {}

export type SquareName = `${FileName}${RankName}`;

function zip<T extends Array<any>>(...arrays: T): [...any[]] {
  const arrayList = arrays;
  if (!arrayList.length) return [];
  else if (arrayList.length === 1) return arrayList;
  const firstArray = arrayList.shift();

  if (!firstArray) return [];
  return firstArray.flatMap((firstArrayValue: any, index: number) => {
    const kElementList = arrayList.map((array) => {
      return array[index];
    });
    return [firstArrayValue, ...kElementList];
  });
}

export const SQUARE_NAMES: SquareName[] = zip(FILE_NAMES, RANK_NAMES);

export const SQUARES = [...Array(64).keys()];

export const [
  A1,
  B1,
  C1,
  D1,
  E1,
  F1,
  G1,
  H1,
  A2,
  B2,
  C2,
  D2,
  E2,
  F2,
  G2,
  H2,
  A3,
  B3,
  C3,
  D3,
  E3,
  F3,
  G3,
  H3,
  A4,
  B4,
  C4,
  D4,
  E4,
  F4,
  G4,
  H4,
  A5,
  B5,
  C5,
  D5,
  E5,
  F5,
  G5,
  H5,
  A6,
  B6,
  C6,
  D6,
  E6,
  F6,
  G6,
  H6,
  A7,
  B7,
  C7,
  D7,
  E7,
  F7,
  G7,
  H7,
  A8,
  B8,
  C8,
  D8,
  E8,
  F8,
  G8,
  H8,
] = SQUARES;

export const BB_SQUARES = SQUARES.map((square) => 1 << square);

export const [
  BB_A1,
  BB_B1,
  BB_C1,
  BB_D1,
  BB_E1,
  BB_F1,
  BB_G1,
  BB_H1,
  BB_A2,
  BB_B2,
  BB_C2,
  BB_D2,
  BB_E2,
  BB_F2,
  BB_G2,
  BB_H2,
  BB_A3,
  BB_B3,
  BB_C3,
  BB_D3,
  BB_E3,
  BB_F3,
  BB_G3,
  BB_H3,
  BB_A4,
  BB_B4,
  BB_C4,
  BB_D4,
  BB_E4,
  BB_F4,
  BB_G4,
  BB_H4,
  BB_A5,
  BB_B5,
  BB_C5,
  BB_D5,
  BB_E5,
  BB_F5,
  BB_G5,
  BB_H5,
  BB_A6,
  BB_B6,
  BB_C6,
  BB_D6,
  BB_E6,
  BB_F6,
  BB_G6,
  BB_H6,
  BB_A7,
  BB_B7,
  BB_C7,
  BB_D7,
  BB_E7,
  BB_F7,
  BB_G7,
  BB_H7,
  BB_A8,
  BB_B8,
  BB_C8,
  BB_D8,
  BB_E8,
  BB_F8,
  BB_G8,
  BB_H8,
] = BB_SQUARES;

export const BB_CORNERS = BB_A1 | BB_H1 | BB_A8 | BB_H8;
export const BB_CENTER = BB_D4 | BB_E4 | BB_D5 | BB_E5;

export const BB_LIGHT_SQUARES = 0x55aa_55aa_55aa_55aa;
export const BB_DARK_SQUARES = 0xaa55_aa55_aa55_aa55;

export const BB_FILES = [...Array(8).keys()].map(
  (elt) => 0x0101_0101_0101_0101 << elt
);

export const [
  BB_FILE_A,
  BB_FILE_B,
  BB_FILE_C,
  BB_FILE_D,
  BB_FILE_E,
  BB_FILE_F,
  BB_FILE_G,
  BB_FILE_H,
] = BB_FILES;

export const BB_RANKS = [...Array(8).keys()].map((elt) => 0xff << (8 * elt));

export const [
  BB_RANK_1,
  BB_RANK_2,
  BB_RANK_3,
  BB_RANK_4,
  BB_RANK_5,
  BB_RANK_6,
  BB_RANK_7,
  BB_RANK_8,
] = BB_RANKS;

export const BB_BACKRANKS = BB_RANK_1 | BB_RANK_8;

export const SQUARES_180 = SQUARES.map((square) => Square.squareMirror(square));

export const BB_EMPTY = 0;
export const BB_ALL = 0xffff_ffff_ffff_ffff;

class Square {
  static isSquare(value: string): value is SquareName {
    return SQUARE_NAMES.indexOf(value as any) !== -1;
  }
  static squareName(squareAsInt: number): SquareName {
    return SQUARE_NAMES[squareAsInt];
  }
  static squareAsInt(file: number, rank: number): number {
    return rank * 8 + file;
  }
  static squareFile(squareAsInt: number): number {
    return squareAsInt & 7;
  }
  static squareRank(squareAsInt: number): number {
    return squareAsInt >> 3;
  }
  static squareDistance(a: number, b: number) {
    return Math.max(
      Math.abs(this.squareFile(a) - this.squareFile(b)),
      Math.abs(this.squareRank(a) - this.squareRank(b))
    );
  }
  static squareManhattanDistance(a: number, b: number) {
    return (
      Math.abs(this.squareFile(a) - this.squareFile(b)) +
      Math.abs(this.squareRank(a) - this.squareRank(b))
    );
  }
  static squareKnightDistance(a: number, b: number) {
    const dx = Math.abs(this.squareFile(a) - this.squareFile(b));
    const dy = Math.abs(this.squareRank(a) - this.squareRank(b));
    if (dx + dy === 1) return 3;
    if (dx === dy && dy === 2) return 4;
    if (
      dx === dy &&
      dy === 1 &&
      (BB_SQUARES[a] & BB_CORNERS || BB_SQUARES[b] & BB_CORNERS)
    )
      return 4;

    const m = Math.ceil(Math.max(dx / 2, dy / 2, (dx + dy) / 3));
    return m + ((m + dx + dy) % 2);
  }
  static squareMirror(squareAsInt: number): number {
    return squareAsInt ^ 0x38;
  }
}
export function dec2bin(dec: number) {
  return (dec >>> 0).toString(2);
}

export function bitLength(value: number): number {
  return dec2bin(value).length;
}

export function lsb(bb: number): number {
  return bitLength(bb & -bb) - 1;
}

export function* scanForward(bb: number): Generator<number, void, unknown> {
  while (bb) {
    const r = bb & -bb;
    yield bitLength(r) - 1;
    bb ^= r;
  }
}
export function msb(bb: number): number {
  return bitLength(bb) - 1;
}

export function* scanReversed(bb: number): Generator<number, void, unknown> {
  while (bb) {
    const r = bitLength(bb) - 1;
    yield r;
    bb ^= BB_SQUARES[r];
  }
}
