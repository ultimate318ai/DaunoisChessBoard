export type EnPassantSpec = "legal" | "fen" | "xfen";

export type Colors = { white: true; black: false };

export type ColorName = "white" | "black";

export type SquareNumber = number;

export type PieceNumber = number;

export type PieceType = number;

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

function zip<T, U>(arrayT: Array<T>, arrayU: Array<U>): [T, U][] {
  return arrayT.map((arrayTValue: T, index: number) => {
    return [arrayTValue, arrayU[index]];
  });
}

export const SQUARE_NAMES = zip(
  FILE_NAMES,
  RANK_NAMES
) as unknown as SquareName[];

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
  static squareName(square: SquareNumber): SquareName {
    return SQUARE_NAMES[square];
  }
  static square(file: number, rank: number): number {
    return rank * 8 + file;
  }
  static squareFile(square: SquareNumber): number {
    return square & 7;
  }
  static squareRank(square: SquareNumber): number {
    return square >> 3;
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
  static squareMirror(square: SquareNumber): number {
    return square ^ 0x38;
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
  square: SquareNumber,
  occupied: number,
  deltaList: Array<number>
): number {
  let attacks = BB_EMPTY;

  deltaList.forEach((delta) => {
    let sq = square;
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

function stepAttacks(square: SquareNumber, deltaList: Array<number>): number {
  return slidingAttacks(square, BB_ALL, deltaList);
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

function edges(square: SquareNumber): number {
  return (
    ((BB_RANK_1 | BB_RANK_8) & ~BB_RANKS[Square.squareRank(square)]) |
    ((BB_FILE_A | BB_FILE_H) & ~BB_FILES[Square.squareFile(square)])
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

export function ray(square: SquareNumber, squareBAsInt: number): number {
  return BB_RAYS[square][squareBAsInt];
}

export function between(square: SquareNumber, squareBAsInt: number): number {
  const bb =
    BB_RAYS[square][squareBAsInt] &
    ((BB_ALL << square) ^ (BB_ALL << squareBAsInt));
  return bb & (bb - 1);
}

export const SAN_REGEX = new RegExp(
  "^([NBKRQ])?([a-h])?([1-8])?[-x]?([a-h][1-8])(=?[nbrqkNBRQK])?[+#]?Z"
);

export const FEN_CASTLING_REGEX = new RegExp(
  "^(?:-|[KQABCDEFGH]{0,2}[kqabcdefgh]{0,2})Z"
);

export class Piece {
  pieceType: PieceType;
  color: ColorName;
  constructor(pieceType: PieceType, color: ColorName) {
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

class SquareSet {
  private mask: number;
  constructor(squaresAsInt: number) {
    this.mask = squaresAsInt & BB_ALL;
  }
}

interface State {
  pawnListAsNumber: number;
  knightListAsNumber: number;
  bishopListAsNumber: number;
  rookListAsNumber: number;
  queenListAsNumber: number;
  kingListAsNumber: number;
  promotedListAsNumber: number;
  occupiedSquareListByColor: {
    white: number;
    black: number;
  };
  occupiedSquareListAsNumber: number;
}
/**
 * 
 * 
 * A board representing the position of chess pieces.

  The board is initialized with the standard chess starting position, unless
  otherwise specified in the optional *boardFen* argument. If *boardFen*
  is ``null``, an empty board is created.
 * 
 */
export class AbstractChessBoard {
  private _state: State;

  constructor(boardFen?: string) {} //TODO

  get queens() {
    return this._state.queenListAsNumber;
  }
  get kings() {
    return this._state.kingListAsNumber;
  }

  get rooks() {
    return this._state.rookListAsNumber;
  }

  get knights() {
    return this._state.knightListAsNumber;
  }

  get bishops() {
    return this._state.bishopListAsNumber;
  }

  get pawns() {
    return this._state.pawnListAsNumber;
  }

  get occupied() {
    return this._state.occupiedSquareListAsNumber;
  }

  get promoted() {
    return this._state.promotedListAsNumber;
  }

  get occupiedWhite() {
    return this._state.occupiedSquareListByColor.white;
  }

  get occupiedBlack() {
    return this._state.occupiedSquareListByColor.black;
  }

  occupiedByColorName(colorName: ColorName) {
    return colorName === "white" ? this.occupiedWhite : this.occupiedBlack;
  }

  resetBoard(): void {
    this._state = {
      pawnListAsNumber: BB_RANK_2 | BB_RANK_7,
      knightListAsNumber: BB_B1 | BB_G1 | BB_B8 | BB_G8,
      bishopListAsNumber: BB_C1 | BB_F1 | BB_C8 | BB_F8,
      rookListAsNumber: BB_CORNERS,
      queenListAsNumber: BB_D1 | BB_D8,
      kingListAsNumber: BB_E1 | BB_E8,

      promotedListAsNumber: BB_EMPTY,

      occupiedSquareListByColor: {
        white: BB_RANK_1 | BB_RANK_2,
        black: BB_RANK_7 | BB_RANK_8,
      },
      occupiedSquareListAsNumber: BB_RANK_1 | BB_RANK_2 | BB_RANK_7 | BB_RANK_8,
    };
  }

  clearBoard(): void {
    this._state = {
      pawnListAsNumber: BB_EMPTY,
      knightListAsNumber: BB_EMPTY,
      bishopListAsNumber: BB_EMPTY,
      rookListAsNumber: BB_EMPTY,
      queenListAsNumber: BB_EMPTY,
      kingListAsNumber: BB_EMPTY,

      promotedListAsNumber: BB_EMPTY,

      occupiedSquareListByColor: {
        white: BB_EMPTY,
        black: BB_EMPTY,
      },
      occupiedSquareListAsNumber: BB_EMPTY,
    };
  }

  piecesMask(pieceTypeAsInt: number, color: ColorName): number {
    let bb;
    switch (pieceTypeAsInt) {
      case PAWN:
        bb = this.pawns;
        break;
      case KNIGHT:
        bb = this.knights;
        break;
      case BISHOP:
        bb = this.bishops;
        break;
      case ROOK:
        bb = this.rooks;
        break;
      case QUEEN:
        bb = this.queens;
        break;
      case KING:
        bb = this.kings;
        break;
      default:
        throw new Error("Wrong piece type given");
    }
    return bb & this._state.occupiedSquareListByColor[color];
  }

  pieces(pieceTypeAsNumber: number, color: ColorName): SquareSet {
    return new SquareSet(this.piecesMask(pieceTypeAsNumber, color));
  }

  pieceAt(square: SquareNumber): Piece | null {
    const piece_type = this.pieceTypeAt(square);
    if (piece_type) {
      const mask = BB_SQUARES[square];
      const color: ColorName = this.occupiedWhite & mask ? "white" : "black";
      return new Piece(piece_type, color);
    }
    return null;
  }

  pieceTypeAt(square: SquareNumber): number | null {
    const mask = BB_SQUARES[square];

    if (!(this.occupied & mask)) return null;
    if (this.pawns & mask) return PAWN;
    if (this.knights & mask) return KNIGHT;
    if (this.bishops & mask) return BISHOP;
    if (this.rooks & mask) return ROOK;
    if (this.queens & mask) return QUEEN;
    return KING;
  }

  colorAt(square: SquareNumber): ColorName | null {
    const mask = BB_SQUARES[square];
    if (this.occupiedWhite & mask) return "white";
    if (this.occupiedBlack & mask) return "black";
    return null;
  }

  kingSquare(color: ColorName): number | null {
    const colorData =
      color === "white" ? this.occupiedWhite : this.occupiedBlack;
    const kingMask = colorData & this.kings & ~this.promoted;
    return kingMask ? msb(kingMask) : null;
  }

  attacksMask(square: SquareNumber): number {
    const mask = BB_SQUARES[square];
    BB_PAWN_ATTACKS;
    if (mask & this.pawns) {
      const colorAsNumber = this.occupiedWhite & mask ? 1 : 0;
      return BB_PAWN_ATTACKS[colorAsNumber][square];
    }
    if (mask & this.knights) return BB_KNIGHT_ATTACKS[square];
    if (mask & this.kings) return BB_KING_ATTACKS[square];
    let attacks = 0;
    const bishopsAttack = mask & this.bishops;
    const queensAttack = mask & this.queens;
    const rooksAttack = mask & this.rooks;
    if (bishopsAttack || queensAttack)
      attacks = BB_DIAG_ATTACKS[square][BB_DIAG_MASKS[square] & this.occupied];
    if (rooksAttack || queensAttack)
      attacks |=
        BB_RANK_ATTACKS[square][BB_RANK_MASKS[square] & this.occupied] |
        BB_FILE_ATTACKS[square][BB_FILE_MASKS[square] & this.occupied];
    return attacks;
  }

  attacks(square: SquareNumber): SquareSet {
    return new SquareSet(this.attacksMask(square));
  }

  attackersMask(
    color: ColorName,
    square: SquareNumber,
    occupied: number = this.occupied
  ): number {
    const rankPieces = BB_RANK_MASKS[square] & occupied;
    const filePieces = BB_FILE_MASKS[square] & occupied;
    const diagPieces = BB_DIAG_MASKS[square] & occupied;

    const queensRooksList = this.queens | this.rooks;
    const queensBishopsList = this.queens | this.bishops;
    const attackerColorAsInt = color === "white" ? 0 : 1;

    const attackers =
      (BB_KING_ATTACKS[square] & this.kings) |
      (BB_KNIGHT_ATTACKS[square] & this.knights) |
      (BB_RANK_ATTACKS[square][rankPieces] & queensRooksList) |
      (BB_FILE_ATTACKS[square][filePieces] & queensRooksList) |
      (BB_DIAG_ATTACKS[square][diagPieces] & queensBishopsList) |
      (BB_PAWN_ATTACKS[attackerColorAsInt][square] & this.pawns);

    return attackers & this.occupiedByColorName(color);
  }
  isAttackedBy(color: ColorName, square: SquareNumber): boolean {
    return Boolean(this.attackersMask(color, square));
  }
  attackers(color: ColorName, square: SquareNumber): SquareSet {
    return new SquareSet(this.attackersMask(color, square));
  }
  pinMask(color: ColorName, square: SquareNumber): number {
    const kingSquare = this.kingSquare(color);
    if (kingSquare === null) return BB_ALL;

    const squareMask = BB_SQUARES[square];
    const attackTypeList = [BB_FILE_ATTACKS, BB_RANK_ATTACKS, BB_DIAG_ATTACKS];
    const attackersList = [
      this.rooks | this.queens,
      this.rooks | this.queens,
      this.bishops | this.queens,
    ];
    for (let [attacks, sliders] of zip(attackTypeList, attackersList)) {
      const rays = attacks[kingSquare][0];
      if (rays & squareMask) {
        const otherColor: ColorName = color === "white" ? "black" : "white";
        const snipers = rays & sliders & this.occupiedByColorName(otherColor);
        for (const sniper of scanReversed(snipers)) {
          if (
            (between(sniper, kingSquare) & (this.occupied | squareMask)) ===
            squareMask
          )
            return ray(kingSquare, sniper);
          return BB_ALL;
        }
      }
    }
    return BB_ALL;
  }
  pin(color: ColorName, square: SquareNumber): SquareSet {
    return new SquareSet(this.pinMask(color, square));
  }
  isPinned(color: ColorName, square: SquareNumber): boolean {
    return this.pinMask(color, square) != BB_ALL;
  }
  private _removePieceAt(square: SquareNumber): number | null {
    const pieceType = this.pieceTypeAt(square);
    const mask = BB_SQUARES[square];

    switch (pieceType) {
      case PAWN:
        this._state.pawnListAsNumber ^= mask;
        break;
      case KNIGHT:
        this._state.knightListAsNumber ^= mask;
        break;
      case BISHOP:
        this._state.bishopListAsNumber ^= mask;
        break;
      case ROOK:
        this._state.rookListAsNumber ^= mask;
        break;
      case QUEEN:
        this._state.queenListAsNumber ^= mask;
        break;
      case KING:
        this._state.kingListAsNumber ^= mask;
        break;
      default:
        return null;
    }
    this._state.occupiedSquareListAsNumber ^= mask;
    this._state.occupiedSquareListByColor.white &= ~mask;
    this._state.occupiedSquareListByColor.black &= ~mask;
    this._state.promotedListAsNumber &= ~mask;

    return pieceType;
  }
  removePieceAt(square: SquareNumber): Piece | null {
    const color: ColorName = new Boolean(
      this._state.occupiedSquareListByColor.white & BB_SQUARES[square]
    )
      ? "white"
      : "black";
    const pieceType = this._removePieceAt(square);
    return pieceType ? new Piece(pieceType, color) : null;
  }
  private _setPieceAt(
    square: SquareNumber,
    pieceType: PieceType,
    color: ColorName,
    promoted: boolean = false
  ): void {
    this._removePieceAt(square);
    const mask = BB_SQUARES[square];

    switch (pieceType) {
      case PAWN:
        this._state.pawnListAsNumber |= mask;
        break;
      case KNIGHT:
        this._state.knightListAsNumber |= mask;
        break;
      case BISHOP:
        this._state.bishopListAsNumber |= mask;
        break;
      case ROOK:
        this._state.rookListAsNumber |= mask;
        break;
      case QUEEN:
        this._state.queenListAsNumber |= mask;
        break;
      case KING:
        this._state.kingListAsNumber |= mask;
        break;
      default:
        return;
    }
    this._state.occupiedSquareListAsNumber ^= mask;
    this._state.occupiedSquareListByColor[color] ^= mask;
    if (promoted) this._state.promotedListAsNumber ^= mask;
  }
  setPieceAt(
    square: SquareNumber,
    piece: Piece | null,
    promoted: boolean = false
  ): void {
    if (!piece) this._removePieceAt(square);
    else {
      this._setPieceAt(square, piece.pieceType, piece.color, promoted);
    }
  }
  boardFen(promoted: boolean = false): string {
    const builderList: string[] = [];
    let empty = 0;
    SQUARES_180.forEach((square) => {
      const piece = this.pieceAt(square);
      if (!piece) empty += 1;
      else {
        if (empty > 0) {
          builderList.push(String(empty));
          empty = 0;
        }
        builderList.push(piece.symbol);
        if (promoted && BB_SQUARES[square] & this._state.promotedListAsNumber)
          builderList.push("~");
      }
      if (BB_SQUARES[square] & BB_FILE_H) {
        if (empty > 0) {
          builderList.push(String(empty));
          empty = 0;
        }
        if (square !== H1) builderList.push("/");
      }
    });
    return builderList.join("");
  }
  // TODO: def _set_board_fen(self, fen: str) -> None:
}
