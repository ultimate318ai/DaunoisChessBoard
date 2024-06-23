export type EnPassantSpec = "legal" | "fen" | "xfen";

export type Colors = { white: true; black: false };

export type ColorName = "white" | "black";

export const PIECE_TYPES = [...Array(7).keys()];

export const [PAWN, KNIGHT, BISHOP, ROOK, QUEEN, KING] = PIECE_TYPES;

export type PieceSymbol = "p" | "n" | "b" | "r" | "q" | "k";

export const PIECE_SYMBOLS: (PieceSymbol | null)[] = [
  null,
  "p",
  "n",
  "b",
  "r",
  "q",
  "k",
];

export const PIECE_NAMES = [
  null,
  "pawn",
  "knight",
  "bishop",
  "rook",
  "queen",
  "king",
];

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

export function flipVertical(bb: number): number {
  // https://www.chessprogramming.org/Flipping_Mirroring_and_Rotating#FlipVertically
  bb =
    ((bb >> 8) & 0x00ff_00ff_00ff_00ff) | ((bb & 0x00ff_00ff_00ff_00ff) << 8);
  bb =
    ((bb >> 16) & 0x0000_ffff_0000_ffff) | ((bb & 0x0000_ffff_0000_ffff) << 16);
  bb = (bb >> 32) | ((bb & 0x0000_0000_ffff_ffff) << 32);
  return bb;
}

export function flip_horizontal(bb: number): number {
  // https://www.chessprogramming.org/Flipping_Mirroring_and_Rotating#MirrorHorizontally
  bb =
    ((bb >> 1) & 0x5555_5555_5555_5555) | ((bb & 0x5555_5555_5555_5555) << 1);
  bb =
    ((bb >> 2) & 0x3333_3333_3333_3333) | ((bb & 0x3333_3333_3333_3333) << 2);
  bb =
    ((bb >> 4) & 0x0f0f_0f0f_0f0f_0f0f) | ((bb & 0x0f0f_0f0f_0f0f_0f0f) << 4);
  return bb;
}

export function flip_diagonal(bb: number): number {
  // https://www.chessprogramming.org/Flipping_Mirroring_and_Rotating#FlipabouttheDiagonal
  let t = (bb ^ (bb << 28)) & 0x0f0f_0f0f_0000_0000;
  bb = bb ^ t ^ (t >> 28);
  t = (bb ^ (bb << 14)) & 0x3333_0000_3333_0000;
  bb = bb ^ t ^ (t >> 14);
  t = (bb ^ (bb << 7)) & 0x5500_5500_5500_5500;
  bb = bb ^ t ^ (t >> 7);
  return bb;
}

export function flip_anti_diagonal(bb: number): number {
  // https://www.chessprogramming.org/Flipping_Mirroring_and_Rotating#FlipabouttheAntidiagonal
  let t = bb ^ (bb << 36);
  bb = bb ^ ((t ^ (bb >> 36)) & 0xf0f0_f0f0_0f0f_0f0f);
  t = (bb ^ (bb << 18)) & 0xcccc_0000_cccc_0000;
  bb = bb ^ t ^ (t >> 18);
  t = (bb ^ (bb << 9)) & 0xaa00_aa00_aa00_aa00;
  bb = bb ^ t ^ (t >> 9);
  return bb;
}

export function shift_down(bb: number): number {
  return bb >> 8;
}

export function shift_2_down(bb: number): number {
  return bb >> 16;
}

export function shift_up(bb: number): number {
  return (bb << 8) & BB_ALL;
}

export function shift_2_up(bb: number): number {
  return (bb << 16) & BB_ALL;
}

export function shift_right(bb: number): number {
  return (bb << 1) & ~BB_FILE_A & BB_ALL;
}

export function shift_2_right(bb: number): number {
  return (bb << 2) & ~BB_FILE_A & ~BB_FILE_B & BB_ALL;
}

export function shift_left(bb: number): number {
  return (bb >> 1) & ~BB_FILE_H;
}

export function shift_2_left(bb: number): number {
  return (bb >> 2) & ~BB_FILE_G & ~BB_FILE_H;
}

export function shift_up_left(bb: number): number {
  return (bb << 7) & ~BB_FILE_H & BB_ALL;
}

export function shift_up_right(bb: number): number {
  return (bb << 9) & ~BB_FILE_A & BB_ALL;
}

export function shift_down_left(bb: number): number {
  return (bb >> 9) & ~BB_FILE_H;
}
export function shift_down_right(bb: number): number {
  return (bb >> 7) & ~BB_FILE_A;
}

function slidingAttacks(
  squareAsInt: number,
  occupied: number,
  deltaList: Array<number>
): number {
  let attacks = BB_EMPTY;

  deltaList.forEach((delta) => {
    let sq = squareAsInt;
    sq += delta;
    const squareIsNotInStandardRange = !(0 <= sq && sq < 64);
    const squareDistanceIsGreaterThan2 =
      Square.squareDistance(sq, sq - delta) > 2;
    while (!squareIsNotInStandardRange || !squareDistanceIsGreaterThan2) {
      sq += delta;
      attacks |= BB_SQUARES[sq];
      if (occupied & BB_SQUARES[sq]) break;
    }
  });

  return attacks;
}

function stepAttacks(squareAsInt: number, deltaList: Array<number>): number {
  return slidingAttacks(squareAsInt, BB_ALL, deltaList);
}

export const BB_KNIGHT_ATTACKS = SQUARES.map((square) =>
  stepAttacks(square, [17, 15, 10, 6, -17, -15, -10, -6])
);
export const BB_KING_ATTACKS = SQUARES.map((square) =>
  stepAttacks(square, [9, 8, 7, 1, -9, -8, -7, -1])
);
export const BB_PAWN_ATTACKS = [
  [-7, -9],
  [7, 9],
].map((deltaList) => SQUARES.map((square) => stepAttacks(square, deltaList)));

function edges(squareAsInt: number): number {
  return (
    ((BB_RANK_1 | BB_RANK_8) & ~BB_RANKS[Square.squareRank(squareAsInt)]) |
    ((BB_FILE_A | BB_FILE_H) & ~BB_FILES[Square.squareFile(squareAsInt)])
  );
}

function* carryRippler(mask: number): Generator<number> {
  // Carry-Rippler trick to iterate subsets of mask.
  let subset = BB_EMPTY;
  yield subset;
  while (subset) {
    subset = (subset - mask) & mask;
    yield subset;
  }
}

function attackTable(
  deltaList: Array<number>
): [Array<number>, Array<Record<number, number>>] {
  const maskTable: number[] = [];
  const attackTable: Record<number, number>[] = [];

  SQUARES.forEach((square) => {
    const attacks: Record<number, number> = {};
    let mask = slidingAttacks(square, 0, deltaList) & ~edges(square);
    for (let subset of carryRippler(mask)) {
      attacks[subset] = slidingAttacks(square, subset, deltaList);
    }
    attackTable.push(attacks);
    maskTable.push(mask);
  });
  return [maskTable, attackTable];
}

export const [BB_DIAG_MASKS, BB_DIAG_ATTACKS] = attackTable([-9, -7, 7, 9]);
export const [BB_FILE_MASKS, BB_FILE_ATTACKS] = attackTable([-8, 8]);
export const [BB_RANK_MASKS, BB_RANK_ATTACKS] = attackTable([-1, 1]);

function rayList(): number[][] {
  let rayList: number[][] = [];
  BB_SQUARES.forEach((bb_square, index) => {
    let rayRowList: number[] = [];
    BB_SQUARES.forEach((bb_square_, index_) => {
      if (BB_DIAG_ATTACKS[index][0] & bb_square_) {
        rayRowList = [
          ...rayRowList,
          (BB_DIAG_ATTACKS[index][0] & BB_DIAG_ATTACKS[index_][0]) |
            bb_square |
            bb_square_,
        ];
      } else if (BB_RANK_ATTACKS[index][0] & bb_square_) {
        rayRowList = [...rayRowList, BB_RANK_ATTACKS[index][0] | bb_square];
      } else if (BB_FILE_ATTACKS[index][0] & bb_square_) {
        rayRowList = [...rayRowList, BB_FILE_ATTACKS[index][0] | bb_square];
      } else {
        rayRowList = [...rayRowList, BB_EMPTY];
      }
    });
  });
  return rayList;
}

export const BB_RAYS = rayList();

export function ray(squareAAsInt: number, squareBAsInt: number): number {
  return BB_RAYS[squareAAsInt][squareBAsInt];
}

export function between(squareAAsInt: number, squareBAsInt: number): number {
  const bb =
    BB_RAYS[squareAAsInt][squareBAsInt] &
    ((BB_ALL << squareAAsInt) ^ (BB_ALL << squareBAsInt));
  return bb & (bb - 1);
}

export const SAN_REGEX = new RegExp(
  "^([NBKRQ])?([a-h])?([1-8])?[-x]?([a-h][1-8])(=?[nbrqkNBRQK])?[+#]?Z"
);

export const FEN_CASTLING_REGEX = new RegExp(
  "^(?:-|[KQABCDEFGH]{0,2}[kqabcdefgh]{0,2})Z"
);

export class Piece {
  pieceType: number;
  color: ColorName;
  constructor(pieceType: number, color: ColorName) {
    this.pieceType = pieceType;
    this.color = color;
  }

  get symbol(): string {
    const symbol = PIECE_SYMBOLS[this.pieceType];
    if (symbol == null) throw new Error("wrong piece symbol");
    return symbol;
  }

  get unicodeSymbol(): string {
    const symbol = this.symbol;
    if (
      symbol !== "R" &&
      symbol !== "r" &&
      symbol !== "K" &&
      symbol !== "k" &&
      symbol !== "N" &&
      symbol !== "n" &&
      symbol !== "P" &&
      symbol !== "p" &&
      symbol !== "Q" &&
      symbol !== "q" &&
      symbol !== "B" &&
      symbol !== "b"
    )
      throw new Error("Invalid piece symbol");
    return UNICODE_PIECE_SYMBOLS[symbol];
  }
  static fromSymbol(symbol: string) {
    return new Piece(
      PIECE_SYMBOLS.indexOf(symbol.toLocaleLowerCase() as PieceSymbol),
      symbol.toLocaleLowerCase() === symbol ? "white" : "black"
    );
  }
}

//**     Represents a move from a square to a square and possibly the promotion
/* piece type.
 * Drops and null moves are supported..
 */
export class Move {
  fromSquare: number;
  toSquare: number;
  promotion?: PieceSymbol;
  drop?: PieceSymbol;

  constructor(
    fromSquare: number,
    toSquare: number,
    promotion?: PieceSymbol,
    drop?: PieceSymbol
  ) {
    this.fromSquare = fromSquare;
    this.toSquare = toSquare;
    this.promotion = promotion;
    this.drop = drop;
  }

  get from() {
    return this.fromSquare;
  }

  get to() {
    return this.toSquare;
  }

  /**
   * Gets a UCI string for the move.

    For example, a move from a7 to a8 would be ``a7a8`` or ``a7a8q``
    (if the latter is a promotion to a queen).

    The UCI representation of a null move is ``0000``.
   */
  uci(): string {
    if (this.drop)
      return `${this.drop.toLocaleUpperCase()}@${SQUARE_NAMES[this.toSquare]}`;
    if (this.promotion)
      return `${SQUARE_NAMES[this.fromSquare]}${SQUARE_NAMES[this.toSquare]}${
        this.promotion
      }`;
    if (!this.isNull)
      return `${SQUARE_NAMES[this.fromSquare]}${SQUARE_NAMES[this.toSquare]}`;
    return "0000";
  }

  /**
 * Parses a UCI string.

  @throws `InvalidMoveError` if the UCI string is invalid.
 */
  static fromUci(uci: string): Move {
    if (uci === "0000") return Move.null();
    if (uci.length === 4 && uci[1] === "@") {
      const drop = PIECE_SYMBOLS.find(
        (piece) => piece === uci[0].toLocaleLowerCase()
      );
      const square = SQUARE_NAMES.indexOf(uci.slice(2) as SquareName);
      if (!drop || square === -1)
        throw new InvalidMoveError(`Invalid uci :${uci}`);
      const move = {
        fromSquare: square,
        toSquare: square,
        drop: drop,
      };
      return new Move(square, square, undefined, drop);
    } else if (uci.length <= 4 && uci.length <= 5) {
      const fromSquare = SQUARE_NAMES.indexOf(uci.slice(0, 2) as SquareName);
      const toSquare = SQUARE_NAMES.indexOf(uci.slice(2, 4) as SquareName);
      const promotion =
        uci.length === 5
          ? PIECE_SYMBOLS.find((piece) => piece === uci[4])
          : undefined;
      if (fromSquare === -1 || toSquare === -1 || !promotion)
        throw new InvalidMoveError(`Invalid uci :${uci}`);
      else if (fromSquare === toSquare)
        throw new InvalidMoveError(
          `invalid uci (use 0000 for null moves): ${uci}`
        );
      return new Move(fromSquare, toSquare, promotion);
    }
    throw new InvalidMoveError(
      `expected uci string to be of length 4 or 5: ${uci}`
    );
  }
  /**
    Gets a null move.

    A null move just passes the turn to the other side (and possibly
    forfeits en passant capturing). Null moves evaluate to ``False`` in
    boolean contexts.
    @returns new null Move created.
   */
  static null(): Move {
    return new Move(0, 0);
  }

  toString() {
    return this.uci();
  }

  get isNull(): boolean {
    return this.fromSquare === 0 && this.fromSquare === this.toSquare;
  }
}
