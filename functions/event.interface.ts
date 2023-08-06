export interface Event{
  object: string
  id: string
  access_code: any
  call_to_action: string
  created_at: number
  currency: string
  description: string
  end: End
  event_series_id: string
  hidden: string
  images: Images
  name: string
  online_event: string
  payment_methods: PaymentMethod[]
  private: string
  start: Start
  status: string
  ticket_groups: any[]
  ticket_types: TicketType[]
  tickets_available: string
  timezone: string
  total_holds: number
  total_issued_tickets: number
  total_orders: number
  unavailable: string
  unavailable_status: any
  url: string
  venue: Venue
}

interface End {
  date: string
  formatted: string
  iso: string
  time: string
  timezone: string
  unix: number
}

interface Images {
  header: string
  thumbnail: string
}

interface PaymentMethod {
  external_id: string
  id: string
  instructions: any
  name: any
  type: string
}

interface Start {
  date: string
  formatted: string
  iso: string
  time: string
  timezone: string
  unix: number
}

interface TicketType {
  object: string
  id: string
  access_code: any
  booking_fee: number
  description: string
  group_id: any
  max_per_order: number
  min_per_order: number
  name: string
  price: number
  status: string
  sort_order: number
  type: string
  quantity: number
  quantity_held: number
  quantity_issued: number
  quantity_total: number
}

interface Venue {
  name: string
  postal_code: any
}

interface Links {
  next: any
  previous: any
}

