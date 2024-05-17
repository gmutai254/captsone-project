import React, { useState } from "react";

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Select Booking Date: </label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" />
                        </div>

                        {/*For time selection */}
                        <div>
                            <label htmlFor="book-time">Select Booking Time: </label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Choose a time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {
                                        return <option key={availableTimes}>{availableTimes}</option>
                                    })
                                }
                            </select>
                        </div>

                        {/*For Number of guests */}
                        <div>
                            <label htmlFor="book-guests">Enter Number of Guests: </label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} />
                        </div>

                        {/*For Occasion */}
                        <div>
                            <label htmlFor="book-occasion">For Occasion: </label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversay</option>
                                <option>Promotion</option>
                            </select>
                        </div>
                        {/*Submit button */}
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;