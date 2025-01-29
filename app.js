// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Elite Tutors!");

  // Select the booking button element
  const bookingButton = document.querySelector(".btn");

  // Check if the booking button exists before attaching the event listener
  if (bookingButton) {
    bookingButton.addEventListener("click", () => {
      alert("Redirecting to the booking system!");
      // Optionally, redirect to the booking page
      // window.location.href = "booking.html"; // Uncomment and replace with the actual URL
    });
  } else {
    console.warn("Booking button not found. Please check the HTML.");
  }
});
