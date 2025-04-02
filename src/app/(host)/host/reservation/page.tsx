import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Reservation {
  guest: string;
  apartment: string;
  guestCount: number;
  nights: number;
  checkIn: string;
  checkOut: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  id: string
}

const ReservationsPage: React.FC = () => {
  const reservations: Reservation[] = [
    {
      guest: "Minnie Kemmer",
      apartment: "2 Bedroom Luxury Shortlet Apartment",
      guestCount: 4,
      nights: 5,
      checkIn: "Nov. 23, 2023",
      checkOut: "Nov. 23, 2023",
      status: "Paid",
      id: "BK190243"
    },
    {
      guest: "Minnie Kemmer",
      apartment: "2 Bedroom Luxury Shortlet Apartment",
      guestCount: 4,
      nights: 5,
      checkIn: "Nov. 23, 2023",
      checkOut: "Nov. 23, 2023",
      status: "Pending",
      id:"BK190243"
    },
    {
      guest: "Minnie Kemmer",
      apartment: "2 Bedroom Luxury Shortlet Apartment",
      guestCount: 4,
      nights: 5,
      checkIn: "Nov. 23, 2023",
      checkOut: "Nov. 23, 2023",
      status: "Paid",
      id:"BK190243"
    },
    {
      guest: "Minnie Kemmer",
      apartment: "2 Bedroom Luxury Shortlet Apartment",
      guestCount: 4,
      nights: 5,
      checkIn: "Nov. 23, 2023",
      checkOut: "Nov. 23, 2023",
      status: "Pending",
      id:"BK190243"
    },
    {
      guest: "Minnie Kemmer",
      apartment: "2 Bedroom Luxury Shortlet Apartment",
      guestCount: 4,
      nights: 5,
      checkIn: "Nov. 23, 2023",
      checkOut: "Nov. 23, 2023",
      status: "Paid",
      id:"BK190243"
    },
    {
      guest: "Minnie Kemmer",
      apartment: "2 Bedroom Luxury Shortlet Apartment",
      guestCount: 4,
      nights: 5,
      checkIn: "Nov. 23, 2023",
      checkOut: "Nov. 23, 2023",
      status: "Pending",
      id:"BK190243"
    },
    {
      guest: "Minnie Kemmer",
      apartment: "2 Bedroom Luxury Shortlet Apartment",
      guestCount: 4,
      nights: 5,
      checkIn: "Nov. 23, 2023",
      checkOut: "Nov. 23, 2023",
      status: "Paid",
      id:"BK190243"
    },
    {
      guest: "Minnie Kemmer",
      apartment: "2 Bedroom Luxury Shortlet Apartment",
      guestCount: 4,
      nights: 5,
      checkIn: "Nov. 23, 2023",
      checkOut: "Nov. 23, 2023",
      status: "Pending",
      id:"BK190243"
    },
    {
      guest: "Minnie Kemmer",
      apartment: "2 Bedroom Luxury Shortlet Apartment",
      guestCount: 4,
      nights: 5,
      checkIn: "Nov. 23, 2023",
      checkOut: "Nov. 23, 2023",
      status: "Paid",
      id:"BK190243"
    },
    {
      guest: "Minnie Kemmer",
      apartment: "2 Bedroom Luxury Shortlet Apartment",
      guestCount: 4,
      nights: 5,
      checkIn: "Nov. 23, 2023",
      checkOut: "Nov. 23, 2023",
      status: "Pending",
      id:"BK190243"
    },
    {
      guest: "Minnie Kemmer",
      apartment: "2 Bedroom Luxury Shortlet Apartment",
      guestCount: 4,
      nights: 5,
      checkIn: "Nov. 23, 2023",
      checkOut: "Nov. 23, 2023",
      status: "Paid",
      id:"BK190243"
    },
    {
      guest: "Minnie Kemmer",
      apartment: "2 Bedroom Luxury Shortlet Apartment",
      guestCount: 4,
      nights: 5,
      checkIn: "Nov. 23, 2023",
      checkOut: "Nov. 23,  2023",
      status: "Pending",
      id:"BK190243"
    },
   
  ]

  const getStatusVariant = (status: string) => {
    switch(status) {
      case 'Paid': return 'secondary'
      case 'Pending': return 'outline'
      case 'Overdue': return 'destructive'
      default: return 'default'
    }
  }

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-4">
        <input 
          type="text" 
          placeholder="Search" 
          className="border p-2 rounded w-1/3"
        />
        <div className="flex space-x-2">
          <Button variant="outline">All Status</Button>
          <Button variant="outline">19 - 20 Jun 2028</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Guest</TableHead>
            <TableHead>Apartment</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead>Nights</TableHead>
            <TableHead>Check-in & Out</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((reservation, index) => (
            <TableRow key={index} className='py-8'>
              <TableCell>{reservation.guest} <br /> {reservation.id}</TableCell>
              <TableCell>{reservation.apartment}</TableCell>
              <TableCell>{reservation.guestCount} Guests</TableCell>
              <TableCell>{reservation.nights} Nights</TableCell>
              <TableCell>
                {reservation.checkIn} - {reservation.checkOut}
              </TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(reservation.status)}>
                  {reservation.status}
                </Badge>
              </TableCell>
              <TableCell>
                {reservation.status === 'Paid' && <Button variant="ghost">Cancel</Button>}
                {reservation.status === 'Pending' && (
                  <Button variant="default">Confirm</Button>
                )}
                {reservation.status === 'Overdue' && (
                  <Button variant="destructive">Cancel</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ReservationsPage