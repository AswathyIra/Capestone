import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
	test('renders Grab Your Seat heading', () => {
		render(<BookingForm setReservations={() => {}} availableTimes={['17:00', '18:00']} />);
		expect(screen.getByText(/Grab Your Seat/i)).toBeInTheDocument();
	});

	test('renders all input fields', () => {
		render(<BookingForm setReservations={() => {}} availableTimes={['17:00', '18:00']} />);
		expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
	});

	test('submits the form', () => {
		const setReservations = jest.fn();
		render(<BookingForm setReservations={setReservations} availableTimes={['17:00', '18:00']} />);
		fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
		fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
		fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2023-12-31' } });
		fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
		fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
		fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
		fireEvent.click(screen.getByRole('button', { name: /Make Reservation/i }));
		expect(setReservations).toHaveBeenCalled();
	});
});
