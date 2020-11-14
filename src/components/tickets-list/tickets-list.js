import React from "react";
import TicketListItem from "../ticketListItem";
import classes from './ticketList.module.scss';
const {ul}  = classes;

export default function TicketList() {
  return (
    <ul className={ul}>
      <TicketListItem />
    </ul>
  );
}
