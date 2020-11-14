import React from "react";
import TicketListItem from "../tickets-list-item/tickets-list-item.js";
import classes from './ticketList.module.scss';
const {ul}  = classes;

export default function TicketList() {
  return (
    <ul className={ul}>
      <TicketListItem />
    </ul>
  );
}
