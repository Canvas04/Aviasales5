import React from "react";
import TicketListItem from "../tickets-list-item/tickets-list-item.js";
import './ticketList.scss';

export default function TicketList() {
  return (
    <ul className='ul'>
      <TicketListItem />
    </ul>
  );
}
