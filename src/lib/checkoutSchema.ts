import { z } from 'zod';

export const checkoutSchema = z.object({
  firstName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  location: z.enum(['cancun', 'tijuana'], {
    required_error: 'Please select a location',
  }),
  arrivalDate: z.string().min(1, 'Arrival date is required'),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
