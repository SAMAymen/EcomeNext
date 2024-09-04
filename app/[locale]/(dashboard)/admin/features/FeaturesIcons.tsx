import {
  FaChessKing,
  FaChessBoard,
  FaDice,
  FaPuzzlePiece,
  FaGamepad,
  FaCircle,
} from "react-icons/fa";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdOutlineExtension } from "react-icons/md";

export const FeaturesIcons = [
  { icon: "Chess King", component: <FaChessKing /> },
  { icon: "Game Board", component: <FaChessBoard /> },
  { icon: "Dice", component: <FaDice /> },
  { icon: "Puzzle", component: <FaPuzzlePiece /> },
  { icon: "Game Controller", component: <FaGamepad /> },
  { icon: "Checker Piece", component: <FaCircle /> },
  { icon: "Grid", component: <HiOutlineViewGrid /> },
  { icon: "Extension", component: <MdOutlineExtension /> },
  { icon: "Check Mark", component: <GiCheckMark /> },
];
