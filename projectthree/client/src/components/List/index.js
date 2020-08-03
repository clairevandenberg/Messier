import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group" rows="10">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}


export function JournalList({ children }) {
  return <ul className="list-group">{children}</ul>;
}


export function JournalListItem({ children }) {
  return <ul className="list-group">{children}</ul>;
}
